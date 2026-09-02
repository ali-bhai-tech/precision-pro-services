import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Wind } from "lucide-react";
import { serviceNav } from "../data/navigation";
import { siteConfig } from "../data/siteConfig";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin };

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 lg:py-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink-foreground/10">
              <Wind className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-bold">{siteConfig.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-foreground/65">
            Heating, cooling, refrigeration and high-end appliance service for{" "}
            {siteConfig.serviceArea}.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2.5 hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" /> {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.emailHref}
                className="flex items-center gap-2.5 break-all hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" /> {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-ink-foreground/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {siteConfig.address}
            </li>
          </ul>
        </div>

        <FooterCol title="Company">
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/contact" hash="service-area">
            Service Area
          </FooterLink>
        </FooterCol>

        {serviceNav.map((group) => (
          <FooterCol key={group.slug} title={group.label}>
            {group.items.map((item) => (
              <FooterLink key={item.href} to={item.to} params={item.params}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>
        ))}
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.social
              .filter((s) => s.href && s.href !== "#")
              .map((s) => {
                const Icon = socialIcons[s.label] ?? Facebook;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-ink-foreground/60 transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-foreground/50">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ to, params, hash, children }) {
  return (
    <li>
      <Link
        to={to}
        params={params}
        hash={hash}
        className="text-ink-foreground/75 transition-colors hover:text-primary"
      >
        {children}
      </Link>
    </li>
  );
}

export default Footer;
