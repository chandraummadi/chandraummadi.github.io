import { PROJECTS } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent-cyan">
        Projects
      </h2>

      <div className="space-y-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-border bg-surface/50 p-6 transition-colors hover:bg-surface-hover"
          >
            <h3 className="font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="font-mono text-xs text-accent-cyan"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
