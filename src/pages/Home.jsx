import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { RevealGroup } from "../components/Reveal";
import ServiceArea from "../components/ServiceArea";
import BrandGrid from "../components/BrandGrid";
import HowWeWork from "../components/HowWeWork";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import { categories, getServicesByCategory } from "../data/services";

export function Home() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="What We Do"
          title="Three specialties, one trusted team"
          text="Heating and cooling, commercial and residential refrigeration, and factory-level service for premium appliance brands."
        />
        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {categories.map((cat) => (
            <ServiceCard
              key={cat.slug}
              title={cat.title}
              description={cat.short}
              image={cat.image}
              items={getServicesByCategory(cat.slug).map((s) =>
                s.title.replace(/ (Services|Appliance Service)$/, ""),
              )}
              to={`/${cat.slug}`}
            />
          ))}
        </RevealGroup>
      </section>

      <ServiceArea />
      <BrandGrid />
      <HowWeWork />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default Home;
