# VitalQuest

VitalQuest is a gamified wellness platform built with Next.js 16, Clerk, Prisma, and PostgreSQL. It implements the coursework and PRD scope as a deployable MVP with:

- a public landing page
- Clerk-based authentication
- protected dashboard flows
- profile setup
- Bio-Sync wearable connection simulation
- quests and rewards
- story progression
- guild/community features
- analytics and export routes
- free/pro plan switching

## Stack

- Next.js 16.2.0 App Router
- React 19
- Clerk for authentication
- Prisma 7 with PostgreSQL
- Tailwind CSS 4

## Required environment variables

Copy `.env.example` to `.env` and set:

```bash
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:5432/DB_NAME"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_THEME_MODE=light
NEXT_PUBLIC_ENABLE_THEME_TOGGLE=true
```

Notes:

- `DATABASE_URL` is required for all signed-in product features.
- Clerk can run in keyless development mode locally if you leave the Clerk keys empty.

## Local development

```bash
npm install
npm run db:generate
npm run dev
```

If you want the schema applied to a local database:

```bash
npm run db:push
```

## Validation

```bash
npm run lint
npm run build
```

## Product routes

- `/` marketing landing page
- `/sign-in`
- `/sign-up`
- `/dashboard`
- `/quests`
- `/bio-sync`
- `/story`
- `/community`
- `/analytics`
- `/profile`
- `/pricing`
- `/api/export`

## Data model highlights

The Prisma schema includes:

- `User`
- `UserProfile`
- `WearableConnection`
- `UserQuest`
- `StoryChapterProgress`
- `Guild`
- `GuildMembership`
- `CommunityPost`
- `MetricSnapshot`
- `AchievementProgress`
- `ReportExport`

On first authenticated access, the app seeds a realistic demo workspace for that user so the platform is immediately usable.
