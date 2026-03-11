import { WayToEarn } from './types';

export const WAYS_TO_EARN: WayToEarn[] = [
  {
    id: 1,
    title: "Freelancing com IA",
    description: "Use ferramentas de IA para entregar serviços digitais como apresentações, design e escrita de forma ultra-rápida em plataformas como Fiverr e Upwork.",
    tools: ["ChatGPT", "Midjourney", "Jasper AI"],
    potential: "$50 - $200 por projeto",
    icon: "Briefcase"
  },
  {
    id: 2,
    title: "Canais Automatizados (YouTube)",
    description: "Crie canais 'faceless' onde a IA escreve o roteiro, narra e ajuda na edição, permitindo escala massiva sem aparecer.",
    tools: ["ChatGPT", "CapCut", "IA de voz"],
    potential: "$10 - $20 por 1k views (nicho alto CPM)",
    icon: "Youtube"
  },
  {
    id: 3,
    title: "Automação de Negócios",
    description: "Ajude empresas a automatizar tarefas repetitivas, integrando sistemas e criando fluxos de trabalho inteligentes.",
    tools: ["Zapier", "Make", "OpenAI API"],
    potential: "Centenas a milhares de dólares por implementação",
    icon: "Zap"
  },
  {
    id: 4,
    title: "Engenharia de Prompts",
    description: "Torne-se um especialista em conversar com IAs. Empresas contratam profissionais que sabem extrair o máximo de modelos como GPT-4 e Claude.",
    tools: ["Prompt Engineering", "LLM Optimization"],
    potential: "Salários competitivos em tech ou consultoria",
    icon: "Terminal"
  },
  {
    id: 5,
    title: "Marketing Digital com IA",
    description: "Crie landing pages, anúncios e textos persuasivos em minutos, usando o poder da IA para otimizar conversões.",
    tools: ["Copy.ai", "AdCreative.ai", "ChatGPT"],
    potential: "Alta demanda por agências e infoprodutores",
    icon: "Megaphone"
  }
];
