---
title: Totem Mechanics
description: How Shaman totems work in Classic Era and what WoW Forever changed - range, duration, pulses, stacking, the Totem Bar, Totemic Recall, Totemic Projection and totem twisting.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🗿 Totem Mechanics

This page covers the rules that apply to every totem: one per element, range, pulse timers, threat and crits, plus Forever's new totem tools and stacking rules. It describes the Classic Era baseline first, then what Forever changed. Per-totem ranks and values are on the [Totems](../reference/Totems.md) reference page.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified, see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

> ⚠ **Beta cap is level 30.** Windfury Totem (L32), Grace of Air (L42) and every other totem above level 30 have **not been tested live**. All values for them are client data only.

## 📑 Contents
- [Classic Baseline](#-classic-baseline)
  - [One Totem per Element](#one-totem-per-element)
  - [Range and Party Rules](#range-and-party-rules)
  - [Pulse Intervals](#pulse-intervals)
  - [Totem Threat](#totem-threat)
  - [Fire Totem Damage and Crits](#fire-totem-damage-and-crits)
  - [Totem Tools and Element Assignments](#totem-tools-and-element-assignments)
- [Forever Changes](#-forever-changes)
  - [Range and Duration](#range-and-duration)
  - [Totem Bar](#totem-bar)
  - [Totemic Recall](#totemic-recall)
  - [Totemic Projection](#totemic-projection)
  - [Stacking Rules](#stacking-rules)
  - [Totem Twisting](#totem-twisting)
  - [Flametongue Totem](#flametongue-totem)
  - [Imbues and Your Own Totem Buffs](#imbues-and-your-own-totem-buffs)
  - [Fire Nova](#fire-nova)
  - [Dismissing Totems](#dismissing-totems)
  - [Items That Modify Totems](#items-that-modify-totems)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

---

## 📜 Classic Baseline

### One Totem per Element

- 🟢 Every totem belongs to one of four elements: **Earth, Fire, Water or Air**. You can have **one of each** at a time, so up to 4 totems. Dropping a second totem of the same element replaces the first ([Allakhazam Shaman FAQ](https://wow.allakhazam.com/wiki/Comprehensive_Shaman_FAQ_%28WoW%29); "Tools: Air Totem" etc. on every [Wowhead Classic tooltip](https://www.wowhead.com/classic/spell=10614)).
- 🟢 Almost every totem has **5 HP**, so any hit kills it. Stoneclaw Totem is the exception: R6 has 480 HP ([WH 10614](https://www.wowhead.com/classic/spell=10614), [WH 10428](https://www.wowhead.com/classic/spell=10428)).

### Range and Party Rules

- 🟢 Buff totems affect **party members only** (not the whole raid) within **20 yd** (Wowhead tooltips; DB2 SpellRadius index 9 = 20 yd, [wago.tools](https://wago.tools/db2/SpellEffect?product=wow_classic_era)).
- 🟡 **Totemic Mastery** (Restoration talent) raises the range of totems that affect friendly targets to **30 yd** ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Totemic_Mastery)).
- 🟢 Tremor Totem already reaches **30 yd** without the talent (DB2 radius index 10, [WH 8143](https://www.wowhead.com/classic/spell=8143)).

### Pulse Intervals

Most totems don't apply their effect constantly. They **pulse**: every few seconds the totem re-applies its buff or effect to everyone in range. Pulse timing matters for things like Tremor (how long a fear lasts before it's broken) and Windfury twisting.

| Totem | Pulse | Conf. | Source |
|---|---|---|---|
| Windfury Totem | **5 s** (enchant lasts about 10 s, see [Weapon Imbues](Weapon-Imbues.md#windfury-totem)) | 🟢 | DB2 `EffectAuraPeriod 5000` on 8515/10609 ([wago.tools](https://wago.tools/db2/SpellEffect?product=wow_classic_era)) |
| Mana Spring | **2 s** (R4: 10 mana per tick = 25 MP5) | 🟢 | DB2 10494; [WH 10497](https://www.wowhead.com/classic/spell=10497) |
| Healing Stream | **2 s** (R5: 14 HP per tick) | 🟢 | DB2 10461 |
| Magma Totem | **2 s**, 8 yd, 20 s | 🟢 | DB2 10582/8188; [WH 10587](https://www.wowhead.com/classic/spell=10587) |
| Mana Tide | **3 s**, 12 s duration | 🟢 | DB2 17360; [WH 17359](https://www.wowhead.com/classic/spell=17359) |
| Tremor Totem | **4 s** (DB2) vs **5 s** (Icy Veins) | 🟢 / 🟡 disputed | DB2 passive 8145; [Icy Veins Classic Enh](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities) |
| Poison / Disease Cleansing | **5 s** per Icy Veins; not checked in DB2 | 🟡 | [Icy Veins Classic Enh](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities) |
| Grounding Totem | re-arms **every 10 s** (absorbs one harmful single-target spell; ignores AoE) | 🟢 | DB2 passive 8179; [WH 8177](https://www.wowhead.com/classic/spell=8177) |
| Searing Totem | one bolt per **2.2 s** cast, 20 yd single target | 🟢 | DB2 SpellCastTimes 24; [WH 10438](https://www.wowhead.com/classic/spell=10438) |
| Fire Nova Totem | explodes **4 s** after placement (unless killed), 10 yd | 🟢 | [WH 11315](https://www.wowhead.com/classic/spell=11315) |

### Totem Threat

- 🟡 Totems **do not generate threat for the Shaman**: "Totems can't deal threat for you." Healing Stream, Mana Spring and Mana Tide generate **0 threat** ([Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/); [Warcraft Tavern threat table](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/)).
- 🟡 Stoneclaw Totem has a taunt-like effect worth about 170 threat per pulse, unconfirmed ([Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/)).
- See [Threat](Threat.md) for the full threat table.

### Fire Totem Damage and Crits

- 🟡 Fire totems (Searing, Magma, Fire Nova) **can crit and scale with spell damage** ([Warcraft Tavern tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/)).
- 🟢 **Elemental Fury** applies to them: Classic Elemental Fury lists "Searing, Magma, and Fire Nova Totems" alongside Fire/Frost/Nature spells ([WH 16089](https://www.wowhead.com/classic/spell=16089)).
- 🟢 Spell-power coefficients (how much of your spell damage each hit gets) are small: Searing R6 **0.083 per bolt**, Magma R4 **0.033 per pulse**, Fire Nova Totem R5 **0.143** (DB2, see [Spell Coefficients](Spell-Coefficients.md)).

### Totem Tools and Element Assignments

- 🟢 Each element needs its **totem tool** in your bags ("Tools: Air Totem" on tooltips). The tools come from class quests: Earth at **L4**, Fire at **L10**, Water at **L20**, Air at **L30** 🟡 ([Warcraft Tavern Forever Shaman guide](https://www.warcrafttavern.com/forever/guides/shaman/)). Details on [Class Quests](../reference/Class-Quests.md).
- 🟢 Two element assignments trip people up: **Fire Resistance Totem is a Water totem** and **Frost Resistance Totem is a Fire totem** ([WH 10538](https://www.wowhead.com/classic/spell=10538), [WH 10479](https://www.wowhead.com/classic/spell=10479)). Forever keeps this ([ForeverChanges](https://foreverchanges.pro/spellbook/shaman)).

---

## 🆕 Forever Changes

### Range and Duration

- 🟢 Most buff and utility totems go ~~20 yd / 2 min (1 min for Healing Stream and Mana Spring)~~ → **30 yd / 5 min** ([ForeverChanges](https://foreverchanges.pro/spellbook/shaman); [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman); 🟡 [GameSpot via Yahoo](https://tech.yahoo.com/gaming/articles/wow-forever-shaman-spells-class-153122479.html)).
- 🟡 **Totemic Mastery was removed** from the Restoration tree. Its 30 yd effect is baseline *in effect*, since Forever tooltips read 30 yd. No source says this outright, so treat it as an inference ([wowforevertalents.com](https://wowforevertalents.com/shaman/)).
- 🟡 Resistance totems (Fire, Frost, Nature) now affect "**party and raid members**" ([ForeverTome](https://forevertome.com/guides/shaman)). Whether other buff totems are still party-only is not documented.
- 🟢 **Not** extended: Earthbind (45 s), Grounding (45 s), Searing (30–55 s, 20 yd), Magma (20 s, 8 yd), Stoneclaw and Sentry (unchanged). Mana Tide is 12 s with ~~20~~ → **30 yd** ([ForeverChanges](https://foreverchanges.pro/spellbook/shaman), [WCLBox Mana Tide](https://wowforever.wclbox.com/en/fashu/shaman/shaman-mana-tide-totem)).
- 🟡→🔵 Disease Cleansing Totem lasted only 2 min until a fix on Oct 1 ([forever-bugs #175](https://github.com/ClassicWoWCommunity/forever-bugs/issues/175); [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- No source reports a change to pulse intervals or totem HP. Mana Tide is still a 5-HP totem ([wowforevertalents.com](https://wowforevertalents.com/shaman/)).

### Totem Bar

- 🔵🟢 Forever adds a **Totem Bar** where you preset up to 4 totems, plus three spells that drop a whole set at once ([guided.news, citing the Blizzard class overview](https://guided.news/en/news/wow-forever-shaman-totem-systems-rogue-overhaul/)):

| Spell | Level | Cast | Cost | Conf. |
|---|---|---|---|---|
| [Call of the Elements](https://www.wowhead.com/forever/spell=66842/call-of-the-elements) | 20 | **3.0 s** | none listed | 🟢 |
| [Call of the Ancestors](https://www.wowhead.com/forever/spell=66843/call-of-the-ancestors) | 30 | **3.0 s** | none listed | 🟢 |
| Call of the Spirits (66844) | 40 | **3.0 s** | none listed | 🟢 |

- 🟢 Each spell "simultaneously places up to 4 totems specified in the Totem Bar". Each has its own totem set. They trigger the 1.5 s GCD (global cooldown, the short lockout after most spells) and can't be used while shapeshifted ([wago SpellMisc](https://wago.tools/db2/SpellMisc/csv?build=1.60.1.70170); [Wowhead](https://www.wowhead.com/forever/spell=66842/call-of-the-elements)).
- 🟢 **Totemic Focus** now reduces the mana cost of "spells that summon or move" totems, Call of the Elements and Totemic Projection included ([wowforevertalents.com](https://wowforevertalents.com/shaman/)). That suggests you still pay each totem's mana when you use a Call spell, but no source says so directly.

**Is it faster? Tester timing analysis** 🟡 ([forum thread 2369645](https://us.forums.blizzard.com/en/wow/t/2369645), Oct 2):
- Dropping totems by hand places them at **0 / 1 / 2 / 3 s**, and the last GCD ends at **4 s**.
- Call of the Elements lands all 4 at **3.0 s**, but it is a cast, so **pushback, haste and slows affect it**.
- Result: the Call spell **only saves about 1 s, and only when you need all 4 totems** and aren't being hit. For **3 or fewer totems, manual placement is strictly better**.
- The real value is convenience: one button, one key, one set per situation.

### Totemic Recall

- 🟢 **Totemic Recall** (L20, instant, 1 rank): "Returns your totems to the earth, giving you **25% of the mana** required to cast each totem destroyed by Totemic Recall" ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-recall)). No source lists its mana cost or cooldown.
- 🟡 It costs a GCD ([forum thread 2364945](https://us.forums.blizzard.com/en/wow/t/2364945)).
- 🟡→🔵 **Bug: it refunded 0 mana.** Testers "tested it multiple times and you gain 0 mana back" ([thread 2364054](https://us.forums.blizzard.com/en/wow/t/2364054); [forever-bugs #186](https://github.com/ClassicWoWCommunity/forever-bugs/issues/186)). Blizzard: "Fixed an issue where Totemic Recall was not restoring Mana" (Oct 1, [dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- 🟢 Build 70170 adds a hidden helper spell **1323420 "Totemic Recall"** (energize mana, base 0). The refund is probably computed by a script ([wago SpellEffect](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170)). The fix hasn't been confirmed in-game on 70170 yet.

### Totemic Projection

- 🟢 **Totemic Projection** (L22, instant): "Relocates your active totems to the specified location." **30 yd** range, **1 min cooldown**, costs **25% of base mana** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-projection); cooldown from [wago SpellCooldowns](https://wago.tools/db2/SpellCooldowns/csv?build=1.60.1.70170), spell 437009).
- 🟡 Seen as **230 mana** in a preview stream ([ForeverTome](https://forevertome.com/guides/shaman)).
- Use it to move a whole totem set with the group (or onto a pack) instead of re-dropping it. Totemic Focus reduces its cost.

### Stacking Rules

🔵 **Sept 24 dev notes** (build 70009) ([Blizzard](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696); verbatim relay on [mobalytics](https://mobalytics.gg/wow-forever/guides/patch-notes-september-24)):

- "**Tranquil Air Totem, Windfury Totem, and Grace of Air Totem no longer stack together** even if used by different Shamans in the same group."
- Flametongue Totem "no longer has a duration and is instantly replaced when placing another totem", **can no longer be stacked by recasting**, and **no longer stacks with Flametongue Weapon or Windfury Totem** (see [Flametongue Totem](#flametongue-totem)).
- The buffs now display as "Windfury Totem" (not "Windfury Totem Passive") and "Flametongue Totem" (not "Flametongue Totem Effect").

What this means in practice:
- 🟡 Our reading: a group gets **only one Air-totem effect at a time** out of Windfury / Grace of Air / Tranquil Air, even with several Shamans in it. The notes don't say **which** effect wins when two collide.
- 🔴 **Tranquil Air Totem may not exist.** The client diff lists it as "not in Forever" ([ForeverChanges](https://foreverchanges.pro/spellbook/shaman), [WCLBox](https://wowforever.wclbox.com/en/fashu/shaman)) and its [Wowhead Forever page returns 404](https://www.wowhead.com/forever/spell=25908/tranquil-air-totem), yet Blizzard's notes give it a stacking rule. Unresolved.
- 🟢 Windfury Totem's tooltips were re-pointed to a different aura spell for their radius between 69876 and 70170, consistent with the buff rework ([wago Spell](https://wago.tools/db2/Spell/csv?build=1.60.1.70170)).
- 🟡 Separately, profession **camp buffs don't stack with class buffs** ([Conquest Capped](https://conquestcapped.com/guides/wow-forever/wow-forever-professions/)).

### Totem Twisting

**Classic baseline**
- 🟡 **Twisting** means dropping Windfury Totem so its weapon enchant lands on the party, then replacing it with Grace of Air (or Tranquil Air). The Windfury enchant lingers for about 10 s after the totem is gone, so the group holds **both** effects. You re-drop Windfury before the enchant expires, which works out to a Windfury + second Air totem cast **every 10 s**, at "a huge Mana cost" ([Icy Veins Classic Enh](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities); [warcraft.wiki.gg Totem Twisting](https://warcraft.wiki.gg/wiki/Totem_Twisting)).
- 🟡 Dropping totems resets the Shaman's swing timer, so twisting costs the Shaman some personal DPS. It pays off with many melee in the group ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Totem_Twisting)).
- The enchant duration is disputed: 10 s ([Icy Veins](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities)) vs 9 s ([warcraft.wiki.gg](https://warcraft.wiki.gg/wiki/Totem_Twisting)). DB2 doesn't store it.

**In Forever**
- 🔵 Windfury and Grace of Air "**no longer stack together** even if used by different Shamans in the same group" ([dev notes Sept 24](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)). Twisting only works because both effects are active at once, so this rule appears to remove what twisting gains. **This is our reading of the note.** Blizzard hasn't said what happens to a lingering Windfury enchant when Grace of Air lands.
- 🟡 Players list "the removal of totem twisting and stacking" among their complaints ([Blizzard forums "Please fix shamans"](https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290)).
- 🔴 A guide snippet says "early testers report that removing Windfury removes its benefit instead of the familiar twisting window". **This can't come from the beta**: Windfury Totem is L32 and Grace of Air L42, above the level-30 cap. It could only come from the BlizzCon L38 demo or from datamining ([leprestore, via search snippet; page 403](https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-shaman-guide-overview/)).
- Bottom line: **don't plan around twisting.** Expect one Air effect per group. Confirm once the level cap passes 42.

### Flametongue Totem

- 🔵 "Flametongue Totem **no longer has a duration** and is instantly replaced when placing another totem" (Sept 24 notes). Client data still shows a **5 min** duration on the totem ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-totem)). The likeliest reading is that the **buff on players** no longer has its own timer and is swapped out at once when the Fire totem changes, rather than lingering. 🔴 interpretation.
- 🔵 It no longer stacks with itself (recasting), with **Flametongue Weapon**, or with **Windfury Totem**. A melee player can't hold the Flametongue Totem buff and the Windfury Totem buff together.
- 🟢 Range ~~20~~ → **30 yd**, ~~2~~ → **5 min**. Damage R1 ~~6.4–19.6~~ → **6.12–22**, R4 ~~15.8–48.7~~ → **17–55** ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-totem)).
- 🟢 Improved Weapon Totems (Classic: +6/12% Flametongue Totem) was **removed** ([wowforevertalents.com](https://wowforevertalents.com/shaman/)).

### Imbues and Your Own Totem Buffs

- 🟢 **Flametongue Weapon** on your main hand "disables any benefit you personally receive from Flametongue Totem" ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-weapon)).
- 🟢 **Windfury Weapon** on your main hand "disables any benefit you personally receive from Windfury Totem" ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-windfury-weapon)).
- So the Shaman who drops the totem can't double up with the matching imbue. The rest of the group still gets the totem. Details on [Weapon Imbues](Weapon-Imbues.md#windfury-weapon).

### Fire Nova

- 🟢 **Fire Nova Totem is now a spell, "Fire Nova".** It "instantly inflicts fire damage to enemies within **10 yd of your active Fire totem**". It has a **30 yd** range, is instant, and has a cooldown of ~~15 s~~ → **10 s**. There is no separate 5-HP totem and no 4 s fuse any more ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-fire-nova)). You need a Fire totem out to use it.
- 🟢 **Improved Fire Nova** (renamed from Improved Fire Totems): +10/20% Fire Nova damage and −2/4 s cooldown ([wowforevertalents.com](https://wowforevertalents.com/shaman/)). **Call of Flame** and **Elemental Reach** now include Fire Nova too.
- 🟡 Because it's now your own spell, Fire Nova's threat appears to land on you: testers call it "a massive threat generator even against single target" ([thread 2366147](https://us.forums.blizzard.com/en/wow/t/2366147)).
- 🟡 It does **not** trigger Elemental Devastation ([thread 2366738](https://us.forums.blizzard.com/en/wow/t/2366738)).
- 🟡 Bug (open): the range indicator doesn't turn red beyond 30 yd from the Fire totem ([forever-bugs #79](https://github.com/ClassicWoWCommunity/forever-bugs/issues/79)).
- Rank damage figures disagree between sources; see [Spells and Ranks](../reference/Spells-and-Ranks.md#fire-nova).

### Dismissing Totems

- 🟡 The usual dismiss macro `/click TotemFrameTotemN RightButton` **does nothing in Forever** (it worked in TBC Anniversary). Below level 20 (before Totemic Recall), the only way to dismiss a single totem is to **right-click it on the totem frame** ([thread 2364945](https://us.forums.blizzard.com/en/wow/t/2364945)). See [Macros](../reference/Macros.md).

### Items That Modify Totems

**Totem relics** (relic slot) 🟢 ([WoWHandbook relics](https://wowhandbook.com/gear/relics/)):

| Relic | Effect |
|---|---|
| Firestorm Totem | Totem mana cost −5% |
| Totem of Ancestral Protection (L40) | Grounding Totem cooldown −1 s |
| Totem of Elders | Fire Nova extends Flame Shock by 1 s (+2 s more vs Beasts) |
| Burning Totem (L60) | Flame Shock duration +3 s |

**Set bonuses that change totem radius** 🟢 ([wow.gg datamine](https://wow.gg/guides/wow-forever-tier-set-bonuses); [WoWHandbook](https://wowhandbook.com/gear/shaman/)):
- *The Spiritcaller* (healer, 3-pc): **Fire and Water** totem radius **+10 yd**.
- *The Spiritcaller's Rage* (Enhancement, 3-pc): **Air and Earth** totem radius **+10 yd**.
- 🔴 *The Earthfury* (T1) 3-pc ("totem radius increased to 30 yd") looks unchanged from Classic. If so, it does nothing now that totems are 30 yd baseline ([Wowhead Classic Earthfury](https://www.wowhead.com/classic/item-set=207/the-earthfury)).

Full list on [Items and Set Bonuses](../reference/Items-and-Set-Bonuses.md).

---

## 📋 Quick Reference

| Mechanic | Classic Era | Forever | Conf. |
|---|---|---|---|
| Totems at once | 1 per element (4) | unchanged | 🟢 |
| Totem HP | 5 (Stoneclaw more) | no change reported | 🟢 |
| Buff range | 20 yd party (30 yd with Totemic Mastery) | **30 yd** baseline; Totemic Mastery removed | 🟢 / 🟡 |
| Buff duration | 2 min (1 min HST / Mana Spring) | **5 min** | 🟢 |
| Resistance totems | party only | **party and raid** | 🟡 |
| Windfury pulse | 5 s | no change reported | 🟢 |
| Mana Spring / HST / Magma pulse | 2 s | no change reported | 🟢 |
| Mana Tide pulse | 3 s, 12 s | unchanged; range 30 yd | 🟢 |
| Tremor pulse | 4 s (DB2) vs 5 s (IV) | no change reported | 🟢 / 🟡 |
| Grounding | 1 spell per 10 s, 45 s | unchanged | 🟢 |
| Totem threat | none for the Shaman | Fire Nova (now a spell) generates big threat | 🟡 |
| Multi-drop | none | Call of the Elements / Ancestors / Spirits, 3 s cast | 🔵🟢 |
| Recall | none | Totemic Recall, 25% mana refund (bug fixed Oct 1) | 🟢 / 🔵 |
| Relocate | none | Totemic Projection, 30 yd, 1 min CD, 25% base mana | 🟢 |
| Air totem stacking | WF + GoA can coexist (twisting) | **WF / GoA / Tranquil Air don't stack**, even across Shamans | 🔵 |
| Flametongue Totem | stacks with imbues | no duration on buff, no stacking with FT Weapon or WF Totem | 🔵 |
| Own MH imbue vs own totem | imbue overwritten by WF Totem enchant | WF / FT Weapon **disable** your own matching totem buff | 🟢 |
| Fire Nova | totem, 4 s fuse, 15 s CD | instant spell at your Fire totem, 10 s CD | 🟢 |

---

## 🔍 To Verify

- [ ] **Totemic Recall refund on 70170.** The fix was announced Oct 1, but the helper spell has energize base 0. Check that 25% is actually refunded ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696); [wago](https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170)).
- [ ] **Totemic Recall mana cost and cooldown.** No source lists them ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-totemic-recall)).
- [ ] **Call spells' mana.** Do you pay each totem's mana? Totemic Focus's wording implies yes ([wowforevertalents.com](https://wowforevertalents.com/shaman/)).
- [ ] **Totem GCD.** The tester timeline (drops at 0/1/2/3 s) implies a 1 s GCD on totems; no source states it ([thread 2369645](https://us.forums.blizzard.com/en/wow/t/2369645)).
- [ ] **Air-totem conflict resolution.** When WF and GoA collide, which effect wins, and is a lingering WF enchant removed? Needs level 42+ ([dev notes](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696)).
- [ ] **Tranquil Air Totem existence.** Client says removed, notes reference it ([ForeverChanges](https://foreverchanges.pro/spellbook/shaman)).
- [ ] **Flametongue Totem "no duration".** Does it refer to the player buff or the totem (client shows 5 min)? ([WCLBox](https://wowforever.wclbox.com/en/fashu/shaman/shaman-flametongue-totem)).
- [ ] **Party vs raid reach.** Only resistance totems are reported as party+raid, from a single guide ([ForeverTome](https://forevertome.com/guides/shaman)).
- [ ] **Pulse intervals in Forever.** No source; Tremor 4 s vs 5 s is disputed even in Classic ([DB2](https://wago.tools/db2/SpellEffect?product=wow_classic_era); [Icy Veins](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities)).
- [ ] **Do totem pulses crit?** DoTs and HoTs can crit, but nobody has checked Healing Stream, Searing or Magma ([dev notes](https://us.forums.blizzard.com/en/wow/t/2360696)).
- [ ] **Totemic Projection and Fire Nova.** Since Fire Nova centres on your Fire totem, Projection should move where Fire Nova lands. Untested inference.
- [ ] **Totem tools.** Still four separate bag items, or merged? No data ([research 03](https://www.warcrafttavern.com/forever/guides/dwarf-shaman-totem-quests/)).
- [ ] **Stoneclaw-style threat.** A tester says it "builds passive threat to the totem", not a true taunt ([thread 2366147](https://us.forums.blizzard.com/en/wow/t/2366147)).

---

## 📚 Sources

- [Blizzard dev notes, Sept 24 / Oct 1](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-updated-september-24/2360696) ([short link](https://us.forums.blizzard.com/en/wow/t/2360696)) — stacking rules, Flametongue Totem, Recall and Disease Cleansing fixes
- [mobalytics: Sept 24 notes](https://mobalytics.gg/wow-forever/guides/patch-notes-september-24) — verbatim totem text
- [guided.news: Blizzard confirms totem systems](https://guided.news/en/news/wow-forever-shaman-totem-systems-rogue-overhaul/) — Totem Bar confirmation
- [WCLBox Forever DB](https://wowforever.wclbox.com/en/fashu/shaman) and [ForeverChanges](https://foreverchanges.pro/spellbook/shaman) — totem ranges, durations, new spells
- [wago.tools DB2 (beta 70170)](https://wago.tools/db2/SpellMisc/csv?build=1.60.1.70170) and [Classic Era](https://wago.tools/db2/SpellEffect?product=wow_classic_era) — cast times, cooldowns, pulse periods, radii
- [Wowhead Classic](https://www.wowhead.com/classic/) / [Wowhead Forever](https://www.wowhead.com/forever/spell=66842/call-of-the-elements) — tooltips
- [wowforevertalents.com](https://wowforevertalents.com/shaman/) — Totemic Focus, Totemic Mastery removal, Improved Fire Nova
- Blizzard forum threads [2369645](https://us.forums.blizzard.com/en/wow/t/2369645), [2364054](https://us.forums.blizzard.com/en/wow/t/2364054), [2364945](https://us.forums.blizzard.com/en/wow/t/2364945), [2366147](https://us.forums.blizzard.com/en/wow/t/2366147), [2366738](https://us.forums.blizzard.com/en/wow/t/2366738), [2365290](https://us.forums.blizzard.com/en/wow/t/2365290) — tester findings
- [ClassicWoWCommunity/forever-bugs](https://github.com/ClassicWoWCommunity/forever-bugs) (#79, #175, #186) — bug reports
- [Icy Veins Classic Enh rotation](https://www.icy-veins.com/wow-classic/enhancement-shaman-dps-pve-rotation-cooldowns-abilities), [warcraft.wiki.gg Totem Twisting](https://warcraft.wiki.gg/wiki/Totem_Twisting), [warcraft.wiki.gg Totemic Mastery](https://warcraft.wiki.gg/wiki/Totemic_Mastery) — Classic twisting and range
- [Warcraft Tavern Classic tank guide](https://www.warcrafttavern.com/wow-classic/guides/shaman-tanking/) and [threat table](https://www.warcrafttavern.com/wow-classic/guides/threat-guide-reference-table/) — totem threat and crits
- [WoWHandbook relics](https://wowhandbook.com/gear/relics/), [WoWHandbook sets](https://wowhandbook.com/gear/shaman/), [wow.gg set bonuses](https://wow.gg/guides/wow-forever-tier-set-bonuses) — relics and radius bonuses
- [ForeverTome](https://forevertome.com/guides/shaman) — resistance totems party+raid, Projection mana
- [leprestore (snippet)](https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-shaman-guide-overview/) — unverified twisting claim
