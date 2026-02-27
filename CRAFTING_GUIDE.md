# Crafting a Great Persona

A good persona makes people laugh on the first message. A great persona makes them forget they're talking to a bot. This guide breaks down what separates a flat character from one that feels alive.

## The Core Principle

**Specificity is everything.** "A funny guy" is not a persona. "A Moroccan salafist who swings between pious Quran quotes and asking how much the prostitutes cost" is a persona. The more contradictory, layered, and culturally grounded your character is, the more real they feel.

## The Five Pillars of a Great Persona

### 1. Identity, Not Description

Don't describe what your character *does* — define who they *are*. Give them a background, a social context, a worldview.

**Weak:** "You are a funny motivational coach."

**Strong:** "You are a motivational coach who used to be a complete mess. You turned your life around at 28 after a bad breakup and a rock bottom moment you hint at but never fully explain. Now you are RELENTLESSLY positive because you genuinely believe everyone can change — because you did."

The strong version gives the AI a *person* to inhabit, not a role to perform.

### 2. Contradictions

Real people are contradictory. Your persona should be too. This is the single most important thing that separates a memorable character from a flat one.

Examples of great contradictions:
- A salafist who quotes the Quran and then asks about prostitutes
- A Lebanese woman who complains about Lebanon 24/7 but will fight anyone who criticizes it
- A gym bro who speaks entirely in fitness metaphors but gives genuinely profound emotional advice
- A cat who claims to not care about the group but notices immediately when the chat goes quiet
- A conspiracy theorist who wraps perfectly mainstream advice in "forbidden knowledge" packaging

The contradiction creates tension, and tension creates humor and engagement.

### 3. Specific Language

Don't just say your character "speaks casually." Define *how* they speak. What are their verbal tics? Their catchphrases? Their filler words? How do they start sentences? How do they sign off?

**Build a vocabulary for your persona:**

| Element | Example |
|---|---|
| Catchphrases | "That's a whiteboard moment" (Coach), "QED." (Physicist) |
| Filler words | "يعني" (Ashrafiyyeh), "genre" (Lebanese French), "ne" (Takeshi) |
| Reactions | "ya 3adra!" (shock), "やめてー!" (embarrassment), "bro 💀" (disbelief) |
| Sign-offs | "- Boomer" (every message), "Feed me." (Cat, at any time) |
| Escalation phrases | "Coal. Definite coal." (Santa, disapproval escalation) |

The goal is that someone reading the output should be able to identify the persona from the language alone, without seeing the name.

### 4. Cultural Grounding

The best personas are rooted in a specific culture, subculture, or community. This doesn't mean the persona has to be from a specific country — "gym culture" and "true crime podcast culture" are cultures too.

**What to include:**
- **Food opinions** — everyone has them, they reveal character instantly
- **Social dynamics** — how do they relate to authority? To peers? To strangers?
- **References** — what do they quote? Who are their heroes? What's their shared language with their community?
- **Status markers** — what do they brag about? What do they judge others for?
- **Code-switching** — how does their language change between casual and serious?

**For multilingual personas specifically:**
- Don't just say "speaks Arabic and French." Show *how* they mix: "You drop French words mid-sentence naturally — 'genre', 'bref', 'en tout cas' — the way Ashrafieh girls actually do."
- Include actual example phrases in the mixed language so the AI has patterns to follow.
- Specify which alphabet they write in by default.

### 5. Example Vibes

This is the secret weapon. Always include 4-5 concrete examples showing how the persona responds to different situations:
- Someone asking a normal question
- Someone sharing good news
- Someone having a bad day
- Someone roasting or teasing the persona
- A topic the persona has strong feelings about

**Why this matters:** The AI uses these examples as behavioral anchors. They're more powerful than abstract descriptions because they show rather than tell. The examples should demonstrate the persona's unique voice, not just their knowledge.

**Format:**
```
Example vibes:
- Someone asks a question: "[exact example response in character]"
- Someone is upset: "[exact example response in character]"
- Someone roasts them: "[exact example response in character]"
```

## Common Mistakes

### The One-Note Problem
A persona that does one thing gets boring fast. "A wizard who talks about magic" wears thin after 3 messages. "A wizard who's been alive too long, confuses centuries, is suspicious of technology, and claims to have taught Newton" has depth.

**Fix:** Add at least 2-3 behavioral modes. How does the character act when joking? When serious? When someone they care about is struggling?

### The Generic Language Problem
If your persona's dialogue could be swapped with any other character and still make sense, the language isn't specific enough.

**Fix:** Read your examples out loud. Can you *hear* a distinct voice? If not, add more verbal tics, catchphrases, and speech patterns.

### The No-Stakes Problem
A persona that is always nice, always helpful, always agreeable is forgettable. Characters need opinions, preferences, and things that bother them.

**Fix:** Give them something to judge. Something to defend. Something they're irrationally passionate about. The Sa3idi persona has honor and family. The Barista judges your coffee order. The Physicist has beef with engineers. Grandma wants GRANDCHILDREN.

### The Wall-of-Text Problem
Writing a 2000-word system prompt doesn't guarantee a good persona. An unfocused prompt with too many traits dilutes the character. The AI can't emphasize everything at once.

**Fix:** Identify the 3-4 core traits that define the character. Everything else should support those core traits, not compete with them.

## Structural Checklist

A complete persona file should have:

```
[meta]                  — description, author, version, tags, dates
[system_prompt]         — the actual persona definition
  ├── Boilerplate       — WhatsApp group chat context (copy from existing personas)
  ├── Identity          — who they are, not what they do
  ├── Core traits       — 5-7 specific behaviors with inline examples
  ├── Contradictions    — 3-4 internal tensions that make them feel real
  ├── Expressions       — named list of catchphrases and verbal tics
  └── Example vibes     — 4-5 concrete interaction examples
[voice]                 — OpenAI TTS voice (optional)
[tts_style]             — how to speak the text aloud (optional)
```

## Quick Quality Test

Before submitting, ask yourself:

1. **Could I recognize this persona from a single message?** If the language and personality are specific enough, one response should be identifiable.
2. **Does the persona have at least one contradiction?** If not, it's probably one-dimensional.
3. **Do the example vibes make me smile?** If the creator isn't entertained writing them, users won't be entertained reading them.
4. **Would I want this character in MY group chat?** That's the ultimate test.
