import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye } from "lucide-react";
import { CtaBlock, PageHero } from "@/components/blocks";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a JJ ELETRONICOS | Especialistas em ar-condicionado em Montes Claros" },
      {
        name: "description",
        content:
          "Conheça a JJ ELETRONICOS: mais de 6 anos instalando e mantendo sistemas de ar-condicionado em Guaraciama, Montes Claros e região.",
      },
      { property: "og:title", content: "Sobre a JJ ELETRONICOS" },
      {
        property: "og:description",
        content:
          "Especialistas em instalação e manutenção de ar-condicionado para residências, empresas e instituições.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Sobre a JJ ELETRONICOS"
        subtitle="Especialistas em ar-condicionado para residências, empresas e instituições."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
          <figure className="rounded-2xl border-2 border-gold/60 bg-surface p-2 shadow-lg">
            <img
              src="/fundadores-jj.png"
              alt="Jackson e Jairo, irmãos gêmeos fundadores da JJ ELETRONICOS"
              className="rounded-lg border border-yellow-400"
            />
            <figcaption className="px-2 py-3 text-center text-sm font-semibold text-muted-foreground">
              Jackson e Jairo — fundadores da JJ ELETRONICOS
            </figcaption>
          </figure>

          <div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                A JJ ELETRONICOS nasceu em Guaraciama, Minas Gerais, da parceria entre os irmãos
                gêmeos Jackson e Jairo. Desde o início, a ideia era simples: oferecer serviços de
                climatização de confiança para quem precisa de instalações e manutenções feitas com
                seriedade — sejam empresas, residências ou instituições.
              </p>
              <p>
                Ao longo de 6 anos de mercado, nos especializamos em ar-condicionado — instalação de
                Split, Multi-Split, VRF e Cassete, manutenção preventiva e corretiva —, sempre com
                o mesmo compromisso: qualidade, transparência e perfeição em cada serviço prestado.
              </p>
              <p>
                Hoje, atendemos Guaraciama, Montes Claros e região, e seguimos crescendo para levar
                mais soluções e mais qualidade a cada cliente.
              </p>
            </div>

            <div className="card-surface mt-8 inline-flex flex-col items-center border-l-4 border-l-gold bg-accent px-10 py-6 text-center">
              <span className="text-5xl font-extrabold leading-none text-primary">+6</span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                anos de mercado
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y pt-0">
        <div className="container-page grid gap-6 md:grid-cols-2">

            <div className="card-surface p-7">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
                <Target className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-bold">Nossa missão</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                Manter cada ambiente climatizado com segurança e eficiência, com execução técnica de
                qualidade e atendimento próximo ao cliente.
              </p>
            </div>
            <div className="card-surface p-7">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
                <Eye className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-bold">Nossa visão</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                Ser referência em ar-condicionado no Norte de Minas pela qualidade dos serviços e pela
                confiança construída com nossos clientes.
              </p>
            </div>
        </div>
      </section>


      <CtaBlock
        title="Precisa de um orçamento?"
        text="Fale agora com nossa equipe e conte o que você precisa."
        whatsappMessage="Olá! Gostaria de saber mais sobre os serviços de ar-condicionado da JJ ELETRONICOS."
      />
    </>
  );
}
