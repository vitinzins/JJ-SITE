import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { CtaBlock, PageHero } from "@/components/blocks";
import { SectionHeading } from "@/components/ui-kit";
import { depoimentos } from "@/config/servicos";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos de clientes | JJ ELETRONICOS" },
      {
        name: "description",
        content:
          "Veja o que dizem os clientes da JJ ELETRONICOS sobre instalação, manutenção preventiva e corretiva de ar-condicionado em Montes Claros e região.",
      },
      { property: "og:title", content: "Depoimentos de clientes | JJ ELETRONICOS" },
      {
        property: "og:description",
        content:
          "Clientes residenciais e empresas contam como foi o atendimento em instalação e manutenção de ar-condicionado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jj-solutions-hub.lovable.app/depoimentos" },
    ],
    links: [{ rel: "canonical", href: "https://jj-solutions-hub.lovable.app/depoimentos" }],
  }),
  component: DepoimentosPage,
});

function DepoimentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Depoimentos"
        title="O que dizem nossos clientes"
        subtitle="Residências, comércios e empresas que confiam na JJ para instalar e manter seus aparelhos de ar-condicionado."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Experiências reais"
            title="Atendimento técnico com resultado"
            subtitle="Agilidade no diagnóstico, execução caprichada e suporte depois do serviço."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {depoimentos.map((d) => (
              <figure key={d.nome} className="card-surface border-t-2 border-t-gold p-7">
                <Quote className="h-6 w-6 text-primary" aria-hidden />
                <blockquote className="mt-4 text-base leading-relaxed text-muted-foreground">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="flex gap-0.5" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                    ))}
                  </span>
                  <span className="mt-2 block text-sm font-bold">{d.nome}</span>
                  <span className="block text-sm text-muted-foreground">{d.local}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        title="Quer o mesmo atendimento?"
        text="Solicite um orçamento de instalação ou manutenção do seu ar-condicionado."
        whatsappMessage="Olá! Vi os depoimentos no site e gostaria de solicitar um orçamento de ar-condicionado."
      />
    </>
  );
}
