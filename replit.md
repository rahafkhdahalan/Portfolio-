# Replit.md

## Overview

This is a personal portfolio/landing page for "Joma from Gaza" — a single-page website that tells a personal story with sections for about, struggles, a photo gallery, community messages, and donation/contact information (USDT crypto address + WhatsApp). The app has a full-stack architecture with a React frontend and Express backend, using PostgreSQL for storing visitor messages (guestbook-style).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, built with Vite
- **Routing**: Wouter (lightweight React router) — single page app with Home and 404 pages
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support), custom color palette with calming blues/teals
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives — extensive component library already installed
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **Data Fetching**: TanStack React Query for server state management
- **Fonts**: DM Sans (body), Outfit (display), Architects Daughter (handwriting)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via tsx
- **API Pattern**: REST endpoints defined in `shared/routes.ts` with Zod schemas for input validation and response typing
- **Development**: Vite dev server with HMR proxied through Express (`server/vite.ts`)
- **Production**: Client built to `dist/public`, server bundled with esbuild to `dist/index.cjs`
- **Static files**: Images served from `/images/` path, attached assets available via `@assets` alias

### Database
- **Database**: PostgreSQL (required, via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-Zod validation
- **Schema location**: `shared/schema.ts` — shared between frontend and backend
- **Current tables**:
  - `messages` — id (serial), name (text), content (text), createdAt (timestamp)
- **Migrations**: Drizzle Kit with `drizzle-kit push` command (`db:push` script)
- **Connection**: `pg` Pool in `server/db.ts`

### API Endpoints
- `POST /api/messages` — Create a new message (validated with insertMessageSchema)
- `GET /api/messages` — List all messages
- `DELETE /api/messages/:id` — Delete a message (defined in routes but not yet implemented in server)

### Key Design Decisions
1. **Shared schema and route definitions**: The `shared/` directory contains both the database schema and API route contracts, ensuring type safety across the full stack.
2. **Seed data**: The server automatically seeds 3 example messages if the messages table is empty on startup.
3. **No authentication**: This is a public-facing personal site with no auth requirements.
4. **Single-page design**: The Home page is a long-scrolling page with smooth-scroll navigation between sections.

## External Dependencies

- **PostgreSQL**: Required database, connection via `DATABASE_URL` environment variable
- **Google Fonts**: DM Sans, Outfit, Architects Daughter loaded via CDN
- **Replit plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev only)
- **No external APIs or third-party services** beyond the database