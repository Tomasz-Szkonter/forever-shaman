---
title: Talent Overview
description: How the Forever Shaman talent trees are built, what changed versus Classic, milestone talents, respec and dual spec, the Legacy Talented perk, beta history and popular builds.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🌳 Talent Overview

This page explains how the Forever Shaman talent trees work and what changed versus Classic Era at a glance. Per-talent values live on the three tree pages: [Elemental](Elemental-Talents.md), [Enhancement](Enhancement-Talents.md) and [Restoration](Restoration-Talents.md).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)
> **Layout:** current tree, after the Sept 24 swap (Elemental Alacrity row 3, Call of Thunder row 4, Elemental Fury row 6). **Beta cap is level 30**, so no build beyond 21 points (26 with Talented) has been played live.

## 📑 Contents
- [Tree Structure](#-tree-structure)
- [Milestone Talents](#-milestone-talents)
- [What Changed vs Classic](#-what-changed-vs-classic)
- [Respec, Dual Spec and Legacy](#-respec-dual-spec-and-legacy)
- [Beta Change History](#-beta-change-history)
- [Popular Builds](#-popular-builds)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🧱 Tree Structure

### Classic Baseline

Classic Era Shamans had three trees with 51 points at level 60 and **46 talents** in total. Two of the 31-point capstones were **Stormstrike** (Enhancement, row 7) and **Mana Tide Totem** (Restoration, row 7) ([wfts](https://wowforevertalents.com/shaman/), [wft](https://wowforevertalent.com/shaman/reference/)).

### In Forever

- 🔵 "Familiar structure, the same number of rows, and one-point milestone talents at 11, 21, and 31 points, **now joined by a new 16-point milestone**." Talents start at level 10 ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap), [Blizzard Class Deep Dive](https://worldofwarcraft.blizzard.com/en-gb/news/24301515)).
- 🔵🟢 **3 trees, 7 rows, 51 points** at level 60 ([Blizzard Class Deep Dive](https://worldofwarcraft.blizzard.com/en-gb/news/24301515), [wfts](https://wowforevertalents.com/shaman/)).
- 🟢 **50 talents**: 16 Elemental, 18 Enhancement, 16 Restoration ([wfts](https://wowforevertalents.com/shaman/)).
- 🟢 **Row gating:** row *N* needs (N−1)×5 points spent **in that tree** ([wft](https://wowforevertalent.com/shaman/reference/), [wfts](https://wowforevertalents.com/shaman/)):

| Row | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Points needed in the tree | 0 | 5 | 10 | 15 | 20 | 25 | 30 |
| Earliest level (no Legacy points) | 10 | 15 | 20 | 25 | 30 | 35 | 40 |

  Analysis: the "earliest level" row assumes one point per level from level 10, as in Classic. Level 30 gives 21 points.
- 🟢 **Prerequisites** must be at **max rank** ([wft](https://wowforevertalent.com/shaman/reference/)). The arrows in Forever are:

| Tree | Prerequisite → Unlocks |
|---|---|
| Elemental | [Elemental Alacrity](Elemental-Talents.md#elemental-alacrity) 3/3 → [Call of Thunder](Elemental-Talents.md#call-of-thunder) 1/1 → [Elemental Fury](Elemental-Talents.md#elemental-fury) |
| Elemental | [Lightning Overload](Elemental-Talents.md#lightning-overload) 3/3 → [Lava Burst](Elemental-Talents.md#lava-burst) |
| Enhancement | [Mental Dexterity](Enhancement-Talents.md#mental-dexterity) 3/3 → [Flurry](Enhancement-Talents.md#flurry) |
| Enhancement | [Stormstrike](Enhancement-Talents.md#stormstrike) 1/1 → [Improved Stormstrike](Enhancement-Talents.md#improved-stormstrike) |
| Enhancement | [Mental Quickness](Enhancement-Talents.md#mental-quickness) 2/2 → [Rage of the Farseer](Enhancement-Talents.md#rage-of-the-farseer) |
| Restoration | [Healing Way](Restoration-Talents.md#healing-way) 3/3 → [Riptide](Restoration-Talents.md#riptide) |

- 🔴 Conquest Capped still shows the old Elemental chain (Call of Thunder requiring Elemental Fury, Elemental Alacrity requiring Call of Thunder). That is the pre-Sept 24 layout ([Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/)).

## 🎯 Milestone Talents

### Milestone Table

Each tree ends in a **new 31-point active**, and the old capstones moved up to the new **16-point** row. Bold = active ability or key talent. Positions 🟢 from the [wft calculator](https://wowforevertalent.com/shaman/), cross-checked with [wfts](https://wowforevertalents.com/shaman/).

| Points spent | Row | Elemental | Enhancement | Restoration |
|---|---|---|---|---|
| **11-point** (10 spent) | 3 | [Elemental Focus](Elemental-Talents.md#elemental-focus), **[Elemental Alacrity](Elemental-Talents.md#elemental-alacrity)** | [Elemental Weapons](Enhancement-Talents.md#elemental-weapons), **[Shamanistic Focus](Enhancement-Talents.md#shamanistic-focus)** (NEW), [Anticipation](Enhancement-Talents.md#anticipation) | [Ancestral Healing](Restoration-Talents.md#ancestral-healing), [Healing Focus](Restoration-Talents.md#healing-focus), **[Water Shield](Restoration-Talents.md#water-shield)** (NEW) |
| **16-point** (15 spent) | 4 | [Improved Fire Nova](Elemental-Talents.md#improved-fire-nova), [Eye of the Storm](Elemental-Talents.md#eye-of-the-storm), **[Call of Thunder](Elemental-Talents.md#call-of-thunder)** | [Toughness](Enhancement-Talents.md#toughness), [Flurry](Enhancement-Talents.md#flurry), **[Stormstrike](Enhancement-Talents.md#stormstrike)** (from 31) | [Tidal Mastery](Restoration-Talents.md#tidal-mastery), [Restorative Totems](Restoration-Talents.md#restorative-totems), **[Mana Tide Totem](Restoration-Talents.md#mana-tide-totem)** (from 31) |
| **21-point** (20 spent) | 5 | [Elemental Reach](Elemental-Talents.md#elemental-reach), **[Lightning Overload](Elemental-Talents.md#lightning-overload)** (NEW), **[Earthbound](Elemental-Talents.md#earthbound)** (NEW) | [Spirit Weapons](Enhancement-Talents.md#spirit-weapons), **[Mental Quickness](Enhancement-Talents.md#mental-quickness)** (NEW), **[Improved Stormstrike](Enhancement-Talents.md#improved-stormstrike)** (NEW) | **[Healing Way](Restoration-Talents.md#healing-way)**, **[Nature's Swiftness](Restoration-Talents.md#natures-swiftness)** |
| 26-point (25 spent) | 6 | **[Elemental Fury](Elemental-Talents.md#elemental-fury)** (5 ranks) | **[Maelstrom Weapon](Enhancement-Talents.md#maelstrom-weapon)** (NEW, 5 ranks) | [Purification](Restoration-Talents.md#purification) (5 ranks) |
| **31-point** (30 spent) | 7 | **[Lava Burst](Elemental-Talents.md#lava-burst)** (NEW) | **[Rage of the Farseer](Enhancement-Talents.md#rage-of-the-farseer)** (NEW) | **[Riptide](Restoration-Talents.md#riptide)** (NEW) |

- Row 6 holds a 5-rank talent in every tree rather than a one-point milestone.
- 🔵 Blizzard's official milestones are 11, 16, 21 and 31 ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)).

### Active Abilities from Talents

These are **not** baseline spells; you only have them if you take the talent ([ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/), [WCLBox index](https://wowforever.wclbox.com/en/fashu/shaman)) 🟢.

| Talent | Tree / row | Cost / cast / CD | Trainer ranks |
|---|---|---|---|
| [Water Shield](Restoration-Talents.md#water-shield) | Resto 3 | instant, 15 s CD | 1 rank |
| [Stormstrike](Enhancement-Talents.md#stormstrike) | Enh 4 | 125 mana, instant, 8 s CD | 1 rank |
| [Mana Tide Totem](Restoration-Talents.md#mana-tide-totem) | Resto 4 | 10 mana, instant, 5 min CD | R1 25, R2 48, R3 58 |
| [Nature's Swiftness](Restoration-Talents.md#natures-swiftness) | Resto 5 | 3 min CD | 1 rank |
| [Lava Burst](Elemental-Talents.md#lava-burst) | Ele 7 | 165 mana, 2.5 s, 10 s CD | R1 40, R2 50, R3 60 |
| [Rage of the Farseer](Enhancement-Talents.md#rage-of-the-farseer) | Enh 7 | instant, 3 min CD | 1 rank |
| [Riptide](Restoration-Talents.md#riptide) | Resto 7 | 245 mana, instant, 6 s CD | R1 40, R2 50, R3 60 |

## 🔄 What Changed vs Classic

### Talent Counts

| Category | Count | Talents | Conf. |
|---|---|---|---|
| **New** | 12 | Lightning Overload, Earthbound, Lava Burst · Mental Dexterity, Shamanistic Focus, Mental Quickness, Improved Stormstrike, Maelstrom Weapon, Rage of the Farseer · Mindfulness, Water Shield, Riptide | 🟢 [wfts](https://wowforevertalents.com/shaman/) |
| **Changed** | 30 (5 of them renamed) | every other talent except the 8 below | 🟢 [wfts](https://wowforevertalents.com/shaman/) |
| **Unchanged** | 8 | Elemental Focus, Reverberation (moved), Earth's Grasp (moved trees), Guardian Totems, Improved Lightning Shield, Improved Healing Wave, Nature's Swiftness, Purification | 🟢 [wfts](https://wowforevertalents.com/shaman/), [wft](https://wowforevertalent.com/shaman/reference/) |
| **Removed** | 8 | Elemental Mastery · Two-Handed Axes and Maces, Weapon Mastery, Shield Specialization, Enhancing Totems, Improved Weapon Totems · Totemic Mastery, Nature's Guidance | 🟢 [wfts](https://wowforevertalents.com/shaman/) |

Check: 46 Classic talents − 8 removed = 38 kept (30 changed + 8 unchanged); 38 + 12 new = **50**.

**Why other sites give different numbers**
- 🟡 [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/) counts **29 changed**. Analysis: the one-talent gap is probably Elemental Devastation (wording-only change) or one of the rank-2 rounding cases (Elemental Weapons, Ancestral Healing), which wfts counts as "changed".
- 🟡 [Zockify](https://www.zockify.com/forever/shaman/) says **17 new / 13 removed** because it counts the 5 renamed talents as both new and removed (12 + 5 = 17; 8 + 5 = 13).
- 🟡 [Power Up Gaming](https://powerupgaming.co.uk/2026/09/14/new-wow-forever-talents-changes-vs-classic-guide/) says 15 new, 25 changed, 10 unchanged; GameSpot says "16 new spells/talents" with a different method that mixes in spells ([GameSpot via Yahoo](https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html)). We use the client comparison.

### Renamed Talents

| Classic name | Forever name | Tree | What else changed |
|---|---|---|---|
| Lightning Mastery | [Elemental Alacrity](Elemental-Talents.md#elemental-alacrity) | Elemental | 5 → 3 ranks, −1.0 → −0.5 s, adds Lava Burst, row 6 → row 3 |
| Improved Fire Totems | [Improved Fire Nova](Elemental-Talents.md#improved-fire-nova) | Elemental | reworked for the Fire Nova spell (damage + cooldown) |
| Storm Reach | [Elemental Reach](Elemental-Talents.md#elemental-reach) | Elemental | adds Fire Nova, Lava Burst and Flame Shock range |
| Parry | [Spirit Weapons](Enhancement-Talents.md#spirit-weapons) | Enhancement | adds −30% threat, or +30% with Rockbiter |
| Healing Grace | [Natural Grace](Restoration-Talents.md#natural-grace) | Restoration | threat reduction now covers all spells |

All 🟢 [wfts](https://wowforevertalents.com/shaman/).

### Removed Talents and Where They Went

| Classic talent | Tree | Where the functionality went | Conf. |
|---|---|---|---|
| Elemental Mastery | Elemental | **Nowhere known.** Not a talent, not in the spellbook | 🟢 [wfts](https://wowforevertalents.com/shaman/) 🟡 [ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/) |
| Two-Handed Axes and Maces | Enhancement | **Baseline** proficiency | 🟡 [Zockify](https://www.zockify.com/forever/shaman/), [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/) |
| Weapon Mastery | Enhancement | No successor named | 🟢 [wfts](https://wowforevertalents.com/shaman/) |
| Shield Specialization | Enhancement | No successor named | 🟢 [wfts](https://wowforevertalents.com/shaman/) |
| Enhancing Totems | Enhancement | No successor named | 🟢 [wfts](https://wowforevertalents.com/shaman/) |
| Improved Weapon Totems | Enhancement | No successor named | 🟢 [wfts](https://wowforevertalents.com/shaman/) |
| Totemic Mastery | Restoration | Effectively baseline: buff totems now reach 30 yd ([Totem Mechanics](../mechanics/Totem-Mechanics.md)) | 🟢 tooltips, 🟡 inference |
| Nature's Guidance | Restoration | Hit moved into [Tidal Focus](Restoration-Talents.md#tidal-focus) (+1–5% hit) | 🟡 inference ([Icy Veins](https://www.icy-veins.com/wow-forever/shaman-class-overview)) |

### Big-Picture Changes

- **Capstones moved:** Stormstrike and Mana Tide Totem went from 31 points to 16 points 🟢 ([wft](https://wowforevertalent.com/shaman/reference/)).
- **Intellect for Enhancement:** [Ancestral Knowledge](Enhancement-Talents.md#ancestral-knowledge) now gives +10% Intellect, and [Mental Dexterity](Enhancement-Talents.md#mental-dexterity) / [Mental Quickness](Enhancement-Talents.md#mental-quickness) turn Intellect into attack power and spell power 🟢. See [Stat Mechanics](../mechanics/Stat-Mechanics.md).
- **Less spell crit for Elemental:** Call of Thunder went from 5 ranks to 1, and Tidal Mastery no longer affects lightning. A tester counts 3% from Elemental talents + 5% from Thundering Strikes, versus 11% in Classic 🟡 ([thread 2362045](https://us.forums.blizzard.com/en/wow/t/2362045)).
- **Regen while casting:** [Mindfulness](Restoration-Talents.md#mindfulness) and [Improved Stormstrike](Enhancement-Talents.md#improved-stormstrike) let mana regen continue while casting, which Classic Shamans could not do 🟢. See [Mana Regeneration](../mechanics/Mana-Regeneration.md).

## 🔁 Respec, Dual Spec and Legacy

### Respec and Dual Spec

- 🔵 **Changing talents requires a class trainer in a major city**, and this includes Legacy talents ([Blizzard Class Deep Dive](https://worldofwarcraft.blizzard.com/en-gb/news/24301515)).
- 🔵 **Beta respec cost:** 1 silver. The price rises after the first reset and drops back to 1 silver after an hour ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). Live prices are not announced.
- 🔵 **Dual Specialization unlocks at level 40** ([Blizzard Class Deep Dive](https://worldofwarcraft.blizzard.com/en-gb/news/24301515)). Its cost is unknown.

### Legacy Talented Perk

- 🟡 Legacy Challenges can grant **up to 5 extra talent points** ("Talented"). This is why Icy Veins publishes both 21-point and 26-point level-30 builds ([Icy Veins Elemental](https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide), [Icy Veins Enhancement](https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide)).
- 🔵 Context: the Legacy System is account-wide. It has 65 challenges, usually starting around character level 25, and each character can spend 16 Legacy points at launch. Hardcore does not share Legacy progress ([Blizzard Legacy System](https://news.blizzard.com/en-us/article/24307383/)).
- Analysis: with 5 extra points, a level-30 character has 26 points and can reach row 6 (one point in Elemental Fury, Maelstrom Weapon or Purification). A 31-point active would need level 35 at the earliest, and Lava Burst and Riptide rank 1 have a spell level of 40 in DB2 ([wago SpellLevels](https://wago.tools/db2/SpellLevels/csv?build=1.60.1.70170)). Whether that blocks them is untested.

## 📜 Beta Change History

Useful for dating guides: anything written from BlizzCon footage or before Sept 24 may show old values. Rows are 🟢 from [wfts beta changes](https://wowforevertalents.com/beta/); 🔵 marks items in the [Sept 24 dev notes](https://us.forums.blizzard.com/en/wow/t/2360696). The Oct 1 notes had **no Shaman talent changes** 🔵 ([Blizzard EU, Oct 1](https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-1-october/631316/4)).

| Talent | BlizzCon / pre-Sept 24 | Current (70170) |
|---|---|---|
| Elemental Fury / Elemental Alacrity | Fury row 3 → Call of Thunder → Alacrity row 6 | **Swapped**: Alacrity row 3, Fury row 6 🔵 |
| Totemic Focus / Tidal Mastery | Tidal Mastery row 1, Totemic Focus row 4 | Totemic Focus row 1, Tidal Mastery row 4 |
| Lava Burst (talent rank) | 158–187 at BlizzCon; 105–135 in build 69977 | **150–193** 🔵 |
| Rage of the Farseer | +30% melee attack speed **and** spell casting speed | attack speed only 🔵 |
| Maelstrom Weapon | up to 5 × rank stacks (25), 30 × rank sec (150 s) | **5 stacks, 30 sec** |
| Flurry | next 3 × rank swings (up to 15) | next **3** swings |
| Improved Stormstrike R2 | 100% regen while casting for 30 sec | **50% for 15 sec** |
| Stormstrike | +20% Nature damage taken for 12 sec | +20% to the **next LB, CL or Earth Shock** |
| Improved Ghost Wolf R2 | −2 sec | **−3 sec** (instant from a 3 s base) |
| Call of Thunder | "+3%" tooltip | tooltip **blank** in the client 🔴 |
| Riptide (talent rank) | 479–528 + 499 HoT | 484–535 + 445 HoT; crit fix 🔵 |
| Lightning Overload | 3 / 6 / 9% | 3 / 7 / 10% |
| Rounding | Mental Dexterity 66/99%, Mindfulness 34/51%, Elemental Alacrity 0.34/0.51 s, Eye of the Storm 46/69%, Healing Focus 46/69%, Healing Way 16/24%, Elemental Warding 6/9%, Elemental Reach Flame Shock +16 yd | 67/100%, 33/50%, 0.33/0.50 s, 47/70%, 47/70%, 17/25%, 7/10%, +15 yd |

**Guides known to show the old layout:** Warcraft Tavern's level-30 Elemental screenshot, Conquest Capped's prerequisites (updated Sept 29 but with pre-Sept 24 content), and Icy Veins' overview ("Elemental Fury … located earlier in the tree") ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/), [Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)).

## 📈 Popular Builds

> ⚠️ **Popularity data, not recommendations.** The beta is capped at level 30, and **no guide has published a researched level-60 build**. These numbers show what people click in a calculator, not what performs.

### Level-60 Splits from the Calculator

🟡 [wowforevertalent.com popular builds](https://wowforevertalent.com/shaman/) (30,447 complete builds; updated 2026-10-02 04:05 UTC):

| Split | Spec | Note |
|---|---|---|
| **18/33/0** | Enhancement | #1 most popular |
| **0/10/41** | Restoration | 967 opens |
| **8/33/10** | Enhancement | |
| **38/13/0** | Elemental | 803 opens |

- Overall spec pick split: **Elemental 24%, Enhancement 58%, Restoration 18%**.
- Most-picked talents: Thundering Strikes (90%), Ancestral Knowledge (75%), Shamanistic Focus (73%), Improved Ghost Wolf (71%), Concussion (68%).
- 🔴 A search-engine summary listed "Elemental 31/7/13, Enhancement 19/32/0, Restoration 0/8/43" builds. The source page could not be found (probably leprestore.com, which returned 403). Treat as unverified.

### Level-30 Builds

Level-30 builds from Icy Veins and Warcraft Tavern are listed in each spec guide: [Elemental](../guides/Elemental-Guide.md), [Enhancement](../guides/Enhancement-Guide.md), [Restoration](../guides/Restoration-Guide.md). Leveling talent advice is in the [Leveling Guide](../guides/Leveling-Guide.md).

## 📋 Quick Reference

| Item | Value | Conf. |
|---|---|---|
| Points at 60 | 51 (+ up to 5 from Legacy *Talented*) | 🔵 / 🟡 |
| Trees / rows | 3 / 7 | 🔵🟢 |
| Talents | 50 (16 Ele / 18 Enh / 16 Resto) | 🟢 |
| Row gating | (row − 1) × 5 points in the tree | 🟢 |
| Prerequisites | must be max rank | 🟢 |
| Milestones | 11 / 16 / 21 / 31 points | 🔵 |
| 31-point actives | Lava Burst, Rage of the Farseer, Riptide | 🟢 |
| 16-point actives | Stormstrike, Mana Tide Totem | 🟢 |
| Counts vs Classic | 12 new, 30 changed (5 renamed), 8 unchanged, 8 removed | 🟢 |
| Respec | class trainer in a major city (beta: 1 silver, rising) | 🔵 |
| Dual spec | level 40, cost unknown | 🔵 |

## 🔍 To Verify
- [ ] **Talented perk details** — which Legacy Challenges grant the 5 points, and at what level? Only Icy Veins mentions it ([Icy Veins Elemental](https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide)).
- [ ] **31-point actives before level 40** — can a level-35 character with 31 points (26 + 5) take Lava Burst or Riptide, given their spell level of 40? ([wago SpellLevels](https://wago.tools/db2/SpellLevels/csv?build=1.60.1.70170))
- [ ] **Dual spec cost** and **live respec prices** — not announced ([Blizzard Class Deep Dive](https://worldofwarcraft.blizzard.com/en-gb/news/24301515)).
- [ ] **Call of Thunder** — blank tooltip in 70170 vs +3% on wft ([wfts](https://wowforevertalents.com/shaman/talents/call-of-thunder/)).
- [ ] **Elemental Mastery** — removed with no replacement; watch for a trainer spell or Legacy perk 🔴.
- [ ] **Level-60 builds** — nothing beyond 26 points has been played. Revisit when the cap rises.

## 📚 Sources
- [Blizzard Deep Dive panel recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap) — 🔵 milestones, tree format
- [Blizzard Class Deep Dive: Hunter & Druid](https://worldofwarcraft.blizzard.com/en-gb/news/24301515) — 🔵 trainer respec, dual spec at 40
- [Blizzard Legacy System](https://news.blizzard.com/en-us/article/24307383/) — 🔵 Legacy structure
- [Blizzard Beta Development Notes](https://us.forums.blizzard.com/en/wow/t/2360696) and [EU Oct 1 copy](https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-1-october/631316/4) — 🔵 Sept 24 talent changes, respec cost, no Oct 1 talent changes
- [wowforevertalents.com](https://wowforevertalents.com/shaman/) and [beta changes](https://wowforevertalents.com/beta/) — 🟢 counts, values, history
- [wowforevertalent.com reference](https://wowforevertalent.com/shaman/reference/) and [calculator](https://wowforevertalent.com/shaman/) — 🟢 positions, prerequisites; 🟡 popularity stats
- [wago.tools SpellLevels (70170)](https://wago.tools/db2/SpellLevels/csv?build=1.60.1.70170) — 🟢 rank levels
- [ClassicWoWForever](https://classicwowforever.com/class-changes/shaman/), [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman) — 🟢 talent-granted spells
- [Icy Veins](https://www.icy-veins.com/wow-forever/shaman-class-overview) ([Elemental](https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide), [Enhancement](https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide)), [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), [Zockify](https://www.zockify.com/forever/shaman/), [Power Up Gaming](https://powerupgaming.co.uk/2026/09/14/new-wow-forever-talents-changes-vs-classic-guide/), [GameSpot via Yahoo](https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html), [Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-shaman-talents/) — 🟡 guide claims and counts
- [Forum thread 2362045](https://us.forums.blizzard.com/en/wow/t/2362045) — 🟡 crit math
