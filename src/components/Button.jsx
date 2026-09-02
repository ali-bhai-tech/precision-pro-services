import { Link } from "@tanstack/react-router";
import { cn } from "../lib/utils";

const styles = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-105 shadow-soft",
  dark: "bg-ink text-ink-foreground hover:bg-ink/90",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-secondary",
  ghostLight:
    "border border-ink-foreground/25 bg-ink-foreground/5 text-ink-foreground hover:bg-ink-foreground/15",
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-[0.95rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] focus-visible:outline-2";

export function Button({
  variant = "primary",
  size = "md",
  className,
  to,
  params,
  href,
  children,
  ...props
}) {
  const cls = cn(base, styles[variant], sizes[size], className);
  if (to) {
    return (
      <Link to={to} params={params} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

export default Button;
