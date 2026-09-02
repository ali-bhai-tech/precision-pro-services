import { Phone, Clock } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { Reveal } from "./Reveal";
import Button from "./Button";

export function CTASection({
  eyebrow = siteConfig.availability,
  title = "Need service? We're ready to help.",
  text = "Heat out in January, cooler down at dinner service, refrigerator failing with a full load — call us during business hours or request an appointment online.",
}) {
  return (
    <section className="bg-ink py-16 text-ink-foreground lg:py-20">
      <Reveal className="container-x flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] text-ink-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-foreground/70">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
          <Button href={siteConfig.phoneHref} size="lg">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
          </Button>
          <Button to="/contact" variant="ghostLight" size="lg">
            Request Service
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export default CTASection;
