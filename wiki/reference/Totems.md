---
title: Totems
description: Canonical per-totem reference for WoW Forever Shamans, with element, ranks, duration, range and values compared to Classic Era.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🗿 Totems

This page lists every Shaman totem by element: learn levels, duration, range, and values compared between Classic Era and WoW Forever. The totem rules themselves (stacking, the Totem Bar, Recall, Projection, twisting) are explained on [Totem Mechanics](../mechanics/Totem-Mechanics.md). The spells that place and move totems are on [Spells and Ranks](Spells-and-Ranks.md#call-of-the-elements).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)
>
> **Note: the beta is capped at level 30.** Every totem rank above level 30 is **client data only**. That includes the whole Windfury Totem (learned at 32), Grace of Air (42) and Mana Tide R2/R3.

## 📑 Contents
- [Totem Basics](#-totem-basics)
- [Totems by Element](#-totems-by-element)
- [Totem Details](#-totem-details)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🧭 Totem Basics

### Classic Baseline

These are Classic Era rules, from Wowhead Classic tooltips and [wago.tools Classic Era DB2][wago-era]:
- You can have **one totem per element** (Earth, Fire, Water, Air) at a time. A new totem of the same element replaces the old one.
- Nearly every totem has **5 HP**. Stoneclaw R6 has 480.
- Buff totems reach **party members within 20 yd**. The Classic Restoration talent Totemic Mastery raised this to 30 yd.
- Most buff and utility totems last **2 min**. Healing Stream and Mana Spring last **1 min**.
- Totems do not generate threat for the Shaman. Healing Stream, Mana Spring and Mana Tide generate no threat ([Warcraft Tavern threat table][wt-threat]).
- Fire totems can crit and scale with spell damage ([Warcraft Tavern tank guide][wt-tank]).
- People often mix this up: the **Fire Resistance Totem is a Water totem** and the **Frost Resistance Totem is a Fire totem** ([WH 10538][wh-frt], [WH 10479][wh-frost]).

### In Forever

- 🟢 Most buff and utility totems go **~~20 yd~~ → 30 yd** and **~~2 min (1 min for Healing Stream and Mana Spring)~~ → 5 min** ([ForeverChanges][fc], [GameSpot via Yahoo][gamespot]). Totemic Mastery was removed as a talent; the 30 yd is now on the totem tooltips ([wfts][wfts]).
- 🟡 Resistance totems now affect "**party and raid members**" ([ForeverTome][ftome]).
- 🔵🟢 New **Totem Bar** with three "Call" spells that drop up to 4 preset totems in one 3 s cast, plus **Totemic Recall** and **Totemic Projection** ([guided.news][guided], [Spells and Ranks](Spells-and-Ranks.md#call-of-the-elements)).
- 🟢 **Fire Nova Totem is now the spell Fire Nova** ([Spells and Ranks](Spells-and-Ranks.md#fire-nova)).
- 🔵 **Stacking rules (Sept 24):** Tranquil Air, Windfury and Grace of Air Totems "no longer stack together even if used by different Shamans in the same group". Flametongue Totem no longer stacks with itself, with Flametongue Weapon, or with Windfury Totem ([dev notes][blz-notes], [mobalytics][moba]).
- 🟢 Flametongue Weapon or Windfury Weapon on **your** main hand disables **your own** benefit from Flametongue Totem or Windfury Totem ([WCLBox][wcl-ftw], [WCLBox][wcl-wfw]).
- 🟢 Totem **relics** (relic-slot items) modify individual totems: see [Items and Set Bonuses](Items-and-Set-Bonuses.md#totem-relics). The Spiritcaller sets add +10 yd to totem radius ([Items](Items-and-Set-Bonuses.md#the-spiritcaller)).

### Classic Pulse Intervals

A **pulse** is how often a totem re-applies its effect. These are **Classic Era** values; no source has measured them in Forever yet.

| Totem | Pulse | Source |
|---|---|---|
| Windfury Totem | every **5 s** (weapon enchant lasts about 10 s, **disputed**: 9 s per warcraft.wiki.gg) | DB2 `EffectAuraPeriod 5000` ([wago Classic Era][wago-era]); [Icy Veins Classic][iv-classic-enh] |
| Mana Spring Totem | every **2 s** | DB2 10494 |
| Healing Stream Totem | every **2 s** | DB2 10461 |
| Magma Totem | every **2 s** | DB2 10582 |
| Mana Tide Totem | every **3 s** (4 or 5 ticks: **unverified**) | DB2 17360 |
| Tremor Totem | every **4 s** (DB2) vs **5 s** (Icy Veins) — **disputed** | DB2 8145; [Icy Veins Classic][iv-classic-enh] |
| Grounding Totem | re-arms every **10 s** | DB2 8179 |
| Searing Totem | attacks with a **2.2 s** cast | DB2 SpellCastTimes 24 |
| Fire Nova Totem (Classic) | detonated after **4 s** | [WH 11315][wh-fnt] |

## 📊 Totems by Element

Values are client data 🟢 from [WCLBox][wcl] and [ForeverChanges][fc] unless noted. "✔" means unchanged from Classic. Classic values without a source are Wowhead Classic / Classic Era DB2.

### Earth Totems

| Totem | Element | Ranks (levels) | Duration | Range | Classic → Forever values | Notes | Conf. / Source |
|---|---|---|---|---|---|---|---|
| [Stoneskin](#stoneskin-totem) | Earth | 6 (4/14/24/34/44/54) | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | Damage reduction 4/7/11/16/22/30 ✔; "melee" → "**Physical**" damage | Earth quest reward | 🟢 [WCLBox][wcl-ss] |
| [Earthbind](#earthbind-totem) | Earth | 1 (6) | 45 s ✔ | 10 yd ✔ | Slow ✔ | Earthbound talent adds a 5 s root | 🟢 [ForeverChanges][fc] |
| [Stoneclaw](#stoneclaw-totem) | Earth | 6 (8–58) | — | — | ✔ | Classic R6: 480 HP | 🟢 [ForeverChanges][fc] |
| [Strength of Earth](#strength-of-earth-totem) | Earth | 5 (10/24/38/52/60) | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | Strength ~~10/20/36/61/77~~ → **7/14/25/42/53** | About −30% | 🟢 [WCLBox][wcl-soe] |
| [Tremor](#tremor-totem) | Earth | 1 (18), 60 mana | ~~2 min~~ → **5 min** | 30 yd | Removes Fear, Charm, Sleep ✔ | | 🟢 [WCLBox][wcl-tremor] |

### Fire Totems

| Totem | Element | Ranks (levels) | Duration | Range | Classic → Forever values | Notes | Conf. / Source |
|---|---|---|---|---|---|---|---|
| [Searing](#searing-totem) | Fire | 6 (10–60) | 30–55 s ✔ | 20 yd ✔ | R6 40–54 ✔ | Fire quest reward | 🟢 [WCLBox][wcl-sear] |
| Fire Nova | Fire → **now a spell** | 5 (12/22/32/42/52) | — | **30 yd** to your Fire totem | See [Spells and Ranks](Spells-and-Ranks.md#fire-nova) | Needs an active Fire totem | 🟢 [WCLBox][wcl-fn] |
| [Magma](#magma-totem) | Fire | 4 (26–56) | 20 s | 8 yd | R4 ~~75~~ → **73** per 2 s | | 🟢 [ForeverChanges][fc] |
| Frost Resistance | Fire | 3 (24–54) | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | +60 Frost resistance at R3 | Party and raid 🟡 | 🟢 [ForeverChanges][fc] |
| [Flametongue](#flametongue-totem) | Fire | 4 (28/38/48/58), 90–275 mana | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | R1 ~~6.4–19.6~~ → **6.12–22**; R4 ~~15.8–48.7~~ → **17–55** | Does not stack (🔵 Sept 24) | 🟢 [WCLBox][wcl-ftt] |

### Water Totems

| Totem | Element | Ranks (levels) | Duration | Range | Classic → Forever values | Notes | Conf. / Source |
|---|---|---|---|---|---|---|---|
| [Healing Stream](#healing-stream-totem) | Water | 5 (20/30/40/50/60), 40–80 mana | ~~1 min~~ → **5 min** | ~~20~~ → **30 yd** | Heal per 2 s ~~6/8/10/12/14~~ → **5/6/7/9/11** | Water quest reward | 🟢 [WCLBox][wcl-hst] |
| Poison Cleansing | Water | 1 (22) | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | ✔ | | 🟢 [ForeverChanges][fc] |
| [Mana Spring](#mana-spring-totem) | Water | 4 (26/36/46/56), 40–100 mana | ~~1 min~~ → **5 min** | ~~20~~ → **30 yd** | 4/6/8/10 mana per 2 s ✔ | | 🟢 [WCLBox][wcl-ms] |
| Fire Resistance | Water | 3 (28–58) | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | +60 Fire resistance at R3 | Party and raid 🟡 | 🟢 [ForeverChanges][fc] |
| Disease Cleansing | Water | 1 (38) | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | ✔ | 5 min was bugged (lasted 2 min) until the Oct 1 fix 🔵 | 🟢 [ForeverChanges][fc]; 🔵 [dev notes][blz-notes-oct] |
| [Mana Tide](#mana-tide-totem) | Water (talent) | 3 (~~40~~ → **25** / 48 / 58) | 12 s | ~~20~~ → **30 yd** | Mana per 3 s ~~170~~ → **88** / ~~230~~ → **197** / 290 ✔ | 5 min cooldown | 🟢 [WCLBox][wcl-mtt] |

### Air Totems

| Totem | Element | Ranks (levels) | Duration | Range | Classic → Forever values | Notes | Conf. / Source |
|---|---|---|---|---|---|---|---|
| [Grounding](#grounding-totem) | Air | 1 (30) | 45 s ✔ | — | Absorbs 1 spell per 10 s ✔ | | 🟢 [ForeverChanges][fc] |
| Nature Resistance | Air | 3 (30–60) | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | +60 Nature resistance at R3 | Party and raid 🟡 | 🟢 [ForeverChanges][fc] |
| [Windfury](#windfury-totem) | Air | 3 (32/42/52) | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | AP ~~122/229/315~~ → **95/179/246** | Does not stack with Grace of Air or Tranquil Air (🔵) | 🟢 [WCLBox][wcl-wft] |
| Sentry | Air | 1 (34) | ✔ | ✔ | ✔ | | 🟢 [ForeverChanges][fc] |
| Windwall | Air | 3 (36–56) | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | R3 −64 ranged damage | Guardian Totems +10/20% | 🟢 [ForeverChanges][fc] |
| [Grace of Air](#grace-of-air-totem) | Air | 3 (42/56/60), 155/250/310 mana | ~~2 min~~ → **5 min** | ~~20~~ → **30 yd** | Agility **buffed** ~~43/67/77~~ → **49/77/89** | Does not stack with Windfury or Tranquil Air (🔵) | 🟢 [WCLBox][wcl-goa] |
| [Tranquil Air](#tranquil-air-totem) | Air | (50) | — | — | **Listed as "not in Forever"** | Blizzard notes still mention it | 🔴 conflict |

## 🔎 Totem Details

### Stoneskin Totem

- 🟢 Reduction values unchanged (4/7/11/16/22/30), but the text now says "Physical" damage instead of "melee" damage ([WCLBox][wcl-ss]).
- 🟡 A player calculates 30 reduction × 1.2 with Guardian Totems = 36 at max rank. Wowhead reportedly datamined a **leftover Season of Discovery 4% damage-reduction effect** on Stoneskin and Windwall 🔴 ([forum thread 2367626][f-2367626]).
- 🟢 Guardian Totems (Enhancement): Stoneskin and Windwall +10/20% ([wfts][wfts]).

### Earthbind Totem

- 🟢 Level 6, 45 s, 10 yd slow, unchanged ([ForeverChanges][fc]).
- 🟢 **Earthbound** (Elemental talent): Earthbind also **immobilizes** nearby targets for 5 s when cast. **Earth's Grasp** (now Enhancement): radius +10/20% and Stoneclaw health +25/50% ([wfts][wfts], [wft][wft]).
- 🟢 The Spiritcaller's Storm 3-piece lowers the Earthbind cooldown by 2 s ([Items](Items-and-Set-Bonuses.md#the-spiritcaller)).

### Stoneclaw Totem

- 🟢 6 ranks (8–58), listed as unchanged ([ForeverChanges][fc]). Classic R6 has 480 HP, unlike the usual 5 HP ([WH 10428][wh-stoneclaw]).
- 🟢 Earth's Grasp (now Enhancement): Stoneclaw health +25/50% ([wft][wft]).
- 🟡 Classic: about 170 threat per pulse (taunt effect), unverified ([Warcraft Tavern tank guide][wt-tank]).
- 🟡 In Forever a player describes this "taunt" totem as building "passive threat to the totem", only taking aggro if it out-threats you: not a true taunt ([forum thread 2366147][f-2366147]).

### Strength of Earth Totem

- 🟢 5 ranks (10/24/38/52/60), Strength ~~10/20/36/61/77~~ → **7/14/25/42/53**, about −30%. 30 yd, 5 min ([WCLBox][wcl-soe]). Classic R5 is spell [25361][wh-soe5].
- 🟢 **Enhancing Totems** (Classic: Strength of Earth and Grace of Air +8% per rank) was **removed**; no successor is named ([wfts][wfts]).

### Tremor Totem

- 🟢 Level 18, 60 mana, 30 yd, ~~2 min~~ → **5 min** ([WCLBox][wcl-tremor]). Classic: removes Fear, Charm and Sleep from party members within 30 yd ([WH 8143][wh-tremor]).
- 🟢 Classic pulse: **4 s** in DB2 (spell 8145), but Icy Veins says 5 s. No Forever measurement yet.

### Searing Totem

- 🟢 Unchanged: 6 ranks (10–60), 30–55 s, 20 yd, R6 40–54 damage ([WCLBox][wcl-sear]). Classic attack: 2.2 s cast, coefficient 0.083 per bolt ([WH 10436][wh-sear]).
- 🟢 Call of Flame boosts Fire totems; Elemental Fury raises the crit bonus of Searing and Magma Totems ([wfts][wfts]).
- 🟡 Searing Totem crits do **not** trigger Elemental Devastation ([forum thread 2366738][f-2366738]).

### Magma Totem

- 🟢 4 ranks (26–56), 20 s, 8 yd, R4 ~~75~~ → **73** damage per 2 s pulse ([ForeverChanges][fc]). Classic coefficient 0.033 per pulse ([WH 10581][wh-magma]).
- 🟢 Classic Improved Fire Totems (Magma threat −25/50%) was reworked into **Improved Fire Nova** ([wfts][wfts]).

### Flametongue Totem

- 🟢 4 ranks (28/38/48/58), 90–275 mana, 30 yd, 5 min. Damage per hit is based on weapon speed: R1 ~~6.4–19.6~~ → **6.12–22**, R4 ~~15.8–48.7~~ → **17–55** ([WCLBox][wcl-ftt]). Classic R4 is spell [16387][wh-ftt4], roughly `(1217 / 100) × weapon speed`.
- 🔵 Sept 24: Flametongue Totem "no longer has a duration and is instantly replaced when placing another totem". It can no longer be stacked by recasting, and no longer stacks with Flametongue Weapon or Windfury Totem. The buff now reads "Flametongue Totem" instead of "…Effect" ([dev notes][blz-notes]).
- 🔴 "No longer has a duration" conflicts with the 5 min in client data. It probably refers to the **buff on players** (which lasts until replaced), not the totem itself.
- 🟢 Flametongue Weapon on your main hand disables your own benefit from this totem ([WCLBox][wcl-ftw]).
- 🟢 **Improved Weapon Totems** (Classic: +6% Flametongue Totem per rank) was **removed** ([wfts][wfts]).

### Healing Stream Totem

- 🟢 5 ranks (20/30/40/50/60), 40–80 mana, ~~1 min~~ → **5 min**, ~~20~~ → **30 yd**. Heal per 2 s: ~~6/8/10/12/14~~ → **5/6/7/9/11** ([WCLBox][wcl-hst]).
- 🟢 **Restorative Totems** now boosts Healing Stream by **+10/20/30/40/50%** (Classic: +5–25%) ([wfts][wfts]).
- 🟢 Classic R5 heal (spell 10461) has a coefficient of 0.022 per tick ([WH 10463][wh-hst]).
- Reward of the Water totem quest for Dwarves ([Class Quests](Class-Quests.md#dwarf-totem-quest-chain)).

### Mana Spring Totem

- 🟢 4 ranks (26/36/46/56), 40–100 mana, ~~1 min~~ → **5 min**, ~~20~~ → **30 yd**. **4/6/8/10 mana per 2 s, unchanged** ([WCLBox][wcl-ms]). R4 = 25 MP5 (mana per 5 seconds) to the party ([WH 10497][wh-ms4]).
- 🟢 Restorative Totems: Mana Spring +5/10/15/20/25% (same as Classic) ([wfts][wfts]).

### Mana Tide Totem

🟢 Granted by a Restoration talent that moved from row 7 to **row 4** (16 points), so R1 is learned at **25** instead of 40 ([WCLBox][wcl-mtt], [wfts][wfts]). 5 HP totem, 12 s, 5 min cooldown, restores mana to group members within 30 yd.

| Rank | Level | Mana cost | Mana per 3 s | Range |
|---|---|---|---|---|
| 1 | ~~40~~ → **25** | ~~20~~ → **10** | ~~170~~ → **88** | ~~20~~ → **30 yd** |
| 2 | 48 | ~~40~~ → **30** | ~~230~~ → **197** | ~~20~~ → **30 yd** |
| 3 | 58 | 60 | 290 | ~~20~~ → **30 yd** |

- 🟢 Classic R3 is spell [17359][wh-mtt3]: 290 mana every 3 s for 12 s. Whether that is 4 or 5 ticks is unverified.
- Mechanics: [Mana Regeneration](../mechanics/Mana-Regeneration.md).

### Grounding Totem

- 🟢 Level 30, 45 s, unchanged ([ForeverChanges][fc]). Classic: redirects **one** harmful single-target spell aimed at a nearby party member, re-arms every 10 s, ignores AoE, 15 s cooldown ([WH 8177][wh-ground]).
- 🟢 Guardian Totems: cooldown −1/2 s ([wfts][wfts]). Relic: Totem of Ancestral Protection, cooldown −1 s ([Items](Items-and-Set-Bonuses.md#totem-relics)).

### Windfury Totem

🟢 3 ranks, learned at **32 / 42 / 52**, so it **cannot be tested in the level-30 beta** 🟡 ([forum thread 2353663][f-2353663]).

| Rank | Level | Classic mana | Classic AP | Forever AP | Spell ID |
|---|---|---|---|---|---|
| 1 | 32 | 115 | 122 | **95** | 8512 |
| 2 | 42 | 175 | 229 | **179** | 10613 |
| 3 | 52 | 250 | 315 | **246** | 10614 |

Forever values from [WCLBox][wcl-wft]; Classic from Wowhead Classic ([WH 10614][wh-wft3]). Forever mana cost: —.

**Classic baseline** ([WH 10614][wh-wft3], [magey][magey-wf]):
- Enchants the **main-hand weapon only** of party members within 20 yd. Each hit has a **20% chance** to grant **1 extra attack** with the bonus AP.
- The totem pulses every 5 s; the enchant lasts about 10 s (9 s per warcraft.wiki.gg, disputed).
- The proc applies an AP aura lasting 1.5 s with 2 charges; the swing that triggered the proc does not get the AP.
- **1.5 s internal cooldown** in Classic Era (DB2 and Zirene's 2023 test, per magey). Warcraft.wiki.gg says original 1.12 had none.
- Classic **totem twisting**: drop Windfury, then Grace of Air, and re-drop Windfury every ~10 s to keep both effects ([warcraft.wiki.gg][wwg-twist]).

**In Forever:**
- 🟢 ~~20 yd~~ → **30 yd**, ~~2 min~~ → **5 min**, AP about −22%. Still a 20% chance of 1 extra main-hand attack ([WCLBox][wcl-wft]).
- 🔵 Does **not stack** with Grace of Air or Tranquil Air Totem, even from different Shamans. The buff now displays as "Windfury Totem" instead of "Windfury Totem Passive" ([dev notes][blz-notes]). This ends classic WF + Grace of Air twisting.
- 🟢 Windfury Weapon on your main hand disables your own benefit from Windfury Totem ([WCLBox][wcl-wfw]).
- 🟢 Improved Weapon Totems (+15/30% AP in Classic) was **removed**. 🟡 Elemental Weapons does **not** affect Windfury Totem ([classicwow.gg][cwgg]).
- 🟢 In 70170 the tooltips point their radius at the next rank-aura spell (e.g. `$8514a1` → `$8515a1`), which suggests the buff spells were rewired ([wago Spell][wago-spell]).
- No source reports a change to the 20% chance or the ICD.
- 🟡 One player reported Windfury and rogue poisons stacking in the level-38 BlizzCon demo ([forum thread 2361624][f-2361624]).
- 🔴 A guide claims "early testers report that removing Windfury removes its benefit instead of the familiar twisting window". It cannot come from the beta (level 32 totem), and the page returns 403 ([leprestore][lepre]).

### Grace of Air Totem

- 🟢 3 ranks (42/56/60), 155/250/310 mana, 30 yd, 5 min. Agility is **buffed**: ~~43/67/77~~ → **49/77/89** ([WCLBox][wcl-goa]). Classic R3 is spell [25359][wh-goa3].
- 🔵 Does not stack with Windfury or Tranquil Air Totem ([dev notes][blz-notes]).
- 🟢 Enhancing Totems (Classic +8% per rank) was removed ([wfts][wfts]).

### Tranquil Air Totem

🔴 **Conflict.** In Classic it reduced threat by 20% for party members within 20 yd and was learned at level 50 ([Warcraft Tavern tank guide][wt-tank]).
- 🟢 The client diff lists it as **"not in Forever"** (the 1 removed spell in the diff) ([ForeverChanges][fc], [WCLBox][wcl]), and the [Wowhead Forever page returns 404][wh-tat].
- 🔵 Yet Blizzard's Sept 24 notes give it stacking rules ("Tranquil Air Totem, Windfury Totem, and Grace of Air Totem no longer stack together") ([dev notes][blz-notes]).
- Possible explanations: removed from the trainer but not the code, not exported yet, or moved to a talent or relic. Nothing confirms any of them.

## 📋 Quick Reference

| Totem | Element | Ranks | First level | Forever duration / range | Key change |
|---|---|---|---|---|---|
| Stoneskin | Earth | 6 | 4 | 5 min / 30 yd | Text: "Physical" damage |
| Earthbind | Earth | 1 | 6 | 45 s / 10 yd | Earthbound talent adds root |
| Stoneclaw | Earth | 6 | 8 | ✔ | — |
| Strength of Earth | Earth | 5 | 10 | 5 min / 30 yd | Strength −30% |
| Tremor | Earth | 1 | 18 | 5 min / 30 yd | Duration only |
| Searing | Fire | 6 | 10 | 30–55 s / 20 yd | — |
| Fire Nova | Fire | 5 | 12 | instant spell | Totem → spell, CD 10 s |
| Frost Resistance | Fire | 3 | 24 | 5 min / 30 yd | Party and raid 🟡 |
| Magma | Fire | 4 | 26 | 20 s / 8 yd | R4 75 → 73 |
| Flametongue | Fire | 4 | 28 | 5 min / 30 yd | Non-stacking 🔵 |
| Healing Stream | Water | 5 | 20 | 5 min / 30 yd | Heal lower; talent doubled |
| Poison Cleansing | Water | 1 | 22 | 5 min / 30 yd | — |
| Mana Spring | Water | 4 | 26 | 5 min / 30 yd | Values ✔ |
| Mana Tide | Water | 3 | **25** | 12 s / 30 yd | R1/R2 mana lower |
| Fire Resistance | Water | 3 | 28 | 5 min / 30 yd | Party and raid 🟡 |
| Disease Cleansing | Water | 1 | 38 | 5 min / 30 yd | Duration bug fixed Oct 1 |
| Grounding | Air | 1 | 30 | 45 s | — |
| Nature Resistance | Air | 3 | 30 | 5 min / 30 yd | Party and raid 🟡 |
| Windfury | Air | 3 | 32 | 5 min / 30 yd | AP −22%; non-stacking 🔵 |
| Sentry | Air | 1 | 34 | ✔ | — |
| Windwall | Air | 3 | 36 | 5 min / 30 yd | — |
| Grace of Air | Air | 3 | 42 | 5 min / 30 yd | Agility +15%; non-stacking 🔵 |
| Tranquil Air | Air | — | (50) | — | 🔴 removed? |

## 🔍 To Verify

- [ ] **Tranquil Air Totem**: in the game or not? Client diff and Wowhead say no, Blizzard's notes say yes — check at the trainer when the cap reaches 50 ([ForeverChanges][fc], [dev notes][blz-notes]).
- [ ] **Pulse intervals in Forever** (Windfury, Mana Spring, Healing Stream, Tremor) — only Classic values are known; Tremor 4 s vs 5 s is disputed even in Classic ([wago Classic Era][wago-era]).
- [ ] **Windfury Totem** enchant duration, ICD and AP in Forever — untestable until level 32 ([forum thread 2353663][f-2353663]).
- [ ] Is the Forever Windfury Totem effect still a **weapon enchant** (overwriting poisons and stones) or a buff? The rename from "…Passive" hints at a change ([dev notes][blz-notes], [forum thread 2361624][f-2361624]).
- [ ] **Totem buff reach**: party only, or raid too? Only resistance totems are reported as "party and raid" ([ForeverTome][ftome]).
- [ ] **Can totem pulses crit** (Healing Stream heals, Magma pulses)? DoT/HoT crits are confirmed in general, but totems are not mentioned ([dev notes][blz-notes]).
- [ ] **Stoneclaw, Sentry and Grounding** durations and ranges in Forever — listed only as "unchanged" ([ForeverChanges][fc]).
- [ ] **Windfury Totem mana costs** in Forever — not in any source ([WCLBox][wcl-wft]).
- [ ] **Mana Tide tick count** (4 or 5 ticks over 12 s) ([WH 17359][wh-mtt3]).
- [ ] **Stoneskin / Windwall leftover 4% damage reduction** from Season of Discovery — reported via Wowhead, unconfirmed ([forum thread 2367626][f-2367626]).

## 📚 Sources

- [WCLBox WoW Forever DB][wcl] — 🟢 per-totem rank values vs Classic (build 70009)
- [ForeverChanges spellbook][fc] — 🟢 diff of 70170 vs Classic Era; totems marked unchanged; Tranquil Air "not in Forever"
- [wago.tools Classic Era DB2][wago-era] and [build 70170 Spell table][wago-spell] — 🟢 Classic pulse intervals; Windfury tooltip rewiring
- [Wowhead Classic][wh-wft3] tooltips — Classic values and spell IDs
- [Blizzard Beta Development Notes][blz-notes] ([Oct 1 mirror][blz-notes-oct]) — 🔵 stacking rules, Flametongue Totem, Disease Cleansing fix
- [mobalytics Sept 24 notes][moba], [guided.news][guided] — 🔵 relays of official text
- [wowforevertalents.com][wfts], [wowforevertalent.com][wft] — 🟢 talents that modify totems
- [ForeverTome][ftome], [GameSpot via Yahoo][gamespot], [classicwow.gg][cwgg] — 🟡 guides
- [magey Windfury Totem][magey-wf], [warcraft.wiki.gg Totem Twisting][wwg-twist], [Icy Veins Classic Enhancement][iv-classic-enh], [Warcraft Tavern threat][wt-threat] and [tank guide][wt-tank] — Classic baseline
- Blizzard forum threads [2353663][f-2353663], [2361624][f-2361624], [2366147][f-2366147], [2366738][f-2366738], [2367626][f-2367626] — 🟡 player reports
- [leprestore][lepre] — 🔴 unverifiable claim, listed for completeness

[wcl]: https://wowforever.wclbox.com/en/fashu/shaman
[wcl-ss]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-stoneskin-totem
[wcl-soe]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-strength-of-earth-totem
[wcl-tremor]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-tremor-totem
[wcl-sear]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-searing-totem
[wcl-fn]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-fire-nova
[wcl-ftt]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-totem
[wcl-hst]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-healing-stream-totem
[wcl-ms]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-spring-totem
[wcl-mtt]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-tide-totem
[wcl-wft]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-totem
[wcl-goa]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-grace-of-air-totem
[wcl-ftw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-weapon
[wcl-wfw]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-weapon
[fc]: https://foreverchanges.pro/spellbook/shaman
[wago-era]: https://wago.tools/db2/SpellEffect?product=wow_classic_era
[wago-spell]: https://wago.tools/db2/Spell/csv?build=1.60.1.70170
[wh-frt]: https://www.wowhead.com/classic/spell=10538
[wh-frost]: https://www.wowhead.com/classic/spell=10479
[wh-fnt]: https://www.wowhead.com/classic/spell=11315
[wh-soe5]: https://www.wowhead.com/classic/spell=25361
[wh-tremor]: https://www.wowhead.com/classic/spell=8143
[wh-stoneclaw]: https://www.wowhead.com/classic/spell=10428
[wh-sear]: https://www.wowhead.com/classic/spell=10436
[wh-magma]: https://www.wowhead.com/classic/spell=10581
[wh-ftt4]: https://www.wowhead.com/classic/spell=16387
[wh-hst]: https://www.wowhead.com/classic/spell=10463
[wh-ms4]: https://www.wowhead.com/classic/spell=10497
[wh-mtt3]: https://www.wowhead.com/classic/spell=17359
[wh-ground]: https://www.wowhead.com/classic/spell=8177
[wh-wft3]: https://www.wowhead.com/classic/spell=10614
[wh-goa3]: https://www.wowhead.com/classic/spell=25359
[wh-tat]: https://www.wowhead.com/forever/spell=25908/tranquil-air-totem
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696
[blz-notes-oct]: https://www.bluetracker.gg/wow/topic/us-en/2360696-wow-forever-beta-development-notes-updated-september-24/
[moba]: https://mobalytics.gg/wow-forever/guides/patch-notes-september-24
[guided]: https://guided.news/en/news/wow-forever-shaman-totem-systems-rogue-overhaul/
[wfts]: https://wowforevertalents.com/shaman/
[wft]: https://wowforevertalent.com/shaman/reference/
[ftome]: https://forevertome.com/guides/shaman
[gamespot]: https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html
[cwgg]: https://classicwow.gg/forever/guides/shaman
[magey-wf]: https://github.com/magey/classic-warrior/wiki/Windfury-Totem
[wwg-twist]: https://warcraft.wiki.gg/wiki/Totem_Twisting
[iv-classic-enh]: https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities
[wt-threat]: https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/
[wt-tank]: https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/
[f-2353663]: https://us.forums.blizzard.com/en/wow/t/2353663
[f-2361624]: https://us.forums.blizzard.com/en/wow/t/2361624
[f-2366147]: https://us.forums.blizzard.com/en/wow/t/2366147
[f-2366738]: https://us.forums.blizzard.com/en/wow/t/2366738
[f-2367626]: https://us.forums.blizzard.com/en/wow/t/2367626
[lepre]: https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-shaman-guide-overview/
