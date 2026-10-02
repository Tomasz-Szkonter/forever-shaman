---
title: Testing Queue
description: Every open question in the wiki, deduplicated and sorted by how it can be resolved, with concrete in-game test procedures.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🧪 Testing Queue

This page collects every **🔍 To Verify** item from the wiki, deduplicated and sorted by **how it can be resolved**. It is the to-do list for anyone in the beta.

> **Build:** `1.60.1.70170` · Beta cap **level 30**: 21 talent points, up to **26** with the Legacy *Talented* perk.
> **How to report:** use the build number, target (dummy or mob level), sample size, talents, and gear/spell power. Then update the page with ✅ `(build, date)` and tick the box here. See [Contributing](../CONTRIBUTING.md#6-workflow).
> ⭐ = high impact (changes how people play or invalidates a lot of wiki text).

## 📑 Contents
- [🎮 A. Testable in the beta now (level 30 or lower)](#-a-testable-in-the-beta-now-level-30-or-lower)
- [📊 B. Resolvable by datamining](#-b-resolvable-by-datamining)
- [⏳ C. Blocked until the level cap rises](#-c-blocked-until-the-level-cap-rises)
- [📰 D. Needs manual reading or official answers](#-d-needs-manual-reading-or-official-answers)
- [🏛️ E. Classic baseline disputes (test on Classic Era)](#️-e-classic-baseline-disputes-test-on-classic-era)

---

## 🎮 A. Testable in the beta now (level 30 or lower)

### Totems and mana

- [ ] ⭐ **Totemic Recall refund on 70170.** Blizzard says it was fixed on Oct 1, but the new helper spell 1323420 has an energize base of 0.
  *Test:* drop 1–4 totems with known costs, note your mana, cast Recall, and log the mana gained. Is it 25% of base cost or of the cost after Totemic Focus? Also record **Recall's own mana cost and cooldown**, which no source lists.
  *Pages:* [Totem Mechanics](mechanics/Totem-Mechanics.md#totemic-recall) · [Mana Regeneration](mechanics/Mana-Regeneration.md) · [Spells and Ranks](reference/Spells-and-Ranks.md#totemic-recall) · [Known Beta Bugs](forever/Known-Beta-Bugs.md)
- [ ] ⭐ **Call of the Elements cost and timing.** Does it charge each totem's mana? Does Totemic Focus discount the totems it places, and Totemic Projection's cost? What is the **totem GCD**? (A tester's timeline implies 1 s.)
  *Test:* record mana before and after a 4-totem Call with 0/5 and 5/5 Totemic Focus. Time manual drops with a combat log.
  *Pages:* [Totem Mechanics](mechanics/Totem-Mechanics.md#totem-bar) · [Restoration Talents](talents/Restoration-Talents.md#totemic-focus)
- [ ] **Totemic Projection.** What is the exact mana cost at your level (25% of base mana; 230 was seen on stream)? Does **Fire Nova** go off at the *projected* Fire totem?
  *Pages:* [Totem Mechanics](mechanics/Totem-Mechanics.md#totemic-projection)
- [ ] **Totem range and reach.** Do *all* friendly totems reach 30 yd (Totemic Mastery is now baseline)? Are buff totems party-only, or party and raid? Only resistance totems are reported to reach the raid.
  *Pages:* [Totems](reference/Totems.md) · [Totem Mechanics](mechanics/Totem-Mechanics.md)
- [ ] **Totem pulse intervals in Forever.** Healing Stream (L20) and Mana Spring (L26) were 2 s in Classic. Tremor (L18) is disputed between 4 s and 5 s.
  *Test:* combat-log timestamps of 10+ consecutive pulses.
- [ ] ⭐ **Can totem pulses crit?** DoT and HoT crits are confirmed, but totem-cast effects are not mentioned anywhere. Watch the combat log for Healing Stream (L20), Searing (L10) and Magma (L26) crits.
  *Pages:* [Spell Attack Table](mechanics/Spell-Attack-Table.md) · [Healing Mechanics](mechanics/Healing-Mechanics.md#healing-stream-totem)
- [ ] **Mana Tide Totem tick count**: 4 or 5 ticks in 12 s? R1 is reachable at level 25 (16-point talent).
  *Pages:* [Healing Mechanics](mechanics/Healing-Mechanics.md#mana-tide-totem)
- [ ] **Stoneclaw "taunt" behavior.** A tester says it builds passive threat on the totem rather than taunting.
  *Pages:* [Threat](mechanics/Threat.md)
- [ ] **Totem items.** Are they still four separate bag items, or one tool? Are the totem quests still required before you can cast an element's totems? And what are the *Call of Air* (L30) quest steps for each race?
  *Pages:* [Class Quests](reference/Class-Quests.md)
- [ ] **Single-totem dismiss.** Is there any way besides right-clicking the totem frame? The `/click TotemFrameTotemN RightButton` macro is broken. Can the Totem Bar or Call spells be driven by macro?
  *Pages:* [Macros](reference/Macros.md)

### Water Shield, regen, and the 5-second rule

- [ ] ⭐ **Water Shield after the Oct 1 fix.** Is the 15 s cooldown in client data live, or is it GCD-only? At 3, 2 and 1 charges, does each globe return 2% of max mana, or really 1% as the tooltip says? What does it cost to cast?
  *Test:* note max mana, take hits, and log each globe's mana gain.
  *Pages:* [Healing Mechanics](mechanics/Healing-Mechanics.md#water-shield) · [Mana Regeneration](mechanics/Mana-Regeneration.md) · [Restoration Talents](talents/Restoration-Talents.md#water-shield) · [Known Beta Bugs](forever/Known-Beta-Bugs.md)
- [ ] **Spirit regen formula.** Classic is disputed between `15 + Spirit/5` and `17 + Spirit/5` per 2 s tick, and an unverified claim says Forever nerfed out-of-casting Spirit regen.
  *Test:* stand outside the 5SR at a known Spirit and log the tick sizes at two different Spirit values.
  *Pages:* [Mana Regeneration](mechanics/Mana-Regeneration.md) · [Forever System Changes](forever/Forever-System-Changes.md)
- [ ] **Regen while casting.** Does Mindfulness stack with Improved Stormstrike and the Polished Driftwood Icon (additive, capped)? Does "regen while casting" cover only Spirit regen?
- [ ] **Clearcasting and the 5SR.** Does a free cast still not restart the 5-second rule?

### Elemental

- [ ] ⭐ **Call of Thunder in 70170.** The tooltip is blank. Does it still give +3% crit to Lightning Bolt and Chain Lightning?
  *Test:* about 1,000 Lightning Bolts with and without the talent on a same-level dummy, then compare crit rates. A difference of about 3 percentage points should show at that sample size.
  *Pages:* [Elemental Talents](talents/Elemental-Talents.md#call-of-thunder) · [Elemental Mechanics](mechanics/Elemental-Mechanics.md#call-of-thunder)
- [ ] **Elemental Fury per rank.** It's reachable at 1/5 with 26 points. Is a crit at 1/5 worth 160% instead of 150%? Does it apply to Flame Shock **tick** crits?
  *Pages:* [Elemental Talents](talents/Elemental-Talents.md#elemental-fury) · [Shock Mechanics](mechanics/Shock-Mechanics.md)
- [ ] ⭐ **Flame Shock DoT behavior.** Confirm the ticks can crit. Does the DoT recalculate when your spell power changes mid-DoT (use Blood Fury or a trinket), or does it snapshot? Repeat the **Elemental Devastation** test: ticks reportedly don't proc it.
  *Pages:* [Shock Mechanics](mechanics/Shock-Mechanics.md#flame-shock) · [Known Beta Bugs](forever/Known-Beta-Bugs.md)
- [ ] **Lightning Overload** (21-point talent). Can the copies crit? Do they trigger Clearcasting or Elemental Devastation? Do they really generate no threat? Do they get half the spell power?
  *Pages:* [Elemental Mechanics](mechanics/Elemental-Mechanics.md#lightning-overload)
- [ ] **Flame Shock R1 direct damage.** DB2 has a base of 20, but WCLBox shows 24. Read the tooltip, then hit a dummy with no spell power.
  *Pages:* [Spells and Ranks](reference/Spells-and-Ranks.md#flame-shock)
- [ ] **Shamanistic Focus and Convection.** Do the shock mana reductions stack additively (−55%) or multiplicatively?

### Enhancement

- [ ] ⭐ **Windfury Weapon internal cooldown.** Classic Era has 1.5 s. R1 can be learned at level 30.
  *Test:* log 200+ procs. Do any two procs land within 1.5 s? Do you get 2 extra attacks per proc? Do crits on the extra attacks trigger Flurry?
  *Pages:* [Weapon Imbues](mechanics/Weapon-Imbues.md#windfury-weapon) · [Enhancement Mechanics](mechanics/Enhancement-Mechanics.md#flurry)
- [ ] ⭐ **Maelstrom Weapon.** You can take 1/5 with 26 points.
  *Per-stack test:* at 1/5 with 5 stacks, a Lightning Bolt cast of **2.0 s** means 4% *per stack*; 2.4 s means 4% total.
  *Proc model:* count procs per melee hit on a slow 2H and on a fast weapon. Equal procs per hit means a flat chance; equal procs per minute means PPM.
  *Pages:* [Enhancement Mechanics](mechanics/Enhancement-Mechanics.md#maelstrom-weapon) · [Enhancement Talents](talents/Enhancement-Talents.md#maelstrom-weapon)
- [ ] **Stormstrike +20%.** Is it a debuff on the target (client data) or a buff on you (one guide)? Does another Shaman's Lightning Bolt benefit from it?
  *Pages:* [Enhancement Mechanics](mechanics/Enhancement-Mechanics.md#stormstrike)
- [ ] **Improved Stormstrike reset.** Does it fire when the *target* dodges or parries you, or when *you* dodge or parry? The "useless on bosses" argument depends on the answer.
- [ ] **Mental Quickness: 30% or 100% of Intellect?** Also, does Ancestral Knowledge's +Intellect feed Mental Dexterity and Mental Quickness? Does Blood Fury's +10% spell power multiply them?
  *Test:* compare the character-sheet values with the talents on and off.
  *Pages:* [Stat Mechanics](mechanics/Stat-Mechanics.md) · [Enhancement Talents](talents/Enhancement-Talents.md#mental-quickness)
- [ ] **Spirit Weapons ±30% threat.** Does it apply to spells or only to melee? What is the parry chance? Use a threat meter.
- [ ] **Flurry 0.5 s charge lockout**: still present in Forever?
- [ ] **Lightning Shield**: can it crit?
- [ ] **Dual wield**: check your weapon skills and spellbook at level 30. Is it absent?

### Healing

- [ ] **Downranking penalty.** How far below your level does a rank have to be? How much spell power does it lose, and how much proc chance (Ancestral Healing, Clearcasting, Lightning Overload)?
  *Test:* cast Healing Wave and Lightning Bolt R1 and R3 at level 30 with and without +spell power gear.
  *Pages:* [Spell Coefficients](mechanics/Spell-Coefficients.md) · [Forever System Changes](forever/Forever-System-Changes.md)
- [ ] **Sub-level-20 coefficient penalty removed?** This is derived from DB2. Lightning Bolt R1 should gain 42.9% of your spell power, versus 12.3% in Classic.
- [ ] **Ancestral Healing** from HoT crits.

### Attack tables, stats, racials

- [ ] ⭐ **Spell and melee hit tables under unified hit.** Is spell miss still 4/5/6/17% at +0/+1/+2/+3 levels?
  *Test:* at level 30, fight level-33 mobs and log miss, glancing and crit rates. Does **Tidal Focus** +hit reduce melee *and* spell misses?
  *Pages:* [Spell Attack Table](mechanics/Spell-Attack-Table.md) · [Melee Attack Table](mechanics/Melee-Attack-Table.md)
- [ ] **Racials under unified hit/crit.** Does the Tauren +1% hit count for spells? Does Orc Axe or Dwarf Mace Specialization (+1% crit) apply to spells, and only while that weapon type is equipped? Does Blood Fury raise healing? Record the racial cooldowns.
  *Pages:* [Races and Racials](forever/Races-and-Racials.md)
- [ ] **Ghost Wolf base cast**: 3 s (client) or 2 s (older guides)? Time it without the talent.
- [ ] **Weapon skill vs "Expertise"**: what do items show, and what is the new dodge/parry-reduction stat called?
- [ ] **Haste on gear** and **staff DPS**: watch level 20–30 dungeon loot. Wowhead may still show Classic weapon DPS.

### Threat (needs a threat meter)

- [ ] **Earth Shock** multiplier (×2 in Classic), **Rockbiter** threat and how it scales with weapon speed, **Fire Nova** threat (testers call it massive), and **Natural Grace** vs Earth Shock bonus threat.
  *Pages:* [Threat](mechanics/Threat.md)

### Misc

- [ ] **Imbues on traded weapons.** Imbue a white weapon, trade it, and check whether the imbue stays on the item.
- [ ] **Nature's Swiftness**: is it on the GCD? This decides whether the NS + Healing Wave macro needs one press or two.
- [ ] **🔴 macros** on the [Macros](reference/Macros.md) page: test each one and record the build.
- [ ] **"Earth Shield"**: one forum thread mentions it in the Cooldown Manager. Check what it was referring to.
- [ ] **Cooldown Manager**: does it support Shaman yet?

---

## 📊 B. Resolvable by datamining

All of these can be answered from `https://wago.tools/db2/<Table>/csv?build=1.60.1.70170`. See [Datamining](reference/Datamining.md).

- [ ] ⭐ **Missing rank rows**: Earth Shock R2/R4/R6, Flame Shock R2/R4/R5, Frost Shock R2/R3, Lesser Healing Wave R2–R5, Lightning Shield R1–R6 levels, Flametongue Weapon R2–R5, Chain Heal mana, and Ancestral Spirit ranks (`SpellEffect`, `SpellLevels`, `SpellPower`). → [Spells and Ranks](reference/Spells-and-Ranks.md)
- [ ] ⭐ **Missing Forever coefficients** (`EffectBonusCoefficient`): Frost Shock, Lesser Healing Wave, Chain Heal, Lightning Shield, Searing/Magma/Healing Stream Totems, Fire Nova, Frostbrand, Flametongue Weapon, Healing Wave R5–R9, and the middle shock ranks. → [Spell Coefficients](mechanics/Spell-Coefficients.md)
- [ ] ⭐ **Chain Lightning jump falloff** (`SpellEffect.EffectChainAmplitude`; Classic is 0.7) and what WCLBox's "57.1%–51.7%" means.
- [ ] **Mana costs no source lists**: Totemic Recall (and its cooldown), Water Shield, Nature's Swiftness, Rage of the Farseer, Windfury Totem ranks, Fire Nova ranks.
- [ ] **Fire Nova damage per rank**: sources disagree (R1 53–62 vs 48–56).
- [ ] **Tranquil Air Totem**: is it in `SkillLineAbility` for lines 373/374/375 in 70170?
- [ ] **Maelstrom Weapon proc logic**: find the controlling spell or PPM entry (`SpellAuraOptions`, `SpellProcsPerMinute`). Also **Frostbrand** PPM.
- [ ] **Flametongue Weapon formula**: speed scaling, the new flat term `$10444m1`, and its coefficient.
- [ ] **Hidden talent-flavour spells**: 1214302 "Improved Lightning Bolt/Lava Burst", 1220642 "Improved Riptide/Chain Heal/Earth Shield", 1309442 "Storm's Grasp", and 1309539 "Tidebringer's Claw". What do they do, and what grants them?
- [ ] **Earthfury, Ten Storms and The Five Thunders bonuses** (`ItemSet`, `ItemSetSpell`).
- [ ] **31-point actives before level 40**: Lava Burst and Riptide R1 have spell level 40. Can a level-35 character with 26 + 5 points take them? Check `SpellLevels` and the trait node requirements.
- [ ] **Build diffs**: 70058 and 70124 (expected to have no Shaman changes), and China beta **70178** (newer than 70170). → [Beta Changelog](forever/Beta-Changelog.md)

---

## ⏳ C. Blocked until the level cap rises

| Unlock | Question | Pages |
|---|---|---|
| **L32** | ⭐ **Windfury Totem:** enchant duration (9 vs 10 s), ICD, AP aura, whether it still takes the main-hand temporary-enchant slot (poisons, stones, your own imbue), and whether it is now a buff | [Weapon Imbues](mechanics/Weapon-Imbues.md#windfury-totem) · [Totems](reference/Totems.md#windfury-totem) |
| **L32** | ⭐ **Chain Lightning** base damage in game. The client shows an R1 of 85–97, a far deeper cut than Lightning Bolt's. Is it a data error or a redesign? Also check jump falloff | [Elemental Mechanics](mechanics/Elemental-Mechanics.md#chain-lightning) |
| **L40** | **Lava Burst R1** (150–193 / 150–192 / 143–185); whether Lava Burst + Flame Shock + Call of Flame stacks additively (+35%) or multiplicatively; whether Call of Thunder, Concussion and Lightning Overload affect it | [Elemental Talents](talents/Elemental-Talents.md#lava-burst) |
| **L40** | **Riptide R1** (484–535 / 486–534 / 485–533); whether the Chain Heal +25% applies only when Chain Heal starts on the Riptide target, and whether Riptide is consumed; whether Water Shield triggers on HoT crits | [Restoration Talents](talents/Restoration-Talents.md#riptide) |
| **L40** | Chain Heal coefficient and party-only jump rule; dual spec cost | [Healing Mechanics](mechanics/Healing-Mechanics.md#chain-heal) |
| **L42+** | ⭐ **Windfury vs Grace of Air**: which effect wins now that they no longer stack, and does a lingering Windfury enchant get removed? (Totem twisting) | [Totem Mechanics](mechanics/Totem-Mechanics.md#totem-twisting) |
| **L50** | **Tranquil Air Totem**: is it on the trainer? | [Totems](reference/Totems.md#tranquil-air-totem) |
| **L60** | Spell and melee hit caps vs level-63 bosses; level-60 builds; Earthfury and Ten Storms in game; Elemental Fury vs the PvP crit rule | [Spell Attack Table](mechanics/Spell-Attack-Table.md) |

---

## 📰 D. Needs manual reading or official answers

- [ ] **Wowhead's Oct 1 datamine article** ([383219](https://www.wowhead.com/forever/news=383219/datamined-class-changes-for-wow-forever-build-on-october-1st)), which scripts couldn't read. Reconcile it with the [Beta Changelog](forever/Beta-Changelog.md).
- [ ] **forever-bugs [#134](https://github.com/ClassicWoWCommunity/forever-bugs/issues/134)** (Water Shield): which way was it fixed? Also: is **[#163](https://github.com/ClassicWoWCommunity/forever-bugs/issues/163)** (Revelation) fixed or closed as intended?
- [ ] **Flame Shock ticks not triggering Elemental Devastation**: ask for a blue answer on whether that's intended.
- [ ] **Shenthul**: which class does "Shenthul in Orgrimmar will now train Windshaper Skyborne" refer to?
- [ ] **Legacy *Talented* perk**: which challenges grant it, from what level, and is it available at launch? Also look for **riding level and cost** and **dual spec cost**.
- [ ] **Reddit, Discords** (Earthshrine, Shaman Classic), **Icy Veins** (blocked to scripts): do a manual pass. Also find out which server **"Shamancord"** is.
- [ ] **warcraft.wiki.gg race table**: does it still list Undead Shaman?
- [ ] **PvP crit halving**: player finding only; watch for a blue post.
- [ ] **Relics**: 8 or 10 Shaman relics, their drop sources and item IDs; **PvP set** bonus text.
- [ ] **Elemental Mastery**: watch for its return as a trainer spell or Legacy perk.

---

## 🏛️ E. Classic baseline disputes (test on Classic Era)

These are open even for Classic. A Classic Era character can settle them.

- [ ] Spirit regen constant: `15` or `17 + Spirit/5`
- [ ] Intellect per 1% spell crit (59.5 vs 59.2), base spell crit (2.2% vs 2.3%), base melee crit
- [ ] Agility per 1% dodge (20 vs 25), and the AP formula constant
- [ ] Windfury Totem enchant duration (9 vs 10 s), and Windfury Weapon's 2 extra attacks vs DB2's "+1 extra attack"
- [ ] Do crits on Windfury extra attacks trigger Flurry (a 1.12 bug)?
- [ ] Tremor pulse (4 vs 5 s), Mana Tide tick count (4 vs 5)
- [ ] Rockbiter AP (653 in the tooltip vs 554 in DB2) and how its threat scales with weapon speed
- [ ] Frostbrand proc rate (PPM or flat), Stormstrike cost (15% vs 21% of base mana)
- [ ] Binary or partial resists for Earth Shock and Frost Shock; can Lightning Shield crit?

→ Pages: [Stat Mechanics](mechanics/Stat-Mechanics.md) · [Weapon Imbues](mechanics/Weapon-Imbues.md) · [Totems](reference/Totems.md) · [Threat](mechanics/Threat.md) · [Spell Attack Table](mechanics/Spell-Attack-Table.md)
