import Image from "next/image";
import React from "react";
import { ArrowDown } from "lucide-react";

function Introduction() {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Available for opportunities</span>
          </div>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent">
            Nalin Dalal
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-4 max-w-lg">
            Software engineer &amp; open-source contributor building systems that matter.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work-experience"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              View Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Resume
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
    </section>
  );
}

export default Introduction;
