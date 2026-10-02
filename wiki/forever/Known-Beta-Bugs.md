---
title: Known Beta Bugs
description: Open and fixed Shaman bugs in the WoW Forever beta with status, build and source, plus player design feedback kept separate from bugs.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# 🐛 Known Beta Bugs

Open and fixed **Shaman** bugs in the WoW Forever beta, with status, date or build, and source. Design complaints are kept separate under [Player Feedback](#-player-feedback-not-bugs). Reflects beta build `1.60.1.70170` (Oct 1, 2026).

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified. See [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents

- [🔴 Open Bugs](#-open-bugs)
- [✔️ Fixed Bugs](#️-fixed-bugs)
- [❔ Unclear or Unconfirmed](#-unclear-or-unconfirmed)
- [💬 Player Feedback (Not Bugs)](#-player-feedback-not-bugs)
- [📮 Reporting a Bug](#-reporting-a-bug)
- [📋 Quick Reference](#-quick-reference)

---

## 🔴 Open Bugs

"Open" means no fix has been announced as of Oct 2. The Conf. column rates the report itself.

| Bug | Status | Conf. | Source | Notes |
|---|---|---|---|---|
| **Water Shield tooltip shows 1%** of max mana at 2 or 1 charges, instead of 2% | Open (reported Sept 25) | 🟡 | [thread 2361063][f-2361063] | Seen on Skyborne, confirmed on Tauren. Unknown whether the real mana gain drops or only the text |
| **Water Shield buff always says "3 charges"** | Open (reported Sept 25) | 🟡 | [thread 2361063][f-2361063] | Display issue |
| **Fire Nova range indicator** does not turn red beyond 30 yd from your Fire totem | Open, "Pending Approval" | 🟡 | [forever-bugs #79][fb-79] | Reported Sept 22 |
| **Ghost Wolf + Equipment Manager** shows both the wolf and the character model | Open | 🟡 | [forever-bugs #40][fb-40] | Reported Sept 19 |
| **Ghost Wolf too bright** after the Oct 1 visibility fix ("bloom is entirely excessive") | Open (Oct 2) | 🟡 | [thread 2369180][f-2369180] | Regression of the Oct 1 fix |
| **Single-totem dismiss macro** `/click TotemFrameTotemN RightButton` does nothing | Open (reported Sept 28) | 🟡 | [thread 2364945][f-2364945] | Worked in TBC Anniversary. Below level 20, right-clicking the totem frame is the only way to dismiss a totem |
| **Call of Thunder tooltip is blank** in the client | Open | 🟢 | [wowforevertalents.com][wfts-cot] | Whether the +3% LB/CL crit still works is unknown. See [Forever Shaman Changes](Forever-Shaman-Changes.md#big-redesigns) |
| **Earth Shield not trackable** in the Cooldown Manager | Open (reported Sept 28) | 🟡 | [thread 2365038][f-2365038] | 🟡 The Cooldown Manager did not support Shaman at launch ([wowguide.net][wowguide]) |

---

## ✔️ Fixed Bugs

| Bug | Status | Conf. | Source | Notes |
|---|---|---|---|---|
| **Totemic Recall gave 0 mana back** (tooltip says 25%) | **Fixed Oct 1** (70170) | 🔵 | [dev notes][blz]; [thread 2364054][f-2364054]; [forever-bugs #186][fb-186] (closed Sept 30) | 🟢 70170 adds hidden spell 1323420 with an energize base of 0, so check the refund in game ([wago Spell][wago-spell]) |
| **Disease Cleansing Totem lasted 2 min** instead of 5 | **Fixed Oct 1** (70170) | 🔵 | [dev notes][blz]; [forever-bugs #175][fb-175] | Other buff totems and Poison Cleansing were already 5 min |
| **Ghost Wolf barely visible** in well-lit areas | **Fixed Oct 1** (70170) | 🔵 | [dev notes][blz]; [forever-bugs #160][fb-160] | Now reported as too bright (see Open) |
| **Water Shield's listed 15 s cooldown was not applied** (GCD only) | **Marked Fixed Oct 1** | 🟡 | [forever-bugs #134][fb-134]; [thread 2361063][f-2361063] | Direction unclear: was the cooldown added, or removed from the tooltip? 🟢 DB2 in 70170 still has a 15 s cooldown and a 3.5 s internal proc cooldown ([wago SpellAuraOptions][wago-auraopt]) |
| **Riptide could not crit**; HoT ticks in general (Renew, Rejuvenation, Wild Growth, Riptide) could not crit while Regrowth's HoT could | **Fixed Sept 24** (70009) | 🔵 | [dev notes][blz]; [forever-bugs #71][fb-71] | "Corrected an issue and now Riptide can land critical hits" |
| **Flametongue Totem** stacked by recasting, and with Flametongue Weapon or Windfury Totem | **Fixed Sept 24** (70009) | 🔵 | [dev notes][blz] | Now replaced instantly when another totem is placed |
| **Windfury / Flametongue Totem buffs** displayed as "…Passive" / "…Effect" | **Fixed Sept 24** (70009) | 🔵 | [dev notes][blz] | Cosmetic |
| **Flametongue Weapon tooltip** did not update with spell power (damage did scale) | **Fixed** (date not stated) | 🟡 | [forever-bugs #80][fb-80] | Shown with a 2.8 speed weapon at 0 vs 26 SP. 🟢 The tooltip gained a flat extra term in 70170 ([wago Spell][wago-spell]) |
| **Revelation enchant** buff not consumed by DoT ticks, totem spells or melee, leaving a +100% crit window | Closed (resolution not stated) | 🟡 | [forever-bugs #163][fb-163] | Evidence video credited to "Shamancord" |

---

## ❔ Unclear or Unconfirmed

Possible bugs or data oddities that nobody has confirmed in game.

| Issue | Conf. | Source | Notes |
|---|---|---|---|
| **Elemental Devastation does not proc from Flame Shock tick crits**, Searing Totem, Fire Nova or imbues | 🟡 | [thread 2366738][f-2366738] | Could be intended. A clean test with a method (Sept 30) |
| **Chain Lightning base damage** cut much harder than Lightning Bolt (R4 ~~505–564~~ → **119–133**) | 🟢 / 🔴 | [WCLBox][wcl-cl], [Wowhead][wh-cl] | Deliberate or a data error? Chain Lightning starts at level 32, above the cap |
| **Lightning Bolt R3** (44–52) is still below Classic R3 (48–57), even after the Sept 24 buff | 🟢 | [WCLBox][wcl-lb] | Same 2.5 s cast as Classic R3 |
| **Tranquil Air Totem** missing from the client ("not in Forever", [Wowhead 404][wh-tranq]) but named in Blizzard's Sept 24 stacking rules | 🔴 | [ForeverChanges][fc], [dev notes][blz] | Level 50, cannot be tested in the beta |
| Leftover **Season of Discovery 4% damage reduction** effect on Stoneskin and Windwall Totems, reportedly datamined by Wowhead | 🔴 | [thread 2367626][f-2367626] | Second-hand report |
| **Imbues stay on traded weapons** (white, non-soulbound) | 🔴 | [thread 2368409][f-2368409] | Disputed by other players. If real, likely to be hotfixed |
| **Staff weapon DPS** lower in game than on Wowhead (Staff of Westfall 15.2 vs 20.5) | 🟡 | [thread 2359184][f-2359184], [thread 2365746][f-2365746] | Probably Wowhead lagging, not a game bug |

---

## 💬 Player Feedback (Not Bugs)

Design complaints from the beta forums. None had a Blizzard reply at the time of writing.

| Topic | Feedback | Source |
|---|---|---|
| **Spell damage** | Base damage is too low; about 700 spell power needed to match Classic Lightning Bolt damage (tooltip arithmetic) | [Please fix shamans][f-please-fix], [thread 2353745][f-2353745], [thread 2360727][f-2360727] |
| **Totem twisting and stacking** | Players dislike losing totem twisting and air-totem stacking | [Please fix shamans][f-please-fix] |
| **Elemental Mastery** | Missing, with no replacement | [Please fix shamans][f-please-fix], [EU feedback 631193][f-eu-631193] |
| **Lava Burst as capstone** | Players question Lava Burst as the Elemental 31-point talent | [Please fix shamans][f-please-fix] |
| **Maelstrom Weapon on two-handers** | Procs are "insanely slow"; about 17–20 s for 5 stacks | [Please fix shamans][f-please-fix], [thread 2356116][f-2356116] |
| **Improved Stormstrike reset** | The Dodge/Parry reset "will not trigger on bosses" | [thread 2365734][f-2365734] |
| **Call of the Elements** | The 3 s cast only saves 1 s, and only when all 4 totems are needed | [thread 2369645][f-2369645] |
| **Spec identity, dual wield, totems** | EU design feedback thread | [EU feedback 631193][f-eu-631193] |
| **Shaman UI** | Interface improvement requests | [EU feedback 632437][f-eu-632437] |
| **Skyborne totem quest** | *Call of the Earth* feels thematically weak | [Skyborne quest thread][f-skyquest] |
| **Threat** | Rockbiter, Earth Shock and Fire Nova pull threat off tanks in low-level dungeons | [thread 2365062][f-2365062], [thread 2366147][f-2366147] |

---

## 📮 Reporting a Bug

- Cross-post Shaman bugs to [ClassicWoWCommunity/forever-bugs][fb]. It uses an issue form (Current Behavior, Expected Behavior, How to Reproduce, Source Material) and labels such as `Fixed`, `Seen` and `Pending Approval`.
- Always include the **build number** and date.
- Blizzard's **Bug Report forum (category 17) is shared with retail**. Check that a thread is about Forever (categories 349 or 347) before citing it. For example, the "Doom Winds double procs" thread is retail, not Forever ([thread 2363015][f-2363015]).

---

## 📋 Quick Reference

| Status | Count | Examples |
|---|---|---|
| Open | 8 | Water Shield tooltips, Fire Nova range indicator, Ghost Wolf brightness, dismiss macro, Call of Thunder tooltip |
| Fixed | 9 | Totemic Recall mana, Disease Cleansing duration, Riptide crits, Flametongue Totem stacking |
| Unclear | 7 | Elemental Devastation vs Flame Shock ticks, Chain Lightning damage, Tranquil Air |

## 🔍 To Verify

- [ ] **Totemic Recall** refunds 25% on 70170. The fix is official, but the helper spell has an energize base of 0 ([dev notes][blz], [wago Spell][wago-spell]).
- [ ] **Water Shield cooldown** in game on 70170: 15 s or GCD only? ([forever-bugs #134][fb-134])
- [ ] **Water Shield mana per globe** at 3, 2 and 1 charges: 2% each, or 1% at low charges? ([thread 2361063][f-2361063])
- [ ] **Elemental Devastation** from Flame Shock tick crits: repeat the test and ask for a blue response ([thread 2366738][f-2366738]).
- [ ] **Imbue on traded weapon**: imbue a white weapon, trade it, check the buff ([thread 2368409][f-2368409]).
- [ ] **Earth Shield** in the Cooldown Manager thread: Earth Shield is not in the documented Forever Shaman spellbook, so check what the thread refers to ([thread 2365038][f-2365038], [ForeverChanges][fc]).
- [ ] **Revelation #163**: was it fixed or closed as intended? ([forever-bugs #163][fb-163])

## 📚 Sources

- [Blizzard: Beta Development Notes (Sept 24, Oct 1)][blz]: official fixes
- [ClassicWoWCommunity/forever-bugs][fb]: issues #40, #71, #79, #80, #134, #160, #163, #175, #186
- [wago.tools DB2][wago-spell]: Totemic Recall helper, Water Shield cooldowns, Flametongue tooltip
- [wowforevertalents.com][wfts-cot]: Call of Thunder blank tooltip
- [WCLBox][wcl-lb], [Wowhead Forever][wh-cl], [ForeverChanges][fc]: spell data for the oddities
- [wowguide.net][wowguide]: Cooldown Manager class support
- Blizzard beta forum threads and EU feedback threads (cited inline): bug reports and feedback

[blz]: https://us.forums.blizzard.com/en/wow/t/2360696
[fb]: https://github.com/ClassicWoWCommunity/forever-bugs
[fb-40]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/40
[fb-71]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/71
[fb-79]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/79
[fb-80]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/80
[fb-134]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/134
[fb-160]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/160
[fb-163]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/163
[fb-175]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/175
[fb-186]: https://github.com/ClassicWoWCommunity/forever-bugs/issues/186
[wago-spell]: https://wago.tools/db2/Spell/csv?build=1.60.1.70170
[wago-auraopt]: https://wago.tools/db2/SpellAuraOptions/csv?build=1.60.1.70170
[wfts-cot]: https://wowforevertalents.com/shaman/talents/call-of-thunder/
[wcl-lb]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-lightning-bolt
[wcl-cl]: https://wowforever.wclbox.com/en/fashu/shaman/shaman-chain-lightning
[wh-cl]: https://www.wowhead.com/forever/spell=10605/chain-lightning
[wh-tranq]: https://www.wowhead.com/forever/spell=25908/tranquil-air-totem
[fc]: https://foreverchanges.pro/spellbook/shaman
[wowguide]: https://wowguide.net/en/guides/wow-forever-beta-patch-notes
[f-please-fix]: https://us.forums.blizzard.com/en/wow/t/please-fix-shamans/2365290
[f-2353745]: https://us.forums.blizzard.com/en/wow/t/2353745
[f-2356116]: https://us.forums.blizzard.com/en/wow/t/2356116
[f-2359184]: https://us.forums.blizzard.com/en/wow/t/2359184
[f-2360727]: https://us.forums.blizzard.com/en/wow/t/2360727
[f-2361063]: https://us.forums.blizzard.com/en/wow/t/2361063
[f-2363015]: https://us.forums.blizzard.com/en/wow/t/2363015
[f-2364054]: https://us.forums.blizzard.com/en/wow/t/2364054
[f-2364945]: https://us.forums.blizzard.com/en/wow/t/2364945
[f-2365038]: https://us.forums.blizzard.com/en/wow/t/2365038
[f-2365062]: https://us.forums.blizzard.com/en/wow/t/2365062
[f-2365734]: https://us.forums.blizzard.com/en/wow/t/2365734
[f-2365746]: https://us.forums.blizzard.com/en/wow/t/2365746
[f-2366147]: https://us.forums.blizzard.com/en/wow/t/2366147
[f-2366738]: https://us.forums.blizzard.com/en/wow/t/2366738
[f-2367626]: https://us.forums.blizzard.com/en/wow/t/2367626
[f-2368409]: https://us.forums.blizzard.com/en/wow/t/2368409
[f-2369180]: https://us.forums.blizzard.com/en/wow/t/2369180
[f-2369645]: https://us.forums.blizzard.com/en/wow/t/2369645
[f-eu-631193]: https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-feedback-%E2%80%93-shaman-totems-dual-wield-elemental-mastery-stronger-spec-identity/631193
[f-eu-632437]: https://eu.forums.blizzard.com/en/wow/t/my-beta-feedback-%E2%80%93-warlock-shaman-ui-improvements/632437
[f-skyquest]: https://us.forums.blizzard.com/en/wow/t/call-of-the-earth-disappointing-skyborne-quest/2365329
