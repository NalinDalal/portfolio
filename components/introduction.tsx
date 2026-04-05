import Image from "next/image";
import React from "react";
import { ArrowDown, Zap, Code, Server } from "lucide-react";
import Link from "next/link";

function Introduction() {
  const services = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Web Development",
      description: "Full-stack apps with Next.js, React, and modern tech",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Backend APIs",
      description: "Scalable REST/GraphQL APIs with Node.js & NestJS",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance",
      description: "Optimize your app for speed and scalability",
    },
  ];

  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Available for freelance work</span>
          </div>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent">
            Nalin Dalal
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-4 max-w-lg">
            Software engineer building systems that matter. I turn complex problems into elegant solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Hire Me
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
          <Image
            src="https://avatars.githubusercontent.com/u/116961144?v=4"
            alt="Nalin Dalal's Photo"
            height={180}
            width={180}
            className="relative object-cover rounded-2xl border-4 border-zinc-200 dark:border-zinc-800 shadow-xl"
          />
        </div>
      </div>

      {/* Services Preview */}
      <div id="services" className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-0 text-zinc-900 dark:text-white">
            Services
          </h2>
          <Link href="/services" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2 text-zinc-900 dark:text-white">
                {service.icon}
                <span className="font-semibold">{service.title}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 flex flex-wrap gap-6 text-sm">
        <div>
          <span className="font-bold text-xl text-zinc-900 dark:text-white">550+</span>
          <span className="text-zinc-500 dark:text-zinc-400 ml-1">LeetCode</span>
        </div>
        <div>
          <span className="font-bold text-xl text-zinc-900 dark:text-white">830+</span>
          <span className="text-zinc-500 dark:text-zinc-400 ml-1">CodeForces</span>
        </div>
        <div>
          <span className="font-bold text-xl text-zinc-900 dark:text-white">30+</span>
          <span className="text-zinc-500 dark:text-zinc-400 ml-1">Projects Built</span>
        </div>
        <div>
          <span className="font-bold text-xl text-zinc-900 dark:text-white">GSSoC</span>
          <span className="text-zinc-500 dark:text-zinc-400 ml-1">Contributor</span>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
