import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:flex lg:gap-16">
        <Sidebar />
        <div className="min-w-0 flex-1 divide-y divide-border">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>

      <footer className="mx-auto max-w-6xl px-6 py-12 text-center font-mono text-xs text-muted md:px-12">
        Built with Next.js, TypeScript &amp; Tailwind CSS.
      </footer>
    </main>
  );
}
