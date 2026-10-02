---
title: Stat Mechanics
description: What every stat does for a Shaman (Strength, Agility, Intellect, Spirit, Stamina, MP5, attack power, spell power, hit, crit, haste), with the Classic Era baseline and WoW Forever's changes.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 📊 Stat Mechanics

What each stat is worth to a Shaman. The Classic Era conversions come first, then what WoW Forever changed. The biggest change is that **Intellect now feeds Enhancement's attack power and spell power** through talents, and that hit and crit are now **one stat each** for melee and spells.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents
- [Classic Baseline](#-classic-baseline)
- [In Forever](#️-in-forever)
- [Worked Example](#-worked-example)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 📜 Classic Baseline

Values are for a **level 60 Shaman** in Classic Era unless noted.

### Strength

- 🟡 **1 Strength = 2 melee attack power (AP)** for Shamans. "Before Patch 3.0.2, shamans received 2 AP per strength" ([warcraft.wiki.gg: Attack power][wwg-ap]; [Blizzard Watch][bw]; [Warcraft Tavern Enhancement][wt-enh-classic]).
- 🔴 A commonly quoted AP formula is `Level×2 + Str×2 − 20`. No primary source was found for it.

### Agility

| Effect | Value | Conf. | Source |
|---|---|---|---|
| Attack power | **None** for Shamans in vanilla. Only Rogues, Hunters and Cat-form Druids got AP from Agility; 3.0.2 later gave Shamans 1 AP per Agi | 🟡 | [warcraft.wiki.gg][wwg-ap]; [Blizzard Watch][bw] |
| Melee crit | **20 Agility = 1% crit** | 🟡 | [Warcraft Tavern][wt-enh-classic]; [RankedBoost][rb]; [Blizzard Watch][bw] |
| Armor | 2 armor per Agility | 🟡 | [RankedBoost][rb]; [Blizzard Watch][bw] |
| Dodge | **20 Agility = 1% dodge**; base dodge about 1.75% (a 2006 player measurement). TBC-era pages say 25 Agi per 1% | 🔴 disputed | [warcraft.wiki.gg: Talk:Dodge][wwg-dodge] |

- 🔴 **Base melee crit** for a Shaman was not found in a reliable source.

### Intellect

- 🟡 **1 Intellect = 15 mana** ([Warcraft Tavern mana guide][wt-mana]).
- 🟡 **59.5 Intellect = 1% spell crit** at level 60 ([Warcraft Tavern mana guide][wt-mana]). Disputed alternatives (59.2, 57.16) are covered on [Spell Attack Table](Spell-Attack-Table.md#intellect-and-base-spell-crit).
- 🔴 Whether the first 20 points of Intellect give less mana is unverified.

### Spirit

- 🟡 Mana regen from Spirit: **`15 + Spirit/5` mana per 2-second tick**, only while you are **outside the five-second rule** (5SR) ([Warcraft Tavern mana guide][wt-mana]).
- 🔴 Disputed: [Blizzard Watch][bw] gives `Spirit/5 + 17`.
- 🟡 Health regen: `0.11 × Spirit + 7` per tick ([Warcraft Tavern mana guide][wt-mana]).
- Full details, including the 5SR: [Mana Regeneration](Mana-Regeneration.md#spirit-regeneration).

### Stamina

- 🟡 **1 Stamina = 10 health** ([RankedBoost][rb]; [Blizzard Watch][bw]).
- 🔴 Whether the first 20 points give only 1 health each is unverified.

### MP5

- 🟡 "Mana per 5 seconds" from gear is paid in **2-second ticks at all times**: in combat, while casting, and inside the 5SR ([Warcraft Tavern mana guide][wt-mana]). Shamans had **no** Classic talent for Spirit regen while casting, which is why MP5 was the healer stat. See [Mana Regeneration](Mana-Regeneration.md#mp5).

### Attack power

- 🟡 **14 AP = +1 weapon DPS** ([warcraft.wiki.gg: Attack power][wwg-ap]). Per swing that is `AP / 14 × WeaponSpeed`, so slow two-handers gain more per hit from the same AP.

### Spell power

- Spell damage and healing gear adds `SpellPower × coefficient` to each spell. Each spell has its own coefficient, set by cast time and duration. See [Spell Coefficients](Spell-Coefficients.md).
- In Classic, **+healing** gear only boosted heals and **+spell damage** gear only boosted damage spells.

### Hit and crit

- Classic kept **spell hit and melee hit separate**, and the same for crit. Spell hit comes only from gear and Nature's Guidance; spell crit from Intellect, gear and talents. See [Spell Attack Table](Spell-Attack-Table.md) and [Melee Attack Table](Melee-Attack-Table.md).

### Weapon skill

- Raises your effective skill vs the target's Defense: less glancing penalty, less miss vs bosses, and +0.04% crit per point vs equal or lower-level targets. See [Melee Attack Table](Melee-Attack-Table.md#weapon-skill).

---

## ♾️ In Forever

### Unified hit and crit

- 🔵 "Spell, melee, and ranged hit chance are combined, as are spell, melee, and ranged critical chance" ([Blizzard Deep Dive][blz-dd]).
- 🔴 Unknown: how **Intellect** and **Agility** feed the single crit number now. Does Intellect still give spell-only crit, or does the unified crit stat combine both? No source covers it.

### Mental Dexterity

- 🟢 **New Enhancement talent** (row 2, 3 ranks): **Attack Power +33/67/100% of your Intellect** ([wowforevertalents.com][wfts]; [wowforevertalent.com][wft]). At 3/3, every point of Intellect is also 1 AP. That is worth half a point of Strength (2 AP), on a stat that also gives mana.
- It is the prerequisite for Flurry. See [Mental Dexterity](../talents/Enhancement-Talents.md#mental-dexterity).

### Mental Quickness

- 🟢 **New Enhancement talent** (row 5, 2 ranks): **spell damage and healing + up to 15/30% of your Intellect** ([wfts][wfts]). DB2 spell 30812 has base 30 on both effects in 70170 ([wago SpellEffect][wago-effect]).
- 🟡 An early preview said **100%** of Intellect ([forum thread 2354160][f-2354160]). Client data says 30% at 2/2. See [Mental Quickness](../talents/Enhancement-Talents.md#mental-quickness).

### Ancestral Knowledge

- 🟢 ~~max mana +1/2/3/4/5%~~ → **Intellect +2/4/6/8/10%** (Enhancement row 1) ([wfts][wfts]). Because Intellect now converts into AP and spell power for Enhancement, this is a damage talent as well as a mana talent.
- 🟡 The [Icy Veins overview][iv-overview] describes it as "from 1% to 2% Intellect", but the Classic talent gave **max mana**, not Intellect.

### Toughness

- 🟢 ~~armor from items +2–10%~~ → **Stamina +2/4/6/8/10%** (Enhancement row 4) ([wfts][wfts]).
- Other health sources: 🟢 Improved Reincarnation now adds **+2/4% max health** ([wfts][wfts]); 🟢🟡 Tauren Endurance gives **+5% health** ([ForeverChanges racials][fc-racials]).

### Thundering Strikes

- 🟢 ~~weapon crit +1–5%~~ → **crit with all spells and attacks +1–5%** (Enhancement row 1) ([wfts][wfts]). It is the most-picked Shaman talent on [wowforevertalent.com][wftcalc] (90% of builds, 🟡 popularity data). See [Thundering Strikes](../talents/Enhancement-Talents.md#thundering-strikes).

### Haste

Haste is new in Forever. It speeds up attacks and/or casts.

| Source | Effect | Conf. | Source |
|---|---|---|---|
| **Windshaper Skyborne** Wind Blessed (passive) | **+1% melee, ranged and spell haste** | 🔵 | [Blizzard: Meet the Skyborne][blz-skyborne] |
| **Troll** Berserking (active) | ~~health-scaled~~ → **flat +10% cast and attack speed for 10 s** | 🟢🟡 | [ForeverChanges racials][fc-racials]; [Method.gg][method-racials] |
| **Rage of the Farseer** (Enhancement 31-point) | **+30% attack speed for 25 s**, 3 min cooldown. Lost its spell-haste part on Sept 24 | 🟢 / 🔵 | [wfts][wfts]; [Sept 24 notes][blz-notes] |
| *The Spiritcaller's Rage* (Enhancement raid set, 2-piece) | +1% attack and cast speed | 🟢 | [wow.gg datamined sets][wowgg-sets] |
| Flurry | +5–25% attack speed for 3 swings after a melee crit | 🟢 | [wfts][wfts] |
| Gear | **None found yet.** Warcraft Tavern says haste was not on any gear they had collected | 🟡 | [Warcraft Tavern stats][wt-stats] |

- 🟡 Haste affects Call of the Elements' 3 s cast ([forum thread 2369645][f-2369645]).

### Bonus healing and spell damage

- 🔵 "Bonus healing now also includes **one third** as much bonus damage" ([Blizzard Deep Dive][blz-dd]). A healing item with +30 healing also gives +10 spell damage.
- 🟡 [Method.gg][method-items] paraphrases this as healing gear "will now also have Spell Power on it". That is probably a loose wording of the same rule.
- For a Restoration Shaman this means some free Lightning Bolt and Flame Shock damage while leveling. For Elemental it means healing gear is no longer useless.

### Caster weapons and wands

- 🔵 **Caster weapons now carry spell damage and healing**, from around level 10 ([Blizzard Deep Dive][blz-dd]; 🟡 [Method.gg][method-items]).
- 🟡 **Caster staves have reduced weapon DPS** in game. Example: Staff of Westfall shows 20.50 DPS on Wowhead but **15.2 DPS** in game. Crescent Staff is no longer better than a 1H for Shaman leveling ([thread 2359184][f-2359184], [thread 2365746][f-2365746]). Do not trust Wowhead weapon DPS for Forever yet.
- 🔵 **Wands no longer scale with spell damage** (Sept 24), and **Wizard Oil** is back to **8/16/24** spell power ([dev notes][blz-notes]).
- 🟡 **Flametongue Weapon** damage scales with spell power (the tooltip did not update until a fix, but damage did) ([forever-bugs #80][bug-80]). See [Spell Coefficients](Spell-Coefficients.md#forever-coefficient-table).

### Weapon skill and dodge/parry reduction

- 🔵 Weapon skill "still works as it always has, but items with weapon skill offer less of it per item", and new stats reduce the target's dodge or parry ([Blizzard Deep Dive][blz-dd]). 🟡 Method.gg calls this "Expertise" ([Method.gg][method-items]). Details: [Melee Attack Table](Melee-Attack-Table.md#weapon-skill-and-the-new-dodgeparry-stat).

### Racial stat effects

| Race | Stat effect | Conf. |
|---|---|---|
| Orc | **Blood Fury: +10% attack power and spell power** for 15 s (now helps casters); Axe Specialization +1% crit with axes | 🟢🟡 |
| Tauren | Endurance: +5% health **+1% hit** | 🟢🟡 |
| Troll | Berserking: +10% cast and attack speed for 10 s | 🟢🟡 |
| Dwarf | Mace Specialization: +1% crit with maces | 🟢🟡 |
| Windshaper Skyborne | Wind Blessed: +1% haste | 🔵 |

Sources: [ForeverChanges racials][fc-racials], [Method.gg racials][method-racials], [Blizzard: Meet the Skyborne][blz-skyborne]. Full list: [Races and Racials](../forever/Races-and-Racials.md).

### Totem stat buffs

- 🟢 **Strength of Earth**: ~~10/20/36/61/77~~ → **7/14/25/42/53** Strength (about −30%) ([WCLBox][wcl-soe]).
- 🟢 **Grace of Air**: ~~43/67/77~~ → **49/77/89** Agility (buffed) ([WCLBox][wcl-goa]).
- 🟢 *Enhancing Totems* (+8% per rank to both) was **removed** ([wfts][wfts]).
- See [Totems](../reference/Totems.md) for ranks.

### Camp buffs

- 🔵 Camp profession objects give one-hour buffs, e.g. Blacksmith Sharpening Wheel (attack power) and Tailor Faction Banner (Spirit) ([Blizzard Deep Dive][blz-dd]). 🟡 Herbalism Incense Candle gives Intellect, and **camp buffs do not stack with class buffs** ([Conquest Capped][cc-prof]).

### Agility and attack power in Forever

- 🔴 **Unknown.** No source says whether Shamans get attack power from Agility in Forever. The Hunter testing repo has the same open question for Hunters ([forever-hunter issues][hunter-issues]).

---

## 🧪 Worked Example

**Derived arithmetic, not a test.** It assumes Ancestral Knowledge multiplies your total Intellect, and that Mental Dexterity and Mental Quickness read the multiplied value.

An Enhancement Shaman with **150 Intellect** before talents, **5/5 Ancestral Knowledge**, **3/3 Mental Dexterity** and **2/2 Mental Quickness**:

| Step | Value |
|---|---|
| Intellect after Ancestral Knowledge (×1.10) | 150 × 1.10 = **165** |
| Extra mana from the 15 bonus Intellect | 15 × 15 = **225 mana** |
| AP from Mental Dexterity (100% of Int) | **+165 AP** (≈ +11.8 weapon DPS at 14 AP per DPS) |
| Spell power from Mental Quickness (30% of Int) | **+49.5** spell damage and healing |

For comparison, 165 AP would take **82.5 Strength** at 2 AP per point.

---

## 📋 Quick Reference

| Stat | Classic Era (level 60) | Forever (70170) | Conf. (Forever) |
|---|---|---|---|
| Strength | 2 AP | no reported change | 🔴 |
| Agility | 20 = 1% crit, 2 armor, dodge (20 or 25 per 1%); **no AP** | AP from Agi unknown; Grace of Air buffed | 🔴 / 🟢 |
| Intellect | 15 mana, 59.5 = 1% spell crit | + **Mental Dexterity** (up to 100% → AP), + **Mental Quickness** (up to 30% → SP), **Ancestral Knowledge +10% Int** | 🟢 |
| Spirit | `15 + Spi/5` per 2 s outside 5SR (or 17) | "cut across the board" claim unverified | 🔴 |
| Stamina | 10 HP | **Toughness +10% Stam**; Imp. Reincarnation +4% HP | 🟢 |
| MP5 | 2 s ticks, always | no reported change | 🔴 |
| AP → DPS | 14 AP = 1 DPS | no reported change | 🔴 |
| Spell power | damage gear and healing gear separate | **healing gives 1/3 as much damage**; caster weapons have SP; wands don't scale | 🔵 |
| Hit / crit | separate spell and melee | **unified** | 🔵 |
| Crit talents | Thundering Strikes weapon only | **Thundering Strikes all crit** | 🟢 |
| Haste | none | Skyborne +1%, Berserking +10%, Rage of the Farseer +30% attack speed; **not on gear yet** | 🔵🟢🟡 |
| Weapon skill | full amounts on items | **less per item** + dodge/parry reduction stat | 🔵 |

---

## 🔍 To Verify

- [ ] **Does Ancestral Knowledge's +10% Intellect feed Mental Dexterity and Mental Quickness?** Compare AP and SP on the character sheet with and without Ancestral Knowledge ([wfts][wfts]).
- [ ] **Mental Quickness "up to" wording.** Is it always 30% at 2/2, or does "up to" hide a cap? ([wfts][wfts], [wago SpellEffect 30812][wago-effect])
- [ ] **Agility → AP for Shamans** in Forever ([forever-hunter issues][hunter-issues] has the same open question for Hunters).
- [ ] **Intellect per 1% crit, Agility per 1% crit, and how both feed unified crit** in Forever. No source.
- [ ] **AP formula constant** (`Level×2 + Str×2 − 20`) and the "first 20 Stamina/Intellect" rule: no primary source even for Classic.
- [ ] **Agility per dodge** (20 vs 25) and base dodge (about 1.75%): disputed for Classic ([warcraft.wiki.gg][wwg-dodge]).
- [ ] **Base melee crit** for a Shaman: not found.
- [ ] **Haste on gear**: none seen yet ([Warcraft Tavern stats][wt-stats]). Watch new dungeon loot at the level-30 cap.
- [ ] **Blood Fury +10% spell power**: does it multiply Mental Quickness SP and healing-derived SP? ([ForeverChanges][fc-racials])

---

## 📚 Sources

- [warcraft.wiki.gg: Attack power][wwg-ap]: 2 AP per Strength, no Agility AP, 14 AP per DPS
- [warcraft.wiki.gg: Talk:Dodge][wwg-dodge]: Agility per dodge, base dodge
- [Warcraft Tavern Classic Enhancement guide][wt-enh-classic], [RankedBoost][rb], [Blizzard Watch][bw]: Classic conversions
- [Warcraft Tavern Classic mana guide][wt-mana]: Intellect, Spirit, MP5, 5SR
- [Blizzard: Forever Deep Dive panel recap][blz-dd]: unified hit/crit, healing → damage, caster weapons, weapon skill, camps
- [Blizzard: Beta Development Notes][blz-notes]: Rage of the Farseer haste removal, wands, Wizard Oil
- [Blizzard: Meet the Skyborne][blz-skyborne]: Wind Blessed haste
- [wowforevertalents.com][wfts], [wowforevertalent.com reference][wft] and [calculator][wftcalc]: Forever talent values, popularity
- [wago.tools SpellEffect, build 70170][wago-effect]: Mental Quickness base 30
- [ForeverChanges racials][fc-racials], [Method.gg racials][method-racials]: racials
- [Method.gg: itemization updates][method-items]: healing/SP paraphrase, "Expertise"
- [Warcraft Tavern Forever stats guide][wt-stats]: haste not on gear
- [wow.gg datamined set bonuses][wowgg-sets]: Spiritcaller's Rage haste
- [WCLBox: Strength of Earth][wcl-soe], [Grace of Air][wcl-goa]: totem stat values
- [Conquest Capped: professions][cc-prof]: camp buff stacking
- [Icy Veins Shaman overview][iv-overview]: Ancestral Knowledge wording
- [forever-bugs #80][bug-80]: Flametongue Weapon spell power scaling
- Blizzard forum threads [2354160][f-2354160] (Mental Quickness preview), [2369645][f-2369645] (haste and Call of the Elements), [2359184][f-2359184] and [2365746][f-2365746] (staff DPS)
- [forever-hunter issues][hunter-issues]: open Agility/AP question

[wwg-ap]: https://warcraft.wiki.gg/wiki/Attack_power
[wwg-dodge]: https://warcraft.wiki.gg/wiki/Talk:Dodge
[wt-enh-classic]: https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/
[rb]: https://rankedboost.com/world-of-warcraft/classic-stats/
[bw]: https://blizzardwatch.com/2019/06/17/wow-classic-primary-secondary-stats-attributes/
[wt-mana]: https://www.warcrafttavern.com/wow-classic/guides/mana-management-optimization/
[blz-dd]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/2360696
[blz-skyborne]: https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne
[wfts]: https://wowforevertalents.com/shaman/
[wft]: https://wowforevertalent.com/shaman/reference/
[wftcalc]: https://wowforevertalent.com/shaman/
[wago-effect]: https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170
[fc-racials]: https://foreverchanges.pro/racials
[method-racials]: https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever
[method-items]: https://www.method.gg/wow-forever/itemization-updates-in-world-of-warcraft-forever-expertise-spell-damage-more
[wt-stats]: https://www.warcrafttavern.com/forever/guides/stats/
[wowgg-sets]: https://wow.gg/guides/wow-forever-tier-set-bonuses
[wcl-soe]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-strength-of-earth-totem
[wcl-goa]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-grace-of-air-totem
[cc-prof]: https://conquestcapped.com/guides/wow-forever/wow-forever-professions/
[iv-overview]: https://www.icy-veins.com/wow-forever/shaman-class-overview
[bug-80]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/80
[f-2354160]: https://us.forums.blizzard.com/en/wow/t/2354160
[f-2369645]: https://us.forums.blizzard.com/en/wow/t/2369645
[f-2359184]: https://us.forums.blizzard.com/en/wow/t/2359184
[f-2365746]: https://us.forums.blizzard.com/en/wow/t/2365746
[hunter-issues]: https://github.com/classic-hunter/forever-hunter/issues
