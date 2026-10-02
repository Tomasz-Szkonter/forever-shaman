---
title: Weapon Imbues
description: How Windfury Weapon, Windfury Totem, Flametongue, Rockbiter and Frostbrand work in Classic Era and what WoW Forever changed.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🪓 Weapon Imbues

Shaman weapon imbues are temporary weapon enchants you cast on yourself. This page explains each imbue and the Windfury Totem: proc chances, the internal cooldown, how the extra attacks work, and how they interact with each other. It starts from the Classic Era baseline, then covers Forever's changes. Rank tables live on [Spells and Ranks](../reference/Spells-and-Ranks.md).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified, see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

> ⚠ **Beta cap is level 30.** Windfury Weapon R1 (L30) **can** be tested now. Windfury Totem (L32) **cannot**: its values are client data only.

## 📑 Contents
- [General Rules](#-general-rules)
- [Windfury](#-windfury)
  - [Windfury Weapon](#windfury-weapon)
  - [Windfury Totem](#windfury-totem)
- [The Other Imbues](#-the-other-imbues)
  - [Flametongue Weapon](#flametongue-weapon)
  - [Rockbiter Weapon](#rockbiter-weapon)
  - [Frostbrand Weapon](#frostbrand-weapon)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 📏 General Rules

**Classic baseline**
- 🟡 **One temporary enchant per weapon.** Windfury, Rockbiter, Flametongue, Frostbrand, sharpening stones and weapon oils all overwrite each other ([Blizzard EU forum](https://eu.forums.blizzard.com/en/wow/t/windfury-weapon-buffs/417556); [Warcraft Tavern Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/)).
- 🟢 Imbues last **5 min** ([WH 16362](https://www.wowhead.com/classic/spell=16362)).
- 🟢 **No dual wield** in Classic: Shamans couldn't dual wield before 2.0.1, so imbues go on a two-hander or a one-hander with a shield ([warcraft.wiki.gg Windfury Weapon](https://warcraft.wiki.gg/wiki/Windfury_Weapon)).

**In Forever**
- 🟢 All imbues last ~~5 min~~ → **60 min**. Mana costs and learn levels are unchanged ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman)).
- 🟡 **Still no dual wield**, and two-handed axes and maces are now **baseline** for Shaman (the talent is gone). Dual wield wasn't available in the BlizzCon L38 demo either ([Zockify](https://www.zockify.com/forever/shaman/); [Wowhead: Enhancement only uses 2-handed weapons](https://www.wowhead.com/forever/news=383200/enhancement-only-uses-2-handed-weapons-in-wow-forever-enhancement-shaman)).
- 🟡 **Elemental Weapons** (Enhancement, row 3, 3 ranks): Rockbiter AP +7/13/20%, Windfury Weapon effect +13/27/40%, Flametongue and Frostbrand damage +5/10/15%. It does **not** affect Windfury Totem ([wowforevertalent.com](https://wowforevertalent.com/shaman/reference/); [classicwow.gg](https://classicwow.gg/forever/guides/shaman)).
- 🔴 **Trading imbued weapons:** one player claims an imbue on a white, non-soulbound weapon **stays on the item** when traded, and suggests handing Windfury-imbued weapons to a Fury Warrior. Others say imbues are personal buffs. **Untested** ([thread 2368409](https://us.forums.blizzard.com/en/wow/t/2368409)).

---

## 🌀 Windfury

### Windfury Weapon

**Classic baseline**

| Rank | Level | Mana | Bonus AP | Source |
|---|---|---|---|---|
| R1 | 30 | 90 | 104 | 🟢 [WH 8232](https://www.wowhead.com/classic/spell=8232) |
| R2 | 40 | 115 | 222 | 🟢 [WH 8235](https://www.wowhead.com/classic/spell=8235) |
| R3 | 50 | 140 | 316 | 🟢 [WH 10486](https://www.wowhead.com/classic/spell=10486) |
| R4 | 60 | 165 | 333 | 🟢 [WH 16362](https://www.wowhead.com/classic/spell=16362) |

- 🟢 Each hit has a **20% chance** to grant **2 extra attacks** that carry the bonus attack power (AP) ([WH 16362](https://www.wowhead.com/classic/spell=16362)).
- 🟡 **It can't proc from itself**, and can't proc twice in the same chain of extra attacks ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Weapon); [magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem)).
- **Internal cooldown (ICD)**, a hidden timer after a proc during which it can't proc again. This is disputed:
  - 🟢 **Classic Era 1.15 has a 1.5 s ICD.** The enchant procs spell 439431, which has `ProcCategoryRecovery = 1500`, `ProcChance = 20` and the tooltip "(Proc chance: 20%, 1.5s cooldown)" ([DB2 SpellAuraOptions](https://wago.tools/db2/SpellAuraOptions?product=wow_classic_era); [WH 439431](https://www.wowhead.com/classic/spell=439431)). 🟡 A 2023 test agrees ("Confirmed 12/01/2023 by Zirene", [magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem)).
  - 🟡 warcraft.wiki.gg says "There is no internal cooldown on Windfury Weapon", which probably describes original 1.12 ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Weapon)).
  - This wiki uses **1.5 s** as the Classic baseline, since Forever forked from 1.15.
- 🟡 **Flurry interaction:** patch 2.0.1 "Fixed an issue where extra attacks from Windfury Weapon would not proc Flurry when they crit". So in 1.12, crits on Windfury extra attacks **did not** trigger Flurry. Whether Classic Era reproduces this is unknown ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Weapon)).
- 🟡 Patch history: 1.11.0 cut the AP bonus by 50%; 1.4.0 fixed a bug that granted too many extra attacks ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Weapon)).
- 🟡 **Damage of one Windfury attack**, from the Hunter wiki's Classic formulas ([forever-hunter Attack Formulas](https://github.com/classic-hunter/forever-hunter/wiki/Attack-Formulas)):

```
WindfuryHit = (mAP + WindfuryAP) / 14 × MHSwingSpeed + MHAverageDamage
```

  `mAP` is your melee attack power, `WindfuryAP` the imbue's bonus, `MHSwingSpeed` the weapon speed in seconds. In Classic, 14 AP = +1 weapon DPS ([warcraft.wiki.gg Attack power](https://warcraft.wiki.gg/wiki/Attack_power)). Slow weapons gain the most, which is why slow two-handers suit Windfury.

**In Forever**
- 🟢 Still 20% for **2 extra attacks**. AP R1 104, R2 ~~222~~ → **221**, R3 ~~316~~ → **315**, R4 333 ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-weapon)).
- 🟢 Duration ~~5 min~~ → **60 min**.
- 🟢 **New clause:** on your main hand it "**disables any benefit you personally receive from Windfury Totem**" ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-weapon)). The Shaman can't stack the imbue with the totem; party members still get the totem.
- No source reports a change to the proc chance or ICD. The 1.5 s ICD is assumed to carry over but hasn't been measured. **R1 is testable at level 30.**

### Windfury Totem

**Classic baseline**

| Rank | Level | Mana | Bonus AP | Source |
|---|---|---|---|---|
| R1 | 32 | 115 | 122 | 🟢 [WH 8512](https://www.wowhead.com/classic/spell=8512) |
| R2 | 42 | 175 | 229 | 🟢 [WH 10613](https://www.wowhead.com/classic/spell=10613) |
| R3 | 52 | 250 | 315 | 🟢 [WH 10614](https://www.wowhead.com/classic/spell=10614) |

- 🟢 Enchants the **main-hand weapon only** of **party members within 20 yd**. Each hit has a **20% chance** to grant **1 extra attack** with the bonus AP. Totem: 2 min, 5 HP ([WH 10614](https://www.wowhead.com/classic/spell=10614); [warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Totem)).
- 🟢 The totem **pulses every 5 s** to re-apply the enchant (DB2 `EffectAuraPeriod 5000`, [wago.tools](https://wago.tools/db2/SpellEffect?product=wow_classic_era)).
- **Enchant duration** is disputed: 🟡 **10 s** ([Icy Veins](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities)) vs **9 s** ([warcraft.wiki.gg Totem Twisting](https://warcraft.wiki.gg/wiki/Totem_Twisting)). DB2 doesn't store it.
- 🟢🟡 **How the proc works** (spell 10610, [magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem) + DB2):
  1. It grants 1 extra attack and an **AP aura lasting 1.5 s with 2 charges**.
  2. Each melee swing uses up a charge.
  3. **The swing that triggered the proc doesn't get the AP**, because its damage was already calculated.
  4. From a normal swing the aura is up for about 400–800 ms (Classic processes damage in 400 ms batches). From an instant attack it can last up to 1.5 s.
- 🟡 **Triggers:** main-hand white swings, on-next-swing attacks (Heroic Strike, Cleave), Slam and single-target instants. Multi-target instants proc once. **Off-hand swings don't trigger it.** Other extra-attack effects (Sword Specialization, Hand of Justice) can chain into it, but it can't proc twice in one chain. **ICD 1.5 s** ([magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem)).
- 🟡 **It takes the main-hand temporary-enchant slot:** rogues lose their main-hand poison and warriors put stones on the off-hand ([AskMrRobot forum](https://forums.askmrrobot.com/t/how-are-consumable-sharpening-stones-working/9049)). It probably overwrites the Shaman's own main-hand imbue the same way (unconfirmed).
- 🟢 **Improved Weapon Totems:** +15/30% Windfury Totem AP ([WH 29193](https://www.wowhead.com/classic/spell=29193)).

**In Forever**
- 🟢 AP ~~122 / 229 / 315~~ → **95 / 179 / 246** (about **−22%**). Range ~~20~~ → **30 yd**, totem ~~2~~ → **5 min**. Still a 20% chance of 1 extra **main-hand** attack ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-totem)).
- 🔵 **No stacking:** Windfury, Grace of Air and Tranquil Air Totems "no longer stack together even if used by different Shamans in the same group" ([dev notes Sept 24](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)). Classic totem twisting appears to be dead; see [Totem Twisting](Totem-Mechanics.md#totem-twisting).
- 🔵 Flametongue Totem **no longer stacks with Windfury Totem**.
- 🔵 The buff now shows as "Windfury Totem" instead of "Windfury Totem Passive" (same notes). 🟢 Tooltips were re-pointed to a different aura spell for the radius ([wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170)).
- 🟢 **Improved Weapon Totems was removed** and Elemental Weapons doesn't affect the totem, so nothing boosts it ([wowforevertalents.com](https://wowforevertalents.com/shaman/); 🟡 [classicwow.gg](https://classicwow.gg/forever/guides/shaman)).
- 🟢 Your own main-hand Windfury Weapon **disables your personal Windfury Totem benefit** (see above).
- 🟡 One player says Windfury **and poisons stacked** in the BlizzCon L38 demo ([thread 2361624](https://us.forums.blizzard.com/en/wow/t/2361624)). In Classic the totem enchant replaces a poison, so if this is true the totem may no longer use the temporary-enchant slot. Single report from a pre-beta build.
- ⚠ **Untestable in beta:** Windfury Totem is first available at **L32**, above the level-30 cap ([thread 2353663](https://us.forums.blizzard.com/en/wow/t/2353663)).

---

## 🔥 The Other Imbues

### Flametongue Weapon

**Classic baseline**
- 🟢 "Each hit causes X to Y additional Fire damage, **based on the speed of the weapon**." R1 6–18, R2 9–26, R3 14–42, R4 22–69, R5 31–95, **R6 37–112** ([WH 16342](https://www.wowhead.com/classic/spell=16342)).
- 🟡 The R6 range implies about **28 × weapon speed** per hit, clamped to roughly 1.3–4.0 s weapon speeds. This is derived from the tooltip ratio (112 / 37 ≈ 4.0 / 1.32), not a known server formula.
- 🔴 Spell-power coefficient: DB2 shows **0**, but the 1.15 enchant row now points to 2024 Season of Discovery spells, so that value is unreliable. A 2007 estimate says 10% ([wago.tools](https://wago.tools/db2/SpellEffect?product=wow_classic_era); [Lowyat 2007](https://forum.lowyat.net/topic/405783)).
- 🟢 Flametongue **Totem** (for comparison): R4 deals about `(1217/100) × speed` per hit for speeds 1.3–4.0 ([WH 16387](https://www.wowhead.com/classic/spell=16387)).

**In Forever**
- 🟢 Damage slightly lower: R1 ~~5.7–17.6~~ → **4.71–18**, R6 ~~36.5–112.4~~ → **35–112**, still scaling with weapon speed ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-weapon)).
- 🟢 **New clause:** on your main hand it "**disables any benefit you personally receive from Flametongue Totem**".
- 🔵 Flametongue Totem no longer stacks with Flametongue Weapon ([dev notes Sept 24](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)).
- 🟡→fixed **It scales with spell power.** The tooltip didn't update with spell power, but the damage **did** go up. This was shown on a 2.8-speed weapon at 0 vs 26 spell power, and the tooltip bug is marked Fixed ([forever-bugs #80](https://github.com/ClassicWoWCommunity/forever-bugs/issues/80)).
- 🟢 In 70170 the tooltip gained a **flat additive term** (`+($10444m1)` / `+($29469m1)` / `+($29470m1)`), pulled from the Flametongue Attack spell. It's the only Shaman skill-line change between 70124 and 70170 ([wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170)).
- 🟡 Flametongue procs **don't trigger Elemental Devastation** ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).

### Rockbiter Weapon

**Classic baseline**
- 🟢 "Increasing melee attack power by X and allowing melee attacks to cause additional threat." AP by rank: 50 / 79 / 118 / 194 / 355 / 522 / **653** ([WH 16316](https://www.wowhead.com/classic/spell=16316)).
- 🔴 The DB2 passive (16313) stores **+554 AP**, not the 653 on the tooltip. Unresolved.
- 🟡 Elemental Weapons: +7/14/20% Rockbiter AP ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Elemental_Weapons_(Classic))).
- 🟡 Threat value R7 = **72**. How it scales with weapon speed is disputed. The most consistent reading is 72 × weapon speed per hit, which works out to 72 threat per second at 100% hit ([Warcraft Tavern threat table](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/); [Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/)). See [Threat](Threat.md).

**In Forever**
- 🟢 **Only the duration changed** (60 min). AP values and the "additional threat" text are unchanged ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-rockbiter-weapon)).
- 🟢 Elemental Weapons rank 2 reads **13%** (Classic 14%); ranks 1 and 3 match ([wowforevertalent.com](https://wowforevertalent.com/shaman/reference/)).
- 🟢 **Spirit Weapons** (new Enhancement talent): threat **+30% with Rockbiter active**, −30% without ([wowforevertalents.com](https://wowforevertalents.com/shaman/)). See [Spirit Weapons](Enhancement-Mechanics.md#spirit-weapons).
- 🟡 Testers say Rockbiter and Earth Shock have high threat modifiers, enough to pull threat off tanks in low-level dungeons ([thread 2365062](https://us.forums.blizzard.com/en/wow/t/2365062)).

### Frostbrand Weapon

**Classic baseline**
- 🟢 R5: "Each hit has a chance of causing **187** additional Frost damage and slowing … by **25% for 8 sec**" ([WH 16356](https://www.wowhead.com/classic/spell=16356)).
- 🟢 Spell-power coefficient **0.10** (DB2 16353). Elemental Weapons +5/10/15% damage.
- 🟡 Since patch 1.6.0, slow-immune targets still take the damage ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Frostbrand_Weapon)).
- 🔴 **Proc rate unknown.** The client doesn't store it, and the often-quoted "9 PPM" (procs per minute) is unconfirmed for vanilla.

**In Forever**
- 🟢 Damage ~~48 / 77 / 124 / 166 / 187~~ → **45 / 72 / 117 / 159 / 169**. 25% slow for 8 s unchanged. 60 min ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-frostbrand-weapon)).
- 🟡 Frostbrand procs **don't trigger Elemental Devastation** ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).

---

## 📋 Quick Reference

| Imbue | Classic Era | Forever | Conf. |
|---|---|---|---|
| All imbues: duration | 5 min | **60 min** | 🟢 |
| All imbues: slots | 1 temp enchant per weapon, no dual wield | unchanged; 2H axes/maces baseline | 🟡 |
| Windfury Weapon | 20%, 2 extra attacks, +333 AP (R4), 1.5 s ICD (Era) | unchanged values (±1 AP); **disables your own WF Totem buff** | 🟢 |
| Windfury Totem | MH only, 20%, 1 extra attack, 315 AP (R3), pulse 5 s, 20 yd party | AP **246** (−22%), 30 yd, 5 min; **no stacking** with GoA / Tranquil Air; L32, untestable | 🟢 / 🔵 |
| WF Totem proc aura | 1.5 s, 2 charges; triggering swing excluded | no data | 🟢🟡 |
| Flametongue Weapon | R6 37–112, ~28 × speed | R6 **35–112**, scales with SP, new flat tooltip term; **disables your own FT Totem buff** | 🟢 / 🟡 |
| Rockbiter Weapon | R7 +653 AP (DB2 554), threat 72 | unchanged; Spirit Weapons +30% threat with it | 🟢 |
| Frostbrand Weapon | R5 187 Frost, 25% slow 8 s, proc rate unknown | R5 **169**, slow unchanged | 🟢 |
| Elemental Weapons | RB 7/14/20%, WF 13/27/40%, FT/FB 5/10/15% | RB 7/13/20%; not WF Totem | 🟢 / 🟡 |

---

## 🔍 To Verify

- [ ] **Windfury Weapon ICD in Forever.** Is it still 1.5 s? R1 is testable at L30. Log proc timings ([DB2 Era](https://wago.tools/db2/SpellAuraOptions?product=wow_classic_era); [magey](https://github.com/magey/classic-warrior/wiki/Windfury-Totem)).
- [ ] **Windfury extra-attack crits and Flurry.** The 1.12 bug said they didn't trigger it; Era and Forever unknown ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Windfury_Weapon)).
- [ ] **WF Weapon extra attacks.** The Classic DB2 aura (16361) shows +1 extra attack while the tooltip says 2. Check how the 2 attacks are produced ([research 04 §5.1](https://wago.tools/db2/SpellEffect?product=wow_classic_era)).
- [ ] **Windfury Totem enchant duration** (9 vs 10 s) and whether the AP aura still has 1.5 s / 2 charges. Needs L32+ ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Totem_Twisting)).
- [ ] **Windfury Totem and poisons / own imbue.** Does the totem still take the main-hand temporary-enchant slot? One BlizzCon-demo report says it stacked with poisons ([thread 2361624](https://us.forums.blizzard.com/en/wow/t/2361624)).
- [ ] **Flametongue Weapon formula.** Speed scaling, the new flat term, and its spell-power coefficient ([forever-bugs #80](https://github.com/ClassicWoWCommunity/forever-bugs/issues/80); [wago](https://wago.tools/db2/Spell/csv?build=1.60.1.70170)).
- [ ] **Frostbrand proc rate**, PPM or flat chance. Not in client data ([WH 16356](https://www.wowhead.com/classic/spell=16356)).
- [ ] **Rockbiter AP.** Tooltip 653 vs DB2 554, and how its threat scales with weapon speed ([Warcraft Tavern](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/)).
- [ ] **Traded imbued weapons** keeping the imbue. Single unconfirmed claim ([thread 2368409](https://us.forums.blizzard.com/en/wow/t/2368409)).
- [ ] **Do imbue procs crit**, and do Forever's crit rules (unified crit, PvP halving) apply to them? No data.

---

## 📚 Sources

- [WCLBox Forever DB](https://wowforever.wclbox.com/en/fashu/shaman) — Forever imbue and Windfury Totem values
- [Blizzard dev notes, Sept 24](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696) — stacking rules, buff renames
- [wago.tools Classic Era DB2](https://wago.tools/db2/SpellAuraOptions?product=wow_classic_era) and [beta 70170](https://wago.tools/db2/Spell/csv?build=1.60.1.70170) — ICD, pulse periods, tooltip diffs
- [Wowhead Classic tooltips](https://www.wowhead.com/classic/spell=16362) — Classic rank values
- [magey Windfury Totem](https://github.com/magey/classic-warrior/wiki/Windfury-Totem) — proc mechanics, ICD test
- [warcraft.wiki.gg Windfury Weapon](https://warcraft.wiki.gg/wiki/Windfury_Weapon), [Windfury Totem](https://warcraft.wiki.gg/wiki/Windfury_Totem), [Frostbrand](https://warcraft.wiki.gg/wiki/Frostbrand_Weapon), [Elemental Weapons (Classic)](https://warcraft.wiki.gg/wiki/Elemental_Weapons_(Classic)), [Totem Twisting](https://warcraft.wiki.gg/wiki/Totem_Twisting) — patch history
- [forever-hunter wiki: Attack Formulas](https://github.com/classic-hunter/forever-hunter/wiki/Attack-Formulas) — Windfury damage formula
- [wowforevertalents.com](https://wowforevertalents.com/shaman/) and [wowforevertalent.com](https://wowforevertalent.com/shaman/reference/) — Elemental Weapons, Spirit Weapons, removed talents
- [classicwow.gg](https://classicwow.gg/forever/guides/shaman) — Elemental Weapons doesn't affect WF Totem
- [forever-bugs #80](https://github.com/ClassicWoWCommunity/forever-bugs/issues/80) — Flametongue spell-power scaling
- Blizzard forum threads [2366738](https://us.forums.blizzard.com/en/wow/t/2366738), [2368409](https://us.forums.blizzard.com/en/wow/t/2368409), [2361624](https://us.forums.blizzard.com/en/wow/t/2361624), [2353663](https://us.forums.blizzard.com/en/wow/t/2353663), [2365062](https://us.forums.blizzard.com/en/wow/t/2365062) — tester reports
- [Icy Veins Classic Enh](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities), [Warcraft Tavern Classic Enh](https://www.warcrafttavern.com/wow-classic/guides/pve-enhancement-shaman/), [AskMrRobot forum](https://forums.askmrrobot.com/t/how-are-consumable-sharpening-stones-working/9049), [Blizzard EU forum](https://eu.forums.blizzard.com/en/wow/t/windfury-weapon-buffs/417556) — enchant-slot rules
- [Zockify](https://www.zockify.com/forever/shaman/), [Wowhead news 383200](https://www.wowhead.com/forever/news=383200/enhancement-only-uses-2-handed-weapons-in-wow-forever-enhancement-shaman) — 2H only, no dual wield
