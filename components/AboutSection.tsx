"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className = "" }: AboutSectionProps) {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Rust",
    "C++",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "Linux",
    "GoLang",
    "JavaScript",
    "Solidity",
    "Anchor",
    "HardHat",
    "Foundry",
    "WebRTC",
    "WebSockets",
  ];

  return (
    <section className={`mb-16 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* About Text */}
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">About</h2>
            <div className="space-y-4 text-slate-300">
              <p>tldr; learnt by hacking around on the internet.</p>
              <p>I like technology. They make a dent in the universe.</p>
              <p>I deeply study art, history, football and great books.</p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
