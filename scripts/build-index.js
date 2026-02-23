#!/usr/bin/env node

/**
 * Build index.json from all .persona files in the repository.
 * Parses [meta] sections and generates a searchable catalog.
 *
 * Usage: node scripts/build-index.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const META_LINE_REGEX = /^(\w+)\s*=\s*(.*)$/;
const SECTION_REGEX = /^\[(\w+)\]\s*$/;

// Folders to skip
const SKIP_DIRS = new Set(['node_modules', '.git', '.github', 'scripts']);

function parseMetaFromContent(content) {
    const lines = content.split('\n');
    const meta = {};
    let inMeta = false;

    for (const line of lines) {
        const sectionMatch = line.match(SECTION_REGEX);
        if (sectionMatch) {
            if (sectionMatch[1] === 'meta') {
                inMeta = true;
                continue;
            } else {
                inMeta = false;
            }
        }
        if (inMeta) {
            const kvMatch = line.trim().match(META_LINE_REGEX);
            if (kvMatch) {
                const key = kvMatch[1];
                let value = kvMatch[2].trim();
                if (key === 'tags') {
                    value = value ? value.split(',').map(t => t.trim()).filter(Boolean) : [];
                }
                meta[key] = value;
            }
        }
    }
    return meta;
}

function findPersonaFiles(dir, relativeBase = '') {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.isDirectory()) {
            if (SKIP_DIRS.has(entry.name)) continue;
            results.push(...findPersonaFiles(path.join(dir, entry.name), path.join(relativeBase, entry.name)));
        } else if (entry.isFile() && entry.name.endsWith('.persona')) {
            results.push({
                absolutePath: path.join(dir, entry.name),
                relativePath: path.join(relativeBase, entry.name),
                name: entry.name.slice(0, -8)
            });
        }
    }

    return results;
}

function buildFolderTree(dir, relativeBase = '') {
    const tree = {};
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        if (!entry.isDirectory() || SKIP_DIRS.has(entry.name)) continue;
        const fullPath = path.join(dir, entry.name);
        const relPath = relativeBase ? path.join(relativeBase, entry.name) : entry.name;

        // Read optional folder metadata
        const metaPath = path.join(fullPath, '.folder-meta.json');
        let meta = {};
        if (fs.existsSync(metaPath)) {
            try { meta = JSON.parse(fs.readFileSync(metaPath, 'utf8')); } catch (e) { /* ignore */ }
        }

        const label = meta.label || entry.name.charAt(0).toUpperCase() + entry.name.slice(1);
        const node = { label };
        if (meta.description) node.description = meta.description;

        // Recurse into subdirectories
        const children = buildFolderTree(fullPath, relPath);
        if (Object.keys(children).length > 0) {
            node.children = children;
        }

        tree[entry.name] = node;
    }

    return tree;
}

/**
 * Get the GitHub username of whoever first added a file, using git log.
 * Tries to extract from GitHub noreply email, falls back to git author name.
 */
function getContributor(relativePath) {
    try {
        const raw = execSync(
            `git log --format="%aN|%aE" --reverse --follow -- "${relativePath}"`,
            { cwd: ROOT, encoding: 'utf8', timeout: 5000 }
        ).trim();
        const firstLine = raw.split('\n')[0];
        if (!firstLine) return '';
        const [name, email] = firstLine.split('|');
        // GitHub noreply emails: username@users.noreply.github.com
        // or: 12345678+username@users.noreply.github.com
        const ghMatch = email?.match(/^(?:\d+\+)?(.+)@users\.noreply\.github\.com$/);
        if (ghMatch) return ghMatch[1];
        return name || '';
    } catch {
        return '';
    }
}

// Main
const files = findPersonaFiles(ROOT);
const personas = [];

for (const file of files) {
    const content = fs.readFileSync(file.absolutePath, 'utf8');
    const meta = parseMetaFromContent(content);

    personas.push({
        name: file.name,
        path: file.relativePath,
        description: meta.description || '',
        author: meta.author || '',
        contributor: getContributor(file.relativePath),
        version: meta.version || '1.0',
        tags: meta.tags || [],
        created: meta.created || '',
        updated: meta.updated || ''
    });
}

// Sort by name
personas.sort((a, b) => a.name.localeCompare(b.name));

const folders = buildFolderTree(ROOT);

const index = {
    repo: 'najibelmokhtari/wispbot-personas',
    generated: new Date().toISOString(),
    count: personas.length,
    folders,
    personas
};

const outputPath = path.join(ROOT, 'index.json');
fs.writeFileSync(outputPath, JSON.stringify(index, null, 2) + '\n', 'utf8');

console.log(`✅ Built index.json with ${personas.length} personas`);
