# 🛡️ CISO Career Tracker — Master Build Prompt
### For use at the start of any new Claude session
### Version: KAIZEN v08.0 · Last Updated: March 17, 2026

---

> **How to use:** Paste this entire document into a new Claude conversation before your first request.
>
> Add this line at the very top:
> ```
> Continue development of the CISO Career Tracker using the rules below. Current version is KAIZEN v08.0.
> ```

---

## SECTION 1 — Project Identity

- Single HTML file architecture — no frameworks, no build tools
- All data stored in browser localStorage with stable keys (`_v30` suffix)
- Storage keys **NEVER** change between versions — data must persist across upgrades
- Licensed under **CC BY-NC 4.0** — Copyright © 2026 Corvus-One (Brihan)
- The file owner is neurodivergent — always communicate one concept at a time, with visual step-by-step instructions and clear checkpoints

**Repository:** `github.com/Corvus-One/ciso-career-tracker`
**Live URL:** `https://corvus-one.github.io/ciso-career-tracker/CISO_Tracker_kaizen_v08.html`
**Current Version:** KAIZEN v08.0
**Storage Key Suffix:** `_v30` — stable, never change

---

## SECTION 2 — File Delivery Rules

- Always deliver files **individually** — NEVER as a zip
- Always prefix every file with: `CISO_Tracker_`
  - `CISO_Tracker_kaizen_v08.html`
  - `CISO_Tracker_manifest.json`
  - `CISO_Tracker_service-worker.js`
- Maximum **3 files** delivered per shift
- After every file delivery, post the live GitHub Pages URL:
  `https://corvus-one.github.io/ciso-career-tracker/[filename]`

---

## SECTION 3 — The Shift System

Every response that uses tools follows the shift format. Post this header at the top of every build response:

```
📋 SHIFT [N] of [TOTAL]
Task: [what this shift covers]
Tool calls this shift: ~[number]
Starting from: [filename]
```

**Rules:**
- Max ~12 tool calls per shift
- When 2–3 tool calls from the limit, flag it and roll remaining work to the next response
- Before every sprint, estimate total shifts needed
- User triggers next shift by saying `"next shift"`
- Always declare scope before starting — never over-build
- Roll unfinished work into the next response automatically

**Shift cost reference:**

| Action | Tool Calls |
|---|---|
| Read one file | 1 |
| Search for something | 1 |
| Make one code edit | 1 |
| Build a visual/diagram | 1–2 |
| Deliver a file | 1 |
| Run a code check | 1 |

**Shift estimate format — post before every sprint:**
```
📋 SHIFT ESTIMATE
Task: [what we're doing]
Shifts needed: [number]
This shift covers: [specific scope]
Tool calls this shift: ~[number]
```

---

## SECTION 4 — The 4pt Framework

All new features or sprints must follow this framework **before any code is written:**

**1. Define the Work**
What exactly is being built? Who uses it? What problem does it solve?

**2. Architect the Design / Tools**
What libraries, APIs, or tools are needed? What CDNs are approved?

**3. AI Rules**
Do we need special AI handling? Keychain vs localStorage? Are any new secrets or APIs introduced?

**4. Plan**
Break into shifts. Estimate tool calls. Identify hiccups. Lock the plan before building.

> Never start building without completing all 4 steps.
> No building until the user approves the plan.

---

## SECTION 5 — Approved CDN Sources

Only load external resources from these approved CDNs:
- `cdnjs.cloudflare.com`
- `unpkg.com`
- `cdn.jsdelivr.net`
- `fonts.googleapis.com`

**Currently loaded libraries — do not duplicate:**

| Library | Version | CDN |
|---|---|---|
| Lucide Icons | latest | unpkg.com |
| Chart.js | 4.4.1 | cdnjs.cloudflare.com |
| html2canvas | 1.4.1 | cdnjs.cloudflare.com |
| jsPDF | 2.5.1 | cdnjs.cloudflare.com |
| Popper.js | 2.11.8 | cdnjs.cloudflare.com |
| Tippy.js | 6.3.7 | cdnjs.cloudflare.com |
| SortableJS | 1.15.2 | cdnjs.cloudflare.com |
| Space Mono + DM Sans | — | fonts.googleapis.com |

