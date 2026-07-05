import { Phone, Mail, Linkedin } from "lucide-react";
import { CONTACT } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent-cyan">
        Contact
      </h2>
      <p className="mb-6 max-w-md text-muted">
        Open to conversations about infrastructure, AI-powered DevOps, or
        roles where both matter. Reach out directly:
      </p>

      <ul className="space-y-4">
        <li>
          <a
            href={CONTACT.phoneHref}
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-accent-cyan"
          >
            <Phone size={18} className="text-muted group-hover:text-accent-cyan" />
            {CONTACT.phone}
          </a>
        </li>
        <li>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-accent-cyan"
          >
            <Mail size={18} className="text-muted group-hover:text-accent-cyan" />
            {CONTACT.email}
          </a>
        </li>
        <li>
          <a
            href={CONTACT.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-accent-cyan"
          >
            <Linkedin size={18} className="text-muted group-hover:text-accent-cyan" />
            {CONTACT.linkedinLabel}
          </a>
        </li>
      </ul>
    </section>
  );
}
