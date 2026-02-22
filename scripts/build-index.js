#!/usr/bin/env node

/**
 * Build index.json from all .persona files in the repository.
 * Parses [meta] sections and generates a searchable catalog.
 *
 * Usage: node scripts/build-index.js
 */

const fs = require('fs');
const path = require('path');

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
        version: meta.version || '1.0',
        tags: meta.tags || [],
        created: meta.created || '',
        updated: meta.updated || ''
    });
}

// Sort by name
personas.sort((a, b) => a.name.localeCompare(b.name));

const index = {
    repo: 'najibelmokhtari/wispbot-personas',
    generated: new Date().toISOString(),
    count: personas.length,
    personas
};

const outputPath = path.join(ROOT, 'index.json');
fs.writeFileSync(outputPath, JSON.stringify(index, null, 2) + '\n', 'utf8');

console.log(`✅ Built index.json with ${personas.length} personas`);