**When suggesting new tools or plugins, always:**
1. Confirm available on approved CDN
2. Check for conflicts with existing libraries
3. Estimate minified file size (prefer under 50kb)
4. Confirm works on iOS Safari 15+
5. Check if it requires a build step — if yes, reject it

**Preferred evaluation order:**
Pure CSS first → Vanilla JS second → Lightweight CDN library third → Heavy framework last

---

## SECTION 6 — Version Control Rules

**Version number format:** `KAIZEN vXX.0`

| Change Type | Version Impact |
|---|---|
| Bug fix / layout patch | No bump — same number |
| Cosmetic patch | No bump — same number |
| New feature added | Minor bump (v08.0 → v08.1) |
| Full sprint of features | Major bump (v08.0 → v09.0) |

**When bumping versions, update ALL of these:**
- Copyright comment at top of HTML
- `<title>` tag
- Header `.version-tag`
- `aria-label` on version tag
- Setup wizard version string
- AI welcome message in `skipSetup()`
- Changelog modal subtitle
- PDF report header string
- `manifest.json` → `start_url`
- `service-worker.js` → `CACHE_NAME` and file references
- Add vXX changelog entries array

---

## SECTION 7 — Changelog Rules

Every change must be logged in the in-app Change Log. Entry format:

```javascript
{
  id: [unique number],
  date: 'YYYY-MM-DD',
  num: 'KAIZEN vXX.0',
  cat: '[category]',
  desc: '[what changed]',
  reason: '[why it was needed]',
  tested: 'Yes / In Progress / No',
  priority: 'High / Medium / Low',
  status: 'GREEN / YELLOW / RED',
  comments: '[notes]'
}
```

**Valid categories:**
`UI / Layout` · `Feature` · `Bug Fix` · `Data / Content` · `Integration` · `Reporting` · `Security / Access`

---

## SECTION 8 — iOS / Mobile Compatibility

Always verify before delivering any file:

- [ ] `viewport-fit=cover` in meta viewport tag
- [ ] `apple-touch-icon` link tag present
- [ ] `manifest.json` has absolute `start_url` and `scope`
- [ ] `service-worker.js` references correct filename
- [ ] No `inset:0` — use `top:0; right:0; bottom:0; left:0` longhand
- [ ] `-webkit-overflow-scrolling:touch` on all scrollable areas
- [ ] `window.print()` replaced with jsPDF or has iOS fallback
- [ ] `navigator.clipboard` has iOS-safe fallback
- [ ] `claudeusercontent.com` check in service worker + unregister on preview

**Mobile breakpoints:**
- `768px` — tablet/mobile layout switch
- `480px` — compact mobile layout

---

## SECTION 9 — Code Quality Standards

Before every file delivery, verify:

- [ ] No duplicate function names
- [ ] No broken function overrides (`_orig` pattern forbidden)
- [ ] All localStorage calls wrapped in `try/catch`
- [ ] Storage keys use `_v30` suffix — never change
- [ ] `lucide.createIcons()` called after every dynamic render
- [ ] Chart.js instances destroyed before re-creating
- [ ] SortableJS instances destroyed before re-creating
- [ ] Service worker skips `claudeusercontent.com`
- [ ] All modals closeable via Escape key
- [ ] ARIA labels on all interactive regions
- [ ] `prefers-reduced-motion` wraps all animations
- [ ] Semantic CSS tokens used — no hardcoded dark hex values
- [ ] Copyright comment at top of HTML file
- [ ] Badge popup rendered at body level — never inside sidebar DOM

**Quick syntax checks before delivering:**
```bash
node --check [extracted-js-file]
grep -n "inset:0" [file]
grep -c "try.*localStorage" [file]
```

---

## SECTION 10 — Design Standards

**Fonts:**
- Display/mono: `Space Mono`
- Body: `DM Sans`
- Never use: Inter, Arial, Roboto, system fonts

**Minimum font size: 13px** — nothing smaller in the UI

**Icons:**
- Use Lucide SVG icons — never emoji in UI elements
- Exceptions: mood buttons, journal stamps, badge icons

