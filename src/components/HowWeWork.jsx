import { motion } from "framer-motion";
import { Play } from "lucide-react";
import processImg from "../assets/process.jpg";
import { siteConfig } from "../data/siteConfig";
import SectionHeading from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

export function HowWeWork() {
  return (
    <section className="bg-ink py-20 text-ink-foreground lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear process, start to finish"
          text="No guesswork and no surprise invoices — every job follows the same five steps."
          tone="dark"
        />

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-ink-foreground/10"
        >
          <img
            src={processImg}
            alt="Technicians installing ductwork in a new home"
            loading="lazy"
            width={1600}
            height={1000}
            className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-[30rem]"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <button
            type="button"
            aria-label="Play overview video"
            className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105"
          >
            <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
          </button>
        </motion.div>

        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink-foreground/10 bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.process.map((s) => (
            <RevealItem key={s.step} className="bg-ink p-6">
              <span className="font-display text-2xl font-bold text-primary">{s.step}</span>
              <h3 className="mt-3 font-display text-base font-bold text-ink-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default HowWeWork;
