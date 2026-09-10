import React from "react";
import { Calendar } from "lucide-react";
import { experiences } from "@/data";

function WorkExperience() {
  return (
    <section id="work-experience" className="py-8">
      <p className="section-label">Experience</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-2 text-text-primary">
        Work Experience
      </h2>
      <p className="text-text-secondary mb-8">
        My professional journey
      </p>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-teal to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-2.5 w-3 h-3 rounded-full bg-accent border-4 border-bg-primary" />
              
              <div className="bg-surface rounded-xl p-5 border border-border hover:border-accent/30 transition-colors duration-150">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-text-primary">
                      {exp.position}
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                    <Calendar className="w-4 h-4" />
                    {exp.startDate} to {exp.endDate}
                  </div>
                </div>
                <ul className="list-disc list-inside text-text-secondary text-sm space-y-1.5 ml-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
