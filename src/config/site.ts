/**
 * Dados de contato da JJ ELETRONICOS.
 */
export const site = {
  name: "JJ ELETRONICOS",
  tagline:
    "Especialistas em ar-condicionado: instalação, manutenção preventiva e corretiva com garantia de serviço.",
  whatsappNumber: "5538999931634",
  whatsappLabel: "(38) 9 9993-1634",
  whatsappNumber2: "5538999230225",
  whatsappLabel2: "(38) 9 9923-0225",
  email: "jjeletronicos86@gmail.com",
  cidade: "Guaraciama - MG",
  regiao: "Guaraciama - MG · Atendimento em Montes Claros e região",
  horario: "Segunda a sexta, 08:00 às 18:00",
  telefone: "+5538999931634",
  telefoneLabel: "(38) 9 9993-1634",
} as const;


export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages: Record<string, string> = {
  "/": "Olá! Gostaria de solicitar um orçamento de ar-condicionado com a JJ ELETRONICOS.",
  "/servicos": "Olá! Gostaria de solicitar um orçamento de serviços de ar-condicionado.",
  "/depoimentos":
    "Olá! Vi os depoimentos no site e gostaria de solicitar um orçamento de ar-condicionado.",
  "/sobre": "Olá! Gostaria de saber mais sobre os serviços de ar-condicionado da JJ.",
  "/orcamento": "Olá! Gostaria de solicitar um orçamento de ar-condicionado.",
  "/contato": "Olá! Gostaria de falar com a equipe da JJ ELETRONICOS sobre ar-condicionado.",
};

export function messageForPath(pathname: string) {
  return (
    whatsappMessages[pathname] ??
    "Olá! Gostaria de solicitar um orçamento de ar-condicionado com a JJ ELETRONICOS."
  );
}
