# Contributing to WispBot Community Personas

Thanks for contributing! Here's how to add your persona to the collection.

## Creating a Persona

### 1. Choose a folder

Place your `.persona` file in the appropriate language folder:
- `english/` — English personas
- `darija/` — Moroccan Darija personas
- Create a new folder if your language isn't listed

### 2. Name your file

Use lowercase letters, numbers, and underscores only. Keep it short and descriptive.

✅ `storyteller.persona`, `grumpy_chef.persona`
❌ `My Cool Bot.persona`, `LOUD_BOT.persona`

### 3. Include a `[meta]` block

Every community persona **must** include a `[meta]` section with at least:

```ini
[meta]
description = A one-line description of the persona's personality
author = your-github-username
version = 1.0
tags = relevant, tags, here
created = YYYY-MM-DD
updated = YYYY-MM-DD
```

**Required fields:** `description`, `author`, `tags`
**Recommended:** `version`, `created`, `updated`

### 4. Write the system prompt

The `[system_prompt]` section defines the bot's personality. See **[CRAFTING_GUIDE.md](CRAFTING_GUIDE.md)** for a detailed breakdown of what makes a persona great — covering identity, contradictions, specific language, cultural grounding, and example vibes.

Quick tips:
- Be specific about personality traits, language, and tone
- Include example responses to show the vibe
- Specify which languages the persona speaks
- Define how the persona handles roasting/banter vs. serious questions
- Give the persona contradictions — they make characters feel real
- Always include 4-5 "example vibes" showing concrete interaction examples

### 5. Optional: voice and TTS

```ini
[voice]
Kore

[tts_style]
Speak with a warm and engaging tone...
```

## Submitting

1. Fork this repository
2. Add your `.persona` file to the appropriate folder
3. Open a Pull Request with a brief description
4. The `index.json` will be auto-updated after merge

## Guidelines

- **Be creative** — the more unique and specific, the better
- **Be respectful** — no hateful, discriminatory, or harmful content
- **Test your persona** — try it in WispBot before submitting
- **One persona per file** — don't combine multiple personalities