**Color system — CSS tokens only:**

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#0a0c10` | `#f0f4fa` |
| `--surface` | `#12151c` | `#ffffff` |
| `--surface2` | `#1a1e28` | `#f4f6fb` |
| `--surface3` | `#222736` | `#e8ecf5` |
| `--border` | `#272d3d` | `#d0d6ea` |
| `--accent` | `#7c6af7` | `#5b4fcf` |
| `--accent2` | `#4fc3f7` | `#0277bd` |
| `--accent3` | `#69f0ae` | `#1a7a3c` |
| `--accent4` | `#ff8a65` | `#c45000` |
| `--accent5` | `#f06292` | `#ad1457` |
| `--header-bg` | `rgba(18,21,28,0.97)` | `rgba(255,255,255,0.97)` |
| `--overlay-bg` | `rgba(0,0,0,0.78)` | `rgba(0,0,0,0.55)` |
| `--btn-primary-text` | `#0a0c10` | `#ffffff` |
| `--shadow-sm/md/lg` | heavy | subtle |
| `--radius-sm/md/lg/xl` | consistent | same |

Never hardcode dark hex values in CSS rules. Always use tokens.

**Animations:**
- All wrapped in `@media (prefers-reduced-motion: no-preference)`
- Modal entrance: `cubic-bezier(0.34, 1.56, 0.64, 1)` spring
- View transitions: `0.25s ease` fadeUp
- Stat card stagger: 50ms delay per card

---

## SECTION 11 — GitHub Workflow

**Repo:** `github.com/Corvus-One/ciso-career-tracker`
**Pages URL:** `https://corvus-one.github.io/ciso-career-tracker/`

**Upload process — individual files, never zip:**
1. Download each file individually (click ↓ on each card)
2. Go to `github.com/Corvus-One/ciso-career-tracker`
3. Click **Add file → Upload files**
4. Drag files in → **Commit changes**
5. Wait 30 seconds → live URL updates

**Unzipping on Mac:** Double-click the zip file — folder appears automatically.

**Repo root files:**
```
ciso-career-tracker/
├── CISO_Tracker_kaizen_v08.html
├── CISO_Tracker_manifest.json
├── CISO_Tracker_service-worker.js
├── CISO_Tracker_social_preview.svg
├── CISO_Tracker_Master_Build_Prompt.md
├── README.md
└── LICENSE
```

---

## SECTION 12 — Storage Keys Reference

All keys use `_v30` suffix. **Never change these.**

| Key | Data |
|---|---|
| `hc_v30` | Habit checks (daily completions) |
| `gl_v30` | Goals list |
| `pr_v30` | Priorities |
| `id_v30` | Ideas (On Deck / Parking / Warehouse / Completed) |
| `hb_v30` | Habits list |
| `qn_v30` | Quick note |
| `roadmap_v30` | Career roadmap phases |
| `changelog_v30` | Change log entries |
| `journal_v30` | Journal entries |
| `interview_v30` | Interview prep confidence + notes |
| `certdates_v30` | Cert countdown dates |
| `sidebar_width_v30` | Saved sidebar width |
| `theme_v30` | Light/dark preference |
| `ios_banner_dismissed_v30` | iOS install banner state |
| `tour_completed_v30` | Onboarding tour completion flag |
| `checkin_scores_v30` | Daily check-in scores |
| `badges_v30` | Unlocked milestone badges |
| `user_profile_v30` | Setup wizard profile (name, role, timeline, certs) |
| `or_api_key` | OpenRouter API key |

---

## SECTION 13 — AI Coach Configuration

- Provider: OpenRouter (`openrouter.ai/api/v1/chat/completions`)
- Model: `openai/gpt-3.5-turbo`
- Key storage: `localStorage.getItem('or_api_key')`
- Key never leaves the device — browser only
- Referer: `https://corvus-one.github.io/ciso-career-tracker/`
- Used in: AI Coach chat sidebar + AI Weekly Debrief modal

---

## SECTION 14 — Current Feature Inventory (v08.0)

