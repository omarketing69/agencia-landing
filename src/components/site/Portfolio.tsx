import { ArrowUpRight, ImageIcon, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type ProjectMeta } from "@/data/projects";
import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

function ProjectCard({ project }: { project: ProjectMeta }) {
  const { t } = useI18n();
  const copy =
    t.portfolio.projects[project.id as keyof typeof t.portfolio.projects] ??
    t.portfolio.projects["nuevo-proyecto"];

  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/40">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        {project.image ? (
          <img
            src={project.image}
            alt={`${t.portfolio.imageAlt} ${copy.name}`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="bg-grid grid size-full place-items-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              {project.placeholder ? (
                <Plus className="size-6" />
              ) : (
                <ImageIcon className="size-6" />
              )}
              <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase">
                {t.portfolio.imagePlaceholder}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[0.7rem] tracking-[0.14em] text-primary uppercase">
          {copy.category}
        </p>
        <h3 className="mt-3 text-xl font-semibold">{copy.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.description}</p>

        <div className="mt-5 border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{t.portfolio.problemLabel}</span>
            {copy.problem}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-surface/70 px-2 py-1 font-mono text-[0.68rem] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          <Button variant="quiet" size="sm" asChild>
            <a
              href={project.projectUrl ?? "#contacto"}
              target={project.projectUrl ? "_blank" : undefined}
              rel={project.projectUrl ? "noopener noreferrer" : undefined}
            >
              {t.portfolio.viewProject}
              <ArrowUpRight />
            </a>
          </Button>
          {project.demoUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                {t.portfolio.viewDemo}
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  const { t } = useI18n();

  return (
    <Section
      id="portafolio"
      eyebrow={t.portfolio.eyebrow}
      title={t.portfolio.title}
      intro={t.portfolio.intro}
    >
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
