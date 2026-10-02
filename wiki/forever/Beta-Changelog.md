---
title: Beta Changelog
description: Build-by-build log of Shaman-relevant changes in the WoW Forever beta, from official notes, datamining diffs and bug trackers, newest first.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 📜 Beta Changelog

A build-by-build log of **Shaman-relevant** changes in the WoW Forever beta, newest first. Each entry combines Blizzard's notes (🔵), client datamining diffs (🟢) and bug-tracker status (🟡). Current build: `1.60.1.70170` (Oct 1, 2026). When a new build drops, update this page first (see [Contributing](../../CONTRIBUTING.md#6-workflow)).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents

- [🏗️ Build List](#️-build-list)
- [🗓️ Changes by Build](#️-changes-by-build)
- [🌳 Talent Changes Since BlizzCon](#-talent-changes-since-blizzcon)
- [📋 Quick Reference](#-quick-reference)

---

## 🏗️ Build List

🟢 Product `wow_classic_beta`, version 1.60.1. Creation times are UTC, from the [wago.tools build API][wago-builds].

| Build | Created (UTC) | Notes |
|---|---|---|
| **1.60.1.70170** | 2026-10-01 22:54 | **Current.** Oct 1 dev notes; level cap 30 |
| 1.60.1.70124 | 2026-09-30 01:57 | No documented Shaman changes |
| 1.60.1.70058 | 2026-09-29 16:41 | No documented Shaman changes |
| **1.60.1.70009** | 2026-09-24 22:02 | Sept 24 dev notes |
| 1.60.1.69977 | 2026-09-23 00:35 | Controller and Mac fixes ([Icy Veins snippet][iv-build]); the Sept 22 "class tuning" build |
| 1.60.1.69913 | 2026-09-18 03:02 | Build players had on beta launch day |
| 1.60.1.69893 | 2026-09-16 23:14 | |
| 1.60.1.69876 | 2026-09-16 18:23 | Beta launch build |

- 🟢 China beta (`wow_cn_beta`) runs the same branch on 1.60.1.70094 (Sept 29) and **1.60.1.70178** (Oct 2), which is newer than the US build ([wago.tools][wago-builds]).
- 🔴 Wowhead's Legacy calculator reportedly used `1.60.1.69800` data. That build is not in wago's list ([wowforeverbuilds][wfbuilds]).

---

## 🗓️ Changes by Build

### 70170 (Oct 1, 2026)

**Official** 🔵 ([dev notes, Oct 1][blz], [EU copy][blz-eu1001], [level 30 announcement][blz-lvl30]):
- **Level cap raised to 30.** New dungeon: Excavation Site: Wetlands.
- **Totemic Recall:** "Fixed an issue where Totemic Recall was not restoring Mana."
- **Disease Cleansing Totem** now lasts its full 5 minutes (fix).
- **Ghost Wolf** "should now be more visible while in well-lit areas".
- **Downranking penalty (all classes):** spells cast at ranks "vastly below your current level" get less benefit from spell damage and healing, and a reduced chance to activate class abilities and talents. See [Forever System Changes](Forever-System-Changes.md#downranking-penalty).
- "Shenthul in Orgrimmar will now train Windshaper Skyborne." The note does not name the class (see [Races and Racials](Races-and-Racials.md#skyborne)).
- Skinning is back to one skin per corpse.
- **No Shaman talent changes** ([EU dev notes][blz-eu1001]).

**Datamined** 🟢 (70124 → 70170, [wago.tools Spell][wago-spell]):
- **Flametongue Weapon** tooltips (all 6 ranks) gained a flat extra term from the Flametongue Attack spell (`+($10444m1)` and similar). This was the **only** change to Shaman skill-line spells in this step.
- New hidden spell **1323420 "Totemic Recall"** (energize mana, base 0, so the amount is presumably computed by a script). It is most likely how the Recall fix was implemented. 🔴 interpretation.

**Bug trackers** 🟡:
- **Water Shield** "listed cooldown not applied" was marked **Fixed** on Oct 1 ([forever-bugs #134][fb-134]). It is unclear which way: DB2 in 70170 still has a 15 s cooldown.
- After the fix, players say Ghost Wolf is now **too bright** ("bloom is entirely excessive") ([thread 2369180][f-2369180], Oct 2).

### 70124 (Sept 30, 2026) and 70058 (Sept 29, 2026)

- No Shaman changes are documented for these builds.
- 🟡 **Totemic Recall gave 0 mana back** on these builds (reported Sept 27 to Oct 1) ([thread 2364054][f-2364054]). [forever-bugs #186][fb-186] was closed on Sept 30, before Blizzard's Oct 1 fix note.
- 🟡 **Disease Cleansing Totem** lasting only 2 min was reported Sept 28 ([forever-bugs #175][fb-175]).

### 70009 (Sept 24, 2026)

**Official** 🔵 ([dev notes, Sept 24][blz], [mobalytics relay][moba924]):
- **Elemental Fury and Elemental Alacrity swapped rows.** Elemental Alacrity is now row 3 and Elemental Fury row 6.
- **Lava Burst** ranks 1 and 2 base damage increased "to be about 10% more base damage than the Lightning Bolt rank learned around the same level".
- **Lightning Bolt** "Damage on ranks 3 and 4 increased to make these spells always upgrades over previous ranks (despite changing cast times)."
- **Rage of the Farseer** no longer increases spell casting speed.
- **Riptide** "can land critical hits" (fix).
- **Tranquil Air, Windfury and Grace of Air Totems** "no longer stack together even if used by different Shamans in the same group."
- **Flametongue Totem** "no longer has a duration and is instantly replaced when placing another totem". It no longer stacks by recasting, or with Flametongue Weapon or Windfury Totem.
- Buffs now display as "Windfury Totem" and "Flametongue Totem" (no "Passive" or "Effect" suffix).
- Game-wide: wands no longer scale with spell damage; dungeon quests give 50% less bonus XP; PvP gear honor costs up about 50% and the honor cap raised from 15,000 to 25,000.
- 🟡 The build also added the **Cooldown Manager**, which did not support Shaman at first ([wowguide.net][wowguide]).

**Datamined** 🟢. The diff below compares 69876 with 70170. These lines are attributed to 70009 because they match the Sept 24 notes ([research diff][wago-eff]):

```
Lava Burst (408490) eff0 base: 113 -> 164          # R1 buff
Lava Burst (1238299) eff0 base: 179 -> 196         # R2 buff
Lightning Bolt (548) eff0 base: 35 -> 45           # R3 buff
Lightning Bolt (915) eff0 base: 50 -> 56           # R4 buff
Lightning Bolt (408440/408441/408442) base: 15->14.5 / 18->22.5 / 25->28
Rage of the Farseer (425336) eff2: REMOVED; tooltip "melee attack speed and spell casting speed" -> "attack speed"
Windfury Totem (8512/10613/10614) tooltip radius token re-pointed to the next aura spell
```

- The Riptide crit fix does not show in SpellEffect. It is probably a spell attribute flag or a server-side change.
- 🟡 Bug reports from this period: **Riptide and other HoTs could not crit** ([forever-bugs #71][fb-71], Sept 22–24); the **Flametongue Weapon tooltip** did not update with spell power ([#80][fb-80], Sept 22–23, later marked Fixed); **Fire Nova's range indicator** does not turn red past 30 yd ([#79][fb-79], Sept 22, still open).

### 69977 (Sept 23, 2026)

- 🟡 Client build with controller and Mac fixes ([Icy Veins snippet][iv-build]).
- 🟢 Lava Burst rank 1 read **105–135** on this build, before the Sept 24 buff ([wowforevertalents.com beta changes][wfts-beta]).

### 69913 (Sept 17–18, 2026): beta launch

- 🔵 **Beta opened Sept 17** with a **level 20** cap, the Legacy system, new class abilities and talents, and the Hall of Thanes and Ruins of Lordaeron dungeons ([Blizzard][blz-announce], [Gfinity][gfinity]).
- 🟡 Early Shaman reports: Maelstrom Weapon affects Lightning Bolt only ([thread 2354160][f-2354160], Sept 18); Equipment Manager in Ghost Wolf shows both models ([forever-bugs #40][fb-40], Sept 19).

### 69876 and 69893 (Sept 16, 2026)

- 🟢 Pre-launch client builds. The [forever-hunter wiki][hunter-wiki] and [wowforeverbuilds][wfbuilds] datamines are stamped 69876.
- 🔴 [ForeverTome][ftome] labels its stream-sourced values from Sept 12–13 as build 69893, although wago lists 69893 as created on Sept 16.

### BlizzCon demo (Sept 12, 2026)

- 🔵 WoW Forever was announced at BlizzCon on Sept 12 ([Blizzard][blz-announce]). 🟡 The hands-on demo used a **level 38** character ([Zockify][zk], [thread 2354160][f-2354160]).
- Guides written from BlizzCon footage show the **pre-beta** talent values listed in the next section.

---

## 🌳 Talent Changes Since BlizzCon

Useful for dating guides: anything written from BlizzCon footage or before Sept 24 may show the old values. 🟢 Source for all rows: [wowforevertalents.com beta changes][wfts-beta]. 🔵 marks rows confirmed in the [Sept 24 notes][blz].

| Talent | BlizzCon / before Sept 24 | Current (1.60.1.70170) |
|---|---|---|
| Elemental Fury / Elemental Alacrity | Elemental Fury row 3 → Call of Thunder → Elemental Alacrity row 6 | **Swapped:** Alacrity row 3, Fury row 6 🔵 |
| Totemic Focus / Tidal Mastery | Tidal Mastery row 1, Totemic Focus row 4 | Totemic Focus row 1, Tidal Mastery row 4 |
| Lava Burst (talent rank) | 158–187 at BlizzCon; 105–135 in build 69977 | **150–193** 🔵 |
| Rage of the Farseer | Melee attack speed **and spell casting speed** +30% | Attack speed only 🔵 |
| Maelstrom Weapon | Stacks to 5 × rank (up to **25**), lasts 30 × rank s (up to 150 s) | **5 stacks, 30 s** |
| Flurry | 5–25% for the next **3 × rank** swings (up to 15) | The next **3** swings |
| Improved Stormstrike rank 2 | 100% mana regen while casting for 30 s | **50% for 15 s** |
| Stormstrike | +20% **Nature damage** taken for 12 s | +20% to the **next Lightning Bolt, Chain Lightning or Earth Shock** |
| Improved Ghost Wolf rank 2 | −2 s | −3 s (instant, since base Ghost Wolf is 3 s) |
| Call of Thunder | "+3%" tooltip | Tooltip **blank** in the client 🔴 |
| Riptide (talent rank) | 479–528 + 499 HoT | 484–535 + 445 HoT; crit fix 🔵 |
| Lightning Overload | 3/6/9% | 3/7/10% |
| Minor rounding | Mental Dexterity 66/99%, Mindfulness 34/51%, Elemental Alacrity 0.34/0.51 s, Eye of the Storm 46/69%, Healing Focus 46/69%, Healing Way 16/24%, Elemental Warding 6/9%, Elemental Reach Flame Shock +16 yd | 67/100%, 33/50%, 0.33/0.50 s, 47/70%, 47/70%, 17/25%, 7/10%, +15 yd |

- 🟡 **Mental Quickness:** early previews said 100% of Intellect. DB2 in 70170 says **30%** at max rank ([thread 2354160][f-2354160], [wago SpellEffect][wago-eff]).
- 🟡 **Guides with stale layouts:** Warcraft Tavern's Elemental level-30 screenshot and Conquest Capped (updated Sept 29) still show the pre-Sept-24 tree. Icy Veins and Conquest Capped also list a 2 s Ghost Wolf cast ([wowforevertalents.com][wfts-beta]).

---

## 📋 Quick Reference

| Date | Build | Shaman headline |
|---|---|---|
| Oct 1 | 70170 | Level 30; Totemic Recall, Disease Cleansing and Ghost Wolf fixes; downranking penalty; Flametongue Weapon tooltip term |
| Sept 29–30 | 70058, 70124 | Nothing documented; Recall bug reported |
| Sept 24 | 70009 | Elemental row swap; Lava Burst and Lightning Bolt R3/R4 buffs; Rage of the Farseer loses spell haste; Riptide can crit; totem stacking rules |
| Sept 23 | 69977 | Client fixes; Lava Burst R1 105–135 |
| Sept 17–18 | 69913 | Beta opens at level 20 |
| Sept 16 | 69876, 69893 | Pre-launch builds |
| Sept 12 | BlizzCon | Announcement; level-38 demo |

## 🔍 To Verify

- [ ] **Wowhead's Oct 1 datamine article** was not readable by script. Reconcile it with the 70170 entry ([Wowhead 383219][wh-383219]).
- [ ] **Builds 70058 and 70124**: run a DB2 diff for the Shaman skill lines (373/374/375) to confirm there were no Shaman changes ([wago.tools][wago-builds]).
- [ ] **Totemic Recall fix**: confirm in game on 70170 that 25% is refunded, given the helper spell's base 0 ([wago Spell][wago-spell]).
- [ ] **Water Shield #134**: which way was it fixed? ([forever-bugs #134][fb-134])
- [ ] **ForeverTome build label** (69893 vs Sept 12–13 streams) ([ForeverTome][ftome]).

## 📚 Sources

- [Blizzard: Beta Development Notes][blz], [EU copy, Oct 1][blz-eu1001], [Beta Update Maintenance, Oct 1][blz-lvl30]: official changes
- [Blizzard: announcement][blz-announce]: dates and beta start
- [mobalytics: Sept 24 notes][moba924]: verbatim totem text
- [wago.tools builds API][wago-builds], [Spell][wago-spell], [SpellEffect][wago-eff]: build list and diffs
- [wowforevertalents.com beta changes][wfts-beta]: talent value history
- [ClassicWoWCommunity/forever-bugs][fb]: bug status
- Blizzard beta forum threads (cited inline): player reports
- [wowguide.net][wowguide], [Icy Veins snippet][iv-build], [Gfinity][gfinity], [wowforeverbuilds][wfbuilds], [ForeverTome][ftome], [forever-hunter wiki][hunter-wiki]: build context

[blz]: https://us.forums.blizzard.com/en/wow/t/2360696
[blz-eu1001]: https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-1-october/631316/4
[blz-lvl30]: https://us.forums.blizzard.com/en/wow/t/2367661
[blz-announce]: https://worldofwarcraft.blizzard.com/news/24302093/
[moba924]: https://mobalytics.gg/wow-forever/guides/patch-notes-september-24
[wago-builds]: https://wago.tools/api/builds
[wago-spell]: https://wago.tools/db2/Spell/csv?build=1.60.1.70170
[wago-eff]: https://wago.tools/db2/SpellEffect/csv?build=1.60.1.70170
[wfts-beta]: https://wowforevertalents.com/beta/
[wh-383219]: https://www.wowhead.com/forever/news=383219/datamined-class-changes-for-wow-forever-build-on-october-1st
[fb]: https://github.com/ClassicWoWCommunity/forever-bugs
[fb-40]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/40
[fb-71]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/71
[fb-79]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/79
[fb-80]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/80
[fb-134]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/134
[fb-175]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/175
[fb-186]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/186
[f-2354160]: https://us.forums.blizzard.com/en/wow/t/2354160
[f-2364054]: https://us.forums.blizzard.com/en/wow/t/2364054
[f-2369180]: https://us.forums.blizzard.com/en/wow/t/2369180
[wowguide]: https://wowguide.net/en/guides/wow-forever-beta-patch-notes
[iv-build]: https://www.icy-veins.com/wow-forever/news/a-new-beta-client-build-arrives-for-wow-forever/
[gfinity]: https://www.gfinityesports.com/article/world-of-warcraft-forever-beta-dates-level-caps-how-to-access
[wfbuilds]: https://wowforeverbuilds.com/wow-forever-beta
[ftome]: https://forevertome.com/guides/shaman
[hunter-wiki]: https://github.com/classic-hunter/forever-hunter/wiki/Forever-Beta-Changes
[zk]: https://www.zockify.com/forever/shaman/
