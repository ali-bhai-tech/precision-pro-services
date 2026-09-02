# Architecture

## Stack

Precision Pro Services is a React 19 application built with Vite 8, TanStack Start, TanStack Router, Tailwind CSS 4, Framer Motion, and Bun. The production target is Vercel.

## Source Layout

- `src/components/`: reusable visual components and page sections. Global layout components, shared UI primitives, and domain sections remain together because the active component set is small and coherent.
- `src/pages/`: page-level compositions. These components orchestrate sections and receive route-specific values without owning URL definitions.
- `src/routes/`: TanStack file-based route definitions. Static routes define page metadata; category routes render shared category pages; `$slug` routes validate service slugs and render shared detail pages.
- `src/data/`: local business, service, navigation, brand, testimonial, and site configuration data. Data modules contain no JSX.
- `src/lib/`: framework-independent utilities and integration boundaries. `utils.ts` contains class-name composition; error modules support SSR/error reporting; `supabase.js` is currently a local placeholder data layer.
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

The contact form currently calls a local mock in `src/lib/supabase.js`. The future production flow should be:

```text
ContactForm UI
  -> shared validation
  -> TanStack Start server function or API handler
  -> server-side Supabase client
  -> contact_requests table
```

Future contact submission code should live under a dedicated server boundary such as `src/server/contact/` or a clearly server-marked module, and should never import service-role credentials into browser code. Public Supabase values may use Vite client environment variables only when needed; service-role credentials must remain server-only.

## Environment Strategy

No environment variables are currently consumed. When the backend is added, document variable names in `.env.example`, keep local secrets in ignored environment files, and separate public browser configuration from server-only credentials.

## Deliberate Scope

The current folder layout is intentionally unchanged because each active directory has a clear responsibility and the application has no current API/service layer requiring a new abstraction. Future backend work can add a focused server boundary without relocating the existing UI or static data.
