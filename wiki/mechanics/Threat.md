---
title: Threat
description: How Shamans generate and reduce threat, with Classic Era values (Earth Shock, Rockbiter, Healing Grace, totems, Tranquil Air) and WoW Forever's changes (Spirit Weapons, Natural Grace, Lightning Overload, tester reports on dungeon threat and tanking).
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 📢 Threat

**Threat** decides which player a monster attacks. This page covers how Shaman damage, healing and mana gains turn into threat, which tools raise or lower it, and what WoW Forever changed. Forever matters here: Blizzard says threat matters in its slower dungeon combat, and beta testers report Shamans pulling aggro off tanks.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents
- [Threat Basics](#-threat-basics)
- [Classic Shaman Threat Tools](#-classic-shaman-threat-tools)
- [In Forever](#️-in-forever)
- [Worked Examples](#-worked-examples)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 📏 Threat Basics

Classic Era rules. They apply to every class.

### Damage and healing threat

| Source | Threat | Conf. | Source |
|---|---|---|---|
| Damage | **1 threat per point** of damage | 🟡 | [magey: Threat][magey-threat] |
| Healing | **0.5 threat per point healed**, split evenly among all monsters in combat with you. **Overhealing generates none** | 🟡 | [magey][magey-threat]; [Warcraft Tavern threat reference][wt-threat] |
| Mana gained | **0.5 threat per point of mana**, split among monsters, not affected by threat modifiers | 🟡 | [Warcraft Tavern threat reference][wt-threat] |

### Aggro thresholds

- 🟡 You pull aggro from the current target holder when your threat exceeds **110%** of theirs while you are **in melee range**, or **130%** at **range** ([magey][magey-threat]; [Warcraft Tavern][wt-threat]).
- So a melee Enhancement Shaman has less room above the tank than a ranged Elemental or Restoration Shaman.

### Shaman class modifier

- 🟡 Shamans have **no passive class threat modifier** (1.0) ([LibThreatClassic2 Shaman.lua][ltc2], `passiveThreatModifiers = 1`). Warriors in Defensive Stance and Druids in Bear Form have one; Shamans do not.

---

## 🗿 Classic Shaman Threat Tools

### Earth Shock

- 🟡 **Earth Shock deals 2× threat** ([Warcraft Tavern threat reference][wt-threat]; [LibThreatClassic2][ltc2], `amt * 2`). The tooltip says "Causes a high amount of threat" ([Wowhead 10414][wh-es]).
- Frost Shock and Flame Shock have **no special modifier** in any source found.

### Rockbiter Weapon

- 🟢 Rockbiter Weapon: "increasing melee attack power by X and allowing melee attacks to **cause additional threat**" ([Wowhead 16316][wh-rb]).
- 🟡 Threat value by rank ([Warcraft Tavern threat reference][wt-threat]):

| Rank | R1 | R2 | R3 | R4 | R5 | R6 | R7 |
|---|---|---|---|---|---|---|---|
| Threat value | 6 | 10 | 16 | 27 | 41 | 55 | **72** |

- 🔴 **Disputed scaling.** Warcraft Tavern's [tank guide][wt-tank] contradicts itself:
  - Its table says "72 threat **divided by** weapon speed".
  - Its text says "72 threat **per second** on hit. With 2.6 speed weapon, each hit is 2.6 × 72 ≈ 172 threat. Weapon speed won't matter, but haste does."
  - The text reading (**72 × weapon speed per hit**, i.e. 72 threat per second at 100% hit) is internally consistent, so we prefer it. Note that the guide's own arithmetic is off: 2.6 × 72 = **187**, not 172.
- 🟡 LibThreatClassic2 does **not** model Rockbiter ([LibThreatClassic2][ltc2]).

### Healing Grace

- 🟢 **Healing Grace** (Restoration, 3 ranks): **−5/10/15% threat from healing**. Added in patch **1.11.0**; its dispel-resistance part only arrived in 2.4.0 ([warcraft.wiki.gg: Healing Grace][wwg-hg]; [Wowhead 29187][wh-hg]; [LibThreatClassic2][ltc2], `1 − 0.05 × rank`).

### Lightning spells and Stormstrike

- 🟡 Lightning Bolt, Chain Lightning, Lightning Shield and Stormstrike generate **threat equal to damage**, with no modifier ([Warcraft Tavern tank guide][wt-tank]).

### Totems and threat

- 🟡 **Totems do not generate threat for the Shaman** ("Totems can't deal threat for you"). Healing Stream, Mana Spring and Mana Tide generate **0 threat** ([Warcraft Tavern tank guide][wt-tank]; [threat reference][wt-threat]).
- 🟢 Classic *Improved Fire Totems* reduced **Magma Totem threat by 25/50%** ([wowforevertalents.com Classic comparison][wfts]). That implies Magma Totem does generate threat, presumably on the totem itself rather than on you. See [To Verify](#-to-verify).

### Stoneclaw Totem

- 🔴 Stoneclaw Totem: about **170 threat per pulse** (a taunt-like effect that pulls monsters onto the totem) ([Warcraft Tavern tank guide][wt-tank]). Unverified. Stoneclaw R6 has **480 HP**, unlike the 5 HP of most totems ([Wowhead 10428][wh-sc]).

### Tranquil Air Totem

- 🟡 **Tranquil Air Totem**: **−20% threat** for party members within 20 yd. Warcraft Tavern calls it the Horde stand-in for Blessing of Salvation ([Warcraft Tavern tank guide][wt-tank]). Forever status: see [Tranquil Air in Forever](#tranquil-air-in-forever).

### No threat talents for Enhancement or Elemental

- 🟢 Classic has **no Spirit Weapons and no Elemental Precision**: both are TBC talents. The Classic Enhancement talent in that spot is **Parry**, with no threat component ([Wowhead 16268][wh-parry]), and Elemental Precision (30672) has no Classic entry ([Wowhead 30672][wh-30672]).
- 🟢 Tidal Mastery is crit only, with no threat effect ([Wowhead 16194][wh-tm]).

---

## ♾️ In Forever

- 🔵 Blizzard describes Forever combat as slower (solo mobs take about 10–15 s), with CC and **threat mattering** in dungeons ([Blizzard Deep Dive][blz-dd]).
- 🔴 No source reports a change to the core rules (1 threat per damage, 0.5 per heal, 110/130% thresholds). Treat them as unchanged until tested.

### Spirit Weapons

- 🟢 ~~Parry~~ → **Spirit Weapons** (Enhancement row 5, 1 rank): gives a chance to parry, and threat **−30% when Rockbiter is not active**, **+30% when Rockbiter is active** ([wowforevertalents.com][wfts]).
- 🟡 Players describe it as "-30% threat reduction … when not using Rockbiter" ([thread 2365734][f-2365734]).
- So the same talent is a **threat dump for Enhancement DPS** (Windfury or Flametongue imbue) and a **threat boost for tanking** (Rockbiter). See [Spirit Weapons](../talents/Enhancement-Talents.md#spirit-weapons).
- 🔴 Whether the ±30% applies to spells (Earth Shock, Lightning Bolt) as well as melee is not stated.

### Natural Grace

- 🟢 ~~Healing Grace: healing threat −5/10/15%~~ → **Natural Grace** (Restoration row 2, 3 ranks): **threat from all your spells −5/10/15%** ([wfts][wfts]; [wowforevertalent.com][wft]).
- Now covers Lightning Bolt, shocks and Lava Burst, not just heals. It does **not** mention melee. See [Natural Grace](../talents/Restoration-Talents.md#natural-grace).
- 🟡 Icy Veins lists Natural Grace as an option in its level-30 Restoration build ([Icy Veins Restoration guide][iv-res]).

### Lightning Overload

- 🟢 [Lightning Overload](../talents/Elemental-Talents.md#lightning-overload) copies (3/7/10% chance on Lightning Bolt and Chain Lightning) deal half damage and generate **no threat** ([wfts][wfts]; [wft][wft]).

### Rockbiter in Forever

- 🟢 Rockbiter's AP values are **unchanged** (R7 +653 AP) and it still allows "melee attacks to cause additional threat". Only its duration changed: ~~5 min~~ → **60 min** ([WCLBox Rockbiter][wcl-rb]).
- 🔴 Forever's Rockbiter **threat values** have not been datamined or measured. We assume the Classic values until tested.

### Tester reports: Rockbiter, Earth Shock and Fire Nova

- 🟡 **Rockbiter and Earth Shock have high threat modifiers**, so Shamans rip threat from tanks in low-level dungeons ([thread 2365062][f-2365062]; [thread 2366147][f-2366147]).
- 🟡 **Fire Nova** is "a massive threat generator even against single target" ([thread 2366147][f-2366147]). Fire Nova is now an instant spell centered on your Fire totem, not a totem ([WCLBox Fire Nova][wcl-fn]), which may be why its damage now counts as your threat. That last part is our inference.
- 🟡 Shamans have **no single-target taunt** ([thread 2366147][f-2366147]).

### Taunt totem

- 🟡 The Stoneclaw-style "taunt" totem "builds passive threat to the totem and only overtakes if it is out threating". It is **not a true taunt** ([thread 2366147][f-2366147]).
- 🟢 Stoneclaw is listed as unchanged ([ForeverChanges spellbook][fc-spells]). [Earth's Grasp](../talents/Enhancement-Talents.md#earths-grasp) (now Enhancement row 1) still gives it +25/50% health ([wft][wft]).

### Enhancement tanking

- 🟡 Icy Veins says Enhancement can tank dungeons "**in a pinch**", using **Spirit Weapons + Rockbiter** for +30% threat ([Icy Veins][iv-overview]; [Warcraft Tavern][wt-forever]).
- Defensive tools in Forever (🟢 [wfts][wfts]):
  - [Anticipation](../talents/Enhancement-Talents.md#anticipation): +2/4/6% dodge (3 ranks).
  - Spirit Weapons: parry chance.
  - [Toughness](../talents/Enhancement-Talents.md#toughness): now **+2–10% Stamina** (was armor from items).
  - ~~Shield Specialization~~: **removed**, so there is no block talent any more.
- 🟡 Shields are still a Shaman proficiency ([Warcraft Tavern][wt-forever]).

### Tranquil Air in Forever

- 🔴 **Conflict.** The client diff lists Tranquil Air Totem as **"not in Forever"** ([ForeverChanges spellbook][fc-spells]; [WCLBox][wcl-index]), and its [Wowhead Forever page returns 404][wh-ta-f]. Yet Blizzard's Sept 24 notes say "Tranquil Air Totem, Windfury Totem, and Grace of Air Totem no longer stack together even if used by different Shamans in the same group" ([dev notes][blz-notes]).
- Possible explanations: removed from the trainer but not from the code, not yet exported, or moved to a talent or relic. If it exists, it **cannot be combined** with Windfury or Grace of Air from any Shaman in the group.
- Tranquil Air was level 50 in Classic, above the level-30 beta cap, so nobody can test it now.

### Other threat-relevant changes

- 🟢 *Improved Fire Totems* (with its Magma Totem threat reduction) became **Improved Fire Nova** (Fire Nova damage +10/20%, cooldown −2/4 s). The threat reduction is gone ([wfts][wfts]).
- 🟢 Healing is now threat-reduced by Natural Grace instead of Healing Grace (same 5/10/15%).
- 🔴 **Mana gain threat** from Water Shield, Mana Tide and Totemic Recall in Forever is undocumented. In Classic, mana gained gives 0.5 threat per point.

---

## 🧪 Worked Examples

**Derived arithmetic, not tests.** It assumes threat modifiers multiply and that Spirit Weapons applies to all threat.

### Threat multipliers

| Setup | Melee | Earth Shock | Lightning Bolt |
|---|---|---|---|
| Classic, no talents | 1.0 | 2.0 | 1.0 |
| Forever Enh, Spirit Weapons, **Rockbiter** | 1.3 (+ Rockbiter bonus) | 2.0 × 1.3 = **2.6** | 1.3 |
| Forever Enh, Spirit Weapons, Windfury imbue | **0.7** | 2.0 × 0.7 = **1.4** | **0.7** |
| Forever with Natural Grace 3/3 (spells only) | 1.0 | 2.0 × 0.85 = **1.7** | **0.85** |

If testers are right that Earth Shock's Forever modifier is "high", the real numbers may be larger.

### Classic Rockbiter R7 per hit

Using the "72 × weapon speed" reading:

| Weapon speed | Rockbiter threat per hit | Per second at 100% hit |
|---|---|---|
| 2.6 | 72 × 2.6 ≈ **187** | 72 |
| 3.6 | 72 × 3.6 ≈ **259** | 72 |

---

## 📋 Quick Reference

| Topic | Classic Era | Forever (70170) | Conf. (Forever) |
|---|---|---|---|
| Damage threat | 1 per point | no reported change | 🔴 |
| Healing threat | 0.5 per point, split; overheal 0 | no reported change | 🔴 |
| Mana gain threat | 0.5 per point, split | undocumented | 🔴 |
| Aggro thresholds | 110% melee / 130% ranged | no reported change | 🔴 |
| Shaman class modifier | none | no reported change | 🔴 |
| Earth Shock | ×2 | "high" per testers | 🟡 |
| Rockbiter | +threat (72 at R7) | still "additional threat"; values unmeasured | 🟢 / 🔴 |
| Fire Nova | totem | spell; "massive threat" per testers | 🟡 |
| Healing threat talent | Healing Grace −15% heals | **Natural Grace −15% all spells** | 🟢 |
| Enhancement threat talent | none (Parry) | **Spirit Weapons ±30%** (Rockbiter on/off) | 🟢 |
| Lightning Overload copies | — | **no threat** | 🟢 |
| Totems | no threat for the Shaman | "taunt" totem builds threat on itself | 🟡 |
| Stoneclaw | ~170 threat per pulse | not a true taunt | 🔴 / 🟡 |
| Tranquil Air | −20% party threat | removed in client **or** stacking-limited | 🔴 |
| Enhancement tanking | niche | "in a pinch" with Rockbiter + Spirit Weapons | 🟡 |

---

## 🔍 To Verify

- [ ] **Earth Shock threat modifier in Forever.** Testers say "high"; Classic is ×2. Measure with a threat meter vs a known damage number ([thread 2365062][f-2365062]).
- [ ] **Rockbiter threat values and scaling** (per hit × weapon speed, or divided by speed) in Classic Era and Forever ([Warcraft Tavern tank guide][wt-tank]).
- [ ] **Spirit Weapons ±30%**: does it apply to spells, or only melee? Is "Rockbiter active" checked per hand or per buff? ([wfts][wfts])
- [ ] **Natural Grace**: does it reduce Earth Shock's bonus threat? Does it touch melee? ([wfts][wfts])
- [ ] **Fire Nova threat**: does the spell carry a threat modifier, or is it just high AoE damage? ([thread 2366147][f-2366147])
- [ ] **Totem threat**: do Magma Totem and Searing Totem threat land on the totem or on the Shaman? The Classic Improved Fire Totems text implies totems generate threat ([wfts][wfts]; [Warcraft Tavern][wt-tank]).
- [ ] **Stoneclaw threat per pulse** (about 170 in Classic, unverified) and the Forever "taunt" totem behavior ([thread 2366147][f-2366147]).
- [ ] **Mana gain threat** from Water Shield, Mana Tide and Totemic Recall ([Warcraft Tavern threat reference][wt-threat] for the Classic rule).
- [ ] **Tranquil Air Totem**: does it exist in Forever? Needs level 50+ data or a Blizzard answer ([ForeverChanges][fc-spells] vs [dev notes][blz-notes]).
- [ ] **Lightning Overload "no threat"**: confirm with a threat meter ([wfts][wfts]).

---

## 📚 Sources

- [magey: Threat Mechanics][magey-threat]: damage and healing threat, thresholds
- [Warcraft Tavern Classic threat reference][wt-threat]: healing, mana gain, Earth Shock, Rockbiter values, totem threat
- [Warcraft Tavern Classic Shaman tanking][wt-tank]: Rockbiter scaling dispute, lightning threat, totems, Stoneclaw, Tranquil Air
- [LibThreatClassic2 Shaman.lua][ltc2]: class modifier, Earth Shock ×2, Healing Grace
- [warcraft.wiki.gg: Healing Grace][wwg-hg]: patch history
- Wowhead Classic: [Earth Shock 10414][wh-es], [Rockbiter 16316][wh-rb], [Healing Grace 29187][wh-hg], [Stoneclaw 10428][wh-sc], [Parry 16268][wh-parry], [Elemental Precision 30672 (no entry)][wh-30672], [Tidal Mastery 16194][wh-tm]
- [Blizzard: Forever Deep Dive panel recap][blz-dd]: threat matters in dungeons
- [Blizzard: Beta Development Notes][blz-notes]: air totem stacking (Sept 24)
- [wowforevertalents.com][wfts], [wowforevertalent.com reference][wft]: Spirit Weapons, Natural Grace, Lightning Overload, Improved Fire Nova, tank talents
- [WCLBox][wcl-index]: [Rockbiter Weapon][wcl-rb], [Fire Nova][wcl-fn]; [ForeverChanges spellbook][fc-spells]: Stoneclaw, Tranquil Air diff
- [Wowhead Forever: Tranquil Air (404)][wh-ta-f]
- [Icy Veins Shaman overview][iv-overview], [Icy Veins Restoration guide][iv-res], [Warcraft Tavern Forever Shaman guide][wt-forever]: Enhancement tanking, builds, proficiencies
- Blizzard forum threads [2365062][f-2365062] and [2366147][f-2366147] (dungeon threat, Fire Nova, taunt totem), [2365734][f-2365734] (Spirit Weapons)

[magey-threat]: https://github.com/magey/classic-warrior/wiki/Threat-Mechanics
[wt-threat]: https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/
[wt-tank]: https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/
[ltc2]: https://github.com/dfherr/LibThreatClassic2/blob/master/ClassModules/Classic/Shaman.lua
[wwg-hg]: https://warcraft.wiki.gg/wiki/Healing_Grace
[wh-es]: https://www.wowhead.com/classic/spell=10414
[wh-rb]: https://www.wowhead.com/classic/spell=16316
[wh-hg]: https://www.wowhead.com/classic/spell=29187
[wh-sc]: https://www.wowhead.com/classic/spell=10428
[wh-parry]: https://www.wowhead.com/classic/spell=16268
[wh-30672]: https://www.wowhead.com/classic/spell=30672
[wh-tm]: https://www.wowhead.com/classic/spell=16194
[blz-dd]: https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/2360696
[wfts]: https://wowforevertalents.com/shaman/
[wft]: https://wowforevertalent.com/shaman/reference/
[wcl-index]: https://wowforever.wclbox.com/en/fashu/shaman
[wcl-rb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-rockbiter-weapon
[wcl-fn]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-fire-nova
[fc-spells]: https://foreverchanges.pro/spellbook/shaman
[wh-ta-f]: https://www.wowhead.com/forever/spell=25908/tranquil-air-totem
[iv-overview]: https://www.icy-veins.com/wow-forever/shaman-class-overview
[iv-res]: https://www.icy-veins.com/wow-forever/restoration-shaman-healer-pve-guide
[wt-forever]: https://www.warcrafttavern.com/forever/guides/shaman/
[f-2365062]: https://us.forums.blizzard.com/en/wow/t/2365062
[f-2366147]: https://us.forums.blizzard.com/en/wow/t/2366147
[f-2365734]: https://us.forums.blizzard.com/en/wow/t/2365734