| Feature | Location | Status |
|---|---|---|
| 5-step Setup Wizard (name/role/timeline/certs/AI) | First launch | ✅ |
| Daily habit tracking + drag-to-reorder (SortableJS) | Daily view | ✅ |
| Linked resources per habit — URL field + link button | Daily view | ✅ |
| 30-day check-in score 1–10 + trend chart | Daily view | ✅ |
| Weekly habit grid + Chart.js bar + doughnut charts | Weekly view | ✅ |
| Monthly goals + progress bars + heatmap | Monthly view | ✅ |
| Quarterly overview + year heatmap | Quarterly view | ✅ |
| Ideas — On Deck / Parking / Warehouse | Ideas view | ✅ |
| Completed Ideas box — auto-move on Done, restore only | Ideas view | ✅ |
| Journal entries with date stamps | Daily view | ✅ |
| Streak protection alert (after 8pm) | Daily view | ✅ |
| Log Day modal (mood / energy / score / notes) | Daily view | ✅ |
| Cert countdown — CISM / CISSP / Custom | Sidebar | ✅ |
| 20 Milestone badges + click-to-reveal detail popup | Sidebar | ✅ |
| Career roadmap + inline edit modal | Sidebar | ✅ |
| AI Coach (OpenRouter) + file attach | Sidebar | ✅ |
| 11-step Onboarding tour — pinned over calendar | First visit | ✅ |
| Change log modal — view / add / delete | Nav bar | ✅ |
| Weekly Wins Digest + AI Debrief (OpenRouter) | Nav bar | ✅ |
| Interview Prep — 3-panel layout + reading pane | Nav bar | ✅ |
| Export PDF — jsPDF + html2canvas + progress overlay | Nav bar | ✅ |
| Light / Dark mode toggle | Header | ✅ |
| Mobile PWA — installable on iOS and Android | All | ✅ |
| Sidebar drag-to-resize (220–480px) | Desktop | ✅ |
| Lucide SVG icon system | All | ✅ |
| Toast notification system (4 types) | All | ✅ |
| Tippy.js tooltips on feature buttons | Nav bar | ✅ |
| ARIA labels + keyboard navigation | All | ✅ |
| Entrance animations (motion-safe) | All | ✅ |
| Design token system (dark + light) | CSS | ✅ |
| Social preview image + OG / Twitter Card meta tags | Meta | ✅ |
| Minimum font size 13px | All | ✅ |

---

## SECTION 15 — Backlog (v09.0+)

| Priority | Feature |
|---|---|
| 🔴 | Background lightening (dark mode `--bg` lift) |
| 🔴 | Full v08.0 test + bug fixes |
| 🟡 | Check-in score overlay on weekly chart |
| 🟡 | CISO framework quick reference cards |
| 🟡 | Light mode polish pass |
| 🟢 | Generic Career Tracker Template (new repo — after CISO complete) |

---

## SECTION 16 — Communication Style

Brihan is neurodivergent. Always:
- One concept at a time
- Visual step-by-step instructions
- Clear checkpoints before proceeding
- Ask clarifying questions with clickable options
- Estimate shifts **before** starting any work
- Flag issues **before** building, not during
- Never assume — confirm at each step

---

## SECTION 17 — Checkpoint Process

**Checkpoint trigger phrase:** `"checkpoint"`
**Next shift trigger phrase:** `"next shift"`

When checkpoint is called:
1. Stop building immediately
2. Deliver current file(s)
3. Post structured test checklist
4. Wait for confirmation before continuing
5. Log failures as RED entries in changelog

---

## SECTION 18 — Quick Reference

```
Current version:      KAIZEN v08.0
Next version:         KAIZEN v09.0
Storage key suffix:   _v30 (never change)
Repo:                 github.com/Corvus-One/ciso-career-tracker
Live URL:             https://corvus-one.github.io/ciso-career-tracker/
                      CISO_Tracker_kaizen_v08.html
License:              CC BY-NC 4.0
Copyright:            © 2026 Corvus-One (Brihan)
File prefix:          CISO_Tracker_
Max tool calls/shift: ~12
Checkpoint trigger:   "checkpoint"
Next shift trigger:   "next shift"
```

---

*Built with Claude · Pursuing CISO · KAIZEN — change for the better, every day*
