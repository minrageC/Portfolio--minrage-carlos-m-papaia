import { Language, Project, Service, StatItem } from './types';

export const PERSONAL_INFO = {
  name: "Minrage Carlos M'papaia",
  heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrP5337K4ZoxewJVrxj4fsAaB4RFBeszVkzcUCAahDJVV9o-ChcmuVLFVRttt12XMI-h26HTHCz_WpvNqEAFwRu5Ia5zdjJmu8AUzx2yUeesPql2FW2DqBXlmOt-pFGkAszyRx3T0MrCKL9I0BFTZ54bWa6P9RemQOHawihb8thwXkEwTS2w6x_SpzLMdNRhaWWQ5wz6A7lJIiFHYr3ZBYPXs2B1ba5GP-qoz7JhwpeG26XOD-Gka8oM640yj0HJsRr7k",
  aboutImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCGpptdHi6px4zd8rhkxEk_hgVU4wPX0iAAfvc3udEJd9RaiQIe9huBsZJ8admVF9ioJQxWtAmNBsuaF64dDW6h19wP1nrT44RV9BXCrvHQrB2hkTvPtvxVCyhB1wOLhtDLdSHZG9ywMo0F7z1XrBWvjC_g_K6zyVbHTSA-F08iuFwEn0DtZmfGSQSfU5HSoeD3AffGkrpDtok-aDj6S8OP_pNjeMI4dDkT00yNDAzo6iCu8UuIcIoZcseWV4YUppMojA",
  cvFileSize: "PDF • 2.4 MB",
  email: "minrage.magnata@gmail.com",
  phone: "+258 84 272 2300",
  phoneDisplay: "84272230",
  whatsapp: "+25884272230",
  whatsappUrl: "https://wa.me/25884272230",
  github: "https://github.com/minrageC",
  linkedin: "https://www.linkedin.com/in/minrage-carlos-8a1205328",
  location: {
    pt: "São Paulo, SP / Remoto",
    en: "San Francisco, CA / Remote"
  },
  role: {
    pt: "Desenvolvedor Frontend",
    en: "Frontend Developer"
  },
  status: {
    pt: "Disponível para Trabalho",
    en: "Available for Hire"
  },
  shortBio: {
    pt: "Apaixonado por criar aplicações web responsivas, acessíveis e de alta performance com arquiteturas frontend modernas.",
    en: "Passionate about building responsive, accessible, and high-performance web applications with modern frontend architectures."
  },
  fullBio: {
    pt: [
      "Sou um engenheiro frontend especializado com mais de seis anos de experiência transformando especificações de produtos complexas em aplicações web limpas, responsivas e visualmente marcantes. Alicerçado na execução pixel-perfect, compatibilidade entre navegadores e princípios arquiteturais modulares.",
      "Minha stack se concentra em frameworks modernos de componentes, TypeScript, padrões de estado reativo e arquitetura CSS projetada para velocidade extrema e zero fricção. Priorizo Core Web Vitals, semântica acessível e performance interativa fluida."
    ],
    en: [
      "I am a specialized frontend engineer with over six years of rigorous experience turning complex, demanding product specs into clean, responsive web applications. Grounded in pixel-perfect execution, cross-browser compatibility, and modular architectural principles.",
      "My stack centers around modern component frameworks, TypeScript, reactive state patterns, and CSS architecture designed for extreme velocity and zero friction. I prioritize web vitals, accessible semantics, and lightweight interactive performance."
    ]
  }
};

export const STATS: Record<Language, StatItem[]> = {
  pt: [
    { value: "6+", label: "Anos Exp." },
    { value: "50+", label: "Projetos" },
    { value: "100%", label: "Satisfação" }
  ],
  en: [
    { value: "6+", label: "Years Exp." },
    { value: "50+", label: "Projects" },
    { value: "100%", label: "Satisfaction" }
  ]
};

