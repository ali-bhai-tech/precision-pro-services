# Precision Pro Services

Build a complete premium HVAC / Refrigeration / High-End Appliance business website using ONLY:

- React

- Vite

- JavaScript / JSX

- Tailwind CSS

- React Router

- Framer Motion

- Lucide React

Do NOT use Next.js, TypeScript, complex backend frameworks, or unnecessary libraries.

The goal is to create a polished production-ready FRONTEND that can be connected to Supabase later.

IMPORTANT:

Keep the implementation simple and reusable so the entire website can be built efficiently. Do NOT create 20 completely separate page components. Use reusable templates and centralized data.

==================================================

1. WEBSITE PURPOSE

==================================================

Create a modern, premium HVAC service company website inspired by the attached reference screenshots.

Use the reference for:

- navigation

- service hierarchy

- business/service context

- content structure

Do NOT copy the visual design exactly.

The new website should feel significantly better:

- premium

- modern

- clean

- professional

- trustworthy

- high-end

- conversion focused

- technically sophisticated

Think:

"premium HVAC company + modern engineering company + luxury home services."

==================================================

2. PAGE STRUCTURE

==================================================

Create these routes:

MAIN:

/

/about

/contact

SERVICE CATEGORY:

/hvac

/refrigeration

/high-end-appliances

HVAC:

/hvac/furnaces

/hvac/air-conditioners

/hvac/heat-pumps-ductwork

/hvac/thermostats

REFRIGERATION:

/refrigeration/condenser

/refrigeration/evaporator

/refrigeration/walk-in-coolers

/refrigeration/free-standing-refrigerators

/refrigeration/wine-coolers

HIGH-END APPLIANCES:

/high-end-appliances/sub-zero

/high-end-appliances/viking

/high-end-appliances/thermador

/high-end-appliances/wolf

/high-end-appliances/kitchenaid

TOTAL: 20 pages/routes.

IMPORTANT:

Do NOT create a separate custom component for every page.

Use:

ServiceCategoryPage.jsx

ServiceDetailPage.jsx

and render the content dynamically from services.js.

==================================================

3. DATA-DRIVEN ARCHITECTURE

==================================================

Create:

src/data/siteConfig.js

src/data/services.js

src/data/brands.js

src/data/testimonials.js

All business content should be stored there.

Example service structure:

{

slug: "furnaces",

category: "HVAC",

title: "Furnace Services",

description: "...",

image: "...",

benefits: [...],

commonProblems: [...],

faqs: [...]

}

Use React Router to dynamically render service pages.

This is important because I will connect Supabase later.

Also create:

src/lib/supabase.js

with a simple placeholder Supabase client structure, but DO NOT actually require Supabase to run the website.

==================================================

4. HEADER / NAVIGATION

==================================================

Create a premium sticky responsive navbar.

Desktop:

LOGO

HOME

ABOUT US

SERVICES ▼

CONTACT US

PHONE

EMAIL / SCHEDULE CTA

Services dropdown:

HVAC

Furnaces

Air Conditioners

Heat Pumps & Ductwork

Thermostats

REFRIGERATION

Condenser

Evaporator

Walk-In Coolers

Free Standing Refrigerators

Wine Coolers

HIGH-END APPLIANCES

Sub-Zero

Viking

Thermador

Wolf

KitchenAid

Use a clean mega-menu / multi-level dropdown.

Mobile:

Use hamburger menu + accordion service categories.

Header should become slightly blurred/solid while scrolling.

==================================================

5. VISUAL STYLE

==================================================

Color palette:

- warm white

- off-white

- charcoal / near-black

- soft gray

- restrained warm orange accent

Orange should mainly be used for:

- CTA buttons

- active navigation

- small highlights

- icons

- important numbers

Avoid excessive orange.

Typography:

Use a modern premium sans-serif.

Large bold headings.

Generous whitespace.

Strong visual hierarchy.

Use subtle borders, soft shadows and refined cards.

Avoid generic template-looking sections.

==================================================

6. HOME PAGE

==================================================

Create a premium conversion-focused homepage.

SECTION 1 — HERO

Large headline:

"HVAC | Refrigeration | High-End Appliance Services"

Supporting text explaining professional heating, cooling, refrigeration and appliance services.

Buttons:

"Schedule Service"

"Call Now"

Use a large premium HVAC technician / mechanical-system image.

