---
title: Enhancement Guide
description: How to play Enhancement Shaman in WoW Forever during the level-30 beta, built only from sourced guide claims, tester findings and clearly labeled analysis.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🪓 Enhancement Guide

How to play Enhancement (melee DPS with spell support, and an off-tank in a pinch) in WoW Forever. Every recommendation comes from a cited guide or tester, or is marked **Analysis:** when it follows directly from the spell and talent data. Talent values live on [Enhancement Talents](../talents/Enhancement-Talents.md); imbue details on [Weapon Imbues](../mechanics/Weapon-Imbues.md).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

> ⚠️ **Status: provisional.** The beta is capped at **level 30** (since Oct 1). Windfury Weapon (L30) is now testable, but **Windfury Totem (L32), Rage of the Farseer (31 points) and a full 5/5 Maelstrom Weapon (row 6) have never been played live**. No researched level-60 build or rotation exists yet.

## 📑 Contents
- [Overview](#-overview)
- [Recommended Races](#-recommended-races)
- [Talent Builds](#-talent-builds)
- [Core Abilities and Priority](#-core-abilities-and-priority)
- [Stats](#-stats)
- [Totems to Use](#-totems-to-use)
- [Mana Management](#-mana-management)
- [Common Mistakes and Tester Notes](#-common-mistakes-and-tester-notes)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🧭 Overview

Enhancement fights in melee with a weapon imbue, uses **Stormstrike** (now a 16-point talent) to empower Lightning Bolt and Earth Shock, builds **Maelstrom Weapon** stacks for faster, cheaper Lightning Bolts, and ends in **Rage of the Farseer**, a 3 min attack-speed cooldown.

**Strengths (sourced)**
- 🟢 **Stormstrike earlier and more often:** available at 16 points with an ~~20 s~~ → **8 s** cooldown ([Enhancement Talents](../talents/Enhancement-Talents.md#stormstrike)).
- 🟡 **Personal Bloodlust:** guides describe [Rage of the Farseer](../talents/Enhancement-Talents.md#rage-of-the-farseer) (+30% attack speed, 25 s, 3 min CD) that way ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), [Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)).
- 🟡 **Can tank dungeons "in a pinch"** with [Spirit Weapons](../talents/Enhancement-Talents.md#spirit-weapons) and Rockbiter ([Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)).
- 🟢 **Intellect scales damage:** [Mental Dexterity](../talents/Enhancement-Talents.md#mental-dexterity) turns up to 100% of Intellect into attack power and [Mental Quickness](../talents/Enhancement-Talents.md#mental-quickness) up to 30% into spell power.
- 🟡 **Sim ranking:** mythicsim's reference Enhancement sims at 622 DPS, 7th of 23 specs ("values still being checked") ([mythicsim](https://mythicsim.com/wow-forever/shaman)).
- 🟡 **Popularity:** 58% of complete Shaman builds on wowforevertalent.com are Enhancement (popularity data) ([calculator](https://wowforevertalent.com/shaman/)).

**Weaknesses (sourced)**
- 🟡 **Maelstrom Weapon builds slowly on two-handers:** "MW procs with a 2 hander are insanely slow" ([thread 2365290](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290)).
- 🟡 **Mana:** Guzu went "OOM every pull" in the level-38 BlizzCon demo dungeon. That was the demo, **not the beta** ([thread 2354160](https://us.forums.blizzard.com/en/wow/t/2354160)).
- 🟡 **No dual wield:** dual wield was not available in the level-38 BlizzCon demo ([Zockify](https://www.zockify.com/forever/shaman/)), and Wowhead reports that "Enhancement only uses 2-handed weapons in WoW Forever" ([Wowhead news 383200](https://www.wowhead.com/forever/news=383200/enhancement-only-uses-2-handed-weapons-in-wow-forever-enhancement-shaman)). Two-handed axes and maces are baseline now 🟡.
- 🟡 Players dislike losing totem twisting and stacking ([thread "Please fix shamans"](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290)).

## 🧬 Recommended Races

Full racial details: [Races and Racials](../forever/Races-and-Racials.md). Shaman races: Orc, Tauren, Troll, Windshaper Skyborne (Horde) and **Dwarf** (only Alliance option) 🔵🟢.

| Race | Relevant racials (70170) | Why it matters for Enhancement |
|---|---|---|
| [Orc](../forever/Races-and-Racials.md#orc) | **Blood Fury:** +10% AP and Spell Power, 15 s; **Axe Specialization:** +1% crit with 1H/2H axes; Hardiness: stun duration −20% | 🟡 "the best choice for Horde Shamans" ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)). 🟡 Guides also point to Orc for PvP ([Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview)). |
| [Dwarf](../forever/Races-and-Racials.md#dwarf) | **Mace Specialization:** +1% crit with maces; Stoneform | Only Alliance Shaman. Maces suit Enhancement 🟡 ([ForeverChanges](https://foreverchanges.pro/racials)). |
| [Troll](../forever/Races-and-Racials.md#troll) | **Berserking:** flat +10% cast and attack speed, 10 s | Analysis: stacks a second haste window with Rage of the Farseer (untested). |
| [Tauren](../forever/Races-and-Racials.md#tauren) | **Endurance:** +5% Health, +1% hit; War Stomp | Analysis: 1% hit counts for melee and spells (unified hit). |
| [Windshaper Skyborne](../forever/Races-and-Racials.md#windshaper-skyborne) | **Wind Blessed:** +1% melee, ranged and spell haste; +5% damage to Elementals | Paid Skyborne Heroic Pack or higher 🔵. |

Racial weapon-skill bonuses became +1% crit with the weapon type 🟡🟢 ([ForeverChanges](https://foreverchanges.pro/racials)).

## 🌳 Talent Builds

Enhancement was not affected by the Sept 24 row swap, so these builds are legal on the current tree. Per-talent values: [Enhancement Talents](../talents/Enhancement-Talents.md).

### Warcraft Tavern Level 30 (0/21/0)

🟡 [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/), from their build screenshot.

| Talent | Points | Row |
|---|---|---|
| [Thundering Strikes](../talents/Enhancement-Talents.md#thundering-strikes) | 5 | 1 |
| [Ancestral Knowledge](../talents/Enhancement-Talents.md#ancestral-knowledge) | 1 | 1 |
| [Mental Dexterity](../talents/Enhancement-Talents.md#mental-dexterity) | 3 | 2 |
| [Improved Ghost Wolf](../talents/Enhancement-Talents.md#improved-ghost-wolf) | 2 | 2 |
| [Elemental Weapons](../talents/Enhancement-Talents.md#elemental-weapons) | 3 | 3 |
| [Shamanistic Focus](../talents/Enhancement-Talents.md#shamanistic-focus) | 1 | 3 |
| [Flurry](../talents/Enhancement-Talents.md#flurry) | 4 | 4 |
| [Stormstrike](../talents/Enhancement-Talents.md#stormstrike) | 1 | 4 |
| [Improved Stormstrike](../talents/Enhancement-Talents.md#improved-stormstrike) | 1 | 5 |

Analysis: row gates check out (6 points before row 2, 11 before row 3, 15 before row 4, 20 before row 5).

### Icy Veins Level 30 (21 and 26 points)

🟡 [Icy Veins Enhancement guide](https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide), updated Oct 1–2; calculator code `#tc-hhhhhikkkllnnnorrrrsv`.
- The 5 extra *Talented* points go to **Improved Stormstrike 2/2 → Spirit Weapons → Flurry 5/5 → Mental Quickness**.
- Icy Veins says **Maelstrom Weapon is not worth taking until you can fit all 5 points**.
- The research snapshot does not list the full 21-point base; open the calculator code to see it.

### Hybrid Dips and Off-Tank

- 🟡 **8 points in Elemental** for [Elemental Devastation](../talents/Elemental-Talents.md#elemental-devastation): spell crit → +9% melee crit → more Flurry → faster Maelstrom stacks ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)).
- 🟡 **Tank / off-tank:** Spirit Weapons with Rockbiter gives +30% threat ([Icy Veins overview](https://www.icy-veins.com/wow-forever/shaman-class-overview), [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)). See [Threat](../mechanics/Threat.md).

### Level-60 Splits (popularity only)

🟡 [wowforevertalent.com](https://wowforevertalent.com/shaman/) popular builds (Oct 2): **18/33/0** is the #1 Shaman build overall, followed by **8/33/10** for Enhancement. 🔴 A search snippet lists "Enhancement 19/32/0" from an unfound source. **These are calculator clicks, not tested builds.** See [Talent Overview](../talents/Talent-Overview.md#level-60-splits-from-the-calculator).

## ⚡ Core Abilities and Priority

> No source has published a tested Enhancement rotation for Forever. Items marked 🟢 are tooltip facts; the order is **Analysis:** reasoning from those facts.

### Your Toolkit

| Ability | Level | Key facts | Link |
|---|---|---|---|
| Rockbiter Weapon | 1 | +AP and extra threat; unchanged except 60 min duration 🟢 | [Weapon Imbues](../mechanics/Weapon-Imbues.md#rockbiter-weapon) |
| Flametongue Weapon | 10 | Fire damage per hit; on the main hand it disables your own Flametongue Totem benefit 🟢 | [Weapon Imbues](../mechanics/Weapon-Imbues.md#flametongue-weapon) |
| Windfury Weapon | 30 | 20% chance per hit of 2 extra attacks; on the main hand it disables your own Windfury Totem benefit 🟢 | [Weapon Imbues](../mechanics/Weapon-Imbues.md#windfury-weapon) |
| Lightning Shield | 8 | 3 orbs; [Shamanistic Focus](../talents/Enhancement-Talents.md#shamanistic-focus) −45% mana | [Spells and Ranks](../reference/Spells-and-Ranks.md#lightning-shield) |
| Stormstrike | 16-pt talent (25+) | 125 mana, 8 s CD; next LB, CL or Earth Shock within 12 s +20% 🟢 | [Enhancement Talents](../talents/Enhancement-Talents.md#stormstrike) |
| Earth Shock / Flame Shock | 4 / 10 | shared 6 s cooldown; Shamanistic Focus −45% mana 🟢 | [Shock Mechanics](../mechanics/Shock-Mechanics.md) |
| Lightning Bolt | 1 | the only spell Maelstrom Weapon affects 🟢🟡 | [Spells and Ranks](../reference/Spells-and-Ranks.md#lightning-bolt) |
| Rage of the Farseer | 31-pt talent (40) | +30% attack speed 25 s, 3 min CD 🟢🔵 | [Enhancement Talents](../talents/Enhancement-Talents.md#rage-of-the-farseer) |

All four imbues last ~~5 min~~ → **60 min** 🟢.

### Single Target (Analysis)

1. Keep a weapon imbue and **Lightning Shield** up. *Why:* both now last 60 min / 10 min, so they are pre-pull buffs 🟢.
2. **Stormstrike** on cooldown. *Why:* it is an 8 s cooldown weapon strike that marks the target 🟢.
3. Spend the Stormstrike bonus on **Earth Shock** (instant) or **Lightning Bolt** within 12 s. *Why:* only the **next** LB, CL or Earth Shock gets the +20% 🟢. [Improved Stormstrike](../talents/Enhancement-Talents.md#improved-stormstrike) also gives 50% regen while casting for 15 s, which favors casting during that window.
4. At **5 Maelstrom stacks** (5/5 talent), cast **Lightning Bolt**. *Why:* Warcraft Tavern reads 5 stacks at 5/5 as an "instant and free Lightning Bolt" 🟡 ([Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)). This per-stack reading is implied by the tooltip but **unconfirmed in game**.
5. **Rage of the Farseer** (40+) with other cooldowns (Blood Fury, Berserking).

### Weapon Imbue Choice (Analysis)

- **Rockbiter** for tanking: [Spirit Weapons](../talents/Enhancement-Talents.md#spirit-weapons) turns its −30% threat into **+30%** while Rockbiter is active 🟢. 🟡 Testers say Rockbiter and Earth Shock already rip threat in low-level dungeons ([thread 2365062](https://us.forums.blizzard.com/en/wow/t/2365062)).
- **Windfury Weapon** from 30: 20% chance of 2 extra attacks 🟢. In Classic Era it has a **1.5 s internal cooldown** (ICD, the minimum time between procs) per client data and a 2023 test; original 1.12 reportedly had none ([magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem), [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Weapon)). No Forever change has been reported. [Elemental Weapons](../talents/Enhancement-Talents.md#elemental-weapons) adds +40% to its effect.
- **Flametongue Weapon:** [Elemental Weapons](../talents/Enhancement-Talents.md#elemental-weapons) adds +15% damage 🟢.
- 🔴 A claim that imbues stay on a traded weapon is **unconfirmed** ([thread 2368409](https://us.forums.blizzard.com/en/wow/t/2368409)).

## 📊 Stats

Only sourced rules plus mechanics-derived notes. Stat weights have not been published.

- 🔵 **Hit and crit are unified** across spells, melee and ranged ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)). Analysis: one hit value covers your swings and your Lightning Bolts, which removes the old hybrid split. [Thundering Strikes](../talents/Enhancement-Talents.md#thundering-strikes) now gives crit to "all spells and attacks" 🟢.
- 🟢 **Intellect → AP and SP:** [Ancestral Knowledge](../talents/Enhancement-Talents.md#ancestral-knowledge) (+10% Intellect), [Mental Dexterity](../talents/Enhancement-Talents.md#mental-dexterity) (AP +100% of Intellect) and [Mental Quickness](../talents/Enhancement-Talents.md#mental-quickness) (spell damage and healing +30% of Intellect). Analysis: Intellect is a damage stat for Forever Enhancement, not only a mana stat.
- **Strength and Agility (Classic baseline):** 2 melee AP per Strength; Agility gives crit (20 Agility per 1%) but no AP for Shamans ([warcraft.wiki.gg Attack power](https://warcraft.wiki.gg/wiki/Attack_power), [Warcraft Tavern Classic Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/)). Not re-checked in Forever.
- 🔵 **Weapon skill** "still works as it always has, but items with weapon skill offer less of it per item"; new stats reduce the target's dodge and parry chance ([Blizzard Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap)). Racial weapon bonuses are now +1% crit 🟢. See [Melee Attack Table](../mechanics/Melee-Attack-Table.md).
- 🟡 **Haste:** only Skyborne Wind Blessed and cooldowns so far; no haste found on gear ([Warcraft Tavern stats](https://www.warcrafttavern.com/forever/guides/stats/)).
- 🟡 **PvP:** melee crits deal 150% instead of 200% against players, per player testing ([Icy Veins news](https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/)).

See [Stat Mechanics](../mechanics/Stat-Mechanics.md) and [Enhancement Mechanics](../mechanics/Enhancement-Mechanics.md).

## 🗿 Totems to Use

Buff totems now last **5 min** with **30 yd** range, and stacking rules are much stricter 🔵🟢. Full details: [Totem Mechanics](../mechanics/Totem-Mechanics.md) and [Totems](../reference/Totems.md).

- **Earth:** [Strength of Earth Totem](../reference/Totems.md#strength-of-earth-totem) — Strength values cut about 30% (R5 ~~77~~ → **53**) 🟢. [Stoneskin Totem](../reference/Totems.md#stoneskin-totem) when tanking.
- **Air (L32+, untestable in beta):** [Windfury Totem](../reference/Totems.md#windfury-totem) AP cut about 22% (R3 ~~315~~ → **246**) 🟢; [Grace of Air Totem](../reference/Totems.md#grace-of-air-totem) (L42) Agility **buffed** (R3 ~~77~~ → **89**) 🟢.
- 🔵 **Air totems don't stack:** "Tranquil Air Totem, Windfury Totem, and Grace of Air Totem no longer stack together even if used by different Shamans in the same group" ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)). Analysis: Classic totem twisting (Windfury + Grace of Air) no longer works. 🔴 Tranquil Air Totem itself may not exist in Forever: the client diff lists it as removed and its Wowhead Forever page is a 404, even though Blizzard's note names it ([ForeverChanges](https://foreverchanges.pro/spellbook/shaman)). See [Totems](../reference/Totems.md).
- 🟢 **Your own imbue vs your own totem:** Windfury Weapon on your main hand disables the Windfury Totem benefit **for you**, and Flametongue Weapon does the same for Flametongue Totem ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-weapon)). 🔵 Flametongue Totem also no longer stacks with Windfury Totem.
- 🟡 [Elemental Weapons](../talents/Enhancement-Talents.md#elemental-weapons) does not boost Windfury Totem ([classicwow.gg](https://classicwow.gg/forever/guides/shaman)).
- 🟡 **Call of the Elements** (3.0 s cast) only saves about 1 s when you need all 4 totems; drop 3 or fewer by hand ([thread 2369645](https://us.forums.blizzard.com/en/wow/t/2369645)). Dropping totems in melee still costs global cooldowns.

## 💧 Mana Management

- 🟢 [Shamanistic Focus](../talents/Enhancement-Talents.md#shamanistic-focus): −45% mana on Shocks and Lightning Shield.
- 🟢 [Improved Stormstrike](../talents/Enhancement-Talents.md#improved-stormstrike): 50% mana regen while casting for 15 s after Stormstrike (at 2/2).
- 🟢 [Maelstrom Weapon](../talents/Enhancement-Talents.md#maelstrom-weapon): each stack also cuts Lightning Bolt's mana cost.
- 🔵 **Totemic Recall** refunds 25% of each recalled totem's mana (fixed Oct 1) ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- Analysis: [Ancestral Knowledge](../talents/Enhancement-Talents.md#ancestral-knowledge) now raises Intellect instead of max mana, which still means more mana.
- See [Mana Regeneration](../mechanics/Mana-Regeneration.md).

## 🚫 Common Mistakes and Tester Notes

- 🟡 **Maelstrom Weapon only affects Lightning Bolt** — not Chain Lightning, not heals ([thread 2354160](https://us.forums.blizzard.com/en/wow/t/2354160), [Warcraft Tavern](https://www.warcrafttavern.com/forever/guides/shaman/)).
- 🟡 **Half a Maelstrom talent is weak:** Icy Veins says wait until you can take all 5 points ([Icy Veins Enhancement](https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide)).
- 🟡 **Improved Stormstrike's reset needs a dodge or parry**, which may never happen on bosses (design concern) ([thread 2365734](https://us.forums.blizzard.com/en/wow/t/2365734)).
- 🟢 **Flurry only triggers from melee crits** now, not spell crits.
- 🟢 **Stormstrike buffs one spell**, not all Nature damage for 12 s as in Classic and early beta. Analysis: follow it with Earth Shock or Lightning Bolt inside the 12 s window, or the bonus is lost.
- 🟡 **Spirit Weapons cuts threat by 30% unless Rockbiter is up** ([thread 2365734](https://us.forums.blizzard.com/en/wow/t/2365734)). Swap to Rockbiter if you are tanking.
- 🔴 **Ghost Wolf base cast:** some guides say 2 s; client data says 3 s, so [Improved Ghost Wolf](../talents/Enhancement-Talents.md#improved-ghost-wolf) 2/2 makes it instant.
- 🟡 **Elemental Devastation** does not proc from Searing Totem, Fire Nova, Flame Shock ticks or imbues ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).

## 🔍 To Verify
- [ ] **Maelstrom Weapon per-stack math and proc model** — 20% per stack? Flat chance or PPM? Measure on a 2H ([thread 2356116](https://us.forums.blizzard.com/en/wow/t/2356116), [wago SpellAuraOptions](https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170)).
- [ ] **Windfury Weapon ICD in Forever** — Classic Era has 1.5 s; testable now at level 30 ([magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem)).
- [ ] **Windfury Totem** behavior and the self-imbue override — needs level 32, above the beta cap.
- [ ] **Dual wield** — confirm it is absent at every level, not just in the BlizzCon demo ([Zockify](https://www.zockify.com/forever/shaman/)).
- [ ] **Stormstrike +20%** — debuff on the target or buff on you? Matters for other Shamans in your group.
- [ ] **Icy Veins' 21-point base** — decode the calculator link ([Icy Veins Enhancement](https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide)).
- [ ] **Imbues on traded weapons** — unconfirmed claim ([thread 2368409](https://us.forums.blizzard.com/en/wow/t/2368409)).
- [ ] **A tested rotation and stat weights** — nobody has published either.

## 📚 Sources
- [Warcraft Tavern Shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/) and [stats guide](https://www.warcrafttavern.com/forever/guides/stats/) — 🟡 builds, Maelstrom reading, races
- [Icy Veins Enhancement guide](https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide) and [class overview](https://www.icy-veins.com/wow-forever/shaman-class-overview) — 🟡 builds, tanking, Rage of the Farseer
- [wowforevertalents.com](https://wowforevertalents.com/shaman/), [wowforevertalent.com](https://wowforevertalent.com/shaman/) — 🟢 talent data; 🟡 popularity
- [Blizzard Beta Development Notes](https://us.forums.blizzard.com/en/wow/t/2360696), [Deep Dive recap](https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap) — 🔵 totem stacking, unified stats, weapon skill
- [WCLBox Windfury Weapon](https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-weapon), [ForeverChanges racials](https://foreverchanges.pro/racials), [wago.tools](https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170) — 🟢 client data
- [Wowhead news 383200](https://www.wowhead.com/forever/news=383200/enhancement-only-uses-2-handed-weapons-in-wow-forever-enhancement-shaman), [Zockify](https://www.zockify.com/forever/shaman/), [classicwow.gg](https://classicwow.gg/forever/guides/shaman), [mythicsim](https://mythicsim.com/wow-forever/shaman), [Icy Veins PvP crit news](https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/) — 🟡
- Blizzard forum threads: [2354160](https://us.forums.blizzard.com/en/wow/t/2354160), [2356116](https://us.forums.blizzard.com/en/wow/t/2356116), [2365062](https://us.forums.blizzard.com/en/wow/t/2365062), [2365290](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290), [2365734](https://us.forums.blizzard.com/en/wow/t/2365734), [2366738](https://us.forums.blizzard.com/en/wow/t/2366738), [2368409](https://us.forums.blizzard.com/en/wow/t/2368409), [2369645](https://us.forums.blizzard.com/en/wow/t/2369645) — 🟡 tester findings
- Classic baseline: [magey Windfury Totem](https://github.com/magey/classic-warrior/wiki/Windfury-Totem), [warcraft.wiki.gg Windfury Weapon](https://warcraft.wiki.gg/wiki/Windfury_Weapon), [warcraft.wiki.gg Attack power](https://warcraft.wiki.gg/wiki/Attack_power), [Warcraft Tavern Classic Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/)
