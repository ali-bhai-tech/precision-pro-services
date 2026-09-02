import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "./Reveal";

export function ServiceCard({
  title,
  description,
  image,
  items = [],
  to,
  params,
  cta = "Explore Services",
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft"
    >
      {image ? (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        {items.length ? (
          <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-2.5 text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {i}
              </li>
            ))}
          </ul>
        ) : null}
        <Link
          to={to}
          params={params}
          className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-primary"
        >
          {cta}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