export const SERVICES: Record<Language, Service[]> = {
  pt: [
    {
      id: "web-development",
      title: "Desenvolvimento Web",
      description: "Construção de aplicações web rápidas, seguras e escaláveis utilizando frameworks modernos, arquiteturas robustas e código limpo.",
      iconName: "code",
      features: [
        "Aplicações SPA e SSR com React & Next.js",
        "Sistemas Modulares de Componentes em TypeScript",
        "Tailwind CSS & Micro-animações de Alta Performance",
        "Garantia de Core Web Vitals 95+",
        "Integrações de APIs REST & GraphQL com Tipagem Rígida"
      ]
    },
    {
      id: "graphic-design",
      title: "Design Gráfico & UI",
      description: "Criação de identidades visuais marcantes, sistemas de design refinados, vetores de alta precisão e estética cyberpunk futurista.",
      iconName: "brush",
      features: [
        "Design Systems & Bibliotecas de Componentes no Figma",
        "UI/UX com Estética Cyber & Modos Dark Refinados",
        "Ativos Vetoriais de Alta Precisão & Ilustrações em SVG",
        "Prototipagem Interativa & Fluxos de Navegação",
        "Identidade Visual & Guias de Estilo Consistentes"
      ]
    },
    {
      id: "digital-marketing",
      title: "Marketing Digital & SEO",
      description: "Otimização de visibilidade orgânica nos motores de busca, funis de conversão de alto impacto e análise analítica de métricas.",
      iconName: "bar_chart",
      features: [
        "SEO Técnico & Dados Estruturados Schema.org",
        "Otimização da Taxa de Conversão (CRO)",
        "Telemetria em Tempo Real & Mapas de Calor de Usuário",
        "Landing Pages Interativas de Alta Conversão",
        "Otimização de Compartilhamento Social & Metatags OpenGraph"
      ]
    }
  ],
  en: [
    {
      id: "web-development",
      title: "Web Development",
      description: "Constructing fast, reliable, and scalable web software using cutting-edge frameworks, robust architectures, and clean maintainable code bases.",
      iconName: "code",
      features: [
        "React & Next.js Single Page Applications",
        "TypeScript & Modular Component Systems",
        "Tailwind CSS & High-Performance Micro-Animations",
        "Core Web Vitals 95+ Guarantee",
        "Rest API & GraphQL Client Integrations"
      ]
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Crafting visual identities, refined component systems, vector aesthetics, and modern cyber-inspired digital graphics that tell compelling stories.",
      iconName: "brush",
      features: [
        "Design Systems & Figma Component Toolkits",
        "Cyber-aesthetic UI/UX & Dark Mode Theming",
        "High-Precision Vector Assets & SVG Art",
        "Micro-interaction & Prototyping Flows",
        "Brand Identity & Style Guides"
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Optimizing search visibility, client funnel acquisition metrics, high-conversion micro-landing experiences, and comprehensive web analytics.",
      iconName: "bar_chart",
      features: [
        "Technical SEO & Structured Schema Data",
        "Conversion Rate Optimization (CRO)",
        "Real-Time Funnel Analytics & Heatmaps",
        "Interactive Product Landing Experiences",
        "Social Sharing & OpenGraph Optimization"
      ]
    }
  ]
};

export const PROJECTS: Record<Language, Project[]> = {
  pt: [
    {
      id: "fintech-dashboard",
      title: "Dashboard FinTech",
      category: "Análise Financeira",
      description: "Telemetria de ativos em tempo real com modelagem preditiva e websockets de baixa latência.",
      longDescription: "Painel de monitoramento financeiro de alta frequência com layout responsivo avançado, feeds WebSocket com atualizações em milissegundos e visualizações em tela vetorial SVG sob tema escuro cyber.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8ImUWDkWQzaf2KPeetqt-aMa0JSvH_tKvpd6Y3uhe5BLUXByg9sDUY3eRFw8GdKtt76jMuHoF3eh3bwoYQ0K4AcuwFTWnmRwumew_5IfnoxOkjihR4PPRCtdiFRaIo6BaaD2eBcSCm5e71MK8y9PhTtjZSwRMsD1vgG4QfVsc_frhAr1oYRKXyL89sFPwgiEr_x49-erDbqQSdphk2m3BSzVAgOkI1fLMIDycBkNX3sTGjgv1kYijhQ",
      tags: ["React", "TypeScript", "WebSockets", "D3.js", "Tailwind CSS"],
      metrics: "120k+ Requisições Diárias • Latência <18ms"
    },
    {
      id: "defi-trading-terminal",
      title: "Terminal de Trading DeFi",
      category: "Web Mobile & Cripto",
      description: "Explorador de liquidez descentralizada com swaps de liquidação atômica entre cadeias.",
      longDescription: "Rastreador de carteira cripto mobile-first e interface de negociação com telemetria ciano brilhante, cotações de roteamento instantâneo e interações táteis em ardósia escura.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz0XIjNZ8iw0CaiME437UT6s8v2O5S-9CIcRpyADajIy1J5VO7bJ2jCfAG__y_pL2-YDJPsKzBfblwk3LhJlCfZVeWIkGyQ0Aa-ulZz_8r85gXgkN-fHbnKjHg3ctGuknC2ZiNEHZ4hDzyPdbvryAZWwe04gnRK7BMp0ljM-CnkAcJodZOtGHm1vg0E9ylq2BeYp6NJcDa-Yqjc5VKDtRSLE7Ndyr9zu6uT62FF_2CQnhB6UyWc8TcVg",
      tags: ["Mobile UI", "Tailwind", "Web3 Hooks", "Framer Motion"],
      metrics: "$42M+ Volume Simulado • 99.98% Disponibilidade"
    },
    {
      id: "cybernetic-storefront",
      title: "Loja Cibernética",
      category: "E-Commerce",
      description: "Frontend headless para e-commerce com renderização no edge do Next.js e micro-interações.",
      longDescription: "Loja virtual de hardware futurista com matriz de estoque em tempo real, cartões interativos de periféricos 3D, selos holográficos luminosos e carrinho de compras ultrarrápido.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKSkfvw0ek401Fty4T8GmU0KFueOoptgvGHw-qKryf7hceLeq_Bmq2lZivnaN1Tj5K8FRz_mfDBXCDEHW0GDRaasyy05QCL8bq0m1oBUk6LVVRlAityCzod_RoJydwQQiVgfF3WZqvjfgLU4aGqQSEFvENuqyUJpAcqJoqICukN6K0QIcYTFCbYZLi18E-fKsSazTFb9CtnPlIemoHfLDFDXgWH8vQ54r4Ug4QOSryxwZp8UTvLTgHig",
      tags: ["Next.js", "Headless Shopify", "Tailwind CSS", "Zustand"],
      metrics: "LCP Sub-0.8s • +4.2% em Conversão"
    },
    {
      id: "ai-dev-orchestrator",
      title: "Orquestrador de IA Dev",
      category: "Ferramental Dev",
      description: "Assistente autônomo de code review com árvore visual de diffs e testes de pipeline automatizados.",
      longDescription: "Bancada ergonômica para desenvolvedores com árvore sintática AST TypeScript ao vivo, anotações automatizadas de linter e divisores de tela banhados por iluminação ciano ambiente.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Z__WJdPGoLDDxtlAbk2RTgdJiH9nj0buokO9ctjuBWCNBC-2FBc_xCrv5B47PxOlcE1Bgje1dlrHuhBEM0AY4DhkWpL0hhK4gVKuk9_UCraCUZRkVKQ_gsOBlGBLE7Xqrcpn2a0yxBEMsTuxN66ST7JDfOMVfou4F0rQKFjVzl0HDD6csqWegFOO7yR6YTxlcC54fISR9lQl4x3DRlp_62EJe-a3z1Lh6IPTyPAAePqGJYU-uJ3fGA",
      tags: ["Monaco Editor", "React", "TypeScript", "Vite"],
      metrics: "25k+ Repositórios Ativos • 40% Mais Rápido"
    },
    {
      id: "cloud-topology-inspector",
      title: "Inspetor de Topologia em Nuvem",
      category: "Infraestrutura Cloud",
      description: "Motor de grafo interativo mapeando clusters multirregionais e tráfego de entrada em tempo real.",
      longDescription: "Visualizador de rede em nuvem corporativa renderizando grafos de nós distribuídos, picos de carga de tráfego e status de failover com diagnósticos HUD neon em painéis de ardósia escura.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmR-7TXDxcqeQSiO0o5PCHzDFxKanHJ6BaVAYwnYxYI2s0h_aGBCg7EgrHmZvUagD1_uxvmBhcGI8O6dYSJAlhFrYSetJ1aW0ZOCj2ujloehKg4vkviXrBdWMk0rI-4y85QVZt1f92DjZoyRqwNsd-6iDKfehPZPHCJ0uuBOy_VV-rOG0-raSqeWkQ7UNd0838kksNNt0S6ybAqCZoObeF2L1KekazxflgJLeJYFvAmRZgc0-sUjNj8A",
      tags: ["GraphGL", "Canvas API", "TypeScript", "Tailwind"],
      metrics: "10.000+ Nós a 60 FPS • Multi-Cloud"
    },
    {
      id: "spatial-sound-synthesizer",
      title: "Sintetizador de Som Espacial",
      category: "Áudio & WebGL",
      description: "Motor WebAudio no navegador com panning ambisônico 3D e módulos DSP configuráveis.",
      longDescription: "Ambiente de síntese sonora espacial generativa em tempo real com visualizadores interativos de espectro de frequência, filtros de envelope modulares e osciladores WebAudio de latência ultra baixa.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDdECZFEyz5-SW7NflLJTevk8U5S8xqW7W1DbyWLSLeugYT7z7_iLQhUqm_-nLuz0H8xKEzPghmzv8cLc09X4Mqyg2zqO4j_ONldrh-shKUCHAoB7KLty7x5XidSxj3q3hH1dMAupRy7MbULpoxZ1F9E9iAsvKAmG80PKuYA954uel5fXcqtNx6-lu05VO5bKXiK121kiQR8tXj5aaodPFUoOB008NMAB_LIOiVNYS949u5Osu0af7aA",
      tags: ["WebAudio API", "Canvas 2D", "React", "DSP"],
      metrics: "Buffering de Áudio 3.2ms • 32 Trilhas Simultâneas"
    }
  ],
  en: [
    {
      id: "fintech-dashboard",
      title: "FinTech Dashboard",
      category: "Financial Analytics",
      description: "Real-time asset telemetry with predictive chart modeling and low-latency websockets.",
      longDescription: "A high-frequency financial monitoring dashboard featuring dual-curved layout support, WebSocket feeds for millisecond-level tick updates, and modular SVG canvas visualizations with custom dark cyber themes.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8ImUWDkWQzaf2KPeetqt-aMa0JSvH_tKvpd6Y3uhe5BLUXByg9sDUY3eRFw8GdKtt76jMuHoF3eh3bwoYQ0K4AcuwFTWnmRwumew_5IfnoxOkjihR4PPRCtdiFRaIo6BaaD2eBcSCm5e71MK8y9PhTtjZSwRMsD1vgG4QfVsc_frhAr1oYRKXyL89sFPwgiEr_x49-erDbqQSdphk2m3BSzVAgOkI1fLMIDycBkNX3sTGjgv1kYijhQ",
      tags: ["React", "TypeScript", "WebSockets", "D3.js", "Tailwind CSS"],
      metrics: "120k+ Daily Queries • <18ms latency"
    },
    {
      id: "defi-trading-terminal",
      title: "DeFi Trading Terminal",
      category: "Mobile Web & Crypto",
      description: "Decentralized liquidity liquidity explorer with cross-chain atomic settlement swap logic.",
      longDescription: "Ultra-responsive mobile-first crypto portfolio tracker and trading interface featuring glowing cyan telemetry, biometric simulation, instant routing quotes, and dark slate tactile interactions.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz0XIjNZ8iw0CaiME437UT6s8v2O5S-9CIcRpyADajIy1J5VO7bJ2jCfAG__y_pL2-YDJPsKzBfblwk3LhJlCfZVeWIkGyQ0Aa-ulZz_8r85gXgkN-fHbnKjHg3ctGuknC2ZiNEHZ4hDzyPdbvryAZWwe04gnRK7BMp0ljM-CnkAcJodZOtGHm1vg0E9ylq2BeYp6NJcDa-Yqjc5VKDtRSLE7Ndyr9zu6uT62FF_2CQnhB6UyWc8TcVg",
      tags: ["Mobile UI", "Tailwind", "Web3 Hooks", "Framer Motion"],
      metrics: "$42M+ Simulated Volume • 99.98% uptime"
    },
    {
      id: "cybernetic-storefront",
      title: "Cybernetic Storefront",
      category: "E-Commerce",
      description: "Headless commerce frontend powered by Next.js edge caching and micro-interactions.",
      longDescription: "Futuristic hardware e-commerce store with real-time stock matrix, dynamic 3D peripheral rendering cards, glowing holographic tags, and lightning-fast edge rendered cart drawer.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKSkfvw0ek401Fty4T8GmU0KFueOoptgvGHw-qKryf7hceLeq_Bmq2lZivnaN1Tj5K8FRz_mfDBXCDEHW0GDRaasyy05QCL8bq0m1oBUk6LVVRlAityCzod_RoJydwQQiVgfF3WZqvjfgLU4aGqQSEFvENuqyUJpAcqJoqICukN6K0QIcYTFCbYZLi18E-fKsSazTFb9CtnPlIemoHfLDFDXgWH8vQ54r4Ug4QOSryxwZp8UTvLTgHig",
      tags: ["Next.js", "Headless Shopify", "Tailwind CSS", "Zustand"],
      metrics: "Sub-0.8s LCP • 4.2% Conversion Lift"
    },
    {
      id: "ai-dev-orchestrator",
      title: "AI Dev Orchestrator",
      category: "Developer Tooling",
      description: "Autonomous code review assistant with visual diff trees and automated pipeline tests.",
      longDescription: "An ergonomic developer workbench presenting live TypeScript syntax AST trees, automated lint annotations, and multi-screen workspace splitters bathed in ambient cyan backlights.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Z__WJdPGoLDDxtlAbk2RTgdJiH9nj0buokO9ctjuBWCNBC-2FBc_xCrv5B47PxOlcE1Bgje1dlrHuhBEM0AY4DhkWpL0hhK4gVKuk9_UCraCUZRkVKQ_gsOBlGBLE7Xqrcpn2a0yxBEMsTuxN66ST7JDfOMVfou4F0rQKFjVzl0HDD6csqWegFOO7yR6YTxlcC54fISR9lQl4x3DRlp_62EJe-a3z1Lh6IPTyPAAePqGJYU-uJ3fGA",
      tags: ["Monaco Editor", "React", "TypeScript", "Vite"],
      metrics: "25k+ Active Repositories • 40% Review Speedup"
    },
    {
      id: "cloud-topology-inspector",
      title: "Cloud Topology Inspector",
      category: "Cloud Infrastructure",
      description: "Interactive graph engine mapping multi-region server clusters and live ingress throughput.",
      longDescription: "Enterprise cloud network visualizer rendering distributed node graphs, traffic load spikes, and failover status with neon HUD diagnostics on dark obsidian panels.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmR-7TXDxcqeQSiO0o5PCHzDFxKanHJ6BaVAYwnYxYI2s0h_aGBCg7EgrHmZvUagD1_uxvmBhcGI8O6dYSJAlhFrYSetJ1aW0ZOCj2ujloehKg4vkviXrBdWMk0rI-4y85QVZt1f92DjZoyRqwNsd-6iDKfehPZPHCJ0uuBOy_VV-rOG0-raSqeWkQ7UNd0838kksNNt0S6ybAqCZoObeF2L1KekazxflgJLeJYFvAmRZgc0-sUjNj8A",
      tags: ["GraphGL", "Canvas API", "TypeScript", "Tailwind"],
      metrics: "10,000+ Nodes at 60 FPS • Multi-Cloud"
    },
    {
      id: "spatial-sound-synthesizer",
      title: "Spatial Sound Synthesizer",
      category: "Audio & WebGL",
      description: "Browser-based WebAudio engine with 3D ambisonic panning and modular DSP patches.",
      longDescription: "Real-time generative spatial audio playground equipped with interactive frequency spectrum visualizers, modular envelope filters, and low-latency WebAudio oscillators.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDdECZFEyz5-SW7NflLJTevk8U5S8xqW7W1DbyWLSLeugYT7z7_iLQhUqm_-nLuz0H8xKEzPghmzv8cLc09X4Mqyg2zqO4j_ONldrh-shKUCHAoB7KLty7x5XidSxj3q3hH1dMAupRy7MbULpoxZ1F9E9iAsvKAmG80PKuYA954uel5fXcqtNx6-lu05VO5bKXiK121kiQR8tXj5aaodPFUoOB008NMAB_LIOiVNYS949u5Osu0af7aA",
      tags: ["WebAudio API", "Canvas 2D", "React", "DSP"],
      metrics: "3.2ms Audio Buffering • 32 Parallel Tracks"
    }
  ]
};

export const UI_TEXT = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      portfolio: "Portfólio",
      contact: "Contato",
      hireMe: "Contrate-me"
    },
    hero: {
      hello: "Olá, Eu sou",
      rolePrefix: "E sou um",
      downloadCv: "Baixar CV",
      openingSocial: "Abrindo perfil no"
    },
    about: {
      badge: "Detalhes Sobre Mim",
      titleStart: "Sobre",
      titleHighlight: "Mim",
      roleSubtitle: "Desenvolvedor Frontend!",
      readMore: "Leia Mais"
    },
    services: {
      badge: "Habilidades",
      titleStart: "Nossos",
      titleHighlight: "Serviços",
      readMore: "Leia Mais"
    },
    portfolio: {
      badge: "Portfólio",
      titleStart: "Projetos",
      titleHighlight: "Recentes"
    },
    contact: {
      badge: "Entre em Contato",
      titleStart: "Fale",
      titleHighlight: "Comigo!",
      fullName: "Nome Completo",
      email: "Endereço de E-mail",
      mobile: "Número de Telefone",
      subject: "Assunto",
      message: "Sua Mensagem",
      sendMessage: "Enviar Mensagem",
      sending: "Enviando Mensagem...",
      directWhatsApp: "Falar no WhatsApp",
      directEmail: "Enviar pelo Gmail",
      directPhone: "Telefone / WhatsApp",
      directChannelsTitle: "Ou entre em contato diretamente:",
      success: (name: string) => `Muito obrigado, ${name}! Sua mensagem foi preparada e enviada para o e-mail minrage.magnata@gmail.com. Entrarei em contato em breve.`,
      errorRequired: "Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem)."
    },
    footer: {
      rights: "Todos os direitos reservados.",
      backToTop: "Voltar ao topo"
    },
    modals: {
      project: {
        tech: "Tecnologias & Ferramentas",
        inquire: "Solicitar Projeto Similar",
        viewHighRes: "Ver Mockup em Alta Resolução",
        close: "Fechar"
      },
      service: {
        badge: "Visão Geral do Serviço",
        deliverables: "Principais Entregáveis & Capacidades",
        requestQuote: (serviceTitle: string) => `Solicitar Orçamento de ${serviceTitle}`,
        close: "Fechar"
      },
      cv: {
        badge: "Currículo • Desenvolvedor Frontend",
        yearsExpTitle: "6+ Anos em Engenharia de Software",
        yearsExpDesc: "Especializado em sistemas web de alta performance, single page applications responsivas e design systems modernos.",
        techTitle: "Competências Técnicas",
        techDesc: "TypeScript, React 19, Tailwind CSS, Next.js, Node.js, WebSockets, WebAudio, Acessibilidade WCAG AA.",
        eduTitle: "Formação & Certificações",
        eduDesc: "Bacharelado em Ciência da Computação • Arquiteto Frontend Certificado • Especialista em Web Vitals",
        downloadBtn: "Baixar Currículo",
        close: "Fechar"
      },
      about: {
        badge: "Histórico Profissional",
        meet: "Conheça",
        p1: "Com mais de 6 anos de experiência sólida em desenvolvimento frontend moderno, tive o privilégio de arquitetar interfaces críticas voltadas ao cliente para fintechs em escala, pioneiros de web3 e agências globais de design.",
        p2: "Minha filosofia de engenharia é focada em interfaces reativas de latência zero, conformidade com padrões de acessibilidade e design systems ergonômicos que unem com perfeição o design do Figma ao código TypeScript em produção.",
        principlesTitle: "Princípios de Engenharia",
        principles: [
          "Fidelidade Pixel-Perfect",
          "Interações Sub-100ms",
          "Rigor Estrito em TypeScript",
          "Acessibilidade WCAG 2.1 AA",
          "Arquitetura Modular Limpa",
          "Resiliência Cross-Browser"
        ],
        cta: "Vamos Construir Algo Juntos"
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      hireMe: "Hire Me"
    },
    hero: {
      hello: "Hello, It's Me",
      rolePrefix: "And I'm a",
      downloadCv: "Download CV",
      openingSocial: "Opening profile on"
    },
    about: {
      badge: "About Details",
      titleStart: "About",
      titleHighlight: "Me",
      roleSubtitle: "Frontend Developer!",
      readMore: "Read More"
    },
    services: {
      badge: "Capabilities",
      titleStart: "Our",
      titleHighlight: "Services",
      readMore: "Read More"
    },
    portfolio: {
      badge: "Portfolio",
      titleStart: "Latest",
      titleHighlight: "Project"
    },
    contact: {
      badge: "Get In Touch",
      titleStart: "Contact",
      titleHighlight: "Me!",
      fullName: "Full Name",
      email: "Email Address",
      mobile: "Mobile Number",
      subject: "Email Subject",
      message: "Your Message",
      sendMessage: "Send Message",
      sending: "Sending Message...",
      directWhatsApp: "Chat on WhatsApp",
      directEmail: "Send via Gmail",
      directPhone: "Phone / WhatsApp",
      directChannelsTitle: "Or contact directly:",
      success: (name: string) => `Thank you, ${name}! Your message has been prepared and sent to minrage.magnata@gmail.com. I will get back to you shortly.`,
      errorRequired: "Please complete all required fields (Name, Email, Message)."
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top"
    },
    modals: {
      project: {
        tech: "Technologies & Tools",
        inquire: "Inquire About Similar Project",
        viewHighRes: "View High-Res Mockup",
        close: "Close"
      },
      service: {
        badge: "Service Overview",
        deliverables: "Key Capabilities & Deliverables",
        requestQuote: (serviceTitle: string) => `Request ${serviceTitle} Quote`,
        close: "Close"
      },
      cv: {
        badge: "Curriculum Vitae • Frontend Developer",
        yearsExpTitle: "6+ Years Production Engineering",
        yearsExpDesc: "Specialized in high-performance web systems, responsive single-page applications, and modern design systems.",
        techTitle: "Technical Skills",
        techDesc: "TypeScript, React 19, Tailwind CSS, Next.js, Node.js, WebSockets, WebAudio, WCAG AA Accessibility.",
        eduTitle: "Education & Credentials",
        eduDesc: "B.S. in Computer Science • Certified Frontend Architect • Full Web Vitals Spec",
        downloadBtn: "Download Resume",
        close: "Close"
      },
      about: {
        badge: "Engineer Background",
        meet: "Meet",
        p1: "With over 6 years of experience in modern frontend development, I have had the privilege of architecting critical customer-facing interfaces for fintech scale-ups, web3 pioneers, and design agencies worldwide.",
        p2: "My engineering philosophy centers around zero-latency reactive UI, accessibility standards compliance, and ergonomic design systems that bridge the gap between Figma mockups and production-grade TypeScript code.",
        principlesTitle: "Engineering Principles",
        principles: [
          'Pixel-Perfect Fidelity',
          'Sub-100ms Interactions',
          'Strict TypeScript Rigor',
          'WCAG 2.1 AA Compliance',
          'Clean Modular Architecture',
          'Cross-Browser Resilience'
        ],
        cta: "Let's Build Something Together"
      }
    }
  }
};
