import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { serviceNav } from "../data/navigation";

export function ServicesMenu({ onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="w-[min(72rem,calc(100vw-3rem))] overflow-hidden rounded-xl border border-border bg-popover shadow-lift"
    >
      <div className="grid gap-px bg-border md:grid-cols-3">
        {serviceNav.map((group) => (
          <div key={group.slug} className="bg-popover p-6">
            <Link
              to={group.to}
              onClick={onNavigate}
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-primary"
            >
              {group.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{group.short}</p>
            <ul className="mt-4 space-y-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.to}
                    params={item.params}
                    onClick={onNavigate}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "bg-secondary text-primary" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ServicesMenu;
