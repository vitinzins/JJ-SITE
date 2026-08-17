import { createFileRoute } from "@tanstack/react-router";
import { Snowflake, ShieldCheck, Timer } from "lucide-react";
import heroImg from "@/assets/hero-tecnico.jpg";
import { pilares, diferenciais, etapas, faq } from "@/config/servicos";
import { whatsappLink } from "@/config/site";
import { CtaAnchor, CtaLink, SectionHeading } from "@/components/ui-kit";
import { CtaBlock, ServiceCard } from "@/components/blocks";
import { DepoimentosDestaque, GaleriaTrabalhos, PlanosManutencao } from "@/components/home-sections";

const TITLE = "Ar-Condicionado em Montes Claros | Instalação e Manutenção | JJ ELETRONICOS";
const DESCRIPTION =
  "Especialistas em ar-condicionado: instalação de Split, Multi-Split e VRF, manutenção preventiva e corretiva em Montes Claros, Guaraciama e região. Orçamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jj-solutions-hub.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://jj-solutions-hub.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.pergunta,
            acceptedAnswer: { "@type": "Answer", text: f.resposta },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="navy-panel relative overflow-hidden">
        <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Especialistas em ar-condicionado
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Instalação e manutenção de ar-condicionado em Montes Claros e região
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/80 md:text-lg">
              Split, Multi-Split, VRF e Cassete instalados por técnicos certificados. Manutenção
              preventiva e corretiva com diagnóstico rápido, peças originais e garantia de serviço.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink to="/orcamento">SOLICITAR ORÇAMENTO</CtaLink>
              <CtaAnchor
                href={whatsappLink(
                  "Olá! Gostaria de solicitar um orçamento de ar-condicionado com a JJ ELETRONICOS.",
                )}
              >
                FALAR PELO WHATSAPP
              </CtaAnchor>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Snowflake, label: "Split, Multi-Split e VRF" },
                { icon: ShieldCheck, label: "Garantia de serviço" },
                { icon: Timer, label: "Atendimento rápido" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm">
                  <Icon className="h-4 w-4 shrink-0 text-tech" />
                  <span className="text-navy-foreground/85">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Técnico da JJ ELETRONICOS realizando manutenção em ar-condicionado split"
              width={1600}
              height={1008}
              className="w-full rounded-2xl object-cover shadow-elevated"
            />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nossos serviços"
            title="Tudo em ar-condicionado, do projeto à manutenção"
            subtitle="Três pilares de atendimento para residências, comércios, empresas e instituições."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pilares.map((item) => (
              <ServiceCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Por que nos escolher"
            title="Serviço técnico feito do jeito certo"
            subtitle="Procedimento correto em cada etapa, do dimensionamento ao teste final do equipamento."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map(({ icon: Icon, titulo, texto }) => (
              <article key={titulo} className="card-surface border-t-2 border-t-gold p-6">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold">{titulo}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{texto}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink to="/orcamento">SOLICITAR ORÇAMENTO</CtaLink>
          </div>
        </div>
      </section>

      <PlanosManutencao />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Como funciona"
            title="Do primeiro contato à garantia"
            subtitle="Um processo simples e transparente, sem surpresas no meio do caminho."
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

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Perguntas comuns sobre ar-condicionado"
            subtitle="Se a sua dúvida não estiver aqui, é só chamar no WhatsApp."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faq.map((item) => (
              <details key={item.pergunta} className="card-surface group p-6">
                <summary className="cursor-pointer list-none text-base font-bold marker:hidden">
                  {item.pergunta}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink to="/orcamento">SOLICITAR ORÇAMENTO</CtaLink>
            <CtaAnchor
              href={whatsappLink("Olá! Tenho uma dúvida sobre manutenção de ar-condicionado.")}
            >
              TIRAR DÚVIDA NO WHATSAPP
            </CtaAnchor>
          </div>
        </div>
      </section>

      <DepoimentosDestaque />

      <GaleriaTrabalhos />

      <CtaBlock
        title="Seu ar-condicionado precisa de atenção?"
        text="Fale agora com nossa equipe e receba um orçamento sem compromisso."
        whatsappMessage="Olá! Gostaria de solicitar um orçamento de ar-condicionado com a JJ ELETRONICOS."
      />
    </>
  );
}
