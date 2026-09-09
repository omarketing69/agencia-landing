import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Testimonials } from "@/components/site/Testimonials";
import { Technology } from "@/components/site/Technology";
import { Roi } from "@/components/site/Roi";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { site } from "@/data/site";
import { es } from "@/data/es";
import { I18nProvider } from "@/i18n";

const title = "Automatización con IA para empresas | AI Automation for Business";
const description =
  "Detectamos procesos manuales y construimos software, agentes de IA y automatizaciones a la medida de tu operación. Disponible en español e inglés.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "IA para empresas, automatización empresarial, agentes de IA, software empresarial, automatización de procesos, AI automation Latin America",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_LA" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              name: site.brand,
              description,
              areaServed: "Latin America",
              availableLanguage: ["es", "en"],
              serviceType: [
                "Automatización con IA",
                "Agentes de IA",
                "Software empresarial personalizado",
                "Integraciones de sistemas",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: es.faq.items.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Services />
          <Process />
          <Portfolio />
          <CaseStudies />
          <Testimonials />
          <Technology />
          <Roi />
          <About />
          <Faq />
          <FinalCta />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}
