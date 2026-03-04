# 🎭 WispBot Community Personas

A community-driven collection of personas for [WispBot](https://github.com/najibelmokhtari/wispbot), the AI-powered WhatsApp chatbot.

## What are Personas?

Personas define a bot's personality, language style, and voice. Each `.persona` file is a plain-text configuration that tells WispBot how to behave in a group chat — from a motivational coach to a sarcastic Parisian.

## How to Install

### From the Admin Portal (Recommended)

1. Open your WispBot admin panel → **Settings** → **Persona Management**
2. Scroll to **🌍 Community Personas** and click **Browse Community Personas**
3. Search or browse for a persona you like
4. Click to preview, then click **Install Persona**

### Manually

1. Download the `.persona` file
2. Drop it into your WispBot's `prompts/personas/` directory
3. It will appear in all persona dropdowns immediately

## How to Contribute

We welcome new personas! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Quick summary:**
- Create a `.persona` file with a `[meta]` block (description, author, tags)
- Place it in the appropriate language/category folder
- Open a Pull Request

## Persona Format

```ini
[meta]
description = A one-line description of what this persona does
author = your-github-username
version = 1.0
tags = english, humor, professional
created = 2026-02-22
updated = 2026-02-22

[voice]
Kore

[system_prompt]
You are an AI chatbot integrated into a WhatsApp group chat...

[tts_style]
Speak with a warm, friendly tone...
```

All sections are optional except `[system_prompt]`. See existing personas for examples.

## Folder Structure

```
├── arabic/
│   ├── egyptian/        # Egyptian Arabic personas
│   ├── fos7a/           # Fus'ha (Standard Arabic) personas
│   ├── lebanese/        # Lebanese Arabic personas
│   └── moroccan/        # Moroccan Darija personas
├── english/
│   ├── fantasy/         # Fantasy & roleplay personas
│   ├── historic/        # Historical figure personas
│   └── internet_culture/# Internet culture personas
├── japanese/            # Japanese personas
├── korean/              # Korean personas
├── index.json           # Auto-generated catalog (do not edit manually)
└── scripts/             # Index builder tooling
```

## License

MIT — feel free to use, modify, and share.