Add subtle Framer Motion entrance animation.

==================================================

7. TRUST / STATS

==================================================

Create a compact trust section with:

15+

Years Experience

2500+

Customers Served

1600+

HVAC Services

600+

Refrigeration Services

1200+

Appliance Services

Keep numbers editable in siteConfig.js.

Use animated counters.

==================================================

8. SERVICES

==================================================

Create 3 premium service cards:

HVAC

Refrigeration

High-End Appliances

Each card:

- image

- title

- description

- service list

- Explore Services button

Clicking a card opens its category page.

==================================================

9. SERVICE AREA

==================================================

Create:

"Serving Pingree Grove & Surrounding Areas"

Include:

- short text

- map placeholder

- location information

- Schedule Service CTA

Keep the map implementation simple so it can be replaced later.

==================================================

10. BRANDS

==================================================

Create "Brands We Service".

HVAC brands:

- Carrier

- American Standard

- Bryant

- Lennox

- Goodman

High-end brands:

- Sub-Zero

- Viking

- Thermador

- Wolf

- KitchenAid

Use clean logo/text treatment.

Store brands in brands.js.

==================================================

11. HOW WE WORK

==================================================

Create a large image/video-style section:

"How We Work"

Steps:

01 Schedule

02 Diagnose

03 Recommend

04 Repair / Install

05 Test

Use a large image with a play-button style overlay.

No actual video backend is required.

==================================================

12. WHY CHOOSE US

==================================================

Create a premium split image/content section.

Headline:

"Professional Service. Done Right."

Include:

- experienced technicians

- fast response

- reliable repairs

- quality workmanship

- transparent recommendations

- customer-focused service

- service support during business hours

Add CTA.

==================================================

13. GALLERY

==================================================

Create a premium project/work gallery.

Use 6–8 high-quality HVAC / refrigeration / appliance images.

Use a responsive grid.

Add:

- hover animation

- subtle image zoom

- lightbox optional, but keep implementation simple

==================================================

14. TESTIMONIALS

==================================================

Create a 3-card testimonial section.

Each testimonial:

- name

- service

- rating

- short review

Use simple Framer Motion animation.

Store testimonials in testimonials.js.

==================================================

15. SERVICE CTA

==================================================

Create a strong section:

"Need service?

We're Ready To Help."

Buttons:

Call Now

Request Service

Mention the verified business hours.

==================================================

16. ABOUT PAGE

==================================================

Create a premium About page with:

Hero:

"About Us"

Content:

- company introduction

- 15+ years experience

- HVAC expertise

- refrigeration expertise

- premium appliance expertise

- customer-focused approach

Add image collage.

Add "Why Choose Us" section.

Add experience statistic.

Add CTA.

==================================================

17. CONTACT PAGE

==================================================

Create a premium Contact page.

LEFT:

- phone

- email

- address

- business hours

- business-hours service

RIGHT:

Contact form.

Fields:

Name

Phone

Email

Service

Preferred Date

Preferred Time

Message

Button:

"Request Service"

For now submit the form locally and show a success message.

Structure it so Supabase can be connected later.

==================================================

18. CATEGORY PAGES

==================================================

Create one reusable ServiceCategoryPage.

HVAC category:

- Furnaces

- Air Conditioners

- Heat Pumps & Ductwork

- Thermostats

Refrigeration:

- Condenser

- Evaporator

- Walk-In Coolers

- Free Standing Refrigerators

- Wine Coolers

High-End Appliances:

- Sub-Zero

- Viking

- Thermador

- Wolf

- KitchenAid

Each category page should have:

Hero

Introduction

Service cards

Why Choose Us

CTA

==================================================

19. SERVICE DETAIL PAGES

==================================================

Create ONE reusable ServiceDetailPage component.

Every individual service page automatically receives its content from services.js.

Layout:

Hero

Service Overview

Common Problems

Our Solutions

Benefits

How We Work

FAQ

CTA

Do NOT manually build 14 separate page layouts.

==================================================

20. ANIMATION

==================================================

Use Framer Motion only for useful animations.

Use:

- fade-up

- stagger

- image reveal

- button hover

- card hover

- dropdown animation

- mobile menu animation

- counter animation

Keep animations subtle and fast.

Support prefers-reduced-motion.

DO NOT overanimate.

==================================================

21. RESPONSIVE DESIGN

==================================================

Must work properly on:

- desktop

