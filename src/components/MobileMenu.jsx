import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { mainNav, serviceNav } from "../data/navigation";
import { siteConfig } from "../data/siteConfig";
import Button from "./Button";

export function MobileMenu({ onNavigate }) {
  const [open, setOpen] = useState(null);

  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="overflow-hidden border-t border-border bg-background lg:hidden"
    >
      <nav
        className="container-x max-h-[calc(100vh-5rem)] overflow-y-auto py-5"
        aria-label="Mobile"
      >
        <ul className="space-y-1">
          {mainNav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onNavigate}
                className="block rounded-md px-3 py-3 text-base font-semibold"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-5 px-3 eyebrow">Services</p>
        <ul className="mt-2 divide-y divide-border border-y border-border">
          {serviceNav.map((group) => {
            const isOpen = open === group.slug;
            return (
              <li key={group.slug}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : group.slug)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-3 py-3.5 text-left text-base font-semibold"
                >
                  {group.label}
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? (
                  <ul className="pb-3">
                    <li>
                      <Link
                        to={group.to}
                        onClick={onNavigate}
                        className="block px-6 py-2 text-sm font-semibold text-primary"
                      >
                        All {group.label} services
                      </Link>
                    </li>
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.to}
                          params={item.params}
                          onClick={onNavigate}
                          className="block px-6 py-2 text-sm text-muted-foreground"
                          activeProps={{ className: "text-primary" }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="mt-6 space-y-3 pb-4">
          <Button href={siteConfig.phoneHref} variant="outline" className="w-full">
            <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.phone}
          </Button>
          <Button to="/contact" onClick={onNavigate} className="w-full">
            <Mail className="h-4 w-4" aria-hidden="true" /> Schedule Service
          </Button>
        </div>
      </nav>
    </motion.div>
  );
}

export default MobileMenu;
