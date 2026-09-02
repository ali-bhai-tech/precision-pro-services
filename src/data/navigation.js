import { categories, getServicesByCategory } from "./services";

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export const serviceNav = categories.map((cat) => ({
  label: cat.title,
  to: `/${cat.slug}`,
  slug: cat.slug,
  short: cat.short,
  items: getServicesByCategory(cat.slug).map((s) => ({
    label: s.title.replace(/ (Services|Appliance Service)$/, ""),
    to: `/${cat.slug}/$slug`,
    params: { slug: s.slug },
    href: `/${cat.slug}/${s.slug}`,
  })),
}));

export default { mainNav, serviceNav };
