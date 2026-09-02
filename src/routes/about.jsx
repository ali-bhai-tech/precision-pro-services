import { createFileRoute } from "@tanstack/react-router";
import About from "../pages/About";

const title = "About Us | Northline Mechanical";
const description =
  "Technician-led HVAC, refrigeration and luxury appliance company serving Pingree Grove and the Fox Valley for more than 15 years.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});
