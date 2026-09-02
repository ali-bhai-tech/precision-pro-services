import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import hero from "../assets/hero.jpg";
import hvac from "../assets/hvac.jpg";
import refrigeration from "../assets/refrigeration.jpg";
import appliances from "../assets/appliances.jpg";
import process from "../assets/process.jpg";
import detail from "../assets/detail.jpg";
import thermostat from "../assets/thermostat.jpg";
import wine from "../assets/wine.jpg";

const images = [
  { src: hero, alt: "Technician servicing a high-efficiency furnace", span: "lg:col-span-2 lg:row-span-2" },
  { src: hvac, alt: "Air conditioner condenser maintenance at a residence" },
  { src: refrigeration, alt: "Commercial walk-in refrigeration installation" },
  { src: process, alt: "Ductwork installation in a new home", span: "lg:col-span-2" },
  { src: appliances, alt: "Luxury kitchen with high-end built-in appliances" },
  { src: detail, alt: "Refrigerant manifold gauges during system charging" },
  { src: thermostat, alt: "Smart thermostat installation in a living room" },
  { src: wine, alt: "Built-in wine cooler in a custom cabinetry install" },
];

export function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Work"
          title="Installations and service calls from the field"
          text="A look at recent HVAC, refrigeration and premium appliance projects across our service area."
        />
        <RevealGroup className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[13rem]">
          {images.map((img) => (
            <RevealItem key={img.alt} className={img.span ?? ""}>
              <button
                type="button"
                onClick={() => setActive(img)}
                className="group block h-full w-full overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] lg:aspect-auto"
                />
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 rounded-md border border-ink-foreground/25 p-2 text-ink-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              src={active.src}
              alt={active.alt}
              className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
