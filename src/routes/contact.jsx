import { createFileRoute } from "@tanstack/react-router";
import Contact from "../pages/Contact";

const title = "Contact & Schedule Service | Northline Mechanical";
const description =
  "Request HVAC, refrigeration or appliance service in Pingree Grove, IL. Call 708 981 9065 or book online during business hours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});
