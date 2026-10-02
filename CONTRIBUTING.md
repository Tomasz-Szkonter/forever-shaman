# Contributing & Style Guide

This is the rulebook for every page in `wiki/`. The goal is a knowledge bank that people can **trust**, that stays **current** across beta builds, and that can later be turned into a website without rewriting anything.

---

## 1. Golden rules

1. **Every fact has a source.** Link it inline, right next to the fact: `([Wowhead](https://...))`.
2. **Every fact has a confidence marker.** See §2.
3. **Every page is stamped with the build it reflects.** Beta numbers change often, and a number with no build attached is worthless.
4. **Classic first, then Forever.** Forever is a fork of Classic Era, so explain the Classic baseline and then what Forever changed. Write changes as `~~Classic value~~ → **Forever value**`.
5. **Never fill gaps from memory.** That includes other versions (Season of Discovery, TBC, Wrath, retail). If you don't know, write it under **🔍 To Verify** rather than guessing.
6. **Disagreements are documented, not hidden.** When sources conflict, show both values and explain which one we believe and why.

---

## 2. Confidence markers

| Marker | Meaning | Typical sources |
|---|---|---|
| ✅ | **Verified in-game by this wiki.** Always add the build and date, e.g. `✅ (70170, 2026-10-03)` | Our own testing |
| 🔵 | **Official Blizzard** statement | Dev notes, blue posts, Blizzard news and deep dives |
| 🟢 | **Client data** (datamined) | wago.tools DB2, Wowhead Forever spell pages, client-reading talent calculators |
| 🟡 | **Community-tested or guide claim** | Forum tests with a method, bug trackers, Icy Veins, Warcraft Tavern |
| 🔴 | **Unverified, disputed, or rumor** | Single unsourced claims, SEO sites, stale guides |

Rules:
- Place the marker at the **start of the bullet** or in a **Conf.** column of a table.
- A fact can carry two markers when both apply, e.g. `🔵🟢`: Blizzard announced it and the client data matches.
- When several facts in a row share a marker and a source, you may put both on the table caption or section intro instead of repeating them.
- When something we tested contradicts client data, keep both and mark the client value 🔴 with a note.

---

## 3. Builds & baselines

- **Forever baseline:** `wow_classic_beta 1.60.1.<build>`. Builds so far: 69876 (beta launch), 69893, 69913, 69977, **70009** (Sept 24 notes), 70058, 70124, **70170** (Oct 1 notes, level 30).
- **Classic baseline:** **Classic Era 1.15.x** (the client Forever was forked from), not original 2006 patch 1.12. Where 1.15.x behaves differently from 1.12 (for example, the Windfury 1.5 s internal cooldown), say so.
- Put the build in the page's front matter (`build:`) and in its intro line.

---

## 4. File & folder conventions

```
wiki/
  Home.md               landing page (the index)
  _Sidebar.md           navigation (also used if we sync to a GitHub Wiki)
  Testing-Queue.md      everything we still need to test in-game
  forever/              what WoW Forever changed (beta changes, systems, races, bugs, changelog)
  mechanics/            how things work: formulas, tables, Classic baseline + Forever notes
  talents/              talent trees
  guides/               how to play: specs and leveling
  reference/            lookup tables: spells, totems, items, quests, macros, sources
```

- **File names:** `Title-Case-With-Hyphens.md`, matching the page title (`Totem-Mechanics.md`).
- **Links:** use **relative Markdown links**, never `[[Wiki Links]]`. Example: `[Totem Mechanics](../mechanics/Totem-Mechanics.md)` or `[Lava Burst](../talents/Elemental-Talents.md#lava-burst)`. These work on GitHub and in every static site generator.
- **Front matter** goes at the top of every page:

```yaml
---
title: Totem Mechanics
description: One sentence describing what the page covers.
build: 1.60.1.70170
last_updated: 2026-10-02
---
```

---

## 5. Page template

```markdown
---
title: <Page Title>
description: <one sentence>
build: 1.60.1.70170
last_updated: YYYY-MM-DD
---

# <emoji> <Page Title>

<1–3 sentence intro: what this page covers and who it's for.>

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents
- [Section](#section)

## <emoji> Section
...Classic baseline first, then a "♾️ In Forever" subsection when relevant...

## 📋 Quick Reference
<table summarizing the page>

## 🔍 To Verify
- [ ] <open question> — <why it's uncertain> ([source](...))

## 📚 Sources
- [Source name](url) — what it was used for
```

**Style notes**
- Use emoji headings, as the reference Hunter wiki does, but **only on H1 and H2**. Write H3 and below in plain text (`### Windfury Weapon`) so their anchors stay clean (`#windfury-weapon`).
- **Cross-page anchor links point only at H3 headings** (`../mechanics/Weapon-Imbues.md#windfury-weapon`). Emoji H2 anchors differ between GitHub and site generators.
- Formulas go in `inline code` or fenced blocks.
- Show values per rank as `` `R1 / R2 / R3` `` strings or as tables.
- Put a **📋 Quick Reference** table near the end of every mechanics page.
- Every page ends with **🔍 To Verify** (unchecked boxes) and **📚 Sources**.
- Write for players. Explain jargon on first use: GCD, ICD, PPM, 5SR, coefficient.

---

## 6. Workflow

1. **Raw material** goes in `_research/`: dated research snapshots, never edited after the fact. The wiki pages are distilled from it.
2. **Pages** in `wiki/` are the curated, current truth.
3. **When a new build drops:** update `forever/Beta-Changelog.md` first, then the affected pages, then bump their `build:` and `last_updated:`.
4. **When you test something in-game:** tick it off in [Testing-Queue](wiki/Testing-Queue.md), update the page with ✅ plus the build and date, and record the method (target, sample size, gear) in the page or the issue.
5. **Before committing**, run `node tools/check-wiki.mjs`. It checks front matter, relative links and anchors.
6. **Bugs** go in `forever/Known-Beta-Bugs.md`. Cross-post them to [ClassicWoWCommunity/forever-bugs](https://github.com/ClassicWoWCommunity/forever-bugs) where useful.
