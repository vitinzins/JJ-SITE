import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/blocks";
import { CtaAnchor, SectionHeading } from "@/components/ui-kit";
import { whatsappLink } from "@/config/site";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Solicitar orçamento de ar-condicionado | JJ ELETRONICOS" },
      {
        name: "description",
        content:
          "Solicite um orçamento de instalação, manutenção preventiva ou corretiva de ar-condicionado em Montes Claros, Guaraciama e região.",
      },
      { property: "og:title", content: "Solicitar orçamento de ar-condicionado | JJ ELETRONICOS" },
      {
        property: "og:description",
        content:
          "Preencha o formulário e nossa equipe entra em contato para preparar o atendimento.",
      },
      { property: "og:url", content: "/orcamento" },
    ],
    links: [{ rel: "canonical", href: "/orcamento" }],
  }),
  component: OrcamentoPage,
});

const servicos = [
  "Instalação de ar-condicionado",
  "Manutenção preventiva / higienização",
  "Manutenção corretiva / conserto",
  "Recarga de gás",
  "Contrato de manutenção / PMOC",
  "Outro",
];

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().max(100).optional(),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  cidade: z.string().trim().min(2, "Informe sua cidade").max(100),
  servico: z.string().trim().min(1, "Selecione um serviço"),
  descricao: z.string().trim().min(5, "Descreva sua necessidade").max(1000),
});

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30";

function OrcamentoPage() {
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState<Record<string, string>>({});
  const [resumo, setResumo] = useState("Olá! Gostaria de solicitar um orçamento.");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErros(next);
      return;
    }
    setErros({});
    const d = parsed.data;
    const mensagem =
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${d.nome}\n` +
      `*Empresa:* ${d.empresa?.trim() ? d.empresa : "Não informado"}\n` +
      `*Telefone:* ${d.telefone}\n` +
      `*E-mail:* ${d.email}\n` +
      `*Cidade:* ${d.cidade}\n` +
      `*Serviço desejado:* ${d.servico}\n` +
      `*Descrição da necessidade:* ${d.descricao}`;
    setResumo(mensagem);
    const url = `https://wa.me/5538999931634?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setEnviado(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Orçamento"
        title="Solicite seu orçamento"
        subtitle="Conte qual é o seu aparelho e a sua necessidade. Nossa equipe responde rápido pelo WhatsApp."
      />

      <section className="section-y">
        <div className="container-page max-w-3xl">
          {enviado ? (
            <div className="card-surface p-8 text-center md:p-12">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-primary">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-bold">Recebemos sua solicitação!</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nossa equipe entrará em contato para entender sua necessidade e preparar o
                atendimento.
              </p>
              <div className="mt-8 flex justify-center">
                <CtaAnchor href={whatsappLink(resumo)}>FALAR DIRETAMENTE PELO WHATSAPP</CtaAnchor>
              </div>
            </div>
          ) : (
            <div className="card-surface p-6 md:p-10">
              <SectionHeading
                title="Formulário de orçamento"
                subtitle="Quanto mais detalhes, mais preciso será o atendimento."
              />
              <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Nome" name="nome" error={erros["nome"]} required />
                <Field label="Empresa" name="empresa" error={erros["empresa"]} />
                <Field
                  label="Telefone / WhatsApp"
                  name="telefone"
                  type="tel"
                  error={erros["telefone"]}
                  required
                />
                <Field label="E-mail" name="email" type="email" error={erros["email"]} required />
                <Field label="Cidade" name="cidade" error={erros["cidade"]} required />

                <div>
                  <label htmlFor="servico" className="mb-2 block text-sm font-semibold">
                    Serviço desejado *
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    defaultValue=""
                    className={fieldClass}
                    required
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {servicos.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {erros["servico"] ? (
                    <p className="mt-1.5 text-xs text-destructive">{erros["servico"]}</p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="descricao" className="mb-2 block text-sm font-semibold">
                    Descrição da necessidade *
                  </label>
                  <textarea
                    id="descricao"
                    name="descricao"
                    rows={5}
                    maxLength={1000}
                    className={fieldClass}
                    placeholder="Ex.: instalação de 3 aparelhos de ar-condicionado em escritório."
                  />
                  {erros["descricao"] ? (
                    <p className="mt-1.5 text-xs text-destructive">{erros["descricao"]}</p>
                  ) : null}
                </div>

                <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    SOLICITAR ORÇAMENTO
                  </button>
                  <CtaAnchor
                    href={whatsappLink(
                      "Olá! Gostaria de solicitar um orçamento de ar-condicionado.",
                    )}
                  >
                    FALAR PELO WHATSAPP
                  </CtaAnchor>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">
        {label} {required ? "*" : ""}
      </label>
      <input id={name} name={name} type={type} maxLength={255} className={fieldClass} />
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
