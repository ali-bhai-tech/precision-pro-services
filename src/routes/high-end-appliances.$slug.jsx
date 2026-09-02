import { createFileRoute, notFound } from "@tanstack/react-router";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import { getService } from "../data/services";

export const Route = createFileRoute("/high-end-appliances/$slug")({
  beforeLoad: ({ params }) => {
    if (!getService("high-end-appliances", params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = getService("high-end-appliances", params.slug);
    if (!service) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${service.title} | Northline Mechanical`;
    return {
      meta: [
        { title },
        { name: "description", content: service.short },
        { property: "og:title", content: title },
        { property: "og:description", content: service.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/high-end-appliances/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: service.short },
      ],
      links: [{ rel: "canonical", href: `/high-end-appliances/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            areaServed: "Pingree Grove, IL",
            provider: { "@type": "LocalBusiness", name: "Northline Mechanical" },
          }),
        },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <ServiceDetailPage categorySlug="high-end-appliances" slug={slug} />;
}
