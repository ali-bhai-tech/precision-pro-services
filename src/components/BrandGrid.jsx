import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import { brands } from "../data/brands";

export function BrandGrid() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Brands We Service"
        title="Trusted equipment, expertly maintained"
        text="We service the major HVAC manufacturers and specialize in premium appliance platforms that most companies won't touch."
        align="center"
      />
      <div className="mt-14 space-y-10">
        {Object.values(brands).map((group) => (
          <div key={group.label}>
            <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              {group.label}
            </p>
            <RevealGroup className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
              {group.items.map((brand) => (
                <RevealItem
                  key={brand}
                  className="flex items-center justify-center bg-card px-4 py-8 transition-colors hover:bg-secondary"
                >
                  <span className="font-display text-base font-bold tracking-tight text-foreground/80 sm:text-lg">
                    {brand}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandGrid;
