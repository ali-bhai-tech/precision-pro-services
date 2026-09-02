import { Reveal } from "./Reveal";
import { cn } from "../lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag
        className={cn(
          "mt-3 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      {text ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
