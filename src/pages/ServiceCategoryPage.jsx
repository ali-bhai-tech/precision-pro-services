import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import Stats from "../components/Stats";
import { RevealGroup } from "../components/Reveal";
import { getCategory, getServicesByCategory } from "../data/services";

export function ServiceCategoryPage({ categorySlug }) {
  const category = getCategory(categorySlug);
  const items = getServicesByCategory(categorySlug);

  return (
    <>
      <PageHero
        eyebrow={category.title}
        title={category.heading}
        text={category.short}
        image={category.image}
        imageAlt={`${category.title} service`}
        crumbs={[{ label: "Home", to: "/" }, { label: category.title }]}
      />

      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Overview"
          title={`${category.title} service, done to specification`}
          text={category.description}
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.short}
              image={s.image}
              items={s.benefits.slice(0, 3)}
              to={`/${category.slug}/$slug`}
              params={{ slug: s.slug }}
              cta="View Service"
            />
          ))}
        </RevealGroup>
      </section>

      <Stats />
      <WhyChooseUs image={category.image} imageAlt={`${category.title} technician at work`} />
      <CTASection
        title={`Need ${category.title.toLowerCase()} service today?`}
        text="Call for immediate dispatch or request an appointment online — we'll confirm your window quickly."
      />
    </>
  );
}

export default ServiceCategoryPage;
