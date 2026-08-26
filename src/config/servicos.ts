import {
  Snowflake,
  CalendarCheck,
  Wrench,
  BadgeCheck,
  ShieldCheck,
  Package,
  Timer,
  type LucideIcon,
} from "lucide-react";

export type Pilar = {
  slug: string;
  icon: LucideIcon;
  titulo: string;
  descricao: string;
  itens: string[];
  whatsappMessage: string;
};

export const pilares: Pilar[] = [
  {
    slug: "instalacao",
    icon: Snowflake,
    titulo: "Instalação de Ar-Condicionado",
    descricao:
      "Instalação de Split, Multi-Split, VRF, Cassete e Piso-Teto com dimensionamento correto, instalação organizada e teste de funcionamento na entrega.",
    itens: [
      "Split e Split Inverter",
      "Multi-Split",
      "Sistemas VRF",
      "Cassete e Piso-Teto",
      "Tubulação frigorígena e ponto elétrico",
      "Vácuo, carga de gás e teste de estanqueidade",
    ],
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para instalação de ar-condicionado.",
  },
  {
    slug: "preventiva",
    icon: CalendarCheck,
    titulo: "Manutenção Preventiva",
    descricao:
      "Higienização, limpeza de filtros, checagem de gás e revisão periódica para manter o ar puro, o equipamento eficiente e a conta de energia sob controle.",
    itens: [
      "Higienização de evaporadora e condensadora",
      "Limpeza de filtros e bandeja de dreno",
      "Checagem de pressão e carga de gás",
      "Medição elétrica e revisão de componentes",
      "Revisão periódica programada",
      "PMOC e contratos para empresas",
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar um orçamento de manutenção preventiva de ar-condicionado.",
  },
  {
    slug: "corretiva",
    icon: Wrench,
    titulo: "Manutenção Corretiva",
    descricao:
      "Diagnóstico técnico e conserto rápido: reparo de vazamentos, recarga de gás, troca de peças e solução de falhas elétricas do seu ar-condicionado.",
    itens: [
      "Diagnóstico técnico do equipamento",
      "Reparo de vazamentos e recarga de gás",
      "Troca de peças e placas eletrônicas",
      "Correção de falhas elétricas",
      "Aparelho que não gela ou faz barulho",
      "Vazamento de água na evaporadora",
    ],
    whatsappMessage:
      "Olá! Meu ar-condicionado apresentou um problema e preciso de manutenção corretiva.",
  },
];

export const diferenciais: { icon: LucideIcon; titulo: string; texto: string }[] = [
  {
    icon: BadgeCheck,
    titulo: "Técnicos certificados",
    texto:
      "Equipe treinada em refrigeração, com procedimentos técnicos corretos em cada etapa do serviço.",
  },
  {
    icon: ShieldCheck,
    titulo: "Garantia de serviço",
    texto:
      "Todo serviço executado tem garantia e acompanhamento pós-atendimento pela nossa equipe.",
  },
  {
    icon: Package,
    titulo: "Peças originais",
    texto:
      "Trabalhamos com peças e insumos originais, compatíveis com a marca e o modelo do seu aparelho.",
  },
  {
    icon: Timer,
    titulo: "Atendimento rápido",
    texto:
      "Resposta ágil pelo WhatsApp e agendamento de visita técnica em Guaraciama, Montes Claros e região.",
  },
];

export const etapas = [
  {
    numero: "01",
    titulo: "Solicite o orçamento",
    texto: "Fale pelo WhatsApp ou preencha o formulário contando o que você precisa.",
  },
  {
    numero: "02",
    titulo: "Agendamos a visita",
    texto: "Avaliamos o ambiente e o equipamento para definir a melhor solução técnica.",
  },
  {
    numero: "03",
    titulo: "Executamos o serviço",
    texto: "Instalação ou manutenção feita com procedimento técnico e ambiente protegido.",
  },
  {
    numero: "04",
    titulo: "Garantia e suporte",
    texto: "Testamos o funcionamento, orientamos o uso e garantimos o serviço prestado.",
  },
];

export const faq = [
  {
    pergunta: "De quanto em quanto tempo devo fazer a manutenção preventiva?",
    resposta:
      "Em residências, o intervalo recomendado é a cada 6 meses. Em comércios, escritórios e ambientes com muito uso ou poeira, o ideal é a cada 3 meses, com limpeza de filtros mais frequente.",
  },
  {
    pergunta: "Quais sinais indicam que meu ar-condicionado precisa de manutenção?",
    resposta:
      "Ar gelando menos, aumento na conta de energia, cheiro forte ao ligar, barulhos incomuns, gotejamento de água na evaporadora e gelo na tubulação são sinais clássicos de que o aparelho precisa de avaliação técnica.",
  },
  {
    pergunta: "A limpeza do filtro substitui a higienização completa?",
    resposta:
      "Não. A limpeza do filtro é uma manutenção simples que o usuário pode fazer, mas a higienização completa alcança serpentina, turbina e bandeja de dreno — pontos onde se acumulam fungos e bactérias.",
  },
  {
    pergunta: "Vocês fazem PMOC e contratos de manutenção para empresas?",
    resposta:
      "Sim. Atendemos empresas e instituições com plano de manutenção programada, relatórios das visitas e PMOC, mantendo todos os equipamentos sob acompanhamento periódico.",
  },
  {
    pergunta: "Meu aparelho está sem gelar. É falta de gás?",
    resposta:
      "Nem sempre. A falta de gás normalmente indica vazamento, e apenas recarregar sem reparar o ponto de vazamento resolve por pouco tempo. Fazemos o diagnóstico completo antes de qualquer recarga.",
  },
  {
    pergunta: "Vocês atendem quais cidades?",
    resposta:
      "Atendemos Guaraciama, Montes Claros e toda a região Norte de Minas, para clientes residenciais, comerciais e institucionais.",
  },
];

export const depoimentos = [
  {
    nome: "Ana Cláudia",
    local: "Montes Claros - MG",
    texto:
      "Instalaram dois splits no meu escritório no mesmo dia. Serviço limpo, organizado e explicaram direitinho como usar o aparelho.",
  },
  {
    nome: "Rodrigo Martins",
    local: "Guaraciama - MG",
    texto:
      "Meu ar não estava gelando. Vieram rápido, encontraram o vazamento e resolveram sem enrolação. Preço justo e atendimento excelente.",
  },
  {
    nome: "Mercado São José",
    local: "Montes Claros - MG",
    texto:
      "Fazemos a manutenção preventiva dos aparelhos da loja com a JJ. Nunca mais tivemos aparelho parado em dia de movimento.",
  },
  {
    nome: "Luciana Ferreira",
    local: "Bocaiúva - MG",
    texto:
      "Higienização completa feita com muito capricho. O ar ficou sem cheiro e a diferença na temperatura foi imediata.",
  },
];

export const planos = [
  {
    nome: "Plano Residencial",
    resumo: "Ideal para casas e apartamentos com 1 a 3 aparelhos.",
    preco: "a partir de R$ 89/mês",
    itens: [
      "2 visitas por ano (a cada 6 meses)",
      "Higienização de evaporadora e condensadora",
      "Limpeza de filtros e bandeja de dreno",
      "Checagem de gás e medição elétrica",
    ],
    whatsappMessage:
      "Olá! Gostaria de consultar o Plano Residencial de manutenção de ar-condicionado.",
  },
  {
    nome: "Plano Comercial / Empresarial",
    resumo: "Para lojas, escritórios e clínicas com uso intenso.",
    preco: "a partir de R$ 199/mês",
    itens: [
      "4 visitas por ano (a cada 3 meses)",
      "Higienização completa dos equipamentos",
      "Prioridade em chamados corretivos",
      "Relatório técnico de cada visita",
    ],
    whatsappMessage:
      "Olá! Gostaria de consultar o Plano Comercial de manutenção de ar-condicionado.",
  },
  {
    nome: "Plano PMOC",
    resumo: "Para empresas e instituições que precisam de conformidade.",
    preco: "sob consulta",
    itens: [
      "Plano de manutenção, operação e controle",
      "Cronograma e registro de todas as visitas",
      "Responsável técnico e documentação",
      "Atendimento programado para múltiplos equipamentos",
    ],
    whatsappMessage: "Olá! Gostaria de consultar o Plano PMOC de manutenção de ar-condicionado.",
  },
];
