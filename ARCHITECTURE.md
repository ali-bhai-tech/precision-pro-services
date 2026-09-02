# Architecture

## Stack

Precision Pro Services is a React 19 application built with Vite 8, TanStack Start, TanStack Router, Tailwind CSS 4, Framer Motion, and Bun. The production target is Vercel.

## Source Layout

- `src/components/`: reusable visual components and page sections. Global layout components, shared UI primitives, and domain sections remain together because the active component set is small and coherent.
- `src/pages/`: page-level compositions. These components orchestrate sections and receive route-specific values without owning URL definitions.
- `src/routes/`: TanStack file-based route definitions. Static routes define page metadata; category routes render shared category pages; `$slug` routes validate service slugs and render shared detail pages.
- `src/data/`: local business, service, navigation, brand, testimonial, and site configuration data. Data modules contain no JSX.
- `src/lib/`: framework-independent utilities and integration boundaries. `utils.ts` contains class-name composition; error modules support SSR/error reporting; `contact.js` exposes the TanStack server-function boundary.
- `src/assets/`: source images bundled by Vite.
- `src/styles.css`: global Tailwind entry point and design tokens.
- `src/router.tsx`: router factory and shared query context.
- `src/routeTree.gen.ts`: generated TanStack Router route tree. Do not edit manually.
- `src/start.ts`: TanStack Start middleware configuration.
- `src/server.ts`: SSR server entry and catastrophic error-response normalization.

## Component Boundaries

`Navbar`, `MobileMenu`, and `Footer` form the global layout. `Button`, `SectionHeading`, and `Reveal` are shared UI primitives. `ContactForm`, `Gallery`, `Testimonials`, and `ServicesMenu` are feature components. `Hero`, `Stats`, `HowWeWork`, `WhyChooseUs`, `ServiceArea`, `BrandGrid`, and `CTASection` are reusable page sections. The page components compose these pieces and do not contain backend calls.

## Data and Routing

There are three service categories and twelve service records. Category and detail pages are data-driven through `services.js`. Invalid detail slugs are rejected with TanStack Router `notFound()` before rendering. The generated route tree maps the nine route definitions to the twenty public URLs.

## Server and Client Boundaries

Browser-safe code includes the active React components, local data, bundled assets, and class-name utility. Browser-only APIs are isolated to client effects such as navbar scroll handling and Lovable runtime reporting. Server-side code is limited to TanStack Start startup, SSR handling, middleware, and error capture.

The contact form calls a server function in `src/lib/contact.js`. The handler validates and normalizes requests, then dynamically loads the server-only repository in `src/server/contact/repository.js`. The production flow is:

```text
ContactForm UI
  -> shared validation
  -> TanStack Start server function or API handler
  -> server-side Supabase client
  -> contact_requests table
```

TanStack Start's import protection requires the `createServerFn` export to be importable by the browser bundle; the handler body still executes on the server. The repository loads `src/server/contact/supabase.js`, which creates a server-only Supabase client from environment variables. Service-role credentials remain server-only.

The database contract is recorded in `supabase/migrations/001_create_contact_requests.sql`. The live `contact_requests` table and its expected columns were verified through the Supabase REST API. The migration enables Row Level Security without public policies; live policy inspection still requires an anonymous publishable key or authenticated Supabase management access.

## Environment Strategy

The server expects `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, documented without values in `.env.example`. Local secrets belong in ignored environment files, and neither variable is prefixed for client exposure.

## Deliberate Scope

The current folder layout is intentionally unchanged because each active directory has a clear responsibility and the application has no current API/service layer requiring a new abstraction. Future backend work can add a focused server boundary without relocating the existing UI or static data.
