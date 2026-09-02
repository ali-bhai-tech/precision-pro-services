import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import ServiceArea from "../components/ServiceArea";
import { Reveal } from "../components/Reveal";
import { siteConfig } from "../data/siteConfig";

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Schedule service or ask a technician"
        text="Tell us what's happening with your system and we'll get you on the schedule — usually same or next day."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[0.85fr_1fr] lg:gap-16 lg:py-24">
        <Reveal>
          <h2 className="font-display text-2xl font-bold">Get in touch</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Prefer to talk it through? Call and you'll reach someone who works on this equipment
            every day.
          </p>

          <ul className="mt-8 space-y-5">
            <Item icon={Phone} label="Phone" href={siteConfig.phoneHref} value={siteConfig.phone} />
            <Item icon={Mail} label="Email" href={siteConfig.emailHref} value={siteConfig.email} />
            <Item icon={MapPin} label="Address" value={siteConfig.address} />
          </ul>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-soft">
            <h3 className="flex items-center gap-2 font-display text-sm font-bold">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" /> Business Hours
            </h3>
            <dl className="mt-4 space-y-2.5 text-sm">
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{h.day}</dt>
                  <dd className="font-medium">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-5 rounded-xl border border-primary/25 bg-accent/50 p-6">
            <h3 className="flex items-center gap-2 font-display text-sm font-bold">
              <Siren className="h-4 w-4 text-primary" aria-hidden="true" /> {siteConfig.emergency}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-accent-foreground/80">
              No heat, no cooling or refrigeration failure? Call{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-bold text-primary underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              any time, day or night.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </section>

      <ServiceArea />
    </>
  );
}

function Item({ icon: Icon, label, value, href }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-card">
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
          {label}
        </span>
        {href ? (
          <a href={href} className="mt-1 block break-all text-sm font-semibold hover:text-primary">
            {value}
          </a>
        ) : (
          <span className="mt-1 block text-sm font-semibold">{value}</span>
        )}
      </span>
    </li>
  );
}

export default Contact;
