"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";

const ICONS = { GitHub: Github, LinkedIn: Linkedin, Email: Mail } as const;

export function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("about");

  // Highlights the nav link matching whichever section is currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit lg:w-64 lg:shrink-0">
      <nav aria-label="Section navigation" className="mb-8 hidden lg:block">
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-3 py-2"
                >
                  <span
                    className={`h-px transition-all ${
                      isActive
                        ? "w-10 bg-accent-cyan"
                        : "w-5 bg-muted group-hover:w-10 group-hover:bg-foreground"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted group-hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 py-2"
            >
              <span className="h-px w-5 bg-muted transition-all group-hover:w-10 group-hover:bg-foreground" />
              <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-foreground">
                Resume <FileText size={12} />
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-5 lg:flex-col lg:gap-4">
        {SOCIAL_LINKS.map((social) => {
          const Icon = ICONS[social.label as keyof typeof ICONS];
          return (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted transition-colors hover:text-accent-cyan"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
