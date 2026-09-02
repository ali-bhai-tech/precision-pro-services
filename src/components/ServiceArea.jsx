import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { Reveal } from "./Reveal";
import Button from "./Button";

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-surface py-20 lg:py-28">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Service Area</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.1] sm:text-4xl">
            Serving {siteConfig.serviceArea}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Locally based and locally dispatched. Most service calls inside our coverage area are
            scheduled same-day or next-day, with 24/7 availability for emergencies.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {siteConfig.areasServed.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium"
              >
                {a}
              </li>
            ))}
          </ul>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-sm font-bold">Location</dt>
                <dd className="text-sm text-muted-foreground">{siteConfig.address}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-sm font-bold">Availability</dt>
                <dd className="text-sm text-muted-foreground">{siteConfig.emergency}</dd>
              </div>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Schedule Service</Button>
            <Button href={siteConfig.phoneHref} variant="outline">
              <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.phone}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            {/* Map placeholder — swap for an embedded map later */}
            <div
              className="h-[20rem] w-full lg:h-[26rem]"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.895 0.008 85) 1px, transparent 1px), linear-gradient(90deg, oklch(0.895 0.008 85) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
              role="img"
              aria-label={`Map placeholder for ${siteConfig.serviceArea}`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-lift">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-bold">Pingree Grove, IL</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ServiceArea;
