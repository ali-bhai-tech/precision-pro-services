import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import { testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our customers say"
        text="Reviews from homeowners and business owners across Pingree Grove and the surrounding communities."
        align="center"
      />
      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem
            key={t.name}
            className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift"
          >
            <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
              “{t.quote}”
            </blockquote>
            <footer className="mt-6 border-t border-border pt-5">
              <p className="font-display text-sm font-bold">{t.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t.service}</p>
            </footer>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

export default Testimonials;
