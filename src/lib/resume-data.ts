
import {
  Mail,
  Linkedin,
  Send,
  Briefcase,
  Code,
  Cpu,
  Brain,
  Cloud,
  Users,
  GraduationCap,
  Globe,
  Settings,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Database,
  GitBranch,
  Layers,
  Palette,
  Zap,
  Building,
  Calendar,
  MapPin,
  Award,
  Languages as LangIcon,
  Info,
} from "lucide-react";

// Resume data for both English and Russian languages
export const resumeData = {
  en: {
    name: "Cyril Lamdan",
    headline: "Visionary CEO & AI-Driven Full-Stack Developer | 19+ Years Driving Tech Innovation, Profitability & Startup Growth",
    location: "Worldwide / Remote",
    contact: {
      email: "cylamdan@gmail.com",
      linkedin: "https://www.linkedin.com/in/cyril-lamdan",
      telegram: "https://t.me/ruhunt",
      website: "[Your Deployed Resume URL]" // Will be replaced after deployment
    },
    navigation: {
      summary: "Summary",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      referencesNote: "References & Portfolio",
      contact: "Contact",
    },
    summary: `Results-oriented technology leader and AI enthusiast with over 19 years of comprehensive experience architecting, delivering, and scaling cutting-edge solutions across software development, AI/ML implementation, blockchain, cloud infrastructure, and startup leadership. Proven ability to bridge innovative concepts and market-ready products, driving profitability and efficiency, demonstrated through founding and scaling VTRENDE LLC and LAXIO LTD. Expertise spans the full SDLC, leveraging advanced skills in foundational AI models (OpenAI, Gemini, Claude), modern frameworks (React, Node.js, Python, .NET), cloud platforms (AWS, GCP, Azure), DevOps practices (Docker, K8s, CI/CD), and Web3 technologies (Solidity, Ethers.js). Passionate about continuous learning (extensive Upskilling via edX since 2012) and building high-impact, scalable, and cost-effective technology solutions. Seeking challenging leadership or principal technical roles to drive significant value in AI, software innovation, or startup ecosystems.`,
    referencesNote: {
      title: "Portfolio & References Note",
      text: "Due to the nature of corporate contracts and NDAs, a public portfolio or GitHub profile showcasing client projects is not available. Focus has been primarily on developing proprietary or closed-source solutions. Professional references and detailed case studies (where permissible) can be provided upon request."
    },
    experience: [
      {
        title: "CEO, Developer",
        company: "LAXIO LTD",
        location: "London Area, United Kingdom",
        period: "July 2022 - Present",
        description: "Spearheaded technology strategy for innovative startups (Blockchain, AI, E-commerce), directly contributing to securing initial funding rounds and achieving key product milestones.",
        achievements: [
          "Architected and led the development of a scalable AI recommendation engine for an e-commerce client, resulting in a **15% increase in Average Order Value (AOV)** and a **10% uplift in conversion rates** within 6 months.",
          "Automated key international trade documentation processes using AI/ML for a wholesale client, **reducing processing time by 40%** and minimizing errors.",
          "Facilitated **5+ strategic B2B partnerships** between tech ventures and established players, leading to joint ventures and expanded market reach.",
          "Implemented secure and efficient DAO governance frameworks (Aragon, Gnosis Safe) for 2 decentralized projects, enhancing community trust and participation.",
          "Managed distributed full-stack teams (up to 15 developers) using Agile methodologies, consistently delivering complex projects **10-15% ahead of schedule** on average."
        ],
        tags: ["Leadership", "AI", "Blockchain", "Startups", "E-commerce", "DAO", "AWS", "GCP", "Agile", "Full-Stack", "Partnerships", "Automation", "FinTech"]
      },
      {
        title: "CEO, Developer",
        company: "VTRENDE LLC",
        location: "Kaliningrad, Moscow, Saint Petersburg",
        period: "April 2014 - Present",
        description: "Founded and scaled a technology consultancy, achieving **year-over-year revenue growth averaging 25%** by delivering high-value software, AI, and infrastructure solutions.",
        achievements: [
          "Developed and launched **over 15 custom full-stack applications** (React, Node.js, Django, .NET) for clients, focusing on scalability and user experience, leading to high client retention rates (avg. 80%+).",
          "Implemented AI-driven automation for **5+ clients** (incl. process mining & RPA integration), resulting in an **average operational cost reduction of 20%**.",
          "Designed and managed scalable, cost-effective cloud infrastructure (AWS, GCP), optimizing resource utilization and **reducing cloud spend by an average of 18%** through IaC (Terraform) and containerization (Docker, K8s).",
          "Established and enforced high code quality standards and testing protocols, **reducing bug rates in production by over 30%** across managed projects."
        ],
        tags: ["Consulting", "Full-Stack", "AI", "Cloud", "DevOps", "Terraform", "Docker", "Kubernetes", "AWS", "GCP", "Python", "Node.js", "React", "Scalability", "Cost Optimization", "Code Quality", "Client Retention"]
      },
      {
        title: "Project Development Manager",
        company: "SOLID-FX LLC",
        location: "Moscow, Russia",
        period: "May 2010 - March 2014",
        description: "Managed the end-to-end development lifecycle for **8+ complex financial software projects**, coordinating cross-functional teams (10-20 members).",
        achievements: [
          "Ensured **on-time, within-budget delivery** for all 8+ projects.",
          "Introduced Agile (Scrum) methodologies, **improving team velocity by 25%** and increasing stakeholder satisfaction.",
          "Collaborated with sales/marketing to define scope, contributing to a **15% increase in successful project bids**."
        ],
        tags: ["Project Management", "Coordination", "Agile", "Scrum", "Finance", "Stakeholder Management", "Team Leadership"]
      },
      {
        title: "Operations Manager",
        company: "FISHER LLC",
        location: "Kaliningrad, Russia",
        period: "May 2008 - April 2010",
        description: "Managed daily operations, including logistics, vendor relations, and supply chain.",
        achievements: [
          "Optimized supply chain and inventory management using data analysis, leading to a **10% reduction in operational costs**.",
          "**Decreased stockout incidents by 15%** through improved forecasting and inventory control."
        ],
        tags: ["Operations", "Process Optimization", "Supply Chain", "Inventory Management", "Cost Reduction", "Logistics", "Vendor Management"]
      },
      {
        title: "Service Manager",
        company: "RIF LLC",
        location: "Kaliningrad, Russia",
        period: "September 2006 - April 2008",
        description: "Led a customer service team (5 members) and managed service protocols.",
        achievements: [
          "Implemented new training programs, **improving customer satisfaction scores by 20%**.",
          "Developed and managed service protocols, **reducing average issue resolution time by 25%**."
        ],
        tags: ["Service Management", "Customer Relations", "Team Leadership", "Training", "Process Improvement", "Customer Satisfaction"]
      },
    ],
    skillLevels: {
      "AI & Machine Learning": [
        { skill: "Foundational Models", level: 5 },
        { skill: "Frameworks", level: 4 },
        { skill: "MLOps", level: 3 },
        { skill: "Automation", level: 5 },
        { skill: "Bots", level: 4 }
      ],
      "Full-Stack Development": [
        { skill: "Frontend (React/Vue)", level: 5 },
        { skill: "Backend (Node/Python)", level: 5 },
        { skill: "Databases", level: 4 },
        { skill: "API Design", level: 5 },
        { skill: ".NET", level: 3 }
      ],
      "Cloud & DevOps": [
        { skill: "AWS/GCP/Azure Arch.", level: 5 },
        { skill: "Docker/K8s", level: 5 },
        { skill: "IaC (Terraform)", level: 4 },
        { skill: "CI/CD", level: 4 },
        { skill: "Monitoring", level: 3 }
      ],
      "Blockchain & Web3": [
        { skill: "Solidity", level: 4 },
        { skill: "Web3 Libs", level: 4 },
        { skill: "DAO", level: 3 },
        { skill: "Infrastructure", level: 3 },
        { skill: "Security", level: 4 }
      ],
      "Business & Management": [
        { skill: "Startup Leadership", level: 5 },
        { skill: "Project Management", level: 5 },
        { skill: "Strategy", level: 4 },
        { skill: "B2B/Sales", level: 4 },
        { skill: "Budgeting", level: 3 }
      ],
    },
    skills: {
      "AI & Machine Learning": ["Foundational Models (OpenAI GPT, Google Gemini, Claude)", "Frameworks (TensorFlow, PyTorch, LangChain)", "AI Coding Assistants (Copilot)", "MLOps", "Process Automation (Avg. 30%+ efficiency gain)", "AI Bots (Rasa, Dialogflow)", "Google Vertex AI", "Hugging Face Hub"],
      "Full-Stack Development": ["Frontend (React, Vue, Next.js, Svelte)", "Backend (Node.js, Python/Django/Flask, .NET)", "Databases (PostgreSQL, MongoDB, Redis, SQL/NoSQL Optimization)", "APIs (REST, gRPC, Design & Implementation)"],
      "Cloud & DevOps": ["AWS, GCP, Azure (Architecture & Cost Optimization - Avg. 15-20% cost reduction)", "Docker, Kubernetes (K8s)", "Terraform, Ansible", "CI/CD (GitHub Actions, GitLab CI)", "Serverless", "Monitoring (Grafana, Prometheus, Datadog)"],
      "Blockchain & Web3": ["Smart Contracts (Solidity - Secure Development)", "Dev Tools (Hardhat, Truffle)", "Libraries (Ethers.js, Web3.js)", "Oracles (Chainlink)", "Decentralized Storage (IPFS)", "DAO Principles & Tools (Aragon, Gnosis Safe)"],
      "Business & Management": ["Startup Leadership & Growth (Scaling Ops & Revenue)", "Project Management (Jira, Notion, Agile/Scrum)", "Strategic Planning", "B2B Collaboration & Sales Pipeline Dev.", "CRM (Salesforce, HubSpot)", "Budgeting & Cost Control"],
      "Development Tools & Collaboration": ["Git (incl. Private/Corp Repos)", "VS Code, IntelliJ Suite", "Postman", "Figma", "Slack, Teams"],
    },
    education: [
      {
        institution: "edX",
        degree: "Continuous Learning & Professional Development",
        period: "Since 2012",
        focus: ["Computer Science", "Software Development", "Algorithms", "Project Management", "Business Administration", "Finance", "Machine Learning"],
        courses: [
          "MITx: 6.00.1x - Introduction to Computer Science and Programming Using Python",
          "HarvardX: CS50x - Introduction to Computer Science",
          "Microsoft: DEV210x - Introduction to Software Development",
          "UC San DiegoX: ALGS200x - Algorithmic Design and Techniques",
          "RITx: PM9001x - Project Management Life Cycle",
          "IIMBx: BM001x - Introduction to Business Management",
          "MITx Sloan: 15.511x - Financial Accounting",
          "ColumbiaX: CSMM.101x - Machine Learning for Data Science and Analytics"
        ]
      },
      {
        institution: "Moscow Institute of Technology",
        location: "Moscow, Russia",
        degree: "Master's degree, Computer Programming",
        period: "2011 - 2014"
      },
      {
        institution: "Kaliningrad State Technical University",
        location: "Kaliningrad, Russia",
        degree: "Master's degree, Natural Sciences",
        period: "2004 - 2010"
      },
      {
        institution: "AV-IN",
        degree: "Audiovisual Art Course",
        period: "2010"
      },
    ],
    languages: [
      { lang: "Russian", level: "Native", icon: LangIcon },
      { lang: "English", level: "Full Professional", icon: LangIcon },
    ],
    contactSection: {
      title: "Get In Touch",
      description: "Interested in collaborating, consulting, or discussing challenging opportunities? Feel free to reach out.",
      emailMe: "Email Me",
      connectLinkedIn: "Connect on LinkedIn",
      messageTelegram: "Message on Telegram",
      visitWebsite: "Visit Interactive Resume"
    },
    footer: "Built with React, Tailwind CSS, and Framer Motion. Inspired by innovation.",
    skillIcons: {
      "AI & Machine Learning": Brain,
      "Full-Stack Development": Code,
      "Cloud & DevOps": Cloud,
      "Blockchain & Web3": Layers,
      "Business & Management": Briefcase,
      "Development Tools & Collaboration": Settings,
    }
  },
  ru: {
    name: "Кирилл Ламдан",
    headline: "CEO, Разработчик и AI Специалист | 19+ лет опыта | Full-Stack | Блокчейн | Рост стартапов и прибыльности",
    location: "Worldwide / Remote",
    contact: {
      email: "cylamdan@gmail.com",
      linkedin: "https://www.linkedin.com/in/cyril-lamdan",
      telegram: "https://t.me/ruhunt",
      website: "[Your Deployed Resume URL]"
    },
    navigation: {
      summary: "Обзор",
      experience: "Опыт работы",
      skills: "Навыки",
      education: "Образование",
      languages: "Языки",
      referencesNote: "Рекомендации и Портфолио",
      contact: "Контакты",
    },
    summary: `Опытный и ориентированный на результат CEO, разработчик и энтузиаст ИИ с более чем 19-летним опытом в архитектуре, разработке и масштабировании передовых решений в области ПО, ИИ/ML, блокчейна, облачной инфраструктуры и лидерства в стартапах. Подтвержденная способность соединять инновационные концепции с готовыми к рынку продуктами, повышая прибыльность и эффективность, продемонстрированная через основание и масштабирование VTRENDE LLC и LAXIO LTD. Экспертиза охватывает полный SDLC, используя передовые навыки в фундаментальных моделях ИИ (OpenAI, Gemini, Claude), современных фреймворках (React, Node.js, Python, .NET), облачных платформах (AWS, GCP, Azure), DevOps практиках (Docker, K8s, CI/CD) и Web3 технологиях (Solidity, Ethers.js). Увлечен непрерывным обучением (обширное повышение квалификации через edX с 2012 г.) и созданием высокоэффективных, масштабируемых и экономичных технологических решений. Ищу сложные руководящие или ведущие технические роли для привнесения значительной ценности в области ИИ, инноваций ПО или экосистем стартапов.`,
    referencesNote: {
      title: "Примечание о Портфолио и Рекомендациях",
      text: "Ввиду специфики корпоративных контрактов и соглашений о неразглашении (NDA), публичное портфолио или профиль GitHub с проектами клиентов недоступны. Основной фокус деятельности был направлен на разработку проприетарных или закрытых решений. Профессиональные рекомендации и детальные кейсы (где это допустимо) могут быть предоставлены по запросу."
    },
    experience: [
      {
        title: "CEO, Разработчик",
        company: "LAXIO LTD",
        location: "Лондон, Великобритания", 
        period: "Июль 2022 - Наст. время",
        description: "Руководство технологической стратегией инновационных стартапов (Blockchain, AI, E-commerce), прямое содействие в привлечении инвестиций и достижении ключевых продуктовых этапов.",
        achievements: [
          "Спроектировал и руководил разработкой масштабируемого AI-движка рекомендаций для e-commerce клиента, что привело к **увеличению среднего чека (AOV) на 15%** и **росту конверсии на 10%** за 6 месяцев.",
          "Автоматизировал процессы документооборота в международной торговле с использованием AI/ML, **сократив время обработки на 40%** и минимизировав ошибки.",
          "Организовал **более 5 стратегических B2B партнерств** между технологическими стартапами и лидерами отрасли, что привело к созданию совместных предприятий и расширению рынка.",
          "Внедрил безопасные и эффективные DAO-фреймворки (Aragon, Gnosis Safe) для 2 децентрализованных проектов, повысив доверие и участие сообщества.",
          "Управлял распределенными full-stack командами (до 15 чел.) по Agile, стабильно сдавая сложные проекты **в среднем на 10-15% раньше срока**."
        ],
        tags: ["Лидерство", "ИИ", "Блокчейн", "Стартапы", "E-commerce", "DAO", "AWS", "GCP", "Agile", "Full-Stack", "Партнерства", "Автоматизация", "FinTech"]
      },
      {
        title: "CEO, Разработчик",
        company: "VTRENDE LLC",
        location: "Калининград, Москва, Санкт-Петербург",
        period: "Апрель 2014 - Наст. время",
        description: "Основал и масштабировал технологическую консалтинговую компанию, достигнув **среднегодового роста выручки на 25%** за счет предоставления высококачественных решений в области ПО, ИИ и инфраструктуры.",
        achievements: [
          "Разработал и запустил **более 15 кастомных full-stack приложений** (React, Node.js, Django, .NET), с фокусом на масштабируемость и UX, обеспечив высокий уровень удержания клиентов (в среднем >80%).",
          "Внедрил AI-решения для автоматизации **более чем у 5 клиентов** (включая process mining и RPA), добившись **среднего снижения операционных расходов на 20%**.",
          "Проектировал и управлял масштабируемой и экономичной облачной инфраструктурой (AWS, GCP), оптимизировав использование ресурсов и **сократив расходы на облако в среднем на 18%** с помощью IaC (Terraform) и контейнеризации (Docker, K8s).",
          "Внедрил высокие стандарты качества кода и тестирования, **снизив количество ошибок в продакшене более чем на 30%** на управляемых проектах."
        ],
        tags: ["Консалтинг", "Full-Stack", "ИИ", "Облако", "DevOps", "Terraform", "Docker", "Kubernetes", "AWS", "GCP", "Python", "Node.js", "React", "Масштабируемость", "Оптимизация затрат", "Качество кода", "Удержание клиентов"]
      },
      {
        title: "Менеджер по развитию проектов",
        company: "ООО \"СОЛИД-ФХ\" (SOLID-FX LLC)",
        location: "Москва, Россия",
        period: "Май 2010 - Март 2014",
        description: "Управлял полным циклом разработки **более 8 сложных проектов** в сфере финансового ПО, координируя команды (10-20 чел.).",
        achievements: [
          "Обеспечил **сдачу всех 8+ проектов в срок и в рамках бюджета**.",
          "Внедрил Agile (Scrum) методологии, **повысив производительность команды (velocity) на 25%** и увеличив удовлетворенность стейкхолдеров.",
          "Взаимодействовал с отделами продаж/маркетинга для определения требований, способствуя **увеличению успешных тендеров на 15%**."
        ],
        tags: ["Управление проектами", "Координация", "Agile", "Scrum", "Финансы", "Управление стейкхолдерами", "Лидерство в команде"]
      },
      {
        title: "Операционный менеджер",
        company: "ООО \"ФИШЕР\" (FISHER LLC)",
        location: "Калининград, Россия", 
        period: "Май 2008 - Апрель 2010",
        description: "Управлял ежедневными операциями, включая логистику, отношения с поставщиками и управление поставками.",
        achievements: [
          "Оптимизировал процессы управления поставками и запасами с помощью анализа данных, добившись **снижения операционных расходов на 10%**.",
          "**Уменьшил дефицит товаров на 15%** за счет улучшения прогнозирования и контроля запасов."
        ],
        tags: ["Операции", "Оптимизация процессов", "Цепочка поставок", "Управление запасами", "Снижение затрат", "Логистика", "Управление поставщиками"]
      },
      {
        title: "Сервис-менеджер",
        company: "ООО \"РИФ\" (RIF LLC)",
        location: "Калининград, Россия",
        period: "Сентябрь 2006 - Апрель 2008",
        description: "Руководил командой обслуживания клиентов (5 чел.) и управлял сервисными протоколами.",
        achievements: [
          "Внедрил программы обучения, **повысившие удовлетворенность клиентов на 20%**.",
          "Разработал и внедрил сервисные протоколы, **сократив среднее время решения проблем на 25%**."
        ],
        tags: ["Сервис-менеджмент", "Работа с клиентами", "Лидерство в команде", "Обучение", "Улучшение процессов", "Удовлетворенность клиентов"]
      },
    ],
    skillLevels: {
      "ИИ и Машинное Обучение": [
        { skill: "Фундаментальные модели", level: 5 },
        { skill: "Фреймворки", level: 4 },
        { skill: "MLOps", level: 3 },
        { skill: "Автоматизация", level: 5 },
        { skill: "Боты", level: 4 }
      ],
      "Full-Stack Разработка": [
        { skill: "Frontend (React/Vue)", level: 5 },
        { skill: "Backend (Node/Python)", level: 5 },
        { skill: "Базы данных", level: 4 },
        { skill: "API Design", level: 5 },
        { skill: ".NET", level: 3 }
      ],
      "Облако и DevOps": [
        { skill: "AWS/GCP/Azure Arch.", level: 5 },
        { skill: "Docker/K8s", level: 5 },
        { skill: "IaC (Terraform)", level: 4 },
        { skill: "CI/CD", level: 4 },
        { skill: "Мониторинг", level: 3 }
      ],
      "Блокчейн и Web3": [
        { skill: "Solidity", level: 4 },
        { skill: "Web3 Libs", level: 4 },
        { skill: "DAO", level: 3 },
        { skill: "Инфраструктура", level: 3 },
        { skill: "Безопасность", level: 4 }
      ],
      "Бизнес и Управление": [
        { skill: "Лидерство в стартапах", level: 5 },
        { skill: "Управление проектами", level: 5 },
        { skill: "Стратегия", level: 4 },
        { skill: "B2B/Продажи", level: 4 },
        { skill: "Бюджетирование", level: 3 }
      ],
    },
    skills: {
      "ИИ и Машинное Обучение": [
        "Фундаментальные модели (OpenAI GPT, Google Gemini, Claude)",
        "Фреймворки (TensorFlow, PyTorch, LangChain)",
        "AI-ассистенты (Copilot)",
        "MLOps",
        "Автоматизация процессов (сред. +30% эффективности)",
        "AI Боты (Rasa, Dialogflow)",
        "Google Vertex AI",
        "Hugging Face Hub"
      ],
      "Full-Stack Разработка": [
        "Frontend (React, Vue, Next.js, Svelte)",
        "Backend (Node.js, Python/Django/Flask, .NET)",
        "Базы данных (PostgreSQL, MongoDB, Redis, Оптимизация SQL/NoSQL)",
        "API (REST, gRPC, Проектирование и Реализация)"
      ],
      "Облако и DevOps": [
        "AWS, GCP, Azure (Архитектура и Оптимизация затрат - сред. -15-20%)",
        "Docker, Kubernetes (K8s)",
        "Terraform, Ansible",
        "CI/CD (GitHub Actions, GitLab CI)",
        "Serverless",
        "Мониторинг (Grafana, Prometheus, Datadog)"
      ],
      "Блокчейн и Web3": [
        "Смарт-контракты (Solidity - Безопасная разработка)",
        "Инструменты (Hardhat, Truffle)",
        "Библиотеки (Ethers.js, Web3.js)",
        "Оракулы (Chainlink)",
        "Децентрал. хранилища (IPFS)",
        "Принципы и Инструменты DAO (Aragon, Gnosis Safe)"
      ],
      "Бизнес и Управление": [
        "Лидерство в стартапах (Масштабирование операций и доходов)",
        "Управление проектами (Jira, Notion, Agile/Scrum)",
        "Стратегическое планирование",
        "B2B Сотрудничество и Развитие продаж",
        "CRM (Salesforce, HubSpot)",
        "Бюджетирование и Контроль затрат"
      ],
      "Инструменты и Коллаборация": [
        "Git (вкл. Приватные/Корп. репозитории)",
        "VS Code, IntelliJ Suite",
        "Postman",
        "Figma",
        "Slack, Teams"
      ],
    },
    education: [
      {
        institution: "edX",
        degree: "Непрерывное Обучение и Повышение Квалификации",
        period: "с 2012 г.",
        focus: ["Информатика", "Разработка ПО", "Алгоритмы", "Управление проектами", "Бизнес-администрирование", "Финансы", "Машинное обучение"],
        courses: [
          "MITx: 6.00.1x - Введение в информатику и программирование на Python",
          "HarvardX: CS50x - Введение в информатику",
          "Microsoft: DEV210x - Введение в разработку ПО",
          "UC San DiegoX: ALGS200x - Алгоритмический дизайн и техники",
          "RITx: PM9001x - Жизненный цикл управления проектами",
          "IIMBx: BM001x - Введение в бизнес-менеджмент",
          "MITx Sloan: 15.511x - Финансовый учет",
          "ColumbiaX: CSMM.101x - Машинное обучение для науки о данных и аналитики"
        ]
      },
      {
        institution: "Московский Технологический Институт (МТИ)",
        location: "Москва, Россия",
        degree: "Магистр, Программирование",
        period: "2011 - 2014"
      },
      {
        institution: "Калининградский Государственный Технический Университет (КГТУ)",
        location: "Калининград, Россия",
        degree: "Магистр, Естественные науки",
        period: "2004 - 2010"
      },
      {
        institution: "AV-IN",
        degree: "Курс аудиовизуального искусства",
        period: "2010"
      },
    ],
    languages: [
      { lang: "Русский", level: "Родной", icon: LangIcon },
      { lang: "Английский", level: "Свободное владение", icon: LangIcon },
    ],
    contactSection: {
      title: "Свяжитесь со мной",
      description: "Заинтересованы в сотрудничестве, консалтинге или обсуждении сложных задач? Не стесняйтесь написать.",
      emailMe: "Написать на Email",
      connectLinkedIn: "Профиль LinkedIn",
      messageTelegram: "Написать в Telegram",
      visitWebsite: "Посетить интерактивное резюме"
    },
    footer: "Создано с помощью React, Tailwind CSS и Framer Motion. Вдохновлено инновациями.",
    skillIcons: {
      "ИИ и Машинное Обучение": Brain,
      "Full-Stack Разработка": Code,
      "Облако и DevOps": Cloud,
      "Блокчейн и Web3": Layers,
      "Бизнес и Управление": Briefcase,
      "Инструменты и Коллаборация": Settings,
    }
  }
};

export type Language = "en" | "ru";
export type ResumeData = typeof resumeData.en;
