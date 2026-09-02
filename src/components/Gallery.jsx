import { useEffect, useRef, useState } from "react";
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
  {
    src: hero,
    alt: "Technician servicing a high-efficiency furnace",
    span: "lg:col-span-2 lg:row-span-2",
    width: 1600,
    height: 1100,
  },
  {
    src: hvac,
    alt: "Air conditioner condenser maintenance at a residence",
    width: 1200,
    height: 900,
  },
  {
    src: refrigeration,
    alt: "Commercial walk-in refrigeration installation",
    width: 1200,
    height: 900,
  },
  {
    src: process,
    alt: "Ductwork installation in a new home",
    span: "lg:col-span-2",
    width: 1600,
    height: 1000,
  },
  {
    src: appliances,
    alt: "Luxury kitchen with high-end built-in appliances",
    width: 1200,
    height: 900,
  },
  {
    src: detail,
    alt: "Refrigerant manifold gauges during system charging",
    width: 1200,
    height: 900,
  },
  {
    src: thermostat,
    alt: "Smart thermostat installation in a living room",
    width: 1200,
    height: 900,
  },
  {
    src: wine,
    alt: "Built-in wine cooler in a custom cabinetry install",
    width: 1200,
    height: 900,
  },
];

export function Gallery() {
  const [active, setActive] = useState(null);
  const openerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus();
    };
  }, [active]);

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
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setActive(img);
                }}
                className="group block h-full w-full overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.width}
                  height={img.height}
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
            aria-labelledby="gallery-dialog-title"
            onClick={(event) => event.target === event.currentTarget && setActive(null)}
          >
            <h2 id="gallery-dialog-title" className="sr-only">
              Enlarged image: {active.alt}
            </h2>
            <button
              type="button"
              onClick={() => setActive(null)}
              ref={closeRef}
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
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
