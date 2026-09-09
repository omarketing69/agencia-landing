import type { Dictionary } from "@/i18n/types";

/**
 * All site copy in English.
 * Keep exactly the same structure as es.ts.
 */
export const en: Dictionary = {
  langLabel: "English",
  site: {
    tagline: "Forward Deployed AI Engineering for companies across Latin America",
    ctaPrimary: "Book a diagnostic",
    ctaSecondary: "See case studies",
    whatsappMessage: "Hi, I'd like to book an automation diagnostic.",
    nav: [
      { label: "Home", href: "#inicio" },
      { label: "Services", href: "#servicios" },
      { label: "How it works", href: "#proceso" },
      { label: "Case studies", href: "#casos" },
      { label: "Products", href: "#portafolio" },
      { label: "About", href: "#nosotros" },
      { label: "Contact", href: "#contacto" },
    ],
  },
  header: {
    navLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },
  hero: {
    badge: "Forward Deployed AI Engineering · Latin America",
    titleStart: "We turn your company's processes into",
    titleHighlight: "intelligent systems",
    subtitle:
      "We design and implement software, automation and artificial intelligence solutions built around the way your company actually works.",
    note: "We don't sell you a generic tool. We study your operation, find automation opportunities and build the solution.",
    secondaryCta: "See how we work",
  },
  pipeline: {
    label: "Transformation pipeline",
    nodes: [
      { label: "Company", detail: "How you work today" },
      { label: "Problem", detail: "Manual tasks" },
      { label: "AI + Software", detail: "Tailored solution" },
      { label: "Automation", detail: "Live workflow" },
      { label: "Results", detail: "Hours and capacity" },
    ],
  },
  problem: {
    eyebrow: "The problem",
    title: "Your company is probably doing by hand things that could already be automated.",
    items: [
      "Scattered information",
      "Manual processes",
      "Data trapped in spreadsheets",
      "Repetitive WhatsApp conversations",
      "Staff copying data between systems",
      "Reports that take hours",
      "No integration between platforms",
      "Processes that depend too much on one person",
    ],
    closing:
      "Before recommending any technology, we understand how your company really works.",
  },
  solution: {
    eyebrow: "Our approach",
    title: "We don't start with technology. We start with the problem.",
    intro: "A clear, step-by-step approach: every stage produces something you can see and use.",
    steps: [
      "We understand your operation",
      "We identify opportunities",
      "We design the solution",
      "We build a prototype",
      "We test it with you",
      "We implement it",
      "We keep improving it",
    ],
    cardTitle: "Every solution is built around your company.",
    cardBody:
      "We don't recycle templates. We work on your processes, your systems and the way you really operate, so the solution gets used from day one.",
  },
  services: {
    eyebrow: "Services",
    title: "What we build for your operation",
    intro: "From a single automation to a complete platform tailored to your company.",
    items: [
      {
        id: "automatizacion-ia",
        title: "AI automation",
        description: "We automate repetitive tasks and administrative processes.",
      },
      {
        id: "agentes-ia",
        title: "AI agents",
        description: "Agents for sales, customer service, support and operations.",
      },
      {
        id: "software-personalizado",
        title: "Custom business software",
        description: "Web and mobile applications designed for specific needs.",
      },
      {
        id: "integraciones",
        title: "Integrations",
        description: "We connect WhatsApp, CRM, ERP, APIs, databases and other platforms.",
      },
      {
        id: "dashboards",
        title: "Smart dashboards",
        description: "We turn business data into information you can act on.",
      },
      {
        id: "digitalizacion",
        title: "Process digitization",
        description: "We turn manual processes into digital workflows.",
      },
      {
        id: "prototipos",
        title: "Rapid prototypes",
        description: "We build MVPs and working prototypes to validate ideas fast.",
      },
      {
        id: "ai-transformation",
        title: "AI transformation",
        description: "We identify where AI can create the biggest impact in your operation.",
      },
    ],
  },
  process: {
    eyebrow: "How we work · FDE model",
    title: "We work alongside you, not just from behind a desk.",
    intro:
      "We work directly with your company to understand the problem, design the solution and implement it inside your operation.",
    phases: [
      { step: "01", title: "Diagnostic", description: "We understand how your company works today." },
      {
        step: "02",
        title: "Opportunities",
        description: "We identify processes that can be automated.",
      },
      { step: "03", title: "Prototype", description: "We quickly build a first working version." },
      { step: "04", title: "Validation", description: "We test it with you and adjust." },
      { step: "05", title: "Implementation", description: "We take it to production." },
      { step: "06", title: "Evolution", description: "We keep improving the solution." },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "What we've already built",
    intro: "Products and platforms created to solve concrete operational problems.",
    imagePlaceholder: "[IMAGE / SCREENSHOT]",
    problemLabel: "Problem it solves: ",
    viewProject: "View project",
    viewDemo: "View demo",
    imageAlt: "Preview of",
    projects: {
      whatsorder: {
        name: "WhatsOrder",
        category: "Omnichannel CRM · Food",
        description: "CRM and omnichannel platform for restaurants and food businesses.",
        problem: "Orders and conversations scattered across WhatsApp, phone calls and notebooks.",
      },
      pass2one: {
        name: "Pass2One",
        category: "Experiences and loyalty",
        description: "Platform for smart experiences, memberships, QR passes and loyalty.",
        problem: "Manual loyalty programs with no data to support decisions.",
      },
      cielo: {
        name: "Cielo",
        category: "Smart assistance · Home",
        description:
          "Smart assistance and automation system for older adults and connected homes.",
        problem: "Follow-up and care that depended entirely on people.",
      },
      "nuevo-proyecto": {
        name: "[NEW PROJECT]",
        category: "[CATEGORY]",
        description: "Reserved space for the next project in the portfolio.",
        problem: "[PROBLEM IT SOLVES]",
      },
    },
  },
  cases: {
    eyebrow: "Case studies",
    title: "Real results",
    intro:
      "Each case shows the starting point, the solution we built and the change in the operation.",
    rows: {
      industry: "Industry",
      problem: "Problem",
      solution: "Solution",
      result: "Result",
    },
    techLabel: "Technologies",
    pending: "pending",
    beforeLabel: "Before",
    afterLabel: "After",
    items: [
      {
        id: "caso-1",
        client: "[CLIENT]",
        industry: "[INDUSTRY]",
        problem: "[PROBLEM]",
        solution: "[SOLUTION]",
        result: "[RESULT]",
        tech: ["[TECHNOLOGIES]"],
        before: "Manual process",
        after: "Less manual work, more speed",
      },
      {
        id: "caso-2",
        client: "[CLIENT]",
        industry: "[INDUSTRY]",
        problem: "[PROBLEM]",
        solution: "[SOLUTION]",
        result: "[RESULT]",
        tech: ["[TECHNOLOGIES]"],
        before: "Manual process",
        after: "Better customer experience",
      },
      {
        id: "caso-3",
        client: "[CLIENT]",
        industry: "[INDUSTRY]",
        problem: "[PROBLEM]",
        solution: "[SOLUTION]",
        result: "[RESULT]",
        tech: ["[TECHNOLOGIES]"],
        before: "Manual process",
        after: "More operational capacity",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What our clients say",
    logoPlaceholder: "[LOGO]",
    items: [
      { id: "t1", name: "[NAME]", role: "[ROLE]", company: "[COMPANY]", quote: "[TESTIMONIAL]" },
      { id: "t2", name: "[NAME]", role: "[ROLE]", company: "[COMPANY]", quote: "[TESTIMONIAL]" },
      { id: "t3", name: "[NAME]", role: "[ROLE]", company: "[COMPANY]", quote: "[TESTIMONIAL]" },
    ],
  },
  technology: {
    eyebrow: "Technology and integrations",
    title: "We use the right technology to solve the problem.",
    intro:
      "The tool is never the goal. We choose what fits your operation and what you already have running.",
    groups: [
      { group: "Artificial intelligence", items: ["AI", "OpenAI", "Claude", "Agents"] },
      { group: "Integrations", items: ["APIs", "WhatsApp", "Meta", "CRM", "Webhooks"] },
      { group: "Development", items: ["JavaScript", "React", "Node.js", "Python"] },
      { group: "Data and infrastructure", items: ["PostgreSQL", "Cloud services", "Replit"] },
    ],
  },
  roi: {
    eyebrow: "ROI and results",
    title: "Technology should pay for its own investment.",
    intro:
      "These are the results we aim for in every implementation, plus a quick estimate to frame the conversation.",
    outcomes: [
      "Hours saved",
      "Automated processes",
      "Less manual work",
      "Faster response times",
      "Fewer errors",
      "More operational capacity",
      "Better customer experience",
    ],
    calcTitle: "Estimated savings calculator",
    calcNote:
      "Indicative estimate assuming 70% of the time spent on the process gets automated.",
    fields: {
      employees: { label: "People involved in the process", suffix: "people" },
      hoursPerWeek: { label: "Weekly hours spent on the process", suffix: "hours" },
      costPerHour: { label: "Cost per hour", suffix: "$ / hour" },
      implementationCost: { label: "Estimated implementation cost", suffix: "$" },
    },
    stats: {
      hours: "Hours saved / month",
      annual: "Estimated annual savings",
      payback: "Investment paid back in",
      months: "months",
    },
  },
  about: {
    eyebrow: "About us",
    photoPlaceholder: "[FOUNDER PHOTO]",
    title: "Technology built from real business experience.",
    body: "After decades working directly with companies and building digital solutions, we learned one thing: technology only has value when it solves real problems.",
    highlights: [
      "Business experience",
      "Software development",
      "Artificial intelligence",
      "Automation",
      "Small and mid-size business know-how",
      "Fast product building",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "What people usually ask us",
    items: [
      {
        question: "What kind of companies can work with you?",
        answer:
          "Companies with operational processes that want to improve them: retail, services, food, healthcare, logistics, education, manufacturing. If there are repetitive tasks, there is something to automate.",
      },
      {
        question: "Do I need an IT department?",
        answer:
          "No. We work directly with the people who know the process and handle the technical side end to end.",
      },
      {
        question: "Do you work with small companies?",
        answer:
          "Yes. Much of our experience is with small and mid-size companies, starting with one specific process and growing from there.",
      },
      {
        question: "Can you integrate our current systems?",
        answer:
          "In most cases, yes. We connect WhatsApp, CRM, ERP, spreadsheets, databases and any platform with an API or webhooks.",
      },
      {
        question: "Can you build an application from scratch?",
        answer:
          "Yes. We design and build web and mobile applications tailored to your operation, starting with a working prototype.",
      },
      {
        question: "How much does an implementation cost?",
        answer:
          "It depends on the scope of the process. After the diagnostic we present a proposal with clear scope, timeline and cost, with no surprises.",
      },
      {
        question: "How long does it take?",
        answer:
          "The diagnostic is quick, and the first prototype is usually ready in weeks, not months. We prefer delivering value in stages.",
      },
      {
        question: "Do you only work with AI?",
        answer:
          "No. We use the right technology for the problem: sometimes AI, sometimes an integration, a dashboard, or simply a well-designed digital process.",
      },
    ],
  },
  finalCta: {
    title: "Which process in your company would you automate if you could?",
    body: "Tell us how you work today. We'll find where technology and AI can help you.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us what you want to improve.",
    intro:
      "We reply with a concrete diagnostic proposal: what we'd review, how, and how long it takes.",
    fields: {
      name: { label: "Name", placeholder: "Your full name" },
      company: { label: "Company", placeholder: "Your company name" },
      role: { label: "Role", placeholder: "Your role in the company" },
      email: { label: "Email", placeholder: "you@company.com" },
      whatsapp: { label: "WhatsApp", placeholder: "+1 300 000 0000" },
      country: { label: "Country", placeholder: "Colombia" },
      industry: { label: "Industry", placeholder: "Restaurants, healthcare, logistics…" },
    },
    employeesLabel: "Approximate number of employees",
    selectRange: "Select a range",
    areaLabel: "Which process do you want to automate or improve?",
    selectArea: "Select an area",
    areas: [
      "Customer service",
      "Sales",
      "WhatsApp",
      "Administration",
      "Operations",
      "Reporting",
      "Inventory",
      "Human resources",
      "Other",
    ],
    problemLabel: "Briefly, what is the problem?",
    problemPlaceholder:
      "For example: we take orders on WhatsApp and copy them by hand into a spreadsheet…",
    submit: "Request diagnostic",
    privacy: "Your data is only used to contact you about your request.",
    successTitle: "We received your request",
    successBody:
      "Thanks for writing to us. We'll review what you shared and get in touch to schedule the diagnostic.",
    successAgain: "Send another request",
    errors: {
      name: "Enter your name",
      company: "Enter your company name",
      role: "Enter your role",
      email: "Enter a valid email",
      whatsapp: "Enter a valid WhatsApp number",
      country: "Enter your country",
      industry: "Enter your industry",
      employees: "Select a range",
      area: "Select an area",
      problem: "Briefly describe the problem",
    },
  },
  footer: {
    about:
      "We spot manual processes and build software and artificial intelligence solutions adapted to how your operation really works.",
    navTitle: "Navigation",
    navLabel: "Sections",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    note: "Automation and artificial intelligence for companies in Latin America.",
  },
  whatsapp: {
    aria: "Message us on WhatsApp",
    label: "Message us",
  },
};
