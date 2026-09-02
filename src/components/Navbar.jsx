import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, Wind } from "lucide-react";
import { mainNav } from "../data/navigation";
import { siteConfig } from "../data/siteConfig";
import ServicesMenu from "./ServicesMenu";
import MobileMenu from "./MobileMenu";
import Button from "./Button";
import { cn } from "../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const pointerDownRef = useRef(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const servicesActive = /^\/(hvac|refrigeration|high-end-appliances)/.test(pathname);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background",
      )}
      onKeyDown={(e) => e.key === "Escape" && setServicesOpen(false)}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink text-ink-foreground">
            <Wind className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight">
              {siteConfig.shortName}
            </span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Mechanical
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {mainNav.slice(0, 2).map((item) => (
            <NavLink key={item.to} {...item} />
          ))}

          <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            <button
              type="button"
              id="services-menu-trigger"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="services-menu"
              onClick={() => setServicesOpen(true)}
              onPointerDown={() => {
                pointerDownRef.current = true;
              }}
              onPointerUp={() => {
                pointerDownRef.current = false;
              }}
              onPointerCancel={() => {
                pointerDownRef.current = false;
              }}
              onFocus={() => {
                if (!pointerDownRef.current) openMenu();
              }}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3.5 py-2 text-sm font-semibold transition-colors",
                servicesActive || servicesOpen ? "text-primary" : "hover:text-primary",
              )}
            >
              Services
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {servicesOpen ? (
                <div
                  className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
                  onBlur={(event) => {
                    if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) {
                      setServicesOpen(false);
                    }
                  }}
                >
                  <ServicesMenu id="services-menu" onNavigate={() => setServicesOpen(false)} />
                </div>
              ) : null}
            </AnimatePresence>
          </div>

          <NavLink {...mainNav[2]} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <Button to="/contact">Schedule Service</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? <MobileMenu onNavigate={() => setMobileOpen(false)} /> : null}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="rounded-md px-3.5 py-2 text-sm font-semibold transition-colors hover:text-primary"
      activeProps={{ className: "text-primary" }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
    </Link>
  );
}

export default Navbar;
