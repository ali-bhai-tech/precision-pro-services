import { Check } from "lucide-react";
import detailImg from "../assets/detail.jpg";
import { siteConfig } from "../data/siteConfig";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import Button from "./Button";

export function WhyChooseUs({ image = detailImg, imageAlt = "Technician checking refrigerant pressures" }) {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1200}
              height={900}
              className="h-[20rem] w-full object-cover lg:h-[32rem]"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
            Professional Service. <span className="text-primary">Done Right.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We're a technician-led company, not a call center. That means better diagnostics,
            straight answers and repairs that actually last.
          </p>
          <RevealGroup className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {siteConfig.whyChooseUs.map((r) => (
              <RevealItem key={r.title} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-3 w-3 text-accent-foreground" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold">{r.title}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{r.text}</span>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Schedule Service</Button>
            <Button href={siteConfig.phoneHref} variant="outline">
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
