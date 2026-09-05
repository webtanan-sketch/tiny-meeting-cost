# Tiny Meeting Cost

> **TinyManager Module · Alpha**  
> هزینه زمانی و مالی یک جلسه را با سه ورودی ساده محاسبه کن.

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Alpha-F59E0B)
![CI](https://github.com/webtanan-sketch/tiny-meeting-cost/actions/workflows/ci.yml/badge.svg)
![FA RTL](https://img.shields.io/badge/FA-RTL-0F766E)
![EN LTR](https://img.shields.io/badge/EN-LTR-0F766E)
![License](https://img.shields.io/badge/License-MIT-111827)

## چرا این ابزار؟

یک جلسه ۶۰ یا ۹۰ دقیقه‌ای فقط «زمان تقویم» نیست؛ مجموع زمان تمام افرادی است که در آن حضور دارند. Tiny Meeting Cost این هزینه را بدون فرم‌های سنگین و تنظیمات اضافی شفاف می‌کند.

## نسخه فعلی چه می‌کند؟

فقط سه ورودی اصلی می‌گیرد:

1. **تعداد شرکت‌کنندگان**
2. **مدت جلسه به دقیقه**
3. **هزینه ساعتی متوسط هر نفر**

و همان لحظه نمایش می‌دهد:

- هزینه کل برآوردی جلسه
- مجموع **نفر-ساعت (Person-hours)** مصرف‌شده
- هزینه تقریبی هر دقیقه جلسه
- واحد پول قابل انتخاب: تومان، ریال، USD و EUR

## مثال

```text
8 نفر
90 دقیقه
500,000 تومان / ساعت / نفر

→ 12 نفر-ساعت
→ 6,000,000 تومان هزینه برآوردی
```

## Tiny AI

این ماژول برای استفاده بدون باز کردن فرم هم طراحی شده است. در TinyManager می‌توان نوشت:

```text
جلسه ۸ نفره ۹۰ دقیقه با هزینه ساعتی ۵۰۰ هزار تومان چقدر هزینه دارد؟
```

Tiny AI درخواست را به `tiny-meeting-cost.calculate` هدایت می‌کند و چون این عملیات فقط محاسبه است و داده‌ای را تغییر نمی‌دهد، نتیجه را مستقیم برمی‌گرداند.

اگر یکی از اطلاعات ضروری وجود نداشته باشد، TinyManager فقط همان یک مورد را سؤال می‌کند.

## دو حالت اجرا

### Standalone

این Repo یک React App مستقل است و بدون TinyManager هم قابل اجراست. تنظیمات زبان، پوسته و آخرین مقادیر در مرورگر ذخیره می‌شوند.

### TinyManager Module

همان Domain Logic و همان `MeetingCostWorkspace` به‌عنوان Package داخل TinyManager استفاده می‌شوند؛ بنابراین نسخه مستقل، صفحه ماژول و Tiny AI سه پیاده‌سازی جدا از محاسبات ندارند.

```text
Tiny Meeting Cost
├── Domain calculator
├── Standalone App
└── TinyManager Module API
        ├── UI Workspace
        └── Tiny AI calculate action
```

## Module Identity

```text
ID:       tiny-meeting-cost
Icon:     Clock3 (Lucide)
Category: insight
Route:    /modules/meeting-cost
Status:   Alpha
AI:       tiny-meeting-cost.calculate
```

## Stack

- TypeScript
- React
- Vite
- Tailwind CSS
- Lucide Icons
- Vitest
- Local-first persistence

## کیفیت

GitHub Actions روی هر Push این مراحل را اجرا می‌کند:

```text
Install → Typecheck → Tests → Standalone Build → Module Build
```

نسخه Alpha فعلی این Pipeline را با موفقیت عبور می‌دهد.

## اصول طراحی

- کمترین ورودی ممکن
- نتیجه زنده و بدون دکمه «محاسبه»
- فارسی RTL / English LTR
- بدون Login و Backend اجباری
- یک Domain Logic مشترک برای AI، Standalone و Core
- تنظیمات پیشرفته فقط در صورت نیاز

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
