import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, MapPin, MessageCircle, Clock, Phone } from "lucide-react";
import { PageHero } from "@/components/blocks";
import { CtaAnchor, SectionHeading } from "@/components/ui-kit";
import { site, whatsappLink } from "@/config/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | JJ ELETRONICOS em Montes Claros" },
      {
        name: "description",
        content:
          "Fale com a JJ ELETRONICOS pelo WhatsApp ou e-mail e solicite atendimento para instalação e manutenção de ar-condicionado em Montes Claros e região.",
      },
      { property: "og:title", content: "Contato | JJ ELETRONICOS" },
      {
        property: "og:description",
        content: "Atendimento por WhatsApp e e-mail para orçamentos de ar-condicionado.",
      },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const canais = [
  { icon: MessageCircle, label: "WhatsApp", value: site.whatsappLabel },
  { icon: MessageCircle, label: "WhatsApp (2)", value: site.whatsappLabel2 },
  { icon: Phone, label: "Telefone", value: site.telefoneLabel },
  { icon: Mail, label: "E-mail", value: site.email },
  { icon: MapPin, label: "Região de atendimento", value: site.regiao },
  { icon: Clock, label: "Horário de atendimento", value: site.horario },
];

function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a JJ ELETRONICOS"
        subtitle="Atendimento para instalação, manutenção preventiva e manutenção corretiva de ar-condicionado."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Canais de atendimento"
              subtitle="Envie sua necessidade e nossa equipe retorna com as próximas etapas."
            />
            <ul className="mt-8 space-y-4">
              {canais.map(({ icon: Icon, label, value }) => (
                <li key={label} className="card-surface flex items-start gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold">{label}</span>
                    <span className="block text-sm break-words text-muted-foreground">{value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="navy-panel rounded-2xl p-8">
            <h2 className="text-xl font-bold">Prefere atendimento rápido?</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/80">
              Chame no WhatsApp, descreva o aparelho e o serviço desejado. Também é possível enviar
              sua solicitação pelo formulário de orçamento.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Resposta pelo canal de sua preferência",
                "Atendimento profissional",
                "Orçamento sem compromisso",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-navy-foreground/85">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-tech" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaAnchor
                href={whatsappLink(
                  "Olá! Gostaria de falar com a equipe da JJ ELETRONICOS sobre ar-condicionado.",
                )}
              >
                FALAR PELO WHATSAPP
              </CtaAnchor>
              <a
                href={`tel:${site.telefone}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-foreground/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                <Phone className="h-4 w-4" /> Ligar agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
