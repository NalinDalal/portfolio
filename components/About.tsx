import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function About() {
  return (
    <section id="about" className="py-12">
      <Breadcrumb section="ABOUT" />
      
      <div className="max-w-2xl">
        <p className="text-text-secondary leading-relaxed">
          Software engineer focused on building systems that work. I specialize in 
          full-stack development with Next.js, Node.js, and distributed architectures. 
          Most of my work involves open-source contributions, event-driven systems, 
          and platforms that serve real users. Currently open to full-time roles 
          and interesting freelance projects.
        </p>
      </div>
    </section>
  );
}
