import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Pilar } from "@/config/servicos";
import { CtaAnchor, CtaLink, SectionHeading } from "./ui-kit";
import { whatsappLink } from "@/config/site";

export function ServiceCard({ item }: { item: Pilar }) {
  const Icon = item.icon;
  return (
    <article className="card-surface flex flex-col border-t-2 border-t-gold p-6">
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-base font-bold leading-snug">{item.titulo}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.descricao}
      </p>
      <div className="mt-6 flex flex-col gap-2">
        <CtaLink to="/orcamento" className="w-full">
          SOLICITAR ORÇAMENTO
        </CtaLink>
        <Link
          to="/servicos"
          hash={item.slug}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
        >
          Ver detalhes <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="navy-panel">
      <div className="container-page py-14 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/80 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function CtaBlock({
  title = "Precisa de um orçamento?",
  text = "Conte o que você precisa e nossa equipe prepara o atendimento.",
  ctaLabel = "SOLICITAR ORÇAMENTO",
  whatsappMessage,
}: {
  title?: string;
  text?: string;
  ctaLabel?: string;
  whatsappMessage: string;
}) {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <div className="navy-panel rounded-2xl px-6 py-10 md:px-12 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <SectionHeading title={title} subtitle={text} light />
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <CtaLink to="/orcamento">{ctaLabel}</CtaLink>
              <CtaAnchor href={whatsappLink(whatsappMessage)} tone="whatsapp">
                FALAR PELO WHATSAPP
              </CtaAnchor>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
