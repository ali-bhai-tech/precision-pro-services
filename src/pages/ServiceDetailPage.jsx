import { useState } from "react";
import { AlertTriangle, Check, ChevronDown, Wrench } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import ServiceCard from "../components/ServiceCard";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";
import { siteConfig } from "../data/siteConfig";
import { getCategory, getService, getServicesByCategory } from "../data/services";

export function ServiceDetailPage({ categorySlug, slug }) {
  const category = getCategory(categorySlug);
  const service = getService(categorySlug, slug);
  const related = getServicesByCategory(categorySlug)
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={category.title}
        title={service.title}
        text={service.short}
        image={service.image}
        imageAlt={service.title}
        crumbs={[
          { label: "Home", to: "/" },
          { label: category.title, to: `/${category.slug}` },
          { label: service.title },
        ]}
      />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Service Overview" title="What this service covers" text={service.description} />

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <Reveal>
                <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                  <AlertTriangle className="h-4.5 w-4.5 text-primary" aria-hidden="true" /> Common Problems
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.commonProblems.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.08}>
                <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                  <Wrench className="h-4.5 w-4.5 text-primary" aria-hidden="true" /> Our Solutions
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.solutions.map((s) => (
                    <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="mt-14">
              <h3 className="font-display text-lg font-bold">Benefits</h3>
              <RevealGroup className="mt-5 grid gap-4 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <RevealItem
                    key={b}
                    className="rounded-xl border border-border bg-card p-5 text-sm font-medium shadow-soft"
                  >
                    {b}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div className="mt-14">
              <h3 className="font-display text-lg font-bold">How We Work</h3>
              <ol className="mt-5 space-y-4 border-l border-border pl-6">
                {siteConfig.process.map((step) => (
                  <li key={step.step} className="relative">
                    <span className="absolute -left-[1.9rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[0.6rem] font-bold text-primary-foreground">
                      {step.step}
                    </span>
                    <p className="font-display text-sm font-bold">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-14">
              <h3 className="font-display text-lg font-bold">Frequently Asked Questions</h3>
              <div className="mt-5 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
                {service.faqs.map((f) => (
                  <Faq key={f.q} {...f} />
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <p className="eyebrow">More in {category.title}</p>
              <ul className="mt-4 space-y-1">
                {getServicesByCategory(categorySlug).map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`/${category.slug}/${s.slug}`}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                        s.slug === slug ? "bg-secondary text-primary" : "text-foreground/85"
                      }`}
                      aria-current={s.slug === slug ? "page" : undefined}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-ink p-5 text-ink-foreground">
                <p className="font-display text-sm font-bold">{siteConfig.emergency}</p>
                <p className="mt-2 text-xs leading-relaxed text-ink-foreground/70">
                  Speak with a technician now.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-4 block rounded-md bg-primary px-4 py-2.5 text-center text-sm font-bold text-primary-foreground"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="bg-surface py-20 lg:py-24">
          <div className="container-x">
            <SectionHeading eyebrow="Related Services" title={`Other ${category.title.toLowerCase()} services`} />
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard
                  key={s.slug}
                  title={s.title}
                  description={s.short}
                  image={s.image}
                  to={`/${category.slug}/$slug`}
                  params={{ slug: s.slug }}
                  cta="View Service"
                />
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      <CTASection
        title={`Book ${service.title.toLowerCase()} with a certified technician`}
        text="Request an appointment online or call now for emergency dispatch."
      />
    </>
  );
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold"
      >
        {q}
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open ? <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p> : null}
    </div>
  );
}

export default ServiceDetailPage;
