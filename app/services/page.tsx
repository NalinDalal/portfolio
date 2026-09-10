import { Code, Server, Database, Zap, CheckCircle, ArrowRight } from "lucide-react";
import GetInTouch from "@/components/get-in-touch";

export const metadata = {
    title: "Services - Nalin Dalal | Full Stack Engineer",
    description: "Full Stack Engineer specializing in Next.js, Node.js, Websockets, and AWS. Available for freelance projects and full-time roles.",
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
    },
];

const processSteps = [
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
        <main className="flex flex-col gap-y-24 justify-center items-start mx-auto">
            {/* Hero */}
            <section className="py-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium flex items-center gap-1 border border-teal/20">
                        <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                        Available for projects
                    </span>
                </div>
                <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight mb-4 text-text-primary">
                    Full Stack Engineer
                </h1>
                <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-6">
                    Next.js • Node.js • React • AWS
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-8 text-sm">
                    <div>
                        <span className="font-display font-bold text-2xl text-accent">{stats.rate}</span>
                        <span className="text-text-secondary ml-1">hourly</span>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div>
                        <span className="font-display font-bold text-2xl text-text-primary">{stats.location}</span>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div>
                        <span className="font-display font-bold text-2xl text-text-primary">{stats.experience}</span>
                        <span className="text-text-secondary ml-1">experience</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href="#services"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors"
                    >
                        View Services
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href="mailto:nalin@nerdev.in"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary rounded-lg font-medium hover:border-accent hover:text-text-primary transition-colors"
                    >
                        Get a Quote
                    </a>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="w-full">
                <p className="section-label">Technology</p>
                <h2 className="font-display font-bold text-3xl tracking-tight mb-6 text-text-primary">
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
                            className="px-4 py-2 bg-surface text-text-primary rounded-lg text-sm font-medium border border-border"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section id="services" className="w-full">
                <p className="section-label">Services</p>
                <h2 className="font-display font-bold text-3xl tracking-tight mb-6 text-text-primary">
                    What I Do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl border border-border bg-surface hover:border-accent/30 transition-all duration-150"
                        >
                            <div className="flex items-center gap-3 mb-4 text-text-primary">
                                <div className="p-2 bg-surface-light rounded-lg border border-border text-accent">
                                    {service.icon}
                                </div>
                                <h3 className="font-display font-bold text-xl">{service.title}</h3>
                            </div>
                            <p className="text-text-secondary mb-4">
                                {service.description}
                            </p>

                            <div className="mb-4">
                                <h4 className="font-semibold text-sm text-text-primary mb-2">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {service.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-surface-light text-text-secondary rounded text-xs border border-border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm text-text-primary mb-2">Approach</h4>
                                <ul className="space-y-1">
                                    {service.approach.map((item, i) => (
                                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
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
                <p className="section-label">Process</p>
                <h2 className="font-display font-bold text-3xl tracking-tight mb-6 text-text-primary">
                    How I Work
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {processSteps.map((item, index) => (
                        <div key={index} className="p-4">
                            <span className="font-display font-bold text-4xl text-accent">{item.step}</span>
                            <h3 className="font-display font-bold text-lg text-text-primary mt-2">{item.title}</h3>
                            <p className="text-sm text-text-secondary mt-1">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Me */}
            <section className="w-full">
                <p className="section-label">Why Me</p>
                <h2 className="font-display font-bold text-3xl tracking-tight mb-6 text-text-primary">
                    Why Work With Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {whyChooseMe.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-4">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="font-display font-semibold text-text-primary">{item.title}</h3>
                                <p className="text-sm text-text-secondary">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="w-full py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-xl bg-surface border border-border">
                    <div className="text-center">
                        <div className="font-display font-bold text-3xl text-accent">{stats.projects}+</div>
                        <div className="text-sm text-text-secondary">Projects Built</div>
                    </div>
                    <div className="text-center">
                        <div className="font-display font-bold text-3xl text-accent">{stats.experience}</div>
                        <div className="text-sm text-text-secondary">Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="font-display font-bold text-3xl text-accent">{stats.leetcode}+</div>
                        <div className="text-sm text-text-secondary">LeetCode Problems</div>
                    </div>
                    <div className="text-center">
                        <div className="font-display font-bold text-3xl text-accent">{stats.codeforces}+</div>
                        <div className="text-sm text-text-secondary">CodeForces</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full py-8">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-8 rounded-xl bg-surface border border-border text-center">
                        <h2 className="font-display font-bold text-xl text-text-primary mb-2">
                            Have a freelance project?
                        </h2>
                        <p className="text-text-secondary mb-6">
                            Need a full-stack engineer to ship your idea? Let&apos;s scope it out on a call.
                        </p>
                        <a
                            href="https://cal.com/nerdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors"
                        >
                            Book a Call
                        </a>
                    </div>
                    <div className="p-8 rounded-xl bg-surface border border-border text-center">
                        <h2 className="font-display font-bold text-xl text-text-primary mb-2">
                            Hiring full-time?
                        </h2>
                        <p className="text-text-secondary mb-6">
                            I&apos;m open to full-time engineering roles. Email me about your opportunity.
                        </p>
                        <a
                            href="mailto:nalin@nerdev.in?subject=Full-Time%20Opportunity"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary rounded-lg font-medium hover:border-accent hover:text-text-primary transition-colors"
                        >
                            Get In Touch
                        </a>
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
