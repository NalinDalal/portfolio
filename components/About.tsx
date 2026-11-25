import { SectionHeader } from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-12">
      <SectionHeader path="about" title="About" />

      <div className="max-w-2xl space-y-4">
        <p className="text-text-secondary text-[var(--text-body)] leading-[1.6]">
          Software engineer focused on building systems that work. I specialize
          in full-stack development with Next.js, Node.js, and distributed
          architectures.
        </p>
        <p className="text-text-secondary text-[var(--text-body)] leading-[1.6]">
          Most of my work involves open-source contributions, event-driven
          systems, and platforms that serve real users. Currently open to
          full-time roles and interesting freelance projects.
        </p>
      </div>
    </section>
  );
}
