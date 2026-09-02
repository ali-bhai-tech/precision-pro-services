import { motion } from "framer-motion";
import { Phone, ShieldCheck, Clock, Star } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import { siteConfig } from "../data/siteConfig";
import Button from "./Button";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-x grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.09 } } }}>
          <motion.p variants={item} className="eyebrow">
            {siteConfig.serviceArea}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 text-[2.4rem] font-bold leading-[1.05] sm:text-5xl lg:text-[3.9rem]"
          >
            HVAC <span className="text-muted-foreground/40">|</span> Refrigeration{" "}
            <span className="text-muted-foreground/40">|</span>{" "}
            <span className="text-primary">High-End Appliance</span> Services
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Professional heating, cooling, refrigeration and luxury appliance service backed by{" "}
            {siteConfig.yearsExperience}+ years in the field. Precise diagnostics, honest
            recommendations and workmanship that holds up — season after season.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" size="lg">
              Schedule Service
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" /> Call {siteConfig.phone}
            </Button>
          </motion.div>
          <motion.ul variants={item} className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" /> Licensed & insured
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" /> {siteConfig.emergency}
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" aria-hidden="true" /> 5-star rated locally
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
            <img
              src={heroImg}
              alt="HVAC technician servicing a high-efficiency furnace"
              width={1600}
              height={1100}
              className="h-[22rem] w-full object-cover sm:h-[26rem] lg:h-[34rem]"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-xl border border-border bg-card p-5 shadow-lift sm:left-8 sm:right-auto sm:w-64">
            <p className="font-display text-3xl font-bold text-primary">
              {siteConfig.yearsExperience}+
            </p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              Years serving homes and businesses across the Fox Valley
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
