import PageHero from "../components/PageHero";
import Stats from "../components/Stats";
import SectionHeading from "../components/SectionHeading";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";
import { siteConfig } from "../data/siteConfig";
import { categories } from "../data/services";
import heroImg from "../assets/hero.jpg";
import processImg from "../assets/process.jpg";
import appliancesImg from "../assets/appliances.jpg";
import refrigerationImg from "../assets/refrigeration.jpg";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A technician-led mechanical company built on doing it properly"
        text={`${siteConfig.name} has served ${siteConfig.serviceArea} for more than ${siteConfig.yearsExperience} years — heating, cooling, refrigeration and high-end appliance service under one roof.`}
        image={heroImg}
        imageAlt="Northline technician servicing a furnace"
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="grid grid-cols-2 gap-4 self-start">
            <Reveal className="col-span-2 overflow-hidden rounded-xl border border-border shadow-soft">
              <img
                src={processImg}
                alt="Ductwork installation"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-52 w-full object-cover lg:h-64"
              />
            </Reveal>
            <Reveal
              delay={0.08}
              className="overflow-hidden rounded-xl border border-border shadow-soft"
            >
              <img
                src={refrigerationImg}
                alt="Commercial refrigeration service"
                loading="lazy"
                width={1200}
                height={900}
                className="h-40 w-full object-cover lg:h-52"
              />
            </Reveal>
            <Reveal
              delay={0.14}
              className="overflow-hidden rounded-xl border border-border shadow-soft"
            >
              <img
                src={appliancesImg}
                alt="Premium kitchen appliances"
                loading="lazy"
                width={1200}
                height={900}
                className="h-40 w-full object-cover lg:h-52"
              />
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Fifteen years of field experience — not a franchise playbook"
              text="We started as working technicians, and that hasn't changed. Every job is diagnosed by someone who understands the equipment, not sold from a script."
            />
            <RevealGroup className="mt-10 space-y-6">
              {[
                {
                  title: "HVAC Expertise",
                  text: "Furnaces, air conditioners, heat pumps and ductwork — sized, installed and commissioned with measured airflow and verified performance.",
                },
                {
                  title: "Refrigeration Expertise",
                  text: "Sealed systems, condensers, evaporators and walk-ins for restaurants, retail and homes, with maintenance programs that prevent product loss.",
                },
                {
                  title: "Premium Appliance Expertise",
                  text: "Sub-Zero, Viking, Thermador, Wolf and KitchenAid — platform-specific diagnostics and careful, cabinetry-safe workmanship.",
                },
                {
                  title: "Customer-Focused Approach",
                  text: "Clear pricing before we start, written options, tidy work areas and a walkthrough of everything we did before we leave.",
                },
              ].map((b) => (
                <RevealItem key={b.title} className="border-l-2 border-primary/70 pl-5">
                  <h3 className="font-display text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>

            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
              {categories.map((c) => (
                <RevealItem
                  key={c.slug}
                  className="rounded-xl border border-border bg-card p-5 shadow-soft"
                >
                  <p className="font-display text-sm font-bold">{c.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.short}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <Stats />
      <WhyChooseUs />
      <CTASection
        eyebrow="Work With Us"
        title="Ready for service you can actually rely on?"
        text="Schedule an appointment or call and speak directly with a technician about what's going on."
      />
    </>
  );
}

export default About;
