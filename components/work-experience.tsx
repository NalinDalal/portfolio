import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/data";

function WorkExperience() {
  return (
    <section id="work-experience" className="py-6">
      <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-zinc-900 dark:text-white">
        Work Experience
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        My professional journey
      </p>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-2.5 w-3 h-3 rounded-full bg-zinc-900 dark:bg-white border-2 border-zinc-900 dark:border-zinc-900" />
              
              <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-4 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500">
                    <Calendar className="w-4 h-4" />
                    {exp.startDate} — {exp.endDate}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
