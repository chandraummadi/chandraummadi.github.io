import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent-cyan">
        Experience
      </h2>

      <ol className="space-y-10">
        {EXPERIENCE.map((job, i) => (
          <li
            key={job.company}
            className="group relative grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-6"
          >
            <p className="font-mono text-xs text-muted sm:pt-1">
              {job.range}
            </p>

            <div>
              <h3 className="font-semibold text-foreground">
                {job.title}{" "}
                <span className="text-muted">&middot; {job.company}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {job.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-accent-cyan hover:underline"
      >
        View Full R&eacute;sum&eacute; &rarr;
      </a>
    </section>
  );
}
