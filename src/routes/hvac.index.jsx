import { createFileRoute } from "@tanstack/react-router";
import ServiceCategoryPage from "../pages/ServiceCategoryPage";
import { getCategory } from "../data/services";

const cat = getCategory("hvac");
const title = `${cat.title} Services | Northline Mechanical`;
const description = cat.short;

export const Route = createFileRoute("/hvac/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hvac" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/hvac" }],
  }),
  component: () => <ServiceCategoryPage categorySlug="hvac" />,
});
