export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent-cyan">
        About
      </h2>
      <div className="space-y-4 text-muted">
        <p>
          I&apos;m an infrastructure engineer with 13+ years of experience
          designing and operating cloud systems that stay reliable under
          real production load. My work spans AWS platform engineering,
          Kubernetes, and building Infrastructure-as-Code that other
          engineers can actually reuse — not just scripts that work once.
        </p>
        <p>
          Currently a Senior/Staff Infrastructure Engineer at{" "}
          <span className="text-foreground">NTT DATA</span>, where I focus
          on Terraform module architecture, CI/CD pipeline design with
          GitHub Actions and Jenkins, and AWS infrastructure spanning EC2,
          EKS, RDS, and IAM. Before that, I spent 5 years at{" "}
          <span className="text-foreground">JPMorgan Chase</span> as an SRE,
          where I learned what &quot;highly available&quot; actually means
          when real money depends on it.
        </p>
        <p>
          I&apos;m currently extending that same infrastructure discipline
          into AI-powered workflows — building agentic tooling and DevOps
          automation that combines 13 years of hands-on operations
          knowledge with modern AI engineering practices, rather than
          treating them as separate disciplines.
        </p>
        <p>
          Outside of infrastructure, I spend time hiking and exploring
          off-the-beaten-path places, and I&apos;m a parent navigating the
          entirely different kind of complexity that comes with that.
        </p>
      </div>
    </section>
  );
}
