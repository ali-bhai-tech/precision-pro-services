import { createFileRoute } from "@tanstack/react-router";
import ServiceCategoryPage from "../pages/ServiceCategoryPage";
import { getCategory } from "../data/services";

const cat = getCategory("refrigeration");
const title = `${cat.title} Services | Northline Mechanical`;
const description = cat.short;

export const Route = createFileRoute("/refrigeration/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/refrigeration" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/refrigeration" }],
  }),
  component: () => <ServiceCategoryPage categorySlug="refrigeration" />,
});
