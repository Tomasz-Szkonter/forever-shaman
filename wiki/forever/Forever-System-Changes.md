---
title: Forever System Changes
description: Game-wide rule changes in WoW Forever that affect Shaman, including unified stats, spell power, downranking, crits, mana regeneration, buff stacking, talents and account systems.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🌐 Forever System Changes

This page covers the **game-wide** rule changes in WoW Forever that matter to Shamans: stats, spell power, crits, mana regeneration, buff stacking, talents and account systems. For Shaman-specific spell and talent changes, see [Forever Shaman Changes](Forever-Shaman-Changes.md). Reflects beta build `1.60.1.70170` (Oct 1, 2026).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents

- [🎯 Stats and Itemization](#-stats-and-itemization)
- [⚡ Spell Power and Scaling](#-spell-power-and-scaling)
- [💥 Critical Strikes](#-critical-strikes)
- [💧 Mana Regeneration](#-mana-regeneration)
- [🗿 Buff and Totem Stacking](#-buff-and-totem-stacking)
- [🌳 Talents and Specs](#-talents-and-specs)
- [🏛️ Legacy System](#️-legacy-system)
- [🌍 World, Account and Interface](#-world-account-and-interface)
- [❓ What Is Not Known](#-what-is-not-known)
- [📋 Quick Reference](#-quick-reference)

---

## 🎯 Stats and Itemization

### Unified hit and crit

- **Classic Era:** spell hit and spell crit are separate stats from melee and ranged hit and crit.
- 🔵 **Forever:** "Spell, melee, and ranged hit chance are combined, as are spell, melee, and ranged critical chance." ([Deep Dive][deepdive])
- **Why it matters for Shaman:** one hit or crit stat now helps both your weapon attacks and your spells. This is a big deal for Enhancement, which mixes melee with Stormstrike, shocks and Maelstrom Weapon Lightning Bolts. Talents follow suit: **Thundering Strikes** now gives crit to all spells and attacks, and **Tidal Focus** gives hit 🟢 ([wfts][wfts]).
- Details: [Stat Mechanics](../mechanics/Stat-Mechanics.md), [Spell Attack Table](../mechanics/Spell-Attack-Table.md)

### Bonus healing gives spell damage

- **Classic Era:** +healing gear gives healing only.
- 🔵 **Forever:** "Bonus healing now also includes **one third as much bonus damage**." ([Deep Dive][deepdive])
- 🟡 Method.gg paraphrases this as healing gear "will now also have Spell Power on it" ([Method.gg][method-items]). This is probably a loose reading of the official line.
- For Shaman: a Restoration Shaman's healing gear gives some damage for solo play, and Elemental can use healing pieces at a third of the value.

### Caster weapons with spell power

- 🔵 Caster weapons now carry **spell damage and healing**, starting around level 10 ([Deep Dive][deepdive], [Method.gg][method-items]).
- 🟡 Caster **staves** have lower weapon DPS in game than Wowhead shows (Staff of Westfall: 20.5 on Wowhead, **15.2** in game). Wowhead's Forever item data may lag behind the client ([thread 2359184][f-2359184], [thread 2365746][f-2365746]).

### Weapon skill and expertise

- 🔵 Weapon skill "still works as it always has, but items with weapon skill offer less of it per item". New stats **reduce the target's chance to parry or dodge**. ([Deep Dive][deepdive])
- 🟡 Method.gg calls this "Expertise… similar to TBC" ([Method.gg][method-items]). The two descriptions may be the same thing in different words.
- 🟡 Racial weapon-skill bonuses became **+1% crit** with that weapon type ([ForeverChanges racials][fc-racials]). See [Races and Racials](Races-and-Racials.md).
- Details: [Melee Attack Table](../mechanics/Melee-Attack-Table.md)

### Haste and other item changes

- 🔵 **Haste** exists as a stat: Skyborne **Wind Blessed** gives +1% melee, ranged and spell haste ([Meet the Skyborne][skyborne]). 🟡 Warcraft Tavern had not seen haste on any gear yet ([WT stats][wt-stats]).
- 🔵 New trinkets are tied to specific environments and creature types. Bad epic world drops were removed. Unique dungeon boss items are now blue quality, and set bonuses have been improved ([Deep Dive][deepdive]).
- 🟡 Dungeon sets drop the 8-piece format in favor of "real abilities" (datamined) ([Icy Veins snippet][iv-items]).
- 🔵 Combat pace: solo mobs take about **10–15 s** to kill, crowd control matters in dungeons, and threat matters ([Deep Dive][deepdive]).

---

## ⚡ Spell Power and Scaling

### Downranking penalty

- **Classic Era:** there is **no level-based downranking penalty**. Only spells learned **before level 20** get a reduced coefficient: `coef × (1 − (20 − SpellLevel) × 0.0375)`. The "+5/+6 levels" rule is from TBC ([Ozgar's Downranking Guide][ozgar]). "Downranking" means casting a lower rank of a spell to save mana.
- 🔵 **Forever (Oct 1):** "spells cast using spell ranks vastly below your current level receive **less benefit from your Spell Damage and Spell Healing** and have a **reduced chance to activate your Class abilities and Talents**." Blizzard's example: "Using a Rank 1 Frostbolt at level 60 will result in a **0% chance** to get a Frostbite activation." ([dev notes][blz])
- **For Shaman:** downranked Lightning Bolt, Healing Wave and Chain Heal get less spell power, and are less likely to trigger talents such as Lightning Overload, Elemental Focus (Clearcasting) or healing-crit effects. 🔴 The exact formula and which Shaman procs count as "Class abilities and Talents" are not published.
- 🟡 Spells are still learned in ranks, and you can still pick lower ranks from the spellbook ([forum thread 2352785][f-2352785], player discussion).
- Details: [Spell Coefficients](../mechanics/Spell-Coefficients.md)

### Base damage down, coefficients up

- 🟢 Shaman spells have **lower base values** and **higher coefficients at low ranks** (for example Lightning Bolt R1 coefficient ~~12.3%~~ → **42.9%**) ([WCLBox][wcl-lb]). See [Forever Shaman Changes](Forever-Shaman-Changes.md#-spell-rescale).
- 🟡 Warcraft Tavern says Forever "drastically changes how spell power scaling works", moving reliance from spell ranks to gear ([WT][wt]).
- 🔴 A "general cut to spell base damage" is a **player claim**, not a Blizzard statement ([wofwforever][wofw]).

### Dynamic scaling

- 🔵 Some spells now scale **dynamically** with the caster's spell power (Blizzard names Thorns and Retribution Aura) ([dev notes][blz]).
- 🟡 The Hunter wiki reports that DoTs **recalculate** their damage while active instead of snapshotting stats when applied ([forever-hunter wiki][hunter-wiki]). This was observed for Hunter attack power; nobody has tested it for Shaman spell power.
- 🔵 Wands **no longer scale** with spell damage (Sept 24). Wizard Oil is back to 8/16/24 spell power ([dev notes][blz]).

---

## 💥 Critical Strikes

### DoT and HoT crits

- **Classic Era:** periodic damage and healing (DoT and HoT ticks) cannot crit. A spell or heal crit does **150%** damage ([Warcraft Tavern mana guide][wt-mana]).
- 🔵 **Forever:** HoTs and DoTs **can crit**. Blizzard fixed bugs so that Rejuvenation, Tranquility, Wild Growth, **Riptide**, Devouring Plague and Hellfire "can land critical hits". Inner Focus "no longer applies its Critical Strike increase to Periodic Effects", which implies periodic effects can crit in general ([dev notes][blz]).
- 🟡 **Flame Shock** ticks can crit, but they do **not** trigger Elemental Devastation ([thread 2366738][f-2366738]).
- 🔴 Whether **totem pulses** (Healing Stream, Searing Totem) can crit is not documented.
- Details: [Healing Mechanics](../mechanics/Healing-Mechanics.md), [Shock Mechanics](../mechanics/Shock-Mechanics.md)

### PvP crit halving

- 🟡 Players found that **against players, the crit bonus is halved**: melee crits deal **150%** instead of 200%, spell crits about **125%** instead of 150%, and DoT crits are reduced the same way. Blizzard has **not confirmed** this ([Icy Veins snippet][iv-pvp]).

---

## 💧 Mana Regeneration

- **Classic Era:** Spirit regenerates mana only **outside the 5-second rule** (5SR: Spirit regen stops for 5 s after any mana-costing cast). MP5 (mana per 5 seconds from gear) ticks at all times ([Warcraft Tavern mana guide][wt-mana]).

### Regen while casting

- 🔵 **Forever:** talents across classes now let **Spirit regen continue while casting**, working around the 5SR. Official examples are Paladin Reverence, Shield Specialization and Improved Seal of Fury, and Hunter Bestial Discipline, Rapid Recuperation and Resourcefulness ([Deep Dive][deepdive], [Class Deep Dive][classdd]).
- 🟢 **Shaman sources of regen while casting:**
  - **Mindfulness** (Restoration): 17/33/50% ([wfts][wfts])
  - **Improved Stormstrike** (Enhancement): 50% for 15 s after Stormstrike ([wfts][wfts])
  - **Polished Driftwood Icon** relic: 8% ([WoWHandbook][wowhb-relics])
- 🟢 **Water Shield** returns 2% of max mana per globe when you are hit or land a healing crit ([wfts][wfts]). 🔵 **Totemic Recall** refunds 25% of the recalled totems' mana (fixed Oct 1, [dev notes][blz]).
- 🟡 Outside casting, Spirit still works as in Classic ([WT stats][wt-stats]).

### The Spirit nerf claim (unverified)

- 🔴 One claim says Spirit regen while **not** casting was cut "across the board", with regen-while-casting talents buffed so in-combat regen stays about the same. It comes **only** from a Mobalytics search snippet (the page returned 403) and has **no official confirmation** ([Mobalytics][moba-shaman]).
- Details: [Mana Regeneration](../mechanics/Mana-Regeneration.md)

---

## 🗿 Buff and Totem Stacking

### Totem stacking rules

🔵 Sept 24 notes ([dev notes][blz]):
- "Tranquil Air Totem, Windfury Totem, and Grace of Air Totem **no longer stack together even if used by different Shamans** in the same group." A group gets one air-totem effect at a time.
- Flametongue Totem "no longer has a duration and is instantly replaced when placing another totem". It no longer stacks with itself, with **Flametongue Weapon** or with **Windfury Totem**.
- 🟢 Windfury Weapon and Flametongue Weapon on your main hand turn off your **own** benefit from Windfury Totem and Flametongue Totem ([WCLBox][wcl]).
- 🔴 Tranquil Air Totem may not exist in the Forever client at all; see [Forever Shaman Changes](Forever-Shaman-Changes.md#per-totem-changes).
- Details: [Totem Mechanics](../mechanics/Totem-Mechanics.md)

### Camp buffs vs class buffs

- 🔵 **Camping:** a Basic Campfire creates a campsite. Up to 3 profession objects can be added (one per player, 1-hour cooldown), each giving 1-hour buffs or services ([Deep Dive][deepdive]).
- 🟡 Camp buffs **do not stack with class buffs**. For example, the Herbalism Incense Candle gives Intellect, and the Blacksmith Sharpening Wheel gives Attack Power ([Conquest Capped][cc-prof]). Which Shaman totem buffs count as "class buffs" is not stated.

### Buffs moved to baseline

- 🔵 Key class buffs moved from talents to baseline across classes, for example Blessing of Kings, Improved Mark of the Wild and Divine Spirit ([Class Deep Dive][classdd]). 🟡 The community adds Blessing of Might and Improved Battle Shout ([Power Up Gaming][pug]).
- 🟢 For Shaman, the 30 yd totem radius (formerly the Totemic Mastery talent) is effectively baseline ([wfts][wfts]).

---

## 🌳 Talents and Specs

### Talent structure

- 🔵 Trees keep the Classic shape: same number of rows, and one-point milestone talents at **11, 21 and 31** points, "now joined by a **new 16-point milestone**". Talents start at level 10 ([Deep Dive][deepdive], [Class Deep Dive][classdd]).
- 🟢 3 trees, 7 rows, 51 points at level 60. Each row needs 5 more points in that tree, and a prerequisite must be at max rank ([wft][wft], [wfts][wfts]).
- Details: [Talent Overview](../talents/Talent-Overview.md)

### Respec and dual spec

- 🔵 **Changing talents requires a class trainer in a major city**, and this includes Legacy talents ([Class Deep Dive][classdd]).
- 🔵 In the beta, a respec costs **1 silver**. The price rises after the first reset and drops back to 1 silver after an hour ([dev notes][blz]).
- 🔵 **Dual Specialization unlocks at level 40** ([Class Deep Dive][classdd]). The cost is unknown.

### Legacy "Talented" perk

- 🟡 Legacy Challenges can grant **up to 5 extra talent points**. Icy Veins posts 21- and 26-point level-30 builds for this reason ([Icy Veins Elemental][iv-ele], [Icy Veins Enhancement][iv-enh]).
- 🔴 How the points are earned, and whether all 5 are available at launch, is not documented.

---

## 🏛️ Legacy System

- 🔵 **Account-wide horizontal progression.** There are **65 Legacy Challenges** in 6 categories (Classes, Tradeskills, PvP, Adventure, Dungeons, Raids), worth 1 point each. They usually start around character level 25 ([Blizzard: Legacy System][legacy], [Deep Dive][deepdive]).
- 🔵 Each character can spend **16 points** at launch across three trees: Professions, Adventure and Resourcefulness (examples: Reagent Economy, Well Rested) ([Blizzard: Legacy System][legacy]).
- 🔵 Changing Legacy talents requires a class trainer. **Hardcore does not share Legacy progress** ([Blizzard: Legacy System][legacy]).

---

## 🌍 World, Account and Interface

### Rulesets instead of realms

- 🔵 There are **no realms**. You pick a ruleset: **Normal** (PvP by consent), **PvP**, **Roleplaying**, and **Hardcore** (after launch). Each ruleset is one large ecosystem per region ([Deep Dive][deepdive], [Choose Your Ruleset][rulesets]).
- 🔵 Characters have two-part names. Collections and Legacy Points are account-wide across rulesets, **except Hardcore**. You cannot group across rulesets, and the factions stay separate ([Deep Dive][deepdive]).
- 🟡 A character cannot change ruleset. Dead Hardcore characters can move to another ruleset to be resurrected ([Icy Veins snippet][iv-rulesets]).
- 🔴 Players worry that accounts may be faction-locked on the PvP ruleset. Not confirmed ([Choose Your Ruleset thread][rulesets]).

### Mounts

- 🔵 Mount costs follow the TBC model: the cost moves into riding training, and you get a mount when you learn the skill ([Deep Dive][deepdive]).
- 🟡 There are no flying mounts ([warcraft.wiki.gg][wiki-forever]).
- 🔴 Riding level and gold cost are unknown.

### No PTRs and hidden items

- 🔵🟡 There will be **no PTRs** (public test realms). Raid bosses and item stats stay hidden until players meet them, so item data in the client is heavily obfuscated. This comes from an interview with Josh Greenfield (Aggrend) ([Method.gg][method-ptr]).
- 🟡 About 12,500 items are hidden from dataminers, and about 4,419 had been revealed during the beta ([Icy Veins snippet][iv-items]).

### Cooldown Manager

- 🟡 The Sept 24 build added a **Cooldown Manager** (off by default, under Options > Gameplay Enhancement). At first it supported only Druid, Mage, Priest, Warrior and Warlock, **so not Shaman**, and it did not handle spell ranks ([wowguide.net][wowguide], [players-realm][players-realm]).

### Other beta changes

- 🔵 Dungeon quests give 50% less bonus XP (Sept 24). PvP gear honor costs rose about 50%, and the honor cap rose from 15,000 to 25,000 ([dev notes][blz]).
- 🟡 The beta uses layering ([Choose Your Ruleset thread][rulesets]).

---

## ❓ What Is Not Known

No source found anything on these as of Oct 2:
- **Spell batching.** Classic Era processes damage in 400 ms batches ([magey][magey-batch]); no source says whether Forever changed this.
- **GCD rules**, including whether totems have a different global cooldown.
- **Buff and debuff slot limits.**
- **Faction balance** measures.
- **Trainer and spell-rank cost** changes.
- Whether **totem pulses** can crit.
- **Haste on gear.**
- **Dual spec cost**, **riding level and cost**.

---

## 📋 Quick Reference

| System | Classic Era | Forever | Conf. |
|---|---|---|---|
| Hit / crit | Separate spell and melee stats | **One combined hit and one combined crit** | 🔵 |
| Bonus healing | Healing only | Also gives **1/3 as much spell damage** | 🔵 |
| Caster weapons | Blizzard lists this as new | **Spell damage and healing** from about level 10 | 🔵 |
| Weapon skill | Full amounts on items | Less per item; new anti-parry/dodge stats | 🔵 |
| Downranking | Only sub-level-20 penalty | **Less spell power and lower proc chance** for ranks far below your level | 🔵 |
| DoT / HoT crits | Cannot crit | **Can crit** | 🔵 |
| Crits vs players | 200% melee / 150% spell | About **150% / 125%** | 🟡 |
| Regen while casting | MP5 only (Spirit stops during the 5SR) | **Talents** (Mindfulness, Improved Stormstrike), relic, Water Shield | 🔵🟢 |
| Spirit outside casting | Normal | Claimed nerf, **unverified** | 🔴 |
| Air totems | Stack from different Shamans | **One air-totem effect per group** | 🔵 |
| Camp buffs | n/a (new) | Don't stack with class buffs | 🟡 |
| Talents | 11/21/31 milestones | **+16-point milestone**; respec at trainer; dual spec at 40 | 🔵 |
| Extra talent points | None | Legacy "Talented" perk, up to +5 | 🟡 |
| Realms | Realms | **Rulesets** (Normal, PvP, RP, Hardcore) | 🔵 |
| Mounts | Buy the mount | Mount granted with riding training | 🔵 |
| Cooldown Manager | n/a (new) | Added Sept 24; **Shaman not supported** at first | 🟡 |

## 🔍 To Verify

- [ ] **Downranking formula** for Shaman spells: how much spell power a low rank loses at a given level, and how proc chance drops (Lightning Overload, Clearcasting). Blizzard gave only a Frostbolt example ([dev notes][blz]).
- [ ] **Spirit regen nerf** outside casting: compare out-of-5SR mana ticks at known Spirit with the Classic formula. Only a Mobalytics snippet claims it ([Mobalytics][moba-shaman]).
- [ ] **PvP crit halving** for Shaman spells and Flame Shock ticks. Player finding only ([Icy Veins snippet][iv-pvp]).
- [ ] **Totem pulse crits**: can Healing Stream or Searing Totem ticks crit? Not documented ([dev notes][blz]).
- [ ] **DoT dynamic recalculation** for Flame Shock when spell power changes mid-DoT. Only tested for Hunter attack power ([forever-hunter wiki][hunter-wiki]).
- [ ] **Racial weapon crit and spells**: does the +1% crit from Axe or Mace Specialization also count for spells under unified crit? Not documented ([ForeverChanges racials][fc-racials]).
- [ ] **Which Shaman buffs count as "class buffs"** for the camp-buff rule ([Conquest Capped][cc-prof]).
- [ ] **Cooldown Manager** support for Shaman in later builds ([wowguide.net][wowguide]).
- [ ] **Legacy Talented perk** requirements and availability at launch ([Icy Veins Elemental][iv-ele]).

## 📚 Sources

- [Blizzard: Deep Dive panel recap][deepdive]: unified stats, healing to damage, caster weapons, weapon skill, camping, rulesets, mounts, talents
- [Blizzard: Class Deep Dives, Hunter and Druid][classdd]: talent milestones, trainer respec, dual spec, regen-while-casting talents, baseline buffs
- [Blizzard: Beta Development Notes][blz]: downranking penalty, DoT/HoT crit fixes, wands, totem stacking, respec cost, XP and honor changes
- [Blizzard: Legacy System][legacy]: Legacy Challenges and trees
- [Blizzard: Meet the Skyborne][skyborne]: haste racial
- [Blizzard: Choose Your Ruleset][rulesets]: rulesets (player replies are 🔴)
- [Method.gg itemization][method-items], [Method.gg no PTRs][method-ptr]: itemization paraphrase, PTR interview
- [Warcraft Tavern Shaman guide][wt], [stats guide][wt-stats], [mana guide][wt-mana]: spell scaling claims, Spirit, Classic 5SR
- [Ozgar's Downranking Guide][ozgar]: Classic downranking rules
- [Icy Veins snippets][iv-pvp]: PvP crit rule, hidden items, rulesets
- [Icy Veins Elemental][iv-ele] and [Enhancement][iv-enh] guides: Legacy Talented builds
- [Conquest Capped professions][cc-prof]: camp buff stacking
- [wowforevertalents.com][wfts], [wowforevertalent.com][wft], [WCLBox][wcl], [ForeverChanges racials][fc-racials]: client data
- [WoWHandbook relics][wowhb-relics]: relic regen effect
- [wowguide.net][wowguide], [players-realm][players-realm]: Cooldown Manager
- [forever-hunter wiki][hunter-wiki]: DoT recalculation observation
- [wofwforever][wofw], [Mobalytics][moba-shaman], [Power Up Gaming][pug], [warcraft.wiki.gg][wiki-forever]: secondary claims
- [magey Spell batching][magey-batch]: Classic batching baseline

[deepdive]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[classdd]: https://worldofwarcraft.blizzard.com/en-gb/news/24301515
[blz]: https://us.forums.blizzard.com/en/wow/t/2360696
[legacy]: https://news.blizzard.com/en-us/article/24307383/
[skyborne]: https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne
[rulesets]: https://eu.forums.blizzard.com/en/wow/t/630507/1
[method-items]: https://www.method.gg/wow-forever/itemization-updates-in-world-of-warcraft-forever-expertise-spell-damage-more
[method-ptr]: https://www.method.gg/wow-forever/no-ptrs-and-new-datamining-restrictions-coming-to-world-of-warcraft-forever
[wt]: https://www.warcrafttavern.com/forever/guides/shaman/
[wt-stats]: https://www.warcrafttavern.com/forever/guides/stats/
[wt-mana]: https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/
[ozgar]: https://www.warcrafttavern.com/wow-classic/guides/ozgars-downranking-guide-tool/
[iv-pvp]: https://www.icy-veins.com/wow-forever/news/players-found-a-hidden-pvp-rule-in-wow-forever-that-halves-crit-bonuses/
[iv-items]: https://www.icy-veins.com/wow-forever/news/wow-forever-hid-over-12500-items-from-dataminers-heres-whats-still-secret/
[iv-rulesets]: https://www.icy-veins.com/wow-forever/news/rulesets-replace-realms-in-wow-forever-heres-how-it-works/
[iv-ele]: https://www.icy-veins.com/wow-forever/elemental-shaman-ranged-dps-pve-guide
[iv-enh]: https://www.icy-veins.com/wow-forever/enhancement-shaman-melee-dps-pve-guide
[cc-prof]: https://conquestcapped.com/guides/wow-forever/wow-forever-professions/
[wfts]: https://wowforevertalents.com/shaman/
[wft]: https://wowforevertalent.com/shaman/reference/
[wcl]: https://wowforever.wclbox.com/en/fashu/shaman
[wcl-lb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt
[fc-racials]: https://foreverchanges.pro/racials
[wowhb-relics]: https://wowhandbook.com/gear/relics/
[wowguide]: https://wowguide.net/en/guides/wow-forever-beta-patch-notes
[players-realm]: https://players-realm.com/en/news/wow-forever-beta-class-changes-cooldown-manager/
[hunter-wiki]: https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes
[wofw]: https://wofwforever.com/en/guides/wow-forever-spell-power-scaling/
[moba-shaman]: https://mobalytics.gg/wow-forever/guides/shaman-class-overview
[pug]: https://powerupgaming.co.uk/2026/09/14/new-wow-forever-talents-changes-vs-classic-guide/
[wiki-forever]: https://warcraft.wiki.gg/wiki/Forever
[magey-batch]: https://github.com/magey/classic-warrior/wiki/Spell-batching
[f-2352785]: https://us.forums.blizzard.com/en/wow/t/2352785
[f-2359184]: https://us.forums.blizzard.com/en/wow/t/2359184
[f-2365746]: https://us.forums.blizzard.com/en/wow/t/2365746
[f-2366738]: https://us.forums.blizzard.com/en/wow/t/2366738
