import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "primary" | "whatsapp" | "outline" | "ghost-light";

const toneClasses: Record<Tone, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  whatsapp: "bg-whats text-whats-foreground hover:bg-whats/90",
  outline: "border border-border bg-card text-foreground hover:bg-accent",
  "ghost-light":
    "border border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export function CtaLink({
  to,
  tone = "primary",
  className,
  children,
}: {
  to: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={cn(base, toneClasses[tone], className)}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  href,
  tone = "whatsapp",
  className,
  children,
}: {
  href: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, toneClasses[tone], className)}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.18em]",
            light ? "text-gold" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-2xl font-bold sm:text-3xl md:text-4xl",
          light ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-navy-foreground/80" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden
            className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", light ? "bg-tech" : "bg-primary")}
          />
          <span
            className={cn(
              "text-sm leading-relaxed",
              light ? "text-navy-foreground/85" : "text-muted-foreground",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
