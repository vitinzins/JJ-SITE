import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Clock, Phone } from "lucide-react";
import { site, whatsappLink } from "@/config/site";


const paginas = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/orcamento", label: "Orçamento" },
  { to: "/contato", label: "Contato" },
];

const servicos = [
  { to: "/servicos", label: "Instalação de ar-condicionado" },
  { to: "/servicos", label: "Split, Multi-Split e VRF" },
  { to: "/servicos", label: "Manutenção preventiva" },
  { to: "/servicos", label: "Higienização e limpeza" },
  { to: "/servicos", label: "Manutenção corretiva" },
  { to: "/servicos", label: "Recarga de gás e reparos" },
  { to: "/orcamento", label: "Contratos e PMOC" },
];


export function Footer() {
  return (
    <footer className="navy-panel mt-0">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/logo.png"
            alt="JJ ELETRONICOS - Instalação e manutenção de ar-condicionado"
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/75">
            {site.tagline}
          </p>
        </div>


        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-tech">Navegação</p>
          <ul className="mt-4 space-y-2.5">
            {paginas.map((p) => (
              <li key={p.label}>
                <Link
                  to={p.to}
                  className="text-sm text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-tech">Serviços</p>
          <ul className="mt-4 space-y-2.5">
            {servicos.map((s) => (
              <li key={s.label}>
                <Link
                  to={s.to}
                  className="text-sm text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-tech">Contato</p>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-tech" />
              <a
                href={whatsappLink("Olá! Gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy-foreground"
              >
                WhatsApp {site.whatsappLabel}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-tech" />
              <a
                href={`https://wa.me/${site.whatsappNumber2}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy-foreground"
              >
                WhatsApp {site.whatsappLabel2}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-tech" />
              <a href={`tel:${site.telefone}`} className="hover:text-navy-foreground">
                Ligar agora {site.telefoneLabel}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-tech" />
              <a href={`mailto:${site.email}`} className="hover:text-navy-foreground">
                {site.email}
              </a>
            </li>

            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tech" />
              <span>{site.regiao}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-tech" />
              <span>{site.horario}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} JJ ELETRONICOS. Todos os direitos reservados.</p>
          <p>Instalação · Manutenção Preventiva · Manutenção Corretiva</p>
        </div>
      </div>
    </footer>
  );
}
