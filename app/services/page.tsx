import { Code, Server, Database, Zap, CheckCircle, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import GetInTouch from "@/components/get-in-touch";

export const metadata = {
  title: "Services - Nalin Dalal | Full Stack Engineer",
  description: "Full Stack Engineer specializing in Next.js, Node.js, React Native, and AWS. Available for freelance projects.",
};

const stats = {
  rate: "$15/hr",
  location: "Bhopal, India",
  experience: "2+ years",
  projects: "30+",
  codeforces: "830+",
  leetcode: "550+",
};

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full Stack Web Development",
    description: "End-to-end web application development using modern technologies. From concept to deployment, I build scalable, performant applications that deliver results.",
    stack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    approach: [
      "Week 1: Architecture setup, authentication, design system",
      "Week 2-3: Core features with optimized database queries",
      "Week 4: Polish, testing, CI/CD, production deployment",
    ],
    deliverables: [
      "Custom web applications",
      "E-commerce platforms",
      "SaaS dashboards",
      "CMS & blog platforms",
      "API development & integration",
    ],
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend API Development",
    description: "Robust backend systems designed for scalability. I build clean, maintainable APIs with proper architecture that grows with your business.",
    stack: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "AWS"],
    approach: [
      "API design + database schema review first",
      "Modular architecture with separation of concerns",
      "JWT auth with refresh tokens + role-based access",
      "Full test coverage before delivery",
    ],
    deliverables: [
      "RESTful APIs",
      "GraphQL APIs",
      "Authentication systems",
      "Database optimization",
      "Microservices architecture",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Make your application faster and more efficient. I analyze code, identify bottlenecks, and implement optimizations that improve user experience.",
    stack: ["Performance Auditing", "Code Refactoring", "Database Optimization", "Caching Strategies"],
    approach: [
      "Lighthouse audit + performance baseline",
      "Identify and fix rendering bottlenecks",
      "Optimize database queries and indexing",
      "Implement caching for frequently accessed data",
    ],
    deliverables: [
      "Speed optimization",
      "Code refactoring",
      "Database query optimization",
      "Memory & runtime optimization",
      "Load testing & benchmarking",
    ],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "System Design & Architecture",
    description: "Scalable system architecture designed for growth. I help you build robust systems that handle high traffic and complex business logic efficiently.",
    stack: ["System Architecture", "Database Design", "Cloud Infrastructure", "CI/CD"],
    approach: [
      "Requirements analysis + scalability planning",
      "High-level architecture design",
      "Database schema optimization",
      "Infrastructure setup with Docker/AWS",
    ],
    deliverables: [
      "System architecture documents",
      "Database design & optimization",
      "Docker containerization",
      "CI/CD pipeline setup",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your project requirements, goals, and timeline. I ask questions to understand your vision completely.",
  },
  {
    step: "02",
    title: "Proposal",
    description: "I send a detailed proposal with breakdown, timeline, milestones, and pricing based on scope.",
  },
  {
    step: "03",
    title: "Development",
    description: "Regular updates with daily progress. I share staging links and video walkthroughs each week.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Thorough testing, documentation, and deployment. I ensure smooth handover with post-launch support.",
  },
];

const whyChooseMe = [
  {
    title: "Clean Code Architecture",
    description: "I prioritize maintainability so your codebase stays clean as you scale.",
  },
  {
    title: "Performance-First Approach",
    description: "My apps typically achieve 95+ Lighthouse scores with SEO optimization.",
  },
  {
    title: "Clear Communication",
    description: "Daily updates, fast response times, and video walkthroughs every week.",
  },
  {
    title: "Post-Launch Support",
    description: "I offer priority support to past clients for ongoing maintenance.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col gap-y-12 justify-center items-start mx-auto">
      {/* Hero */}
      <section className="py-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Available for projects
          </span>
        </div>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-zinc-900 dark:text-white">
          Full Stack Engineer
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-6">
          Next.js • Node.js • React • AWS
        </p>
        
        {/* Quick Stats */}
        <div className="flex flex-wrap gap-6 mb-8 text-sm">
          <div>
            <span className="font-bold text-2xl text-zinc-900 dark:text-white">{stats.rate}</span>
            <span className="text-zinc-500 dark:text-zinc-400 ml-1">hourly</span>
          </div>
          <div className="w-px h-8 bg-zinc-300 dark:bg-zinc-700" />
          <div>
            <span className="font-bold text-2xl text-zinc-900 dark:text-white">{stats.location}</span>
          </div>
          <div className="w-px h-8 bg-zinc-300 dark:bg-zinc-700" />
          <div>
            <span className="font-bold text-2xl text-zinc-900 dark:text-white">{stats.experience}</span>
            <span className="text-zinc-500 dark:text-zinc-400 ml-1">experience</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            View Services
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:nalin@nerdev.in"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full">
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-zinc-900 dark:text-white">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Next.js 14", "React", "TypeScript", "Node.js", "NestJS",
            "PostgreSQL", "Redis", "Prisma", "Tailwind CSS", "Docker",
            "AWS", "Git", "Jest", "REST APIs", "GraphQL"
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="w-full">
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-zinc-900 dark:text-white">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4 text-zinc-900 dark:text-white">
                <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl">{service.title}</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {service.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-sm text-zinc-900 dark:text-white mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-zinc-900 dark:text-white mb-2">Approach</h4>
                <ul className="space-y-1">
                  {service.approach.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="w-full">
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-zinc-900 dark:text-white">
          How I Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map((item, index) => (
            <div key={index} className="p-4">
              <span className="font-bold text-4xl text-zinc-200 dark:text-zinc-700">{item.step}</span>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white mt-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="w-full">
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-zinc-900 dark:text-white">
          Why Work With Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyChooseMe.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-xl bg-zinc-100 dark:bg-zinc-800/50">
          <div className="text-center">
            <div className="font-bold text-3xl text-zinc-900 dark:text-white">{stats.projects}+</div>
            <div className="text-sm text-zinc-500">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-3xl text-zinc-900 dark:text-white">{stats.experience}</div>
            <div className="text-sm text-zinc-500">Experience</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-3xl text-zinc-900 dark:text-white">{stats.leetcode}+</div>
            <div className="text-sm text-zinc-500">LeetCode Problems</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-3xl text-zinc-900 dark:text-white">{stats.codeforces}+</div>
            <div className="text-sm text-zinc-500">CodeForces</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-8">
        <div className="p-8 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-center">
          <h2 className="font-bold text-2xl text-white mb-2">
            Ready to build something great?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
            Let's discuss your project and see how I can help turn your idea into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:nalin@nerdev.in?subject=Project Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
            >
              Get In Touch
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full">
        <GetInTouch />
      </section>
    </main>
  );
}
