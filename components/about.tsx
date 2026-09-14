import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function About() {
  return (
    <section id="about" className="py-12">
      <Breadcrumb section="ABOUT" />
      
      <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-6 text-text-primary">
        About
      </h2>
      
      <div className="space-y-4 text-text-secondary leading-relaxed max-w-2xl">
        <p>
          I&apos;m a software engineer focused on building systems that work. 
          I specialize in full-stack development with Next.js, Node.js, and distributed architectures.
        </p>
        <p>
          Most of my work involves open-source contributions, event-driven systems, 
          and platforms that serve real users. I&apos;ve contributed to projects like AsyncAPI and Processing, 
          and I maintain several campus-wide applications used by thousands of students.
        </p>
        <p>
          Currently open to full-time roles and interesting freelance projects.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:nalin@nerdev.in?subject=Full-Time%20Opportunity"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg-primary rounded-lg font-display font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150"
        >
          Get in Touch
        </a>
        <a
          href="/resume"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary rounded-lg text-sm font-medium hover:border-accent hover:text-text-primary transition-colors duration-150 active:scale-[0.98]"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
