# Tiny Meeting Cost

> **TinyManager Module · Alpha**  
> Calculate the time and financial cost of a meeting with only three inputs.

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Alpha-F59E0B)
![CI](https://github.com/webtanan-sketch/tiny-meeting-cost/actions/workflows/ci.yml/badge.svg)
![FA RTL](https://img.shields.io/badge/FA-RTL-0F766E)
![EN LTR](https://img.shields.io/badge/EN-LTR-0F766E)
![License](https://img.shields.io/badge/License-MIT-111827)

## Why this tool?

A 60- or 90-minute meeting is not only calendar time. It consumes the combined time of everyone in the room. Tiny Meeting Cost makes that cost visible without setup-heavy forms.

## What the current Alpha does

It asks for only:

1. **Participant count**
2. **Duration in minutes**
3. **Average hourly cost per person**

It instantly returns:

- estimated total meeting cost
- total person-hours consumed
- approximate cost per minute
- Toman, IRR, USD and EUR currency choices

## Example

```text
8 people
90 minutes
$45 / hour / person

→ 12 person-hours
→ $540 estimated cost
```

## Tiny AI

Inside TinyManager, the same calculation can be requested without opening the module:

```text
What's the cost of a 90 minute meeting with 8 people at $45/hour?
```

Tiny AI routes the request to `tiny-meeting-cost.calculate`. Because calculation is read-only, the answer is returned immediately. If one required value is missing, TinyManager asks only for that value.

## Two execution modes

### Standalone

This repository runs as its own React app. Locale, theme and the latest values persist locally in the browser.

### TinyManager Module

The same domain calculator and `MeetingCostWorkspace` are consumed as a package by TinyManager, so AI, standalone UI and integrated UI do not duplicate business logic.

```text
Tiny Meeting Cost
├── Domain calculator
├── Standalone App
└── TinyManager Module API
    ├── UI Workspace
    └── Tiny AI calculate action
```

## Module identity

```text
ID:       tiny-meeting-cost
Icon:     Clock3 (Lucide)
Category: insight
Route:    /modules/meeting-cost
Status:   Alpha
AI:       tiny-meeting-cost.calculate
```

## Stack

TypeScript · React · Vite · Tailwind CSS · Lucide Icons · Vitest

## Quality

Every push runs:

```text
Install → Typecheck → Tests → Standalone Build → Module Build
```

The current Alpha passes this pipeline.

## Product principles

- minimal input
- live result, no extra Calculate button
- Persian RTL / English LTR
- no mandatory login or backend
- one domain engine for AI, standalone and Core
- advanced detail only when needed

## Roadmap

- [x] Calculation engine
- [x] Standalone UI
- [x] TinyManager package build
- [x] TypeScript declarations
- [x] Tiny AI action contract
- [x] Tests + CI
- [ ] Live meeting timer
- [ ] Participant-level cost breakdown
- [ ] Shareable summary / export

## License

MIT © 2026 Webtanan
