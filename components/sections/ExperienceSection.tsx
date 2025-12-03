"use client";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { RevealOnScroll } from "@/components/motion/motion-wrappers";
import { Tag } from "@/components/ui/tag";
import { Briefcase, Sparkles } from "lucide-react";

const timeline = [
  {
    title: "Software Engineer (Intern)",
    company: "Wijeya Newspapers Ltd",
    years: "June 2025 — Dec 2025",
    summary:
      "Full-stack developer on internal and public-facing products, working across Laravel, React, Tailwind CSS, and MySQL.",
    highlights: [
      "Developed an administrative web application with role-based dashboards, RESTful APIs, and Amazon S3 file handling.",
      "Built a React-based front web focused on fast content delivery, accessibility, and SEO.",
      "Implemented responsive, user-friendly UIs and optimized backend workflows for content updates.",
    ],
  },
  {
    title: "BSc (Hons) Computing",
    company: "National Institute of Business Management (Affiliated with Coventry University, UK)",
    years: "2022 — 2026",
    summary:
      "Software Engineering undergraduate coursework with a focus on full-stack development, databases, and software engineering principles.",
    highlights: [
      "2nd Year: Higher National Diploma in Software Engineering.",
      "1st Year: Diploma in Software Engineering.",
      "Built academic projects using Next.js, TypeScript, and modern tooling.",
    ],
  },
  {
    title: "AAT Level 2 (In Progress)",
    company: "AAT — Negombo South International School, Piliyandala",
    years: "Ongoing",
    summary:
      "Accounting studies that complement technical work with business and financial understanding.",
    highlights: [
      "Gaining exposure to accounting practices and financial concepts.",
      "Balancing technical and business-oriented education.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="Experience"
      title="Growing through real-world experience and applied learning."
      description="From internship experience to academic projects and professional certifications, I’m building a foundation in full-stack development and modern web technologies."
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
        <div className="relative">
          <div className="absolute left-[10px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400 via-fuchsia-400/70 to-amber-300/40 md:left-4" />
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <RevealOnScroll key={item.title} delay={0.04 + index * 0.06}>
                <div className="relative pl-10 md:pl-14">
                  <div className="absolute left-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.9)] md:left-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-amber-300" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-[13px] font-semibold text-slate-50">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-400">
                          {item.company}
                        </p>
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        {item.years}
                      </p>
                    </div>
                    <p className="mt-3 text-xs text-slate-300 md:text-sm">
                      {item.summary}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                      {item.highlights.map((h) => (
                        <li key={h}>· {h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 via-slate-950 to-black p-5 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-cyan-300">
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  How I can help
                </p>
                <p className="text-sm text-slate-100">
                  Bring energy, ownership, and modern web skills.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 md:text-sm">
              I enjoy working on full-stack features, from designing responsive
              UIs to integrating APIs and databases. I value clear code,
              consistent patterns, and good communication with teammates and
              stakeholders.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Tag>Full-stack development</Tag>
              <Tag>Responsive UI</Tag>
              <Tag>APIs & Databases</Tag>
              <Tag>SEO & Performance</Tag>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 p-3 text-xs text-slate-200">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <p>
                I enjoy mentoring teams on UI craft — motion, accessibility, and
                patterns that keep components sharp as products evolve.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}


