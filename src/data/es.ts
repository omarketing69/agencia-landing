/**
 * Todo el texto del sitio en español.
 * Para editar el contenido en español, cambia únicamente este archivo.
 * El archivo en.ts debe mantener exactamente la misma estructura.
 */
export const es = {
  langLabel: "Español",
  site: {
    tagline: "Forward Deployed AI Engineering para empresas de Latinoamérica",
    ctaPrimary: "Agenda un diagnóstico",
    ctaSecondary: "Ver casos de éxito",
    whatsappMessage: "Hola, quiero agendar un diagnóstico de automatización.",
    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Servicios", href: "#servicios" },
      { label: "Cómo funciona", href: "#proceso" },
      { label: "Casos de éxito", href: "#casos" },
      { label: "Productos", href: "#portafolio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  header: {
    navLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
  },
  hero: {
    badge: "Forward Deployed AI Engineering · Latinoamérica",
    titleStart: "Convertimos los procesos de tu empresa en",
    titleHighlight: "sistemas inteligentes",
    subtitle:
      "Diseñamos e implementamos soluciones de software, automatización e inteligencia artificial adaptadas a la forma real en que trabaja tu empresa.",
    note: "No te vendemos una herramienta genérica. Analizamos tu operación, encontramos oportunidades de automatización y construimos la solución.",
    secondaryCta: "Ver cómo trabajamos",
  },
  pipeline: {
    label: "Pipeline de transformación",
    nodes: [
      { label: "Empresa", detail: "Cómo trabajas hoy" },
      { label: "Problema", detail: "Tareas manuales" },
      { label: "IA + Software", detail: "Solución a medida" },
      { label: "Automatización", detail: "Flujo en producción" },
      { label: "Resultados", detail: "Horas y capacidad" },
    ],
  },
  problem: {
    eyebrow: "El problema",
    title:
      "Tu empresa probablemente está haciendo manualmente cosas que ya podrían estar automatizadas.",
    items: [
      "Información dispersa",
      "Procesos manuales",
      "Datos atrapados en Excel",
      "Atención repetitiva por WhatsApp",
      "Empleados copiando información entre sistemas",
      "Reportes que toman horas",
      "Falta de integración entre plataformas",
      "Procesos que dependen demasiado de una persona",
    ],
    closing:
      "Antes de recomendarte una tecnología, entendemos cómo funciona realmente tu empresa.",
  },
  solution: {
    eyebrow: "Nuestra solución",
    title: "No empezamos con tecnología. Empezamos con el problema.",
    intro:
      "Un enfoque ordenado, sin promesas vacías: cada paso produce algo que puedes ver y usar.",
    steps: [
      "Entendemos tu operación",
      "Identificamos oportunidades",
      "Diseñamos la solución",
      "Construimos un prototipo",
      "Lo probamos contigo",
      "Lo implementamos",
      "Lo seguimos mejorando",
    ],
    cardTitle: "Cada solución se adapta a tu empresa.",
    cardBody:
      "No reciclamos plantillas. Trabajamos sobre tus procesos, tus sistemas y tu forma real de operar, para que la solución se use desde el primer día.",
  },
  services: {
    eyebrow: "Servicios",
    title: "Lo que construimos para tu operación",
    intro:
      "Desde una automatización puntual hasta una plataforma completa a la medida de tu empresa.",
    items: [
      {
        id: "automatizacion-ia",
        title: "Automatización con IA",
        description: "Automatizamos tareas repetitivas y procesos administrativos.",
      },
      {
        id: "agentes-ia",
        title: "Agentes de IA",
        description: "Agentes para ventas, atención al cliente, soporte y operaciones.",
      },
      {
        id: "software-personalizado",
        title: "Software empresarial personalizado",
        description: "Aplicaciones web y móviles diseñadas para necesidades específicas.",
      },
      {
        id: "integraciones",
        title: "Integraciones",
        description:
          "Conectamos WhatsApp, CRM, ERP, APIs, bases de datos y otras plataformas.",
      },
      {
        id: "dashboards",
        title: "Dashboards inteligentes",
        description: "Convertimos datos empresariales en información útil para decidir mejor.",
      },
      {
        id: "digitalizacion",
        title: "Digitalización de procesos",
        description: "Transformamos procesos manuales en flujos digitales.",
      },
      {
        id: "prototipos",
        title: "Prototipos rápidos",
        description: "Construimos MVP y prototipos funcionales para validar ideas rápidamente.",
      },
      {
        id: "ai-transformation",
        title: "AI Transformation",
        description: "Identificamos dónde la IA puede generar el mayor impacto en tu operación.",
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajamos · Modelo FDE",
    title: "Estamos contigo, no simplemente detrás de un escritorio.",
    intro:
      "Trabajamos directamente con tu empresa para entender el problema, diseñar la solución e implementarla dentro de tu operación.",
    phases: [
      {
        step: "01",
        title: "Diagnóstico",
        description: "Entendemos cómo funciona actualmente tu empresa.",
      },
      {
        step: "02",
        title: "Oportunidades",
        description: "Identificamos procesos que pueden automatizarse.",
      },
      {
        step: "03",
        title: "Prototipo",
        description: "Construimos rápidamente una primera versión funcional.",
      },
      { step: "04", title: "Validación", description: "La probamos contigo y ajustamos." },
      { step: "05", title: "Implementación", description: "La llevamos a producción." },
      { step: "06", title: "Evolución", description: "Seguimos mejorando la solución." },
    ],
  },
  portfolio: {
    eyebrow: "Portafolio",
    title: "Lo que ya hemos construido",
    intro:
      "Productos y plataformas creadas para resolver problemas concretos de operación.",
    imagePlaceholder: "[IMAGEN / SCREENSHOT]",
    problemLabel: "Problema que resuelve: ",
    viewProject: "Ver proyecto",
    viewDemo: "Ver demo",
    imageAlt: "Vista de",
    projects: {
      whatsorder: {
        name: "WhatsOrder",
        category: "CRM omnicanal · Alimentos",
        description: "CRM y plataforma omnicanal para restaurantes y negocios de alimentos.",
        problem: "Pedidos y conversaciones dispersos entre WhatsApp, teléfono y cuadernos.",
      },
      pass2one: {
        name: "Pass2One",
        category: "Experiencias y fidelización",
        description: "Plataforma de experiencias inteligentes, membresías, QR y fidelización.",
        problem: "Programas de lealtad manuales y sin datos para tomar decisiones.",
      },
      cielo: {
        name: "Cielo",
        category: "Asistencia inteligente · Hogar",
        description:
          "Sistema de asistencia inteligente y automatización para adultos mayores y hogares conectados.",
        problem: "Seguimiento y acompañamiento que dependía por completo de personas.",
      },
      "nuevo-proyecto": {
        name: "[NUEVO PROYECTO]",
        category: "[CATEGORÍA]",
        description: "Espacio reservado para el próximo proyecto del portafolio.",
        problem: "[PROBLEMA QUE RESUELVE]",
      },
    },
  },
  cases: {
    eyebrow: "Casos de éxito",
    title: "Resultados reales",
    intro:
      "Cada caso muestra el punto de partida, la solución construida y el cambio en la operación.",
    rows: {
      industry: "Industria",
      problem: "Problema",
      solution: "Solución",
      result: "Resultado",
    },
    techLabel: "Tecnologías",
    pending: "pendiente",
    beforeLabel: "Antes",
    afterLabel: "Después",
    items: [
      {
        id: "caso-1",
        client: "[CLIENTE]",
        industry: "[INDUSTRIA]",
        problem: "[PROBLEMA]",
        solution: "[SOLUCIÓN]",
        result: "[RESULTADO]",
        tech: ["[TECNOLOGÍAS]"],
        before: "Proceso manual",
        after: "Menos trabajo manual, mayor velocidad",
      },
      {
        id: "caso-2",
        client: "[CLIENTE]",
        industry: "[INDUSTRIA]",
        problem: "[PROBLEMA]",
        solution: "[SOLUCIÓN]",
        result: "[RESULTADO]",
        tech: ["[TECNOLOGÍAS]"],
        before: "Proceso manual",
        after: "Mejor experiencia del cliente",
      },
      {
        id: "caso-3",
        client: "[CLIENTE]",
        industry: "[INDUSTRIA]",
        problem: "[PROBLEMA]",
        solution: "[SOLUCIÓN]",
        result: "[RESULTADO]",
        tech: ["[TECNOLOGÍAS]"],
        before: "Proceso manual",
        after: "Mayor capacidad operativa",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Lo que dicen nuestros clientes",
    logoPlaceholder: "[LOGO]",
    items: [
      { id: "t1", name: "[NOMBRE]", role: "[CARGO]", company: "[EMPRESA]", quote: "[TESTIMONIO]" },
      { id: "t2", name: "[NOMBRE]", role: "[CARGO]", company: "[EMPRESA]", quote: "[TESTIMONIO]" },
      { id: "t3", name: "[NOMBRE]", role: "[CARGO]", company: "[EMPRESA]", quote: "[TESTIMONIO]" },
    ],
  },
  technology: {
    eyebrow: "Tecnologías e integraciones",
    title: "Utilizamos la tecnología adecuada para resolver el problema.",
    intro:
      "La herramienta nunca es el objetivo. Elegimos lo que mejor encaja con tu operación y con lo que ya tienes funcionando.",
    groups: [
      { group: "Inteligencia artificial", items: ["IA", "OpenAI", "Claude", "Agentes"] },
      { group: "Integraciones", items: ["APIs", "WhatsApp", "Meta", "CRM", "Webhooks"] },
      { group: "Desarrollo", items: ["JavaScript", "React", "Node.js", "Python"] },
      { group: "Datos e infraestructura", items: ["PostgreSQL", "Cloud services", "Replit"] },
    ],
  },
  roi: {
    eyebrow: "ROI y resultados",
    title: "La tecnología debe pagar su propia inversión.",
    intro:
      "Estos son los resultados que buscamos en cada implementación, y una estimación rápida para ordenar la conversación.",
    outcomes: [
      "Horas ahorradas",
      "Procesos automatizados",
      "Menor trabajo manual",
      "Mayor velocidad de respuesta",
      "Menos errores",
      "Mayor capacidad operativa",
      "Mejor experiencia del cliente",
    ],
    calcTitle: "Calculadora de ahorro estimado",
    calcNote:
      "Estimación orientativa asumiendo que se automatiza el 70 % del tiempo dedicado al proceso.",
    fields: {
      employees: { label: "Número de empleados en el proceso", suffix: "personas" },
      hoursPerWeek: { label: "Horas semanales dedicadas al proceso", suffix: "horas" },
      costPerHour: { label: "Costo por hora", suffix: "$ / hora" },
      implementationCost: { label: "Costo estimado de implementación", suffix: "$" },
    },
    stats: {
      hours: "Horas ahorradas / mes",
      annual: "Ahorro anual estimado",
      payback: "Recuperas la inversión en",
      months: "meses",
    },
  },
  about: {
    eyebrow: "Nosotros",
    photoPlaceholder: "[FOTO DEL FUNDADOR]",
    title: "Tecnología construida desde la experiencia empresarial.",
    body: "Después de décadas trabajando directamente con empresas y desarrollando soluciones digitales, entendimos algo: la tecnología solamente tiene valor cuando resuelve problemas reales.",
    highlights: [
      "Experiencia empresarial",
      "Desarrollo de software",
      "Inteligencia artificial",
      "Automatización",
      "Conocimiento de PYMES",
      "Construcción rápida de productos",
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que suelen preguntarnos",
    items: [
      {
        question: "¿Qué tipo de empresas pueden trabajar con ustedes?",
        answer:
          "Empresas que tienen procesos operativos y quieren mejorarlos: comercio, servicios, alimentos, salud, logística, educación, manufactura. Si hay tareas repetitivas, hay algo que automatizar.",
      },
      {
        question: "¿Necesito tener un departamento de tecnología?",
        answer:
          "No. Trabajamos directamente con las personas que conocen el proceso y nos encargamos de la parte técnica de principio a fin.",
      },
      {
        question: "¿Trabajan con empresas pequeñas?",
        answer:
          "Sí. Buena parte de nuestra experiencia es con pequeñas y medianas empresas, empezando por un proceso concreto y creciendo desde ahí.",
      },
      {
        question: "¿Pueden integrar nuestros sistemas actuales?",
        answer:
          "En la mayoría de casos sí. Conectamos WhatsApp, CRM, ERP, hojas de cálculo, bases de datos y cualquier plataforma que ofrezca API o webhooks.",
      },
      {
        question: "¿Pueden desarrollar una aplicación desde cero?",
        answer:
          "Sí. Diseñamos y construimos aplicaciones web y móviles a la medida de tu operación, empezando por un prototipo funcional.",
      },
      {
        question: "¿Cuánto cuesta una implementación?",
        answer:
          "Depende del alcance del proceso. Después del diagnóstico presentamos una propuesta con alcance, tiempos y costo claros, sin sorpresas.",
      },
      {
        question: "¿Cuánto tiempo tarda?",
        answer:
          "El diagnóstico es rápido y el primer prototipo suele estar en semanas, no en meses. Preferimos entregar valor por etapas.",
      },
      {
        question: "¿Trabajan únicamente con IA?",
        answer:
          "No. Usamos la tecnología adecuada para el problema: a veces es IA, a veces es una integración, un dashboard o simplemente un proceso digital bien diseñado.",
      },
    ],
  },
  finalCta: {
    title: "¿Qué proceso de tu empresa automatizarías si pudieras?",
    body: "Cuéntanos cómo trabajas actualmente. Nosotros encontraremos dónde la tecnología y la IA pueden ayudarte.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Cuéntanos qué quieres mejorar.",
    intro:
      "Respondemos con una propuesta de diagnóstico concreta: qué revisaríamos, cómo y en cuánto tiempo.",
    fields: {
      name: { label: "Nombre", placeholder: "Tu nombre completo" },
      company: { label: "Empresa", placeholder: "Nombre de tu empresa" },
      role: { label: "Cargo", placeholder: "Tu rol en la empresa" },
      email: { label: "Email", placeholder: "tu@empresa.com" },
      whatsapp: { label: "WhatsApp", placeholder: "+57 300 000 0000" },
      country: { label: "País", placeholder: "Colombia" },
      industry: { label: "Industria", placeholder: "Restaurantes, salud, logística…" },
    },
    employeesLabel: "Número aproximado de empleados",
    selectRange: "Selecciona un rango",
    areaLabel: "¿Qué proceso quieres automatizar o mejorar?",
    selectArea: "Selecciona un área",
    areas: [
      "Atención al cliente",
      "Ventas",
      "WhatsApp",
      "Administración",
      "Operaciones",
      "Reportes",
      "Inventario",
      "Recursos humanos",
      "Otro",
    ],
    problemLabel: "Cuéntanos brevemente cuál es el problema.",
    problemPlaceholder:
      "Por ejemplo: recibimos pedidos por WhatsApp y los pasamos a mano a una hoja de cálculo…",
    submit: "Solicitar diagnóstico",
    privacy: "Tus datos se usan únicamente para contactarte sobre tu solicitud.",
    successTitle: "Recibimos tu solicitud",
    successBody:
      "Gracias por escribirnos. Revisaremos lo que nos contaste y te contactaremos para agendar el diagnóstico.",
    successAgain: "Enviar otra solicitud",
    errors: {
      name: "Escribe tu nombre",
      company: "Escribe el nombre de tu empresa",
      role: "Escribe tu cargo",
      email: "Escribe un email válido",
      whatsapp: "Escribe un número de WhatsApp válido",
      country: "Escribe tu país",
      industry: "Escribe tu industria",
      employees: "Selecciona un rango",
      area: "Selecciona un área",
      problem: "Cuéntanos brevemente el problema",
    },
  },
  footer: {
    about:
      "Detectamos procesos manuales y construimos soluciones de software e inteligencia artificial adaptadas a tu operación real.",
    navTitle: "Navegación",
    navLabel: "Secciones",
    contactTitle: "Contacto",
    rights: "Todos los derechos reservados.",
    note: "Automatización e inteligencia artificial para empresas de Latinoamérica.",
  },
  whatsapp: {
    aria: "Escríbenos por WhatsApp",
    label: "Escríbenos",
  },
};
