import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";

const title = "Northline Mechanical | HVAC, Refrigeration & Appliance Service";
const description =
  "Premium HVAC, refrigeration and high-end appliance service in Pingree Grove, IL. 15+ years experience, 24/7 emergency dispatch. Schedule service today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});
