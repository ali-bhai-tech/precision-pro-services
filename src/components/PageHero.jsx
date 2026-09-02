import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, text, image, imageAlt, crumbs = [] }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {crumbs.length ? (
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              {crumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight className="h-3 w-3" aria-hidden="true" /> : null}
                  {c.to ? (
                    <Link to={c.to} params={c.params} className="hover:text-primary">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : null}
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-3 text-[2.1rem] font-bold leading-[1.08] sm:text-4xl lg:text-[3.25rem]">{title}</h1>
          {text ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>
          ) : null}
        </motion.div>

        {image ? (
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-border shadow-lift"
          >
            <img
              src={image}
              alt={imageAlt ?? title}
              width={1200}
              height={900}
              className="h-[16rem] w-full object-cover sm:h-[20rem] lg:h-[26rem]"
            />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

export default PageHero;
