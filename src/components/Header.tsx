import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { messageForPath, site, whatsappLink } from "@/config/site";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto shrink-0 md:h-16" />
          <span className="hidden min-w-0 xl:block">
            <span className="block truncate text-xs text-muted-foreground">
              Especialistas em ar-condicionado
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/orcamento"
            className="hidden rounded-lg bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Solicitar orçamento
          </Link>
          <a
            href={`tel:${site.telefone}`}
            aria-label={`Ligar agora para ${site.telefoneLabel}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-accent"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">Ligar agora</span>
          </a>
          <a
            href={whatsappLink(messageForPath(pathname))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp"
            className="inline-flex items-center gap-2 rounded-lg bg-whats px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-whats-foreground transition-colors hover:bg-whats/90"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-lg px-2 py-3.5 text-base font-medium text-foreground"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.telefone}`}
              className="mt-2 rounded-lg border border-border px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-foreground"
            >
              Ligar {site.telefoneLabel}
            </a>
            <Link
              to="/orcamento"
              className="mt-2 mb-3 rounded-lg bg-primary px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground"
            >
              Solicitar orçamento
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