- laptop

- tablet

- mobile

Do not merely shrink desktop layouts.

Create intentional mobile layouts.

Pay special attention to:

- navbar

- mega menu

- hero

- cards

- gallery

- contact form

- footer

==================================================

22. FOOTER

==================================================

Create a professional 4-column footer.

Company:

About

Contact

Service Area

HVAC:

Furnaces

Air Conditioners

Heat Pumps & Ductwork

Thermostats

Refrigeration:

Condenser

Evaporator

Walk-In Coolers

Free Standing Refrigerators

Wine Coolers

High-End Appliances:

Sub-Zero

Viking

Thermador

Wolf

KitchenAid

Bottom:

Copyright

Social icons

Privacy

Terms

==================================================

23. COMPONENT STRUCTURE

==================================================

Use reusable components:

Navbar

ServicesMenu

MobileMenu

Hero

SectionHeading

ServiceCard

ServiceCategoryPage

ServiceDetailPage

Stats

BrandGrid

Gallery

Testimonials

HowWeWork

WhyChooseUs

CTASection

ContactForm

Footer

Keep components small and reusable.

==================================================

24. FILE STRUCTURE

==================================================

Use:

src/

components/

pages/

data/

layouts/

lib/

Important files:

src/App.jsx

src/main.jsx

src/pages/Home.jsx

src/pages/About.jsx

src/pages/Contact.jsx

src/pages/ServiceCategoryPage.jsx

src/pages/ServiceDetailPage.jsx

src/data/siteConfig.js

src/data/services.js

src/data/brands.js

src/data/testimonials.js

src/lib/supabase.js

==================================================

25. SUPABASE PREPARATION

==================================================

DO NOT build a backend now.

Just prepare the frontend architecture.

Create placeholder:

supabase.js

Make it easy to later replace:

local services

local testimonials

local contact submissions

with Supabase.

Do not require environment variables for the current demo to run.

==================================================

26. CONTENT

==================================================

Use the following business context:

Industry:

HVAC / Heating / Cooling / Refrigeration / High-End Appliance Service

Service area:

Pingree Grove & surrounding areas

Experience:

15+ years

Business hours:

See the verified hours in the site configuration.

Reference services:

HVAC:

Furnaces

Air Conditioners

Heat Pumps & Ductwork

Thermostats

Refrigeration:

Condenser

Evaporator

Walk-In Coolers

Free Standing Refrigerators

Wine Coolers

High-End Appliances:

Sub-Zero

Viking

Thermador

Wolf

KitchenAid

Use professional placeholder copy where exact business copy is unavailable.

Keep all editable content inside data files.

==================================================

27. IMAGE DIRECTION

==================================================

Use premium realistic images.

Preferred imagery:

- professional HVAC technicians

- modern HVAC systems

- furnace installation

- AC maintenance

- ductwork

- refrigeration equipment

- walk-in coolers

- premium kitchen appliances

- luxury residential environments

- technical close-ups

Avoid cheap-looking generic stock photography.

Use consistent image quality and composition.

==================================================

28. SEO

==================================================

Each route should have:

- unique page title

- meta description

- clean URL

- proper H1

Service URLs must remain clean and descriptive.

==================================================

29. ACCESSIBILITY

==================================================

Use:

- semantic HTML

- alt text

- keyboard-accessible navigation

- visible focus states

- accessible dropdowns

- proper headings

- sufficient contrast

==================================================

30. MOST IMPORTANT IMPLEMENTATION RULE

==================================================

BUILD SMART, NOT LARGE.

Do not duplicate layouts.

Use:

ONE homepage

ONE about page

ONE contact page

ONE category template

ONE service detail template

Then populate them through data.

This is intentional so the complete 20-route website remains lightweight, maintainable and easy to extend.

==================================================

31. FINAL RESULT

==================================================

The final result should look like a premium digital-agency-designed HVAC website.

It should feel:

modern

premium

minimal

technical

trustworthy

high-converting

responsive

The reference screenshots provide the business structure only.

Create a substantially better UI/UX and visual system.

Most importantly:

BUILD THE COMPLETE WORKING WEBSITE, NOT JUST A HOMEPAGE MOCKUP.

All 20 routes must work.

All service links in the navigation must work.

No broken links.

No unnecessary complexity.

No backend required yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/53e864af-4a59-4f7f-88b7-89fdd0a4c9ef).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
