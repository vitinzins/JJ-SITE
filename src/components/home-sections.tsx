import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote, Star } from "lucide-react";
import { depoimentos, planos } from "@/config/servicos";
import { CtaAnchor, CtaLink, SectionHeading } from "./ui-kit";
import { whatsappLink } from "@/config/site";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2Antes from "@/assets/galeria-2-antes.jpg";
import galeria2Depois from "@/assets/galeria-2-depois.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import galeria4Antes from "@/assets/galeria-4-antes.jpg";
import galeria4Depois from "@/assets/galeria-4-depois.jpg";
import galeria5 from "@/assets/galeria-5.jpg";
import galeria6 from "@/assets/galeria-6.jpg";

export function DepoimentosDestaque() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Clientes que confiam na JJ ELETRONICOS"
          subtitle="Residências, comércios e empresas atendidas em Guaraciama, Montes Claros e região."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {depoimentos.slice(0, 3).map((d) => (
            <figure key={d.nome} className="card-surface border-t-2 border-t-gold p-6">
              <Quote className="h-5 w-5 text-primary" aria-hidden />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-5">
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
        <div className="mt-8">
          <Link
            to="/depoimentos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
          >
            Ver todos os depoimentos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const galeria = [
  { src: galeria1, alt: "Split instalado em sala de estar", tag: "Instalação" },
  { src: galeria2Antes, alt: "Evaporadora suja antes da higienização", tag: "Antes" },
  { src: galeria2Depois, alt: "Evaporadora limpa após a higienização", tag: "Depois" },
  { src: galeria3, alt: "Técnico instalando condensadora na parede externa", tag: "Instalação" },
  { src: galeria4Antes, alt: "Condensadora enferrujada antes da manutenção", tag: "Antes" },
  { src: galeria4Depois, alt: "Condensadora revisada após a manutenção", tag: "Depois" },
  { src: galeria5, alt: "Ar-condicionado cassete instalado em loja", tag: "Comercial" },
  { src: galeria6, alt: "Medição de pressão de gás com manifold", tag: "Manutenção" },
];

export function GaleriaTrabalhos() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfólio"
          title="Trabalhos realizados"
          subtitle="Instalações, higienizações e manutenções feitas pela nossa equipe — inclusive comparativos antes e depois."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galeria.map((foto) => (
            <figure key={foto.alt} className="card-surface group relative overflow-hidden p-0">
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                width={800}
                height={600}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                {foto.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlanosManutencao() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Planos de manutenção"
          title="Manutenção preventiva sob contrato"
          subtitle="Valores de referência: o plano final é definido conforme a quantidade e o tipo dos equipamentos."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {planos.map((plano) => (
            <article
              key={plano.nome}
              className="card-surface flex flex-col border-t-2 border-t-gold p-6"
            >
              <h3 className="text-base font-bold">{plano.nome}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plano.resumo}</p>
              <p className="mt-4 text-lg font-extrabold text-primary">{plano.preco}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plano.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2">
                <CtaAnchor href={whatsappLink(plano.whatsappMessage)} className="w-full">
                  CONSULTAR PLANO
                </CtaAnchor>
                <CtaLink to="/orcamento" tone="outline" className="w-full">
                  SOLICITAR ORÇAMENTO
                </CtaLink>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          * Valores meramente ilustrativos, sujeitos a avaliação técnica.
        </p>
      </div>
    </section>
  );
}
