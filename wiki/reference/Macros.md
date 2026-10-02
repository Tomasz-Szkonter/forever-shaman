---
title: Macros
description: Shaman macros for WoW Forever, what is known not to work, and Classic Era macros that still need testing in the Forever client.
build: 1.60.1.70170
last_updated: 2026-10-02
---

# ⌨ Macros

This page collects practical Shaman macros for WoW Forever. Only one macro fact has been reported from the Forever beta so far: the Classic **totem dismiss** macro does **not** work. All other macros below use **Classic Era macro syntax** and are marked 🔴 **untested in Forever**. They are common Classic Shaman macros, but nobody has confirmed them in the Forever client yet.

> **Build:** `1.60.1.70170` · **Legend:** ✅ tested here · 🔵 Blizzard · 🟢 client data · 🟡 community · 🔴 unverified — see [Contributing](../../CONTRIBUTING.md#2-confidence-markers)

## 📑 Contents
- [Totem Macros](#-totem-macros)
- [Healing Macros](#-healing-macros)
- [Combat Macros](#-combat-macros)
- [Addons and UI](#-addons-and-ui)
- [Quick Reference](#-quick-reference)
- [To Verify](#-to-verify)
- [Sources](#-sources)

## 🗿 Totem Macros

### Totem Dismiss Macro Does Not Work

🟡 **Does not work in Forever.** The macro below dismissed a single totem in TBC Anniversary, but in Forever it does nothing ([forum thread 2364945][f-2364945], Sept 28):

```lua
/click TotemFrameTotem1 RightButton
```

- Below level 20, the only way to dismiss a totem is to **right-click it on the totem frame**.
- From level 20, [Totemic Recall](Spells-and-Ranks.md#totemic-recall) returns all your totems and refunds 25% of their mana, but it **costs a GCD** (global cooldown, the short lockout after most spells), which a click macro would not ([forum thread 2364945][f-2364945]).

### Call of the Elements Instead of Totem Macros

In Classic, Shamans often used `/castsequence` macros to drop several totems from one key. Forever's [Call of the Elements](Spells-and-Ranks.md#call-of-the-elements) (level 20), Call of the Ancestors (30) and Call of the Spirits (40) each place up to **4 preset totems** from the Totem Bar in one 3 s cast 🟢, which makes multi-totem macros much less necessary.

- 🟡 A tester's timing analysis: Call of the Elements only saves about **1 s** when you need **all 4** totems and do not get pushed back. For **3 or fewer** totems, placing them by hand is faster ([forum thread 2369645][f-2369645]).

### Two-Totem Sequence

🔴 **Untested in Forever.** For a short set of 2–3 totems, a Classic-style sequence still saves keybinds:

```lua
#showtooltip
/castsequence reset=combat/10 Searing Totem, Stoneskin Totem
```

- Each press casts the next totem in the list. The sequence restarts after leaving combat or 10 s without a press.
- Swap in the totems you use. For 4 totems, use Call of the Elements instead.

## 💧 Healing Macros

### Mouseover Heal

🔴 **Untested in Forever.** Heals the unit under your mouse cursor (for example on raid frames) without changing your target. Falls back to your friendly target, then yourself.

```lua
#showtooltip Healing Wave
/cast [@mouseover,help,nodead][help,nodead][@player] Healing Wave
```

Replace `Healing Wave` with `Lesser Healing Wave`, `Chain Heal` or `Riptide` as needed.

### Nature's Swiftness and Healing Wave

🔴 **Untested in Forever.** An emergency instant heal on one key. [Nature's Swiftness](../talents/Restoration-Talents.md#natures-swiftness) is an unchanged Restoration talent in Forever 🟢 ([wowforevertalent.com][wft]).

```lua
#showtooltip Healing Wave
/cast Nature's Swiftness
/cast Healing Wave
```

- If one press only activates Nature's Swiftness, press it again to cast the heal.
- Add `[@mouseover,help,nodead][]` before `Healing Wave` to combine it with the mouseover macro above.

### Downranked Heal

🔴 **Untested in Forever.** Classic Era syntax for casting a specific rank:

```lua
#showtooltip
/cast Healing Wave(Rank 4)
```

- 🔵 **Caution:** since Oct 1, ranks far below your level get **less benefit from spell power** and a **reduced chance to trigger talents** ([dev notes][blz-notes]). Downranking is weaker in Forever than in Classic. Check the [Spells and Ranks](Spells-and-Ranks.md#healing-wave) table before picking a rank.

## ⚡ Combat Macros

### Earth Shock Interrupt

🔴 **Untested in Forever.** Stops whatever you are casting and interrupts the target with [Earth Shock](Spells-and-Ranks.md#earth-shock).

```lua
#showtooltip Earth Shock
/stopcasting
/cast Earth Shock(Rank 1)
```

- Rank 1 keeps the interrupt cheap. The Oct 1 downranking penalty is about spell power and proc chance; Blizzard said nothing about interrupts. Remove `(Rank 1)` if you want the damage.
- All three shocks share a 6 s cooldown, so interrupting also delays your next Flame Shock or Frost Shock.

### Weapon Imbue Selector

🔴 **Untested in Forever.** Puts several imbues on one key, chosen with modifier keys:

```lua
#showtooltip
/cast [mod:shift] Flametongue Weapon; [mod:ctrl] Frostbrand Weapon; Rockbiter Weapon
```

- Swap `Rockbiter Weapon` for `Windfury Weapon` once you learn it at level 30.
- Imbues now last **60 min** instead of 5 min 🟢, so you recast them far less often ([Spells and Ranks](Spells-and-Ranks.md#weapon-imbues-overview)).
- 🟢 Remember that Flametongue Weapon or Windfury Weapon on your main hand **disables your own** benefit from Flametongue Totem or Windfury Totem ([Weapon Imbues](../mechanics/Weapon-Imbues.md)).

### Ghost Wolf Without Cancelling

🔴 **Untested in Forever.** The `!` stops a second press from cancelling [Ghost Wolf](Spells-and-Ranks.md#ghost-wolf) when you mash the key.

```lua
#showtooltip
/cast !Ghost Wolf
```

## 🧩 Addons and UI

### Totem Bar Addons

Shaman addons written for Forever appeared on GitHub during the beta 🟡. They are unreviewed, so check them yourself (found by a GitHub search on 2026-10-02; see [Sources and Hubs](Sources-and-Hubs.md#other-github-projects)):

| Addon | What it does |
|---|---|
| [Aratox/TotembarKeys][totembarkeys] | Totem Bar keybinds (no description) |
| [bverger/ForeverTotems][forevertotems] | Totem management |
| [cassidymichael/ShamanForever][shamanforever] | Shaman addon for Forever |

### Cooldown Manager

🟡 The Sept 24 build added a built-in **Cooldown Manager** (Options > Gameplay Enhancement, off by default). At first it supported only Druid, Mage, Priest, Warrior and Warlock, **not Shaman**, and it did not handle spell ranks ([wowguide.net][wowguide]).

## 📋 Quick Reference

| Macro | Purpose | Status |
|---|---|---|
| `/click TotemFrameTotemN RightButton` | Dismiss one totem | 🟡 **Does not work** in Forever |
| Totemic Recall | Return all totems, refund 25% mana | Spell; costs a GCD 🟡 |
| Call of the Elements | Drop up to 4 totems | Spell; replaces most totem macros 🟢 |
| Two-Totem Sequence | 2–3 totems on one key | 🔴 untested |
| Mouseover Heal | Heal the unit under the cursor | 🔴 untested |
| Nature's Swiftness + Healing Wave | Instant emergency heal | 🔴 untested |
| Downranked Heal | Cast a specific rank | 🔴 untested; weaker since Oct 1 |
| Earth Shock Interrupt | Stop casting and interrupt | 🔴 untested |
| Weapon Imbue Selector | Several imbues on one key | 🔴 untested |
| Ghost Wolf Without Cancelling | Prevent toggling off | 🔴 untested |

## 🔍 To Verify

- [ ] Test each 🔴 macro on the beta and record the build — Forever uses a modified Classic Era client, but no one has reported macro behaviour beyond the dismiss macro ([forum thread 2364945][f-2364945]).
- [ ] Is there **any** way to dismiss a single totem in Forever (other than right-clicking the totem frame)? ([forum thread 2364945][f-2364945]).
- [ ] Can Call of the Elements or the Totem Bar be driven by macro (e.g. `/cast Call of the Elements` with different sets)? Not reported anywhere.
- [ ] Does Nature's Swiftness trigger the GCD in Forever (decides whether the combined macro needs one or two presses)? Not in any source.

## 📚 Sources

- [Blizzard forums thread 2364945][f-2364945] — 🟡 dismiss macro does not work; Totemic Recall costs a GCD
- [Blizzard forums thread 2369645][f-2369645] — 🟡 Call of the Elements timing analysis
- [Blizzard Beta Development Notes][blz-notes] — 🔵 downranking penalty
- [wowforevertalent.com][wft] — 🟢 Nature's Swiftness unchanged
- [wowguide.net beta patch notes][wowguide] — 🟡 Cooldown Manager
- GitHub: [TotembarKeys][totembarkeys], [ForeverTotems][forevertotems], [ShamanForever][shamanforever] — community addons (unreviewed)

[f-2364945]: https://us.forums.blizzard.com/en/wow/t/2364945
[f-2369645]: https://us.forums.blizzard.com/en/wow/t/2369645
[blz-notes]: https://us.forums.blizzard.com/en/wow/t/2360696
[wft]: https://wowforevertalent.com/shaman/reference/
[wowguide]: https://wowguide.net/en/guides/wow-forever-beta-patch-notes
[totembarkeys]: https://github.com/Aratox/TotembarKeys
[forevertotems]: https://github.com/bverger/ForeverTotems
[shamanforever]: https://github.com/cassidymichael/ShamanForever
