import { createFileRoute } from "@tanstack/react-router";
import { pilares, etapas } from "@/config/servicos";
import { CtaBlock, PageHero } from "@/components/blocks";
import { CheckList, CtaAnchor, CtaLink, SectionHeading } from "@/components/ui-kit";
import { whatsappLink } from "@/config/site";
import instalacaoImg from "@/assets/instalacao-ar.jpg";
import preventivaImg from "@/assets/manutencao-preventiva.jpg";
import corretivaImg from "@/assets/manutencao-corretiva.jpg";

const TITLE = "Serviços de Ar-Condicionado | Instalação e Manutenção | JJ ELETRONICOS";
const DESCRIPTION =
  "Instalação de Split, Multi-Split, VRF e Cassete, manutenção preventiva com higienização e manutenção corretiva com diagnóstico rápido em Montes Claros e região.";

const imagens: Record<string, string> = {
  instalacao: instalacaoImg,
  preventiva: preventivaImg,
  corretiva: corretivaImg,
};

const alts: Record<string, string> = {
  instalacao: "Técnico instalando unidade evaporadora de ar-condicionado split",
  preventiva: "Técnico removendo filtro de ar-condicionado para limpeza preventiva",
  corretiva: "Técnico medindo pressão do gás na condensadora de ar-condicionado",
};

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jj-solutions-hub.lovable.app/servicos" },
    ],
    links: [{ rel: "canonical", href: "https://jj-solutions-hub.lovable.app/servicos" }],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Serviços especializados em ar-condicionado"
        subtitle="Instalação, manutenção preventiva e manutenção corretiva para residências, comércios, empresas e instituições."
      />

      {pilares.map((pilar, index) => {
        const Icon = pilar.icon;
        const reverse = index % 2 === 1;
        return (
          <section
            key={pilar.slug}
            id={pilar.slug}
            className={`section-y scroll-mt-24 ${reverse ? "bg-surface" : ""}`}
          >
            <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
              <img
                src={imagens[pilar.slug]}
                alt={alts[pilar.slug] ?? pilar.titulo}
                loading="lazy"
                width={1200}
                height={800}
                className={`w-full rounded-2xl object-cover shadow-card ${reverse ? "lg:order-2" : ""}`}
              />
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-5">
                  <SectionHeading title={pilar.titulo} subtitle={pilar.descricao} />
                </div>
                <div className="mt-7">
                  <CheckList items={pilar.itens} />
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <CtaLink to="/orcamento">SOLICITAR ORÇAMENTO</CtaLink>
                  <CtaAnchor href={whatsappLink(pilar.whatsappMessage)}>
                    FALAR PELO WHATSAPP
                  </CtaAnchor>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Como funciona"
            title="Como é o nosso atendimento"
            subtitle="Processo claro do orçamento à garantia do serviço executado."
          />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((etapa) => (
              <li key={etapa.numero} className="card-surface p-6">
                <span className="text-3xl font-extrabold leading-none text-gold">
                  {etapa.numero}
                </span>
                <h3 className="mt-4 text-base font-bold">{etapa.titulo}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {etapa.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBlock
        title="Solicite uma avaliação técnica"
        text="Conte qual é o seu aparelho e a sua necessidade — respondemos rápido."
        whatsappMessage="Olá! Gostaria de solicitar um orçamento de serviços de ar-condicionado."
      />
    </>
  );
}
