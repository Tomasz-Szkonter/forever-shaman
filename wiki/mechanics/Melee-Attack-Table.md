---
title: Melee Attack Table
description: How Enhancement Shaman melee swings resolve (miss, dodge, parry, block, glancing, crit, hit), with Classic Era formulas and WoW Forever's changes to hit, crit, weapon skill and weapon options.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🪓 Melee Attack Table

How an Enhancement Shaman's swing becomes a **miss, dodge, parry, block, glancing blow, crit or hit**. The page covers the Classic Era formulas first, then what WoW Forever changed: unified hit and crit, weaker weapon skill, 2H weapons baseline, and no dual wield.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents
- [How the Table Works](#-how-the-table-works)
- [Classic Formulas](#-classic-formulas)
- [Hit Cap and Weapon Skill](#-hit-cap-and-weapon-skill)
- [Crit Cap and Crit Suppression](#-crit-cap-and-crit-suppression)
- [Weapon Setups](#-weapon-setups)
- [In Forever](#️-in-forever)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 🎲 How the Table Works

### One-roll table

🟡 White (auto-attack) swings use a **single roll** on a table ordered **miss > dodge > parry > block > glancing > crit > hit** ([Icy Veins Classic Enhancement][iv-enh-classic]). Each outcome takes its slice of 100% in that order. If the slices above "crit" fill up, crit gets pushed off the table (see [Crit cap](#white-crit-cap)).

- **Dodge** can happen from any angle.
- **Parry** and **block** only happen when you attack **from the front**. Attack from behind and both disappear ([magey: Attack table][magey-at]).
- **Glancing blows** only apply to **white swings**, not to Stormstrike or other special attacks ([magey][magey-at]).

---

## 🧮 Classic Formulas

🟡🔵 All formulas below come from [magey's Attack table page][magey-at], which links Blizzard-confirmed values to [Blizzard post #12][blz-12] and [post #32][blz-32]. They assume a **level 60 attacker vs a mob**. "Defense" is the target's defense skill (level × 5, so **315 for a level-63 boss**). "Skill" is your weapon skill (300 at level 60 without bonuses).

### Miss

```
Defense − Skill ≥ 11:  Miss = 5% + (TargetLvl×5 − Skill) × 0.2%
                       HitSuppression = (TargetLvl×5 − Skill − 10) × 0.2%
Defense − Skill ≤ 10:  Miss = 5% + (TargetLvl×5 − Skill) × 0.1%      (no suppression)
```

**Hit suppression** means the first part of your +hit is ignored. At 300 skill vs a boss it is **1%**: your first 1% hit from gear or talents does nothing.

### Dodge

```
Dodge = 5% + (TargetLvl×5 − Skill) × 0.1%        → 6.5% vs a level-63 boss (Blizzard)
```

### Parry

```
Parry = 14% vs +3 levels (Blizzard)              front only
```

### Block

```
Block = MIN(5%, 5% + (TargetLvl×5 − Skill) × 0.1%)   mobs never exceed 5%; front only
```

### Glancing blows

```
Glance chance = 10% + (TargetLvl×5 − MIN(AttackerLvl×5, Skill)) × 2%    → 40% vs level 63
Damage multiplier: low  = 1.3 − 0.05 × (Def − Skill)   [capped at 0.91]
                   high = 1.2 − 0.03 × (Def − Skill)   [min 0.2, capped at 0.99]
                   average of low and high
```

Glancing blows are **40% of your white swings vs a boss**. Raising weapon skill does not reduce how often they happen (that is capped at your level × 5), but it **does** reduce how much damage they lose.

### Crit vs higher-level mobs

```
Crit −0.2% per point when (MIN(Lvl×5, Skill) − Def) < 0     → −3% vs level 63, even at 305+ skill
plus a flat −1.8% "aura crit suppression" on crit from talents, gear and buffs
     (not on crit from Agility)
→ about −4.8% total vs bosses
```

---

## 🎯 Hit Cap and Weapon Skill

### Hit cap table

🟡 Melee hit cap vs a level-63 boss, 1H or 2H (no dual wield in Classic) ([magey][magey-at]). The source page also lists test-measured values, e.g. glancing at +3 levels measured **40.36%** with a damage penalty of about **35.12%**.

| Def − Skill | Your skill | Glancing damage penalty | Miss | Hit cap |
|---|---|---|---|---|
| 15 | 300 | 35% | 8.0% | **9.0%** (includes 1% suppression) |
| 10 | 305 | 15% | 6.0% | 6.0% |
| 8 | 307 | 7% | 5.8% | 5.8% |
| 7 | 308 | 5% | 5.7% | 5.7% |
| 5 | 310 | 5% | 5.5% | 5.5% |

- 🟢 **Nature's Guidance** (Restoration, 3/3) gave +3% hit, which lowered the 300-skill cap to **6%** from gear ([Wowhead 16198][wh-ng]).
- 🟡 **Disputed 8% cap:** [Warcraft Tavern's Classic Enhancement guide][wt-enh-classic] says "8%" ("5% with Nature's Guidance"). Blizzard's 1.12 statement puts the effective cap at **9%** at 300 skill. [Icy Veins][iv-enh-classic] agrees with 9%: "about 6% … if you have at least 305 weapon skill, otherwise you need 9%". We use **9%**.

### Weapon skill

- 🟡 Going from 300 to **305 skill** drops the glancing penalty from **35% to 15%** and removes hit suppression. Gains flatten out at about **308** ([Icy Veins][iv-enh-classic]).
- 🟡 Each skill point also adds **0.04% crit**, but that only counts vs players or mobs at your level or below ([magey][magey-at]; [Warcraft Tavern][wt-enh-classic]).
- 🟡 Orc **Axe Specialization** (+5 Axes) was the main Shaman source of weapon skill in Classic ([Warcraft Tavern][wt-enh-classic]).

---

## 💥 Crit Cap and Crit Suppression

### White crit cap

🟡 Because the table is a single roll, crit can only fill the space left after miss, dodge, parry, block and glancing. From **behind** a boss (no parry or block):

```
CritCap(white) = 100% − Miss_after_hit − 6.5% dodge − 40% glancing
```

**Worked example** (derived from magey's formulas): with 9% hit at 300 skill, miss is 0%, so the white crit cap is about **53.5% effective crit**. Your character sheet needs about **4.8% more** than that because of crit suppression. In practice no Classic Shaman got close to this cap.

### Crit suppression in practice

- Vs a boss you lose about **3%** crit from the level gap, plus **1.8%** from aura suppression on crit from talents, gear and buffs ([magey][magey-at]). Crit from Agility is not hit by the 1.8% part.
- This matters for **Flurry**, which triggers on crits: every point of suppressed crit is lost Flurry uptime.

---

## 🛡 Weapon Setups

### Dual wield

🟢 **Shamans could not dual wield before patch 2.0.1.** The 2.0.1 Stormstrike note reads: "With the advent of Dual Wielding, Stormstrike was changed to instantly attack with all equipped weapons" ([warcraft.wiki.gg: Stormstrike][wwg-ss]). The 2.0.1 Windfury Weapon note adds that self-weapon buffs could now go on both hands ([warcraft.wiki.gg: Windfury Weapon][wwg-wf]).

So the Classic dual-wield miss penalty (+19%) **never applied** to Shamans. In 1.12 Stormstrike hits with the main hand only.

### 2H vs 1H + shield

- **2H:** axes and maces needed the Classic talent *Two-Handed Axes and Maces* (staves did not). 🟡 Slower weapons hit harder per swing, which makes Stormstrike and Windfury Weapon stronger ([Icy Veins][iv-enh-classic]).
- **1H + shield:** 🟡 *Shield Specialization* added up to **+5% block chance** and **+25% block amount** ([wowisclassic calculator][wic]).

### Spell batching

🟡 Classic processes damage in **400 ms batches** ([magey: Spell batching][magey-batch]). This affects things like the Windfury Totem AP aura timing ([magey: Windfury Totem][magey-wft]). See [Weapon Imbues](Weapon-Imbues.md).

---

## ♾️ In Forever

### Unified hit and crit

- 🔵 "Spell, melee, and ranged hit chance are combined, as are spell, melee, and ranged critical chance" ([Blizzard Deep Dive][blz-dd]).
- Hit from **Tidal Focus** (Restoration, +1–5%) and **Tauren Endurance** (+1%) therefore counts for your swings too. See [Spell Attack Table](Spell-Attack-Table.md#hit-sources-in-forever).
- **Thundering Strikes** now gives crit to **all spells and attacks** (🟢 [wfts][wfts]), and **Elemental Devastation** still turns spell crits into +3/6/9% melee crit for 10 s (🟢 [wfts][wfts]).
- 🔴 No source says whether the melee hit cap, glancing or crit suppression numbers changed. Treat the Classic formulas above as the baseline until tested.

### Weapon skill and the new dodge/parry stat

- 🔵 Weapon skill "still works as it always has, but items with weapon skill offer less of it per item". New stats **reduce the target's chance to dodge or parry** ([Blizzard Deep Dive][blz-dd]).
- 🟡 [Method.gg][method-items] describes this as "Expertise … similar to TBC", i.e. weapon skill being replaced.
- 🔴 **The two descriptions conflict.** Blizzard says weapon skill stays (just smaller per item) and a separate dodge/parry reduction stat is added. Method says it is replaced. They may be describing the same thing loosely. No item with the new stat has been documented with numbers yet.

### Racial weapon bonuses

- 🟢🟡 Racial weapon-skill bonuses became **+1% crit with that weapon type** ([ForeverChanges racials][fc-racials]; [Method.gg racials][method-racials]):
  - **Orc** Axe Specialization: ~~+5 Axe skill~~ → **+1% crit with 1H/2H axes**.
  - **Dwarf** Mace Specialization (new; Dwarf can now be a Shaman): **+1% crit with maces**.
- So Orc no longer gets a weapon-skill head start on the glancing and hit tables.

### Two-handers baseline, no dual wield

| Classic | Forever | Conf. |
|---|---|---|
| ~~Two-Handed Axes and Maces talent~~ | **2H axes and maces are baseline**; the talent is gone | 🟡 [Zockify][zk], [Warcraft Tavern][wt-forever] |
| No dual wield | **Still no dual wield.** It was not available in the BlizzCon demo (level 38), and players are asking for it in feedback threads | 🟡 [Zockify][zk]; [EU feedback thread][eu-dw] |
| ~~Shield Specialization (+5% block, +25% block amount)~~ | **Removed**, no successor named | 🟢 [wfts][wfts] |
| ~~Weapon Mastery (+10% weapon damage)~~ | **Removed**, no successor named | 🟢 [wfts][wfts] |
| Parry (chance to parry) | Renamed **Spirit Weapons**: parry chance plus threat changes. See [Threat](Threat.md#spirit-weapons) | 🟢 [wfts][wfts] |
| Anticipation 5 × 1% dodge | **3 ranks, +2/4/6% dodge** | 🟢 [wfts][wfts] |

- 🟡 A Blizzard Enhancement overview short was covered as "Enhancement only uses 2-handed weapons in WoW Forever" ([Wowhead news 383200][wh-383200]; the article body was not readable). Shields are still a Shaman proficiency ([Warcraft Tavern][wt-forever]).
- Removing Shield Specialization and Weapon Mastery pushes Enhancement firmly toward 2H.

### Talents that read the melee table

- 🟢 **Flurry**: ~~after any crit, +10/15/20/25/30% attack speed~~ → after a **melee** crit, **+5/10/15/20/25%** for the next 3 swings ([wfts][wfts]). See [Enhancement Mechanics](Enhancement-Mechanics.md).
- 🟢 **Improved Stormstrike** (2 ranks): Stormstrike's cooldown has a 50/100% chance to **reset on Dodge or Parry** ([wfts][wfts]). 🟡 A forum poster argues it "will not trigger on bosses" ([thread 2365734][f-2365734]). The tooltip does not say whose dodge or parry counts. See [To Verify](#-to-verify).
- 🟡 **Maelstrom Weapon** procs from melee damage and builds slowly on 2H weapons per testers. See [Enhancement Mechanics](Enhancement-Mechanics.md).

### Haste

Melee haste exists in Forever but is not on gear yet: Skyborne +1%, Troll Berserking +10%, Rage of the Farseer +30% attack speed. See [Stat Mechanics](Stat-Mechanics.md#haste).

### Spell batching in Forever

- 🔴 **No source** describes spell batching in Forever, so we don't know whether it keeps Classic's 400 ms window.

---

## 📋 Quick Reference

| Topic | Classic Era (vs level-63 boss) | Forever (70170) | Conf. (Forever) |
|---|---|---|---|
| Table type | one roll: miss > dodge > parry > block > glance > crit > hit | not reported as changed | 🔴 |
| Miss (1H/2H, 300 skill) | 8% (9% hit cap with suppression) | not reported as changed | 🔴 |
| Miss at 305 skill | 6% | not reported as changed | 🔴 |
| Dodge | 6.5% | reducible by a new stat | 🔵 |
| Parry (front only) | 14% | reducible by a new stat | 🔵 |
| Block (front only) | ≤ 5% | not reported as changed | 🔴 |
| Glancing (white swings) | 40%, 35% penalty at 300 skill | not reported as changed | 🔴 |
| Crit suppression | −3% level, −1.8% aura | not reported as changed | 🔴 |
| Hit / crit stats | separate melee and spell | **unified** | 🔵 |
| Talent hit | Nature's Guidance 1–3% | **Tidal Focus 1–5%** | 🟢 |
| Weapon skill on items | full amounts | **less per item** | 🔵 |
| Orc racial | +5 Axe skill | **+1% crit with axes** | 🟢🟡 |
| Dwarf racial | (not a Shaman) | **+1% crit with maces** | 🟢🟡 |
| 2H axes and maces | talent | **baseline** | 🟡 |
| Dual wield | no | **no** | 🟡 |
| Shield Specialization / Weapon Mastery | talents | **removed** | 🟢 |
| Spell batching | 400 ms | unknown | 🔴 |

---

## 🔍 To Verify

- [ ] **Melee miss, glancing and crit suppression in Forever.** Unified hit could have come with a new table. At the level-30 cap, test vs level 33 mobs ([Blizzard Deep Dive][blz-dd] gives no numbers).
- [ ] **Does Tidal Focus hit reduce melee miss?** Unified hit implies yes; log swings with 0/5 vs 5/5 ([wfts][wfts]).
- [ ] **Weapon skill vs "Expertise".** Do items still list weapon skill, and what is the new dodge/parry stat called and worth? ([Blizzard][blz-dd] vs [Method.gg][method-items])
- [ ] **Racial +1% crit**: does it apply to spells cast while wielding the weapon, given that crit is unified? ([ForeverChanges][fc-racials])
- [ ] **Improved Stormstrike reset**: does it fire when the *target* dodges or parries your attack, or when *you* dodge or parry? The forum argument about bosses depends on this ([thread 2365734][f-2365734]).
- [ ] **Spell batching** window in Forever: no source at all.
- [ ] **Dual wield** at higher levels: only the level-38 BlizzCon demo was checked ([Zockify][zk]).
- [ ] **Parry and block from mobs at low level**: the Classic formulas are written for level 60 vs 63; the beta caps at 30.

---

## 📚 Sources

- [magey: Attack table][magey-at]: every Classic formula, the hit cap table, crit suppression
- [Blizzard forum "Bug: Hit tables" post #12][blz-12] and [#32][blz-32]: official Classic attack-table statements
- [Icy Veins Classic Enhancement stat priority][iv-enh-classic]: table order, weapon skill, hit cap, 2H reasoning
- [Warcraft Tavern Classic Enhancement guide][wt-enh-classic]: disputed 8% cap, weapon skill crit, Orc axes
- [Wowhead Classic: Nature's Guidance][wh-ng]: Classic hit talent
- [warcraft.wiki.gg: Stormstrike][wwg-ss], [Windfury Weapon][wwg-wf]: no dual wield before 2.0.1
- [wowisclassic talent calculator][wic]: Shield Specialization
- [magey: Spell batching][magey-batch], [magey: Windfury Totem][magey-wft]: 400 ms batches
- [Blizzard: Forever Deep Dive panel recap][blz-dd]: unified hit/crit, weapon skill change, dodge/parry stat
- [Method.gg: itemization updates][method-items]: "Expertise" description
- [ForeverChanges racials][fc-racials], [Method.gg racials][method-racials]: +1% crit racials
- [wowforevertalents.com][wfts]: Forever talent values and removals
- [Zockify Forever Shaman][zk], [Warcraft Tavern Forever Shaman guide][wt-forever]: 2H baseline, no dual wield, proficiencies
- [Blizzard EU feedback: totems / dual wield / Elemental Mastery][eu-dw]: player feedback on dual wield
- [Wowhead news 383200][wh-383200]: Enhancement 2H-only headline
- [Blizzard forum thread 2365734][f-2365734]: Improved Stormstrike on bosses

[magey-at]: https://github.com/magey/classic-warrior/wiki/Attack-table
[blz-12]: https://us.forums.blizzard.com/en/wow/t/bug-hit-tables/185675/12
[blz-32]: https://us.forums.blizzard.com/en/wow/t/bug-hit-tables/185675/32
[iv-enh-classic]: https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-stat-priority
[wt-enh-classic]: https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/
[wh-ng]: https://www.wowhead.com/classic/spell=16198
[wwg-ss]: https://warcraft.wiki.gg/wiki/Stormstrike
[wwg-wf]: https://warcraft.wiki.gg/wiki/Windfury_Weapon
[wic]: https://www.wowisclassic.com/en/talent-calculator/shaman/
[magey-batch]: https://github.com/magey/classic-warrior/wiki/Spell-batching
[magey-wft]: https://github.com/magey/classic-warrior/wiki/Windfury-Totem
[blz-dd]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[method-items]: https://www.method.gg/wow-forever/itemization-updates-in-world-of-warcraft-forever-expertise-spell-damage-more
[fc-racials]: https://foreverchanges.pro/racials
[method-racials]: https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever
[wfts]: https://wowforevertalents.com/shaman/
[zk]: https://www.zockify.com/forever/shaman/
[wt-forever]: https://www.warcrafttavern.com/forever/guides/shaman/
[eu-dw]: https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-feedback-%E2%80%93-shaman-totems-dual-wield-elemental-mastery-stronger-spec-identity/631193
[wh-383200]: https://www.wowhead.com/forever/news=383200/enhancement-only-uses-2-handed-weapons-in-wow-forever-enhancement-shaman
[f-2365734]: https://us.forums.blizzard.com/en/wow/t/2365734
