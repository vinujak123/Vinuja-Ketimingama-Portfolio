"use client";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { RevealOnScroll } from "@/components/motion/motion-wrappers";
import { Tag } from "@/components/ui/tag";
import { Briefcase } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const skills = [
  { icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
  { icon: SiReact, label: "React", color: "#61dafb" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiNodedotjs, label: "Node.js", color: "#68a063" },
  { icon: SiLaravel, label: "Laravel / PHP", color: "#ff2d20" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38bdf8" },
  { icon: SiMysql, label: "MySQL", color: "#f29111" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
  { icon: SiGit, label: "Git", color: "#f05032" },
  { icon: SiGithub, label: "GitHub", color: "#ffffff" },
  { icon: SiFigma, label: "Figma", color: "#a259ff" },
];

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="Skills & Experience"
      title="Skills & Experience"
      description="I specialize in crafting engaging, high‑quality web applications. My experience includes building responsive interfaces, integrating APIs, creating animations, and working across the full stack."
      center
    >
      <RevealOnScroll delay={0.04} className="space-y-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
            A problem is an opportunity to do your best
          </p>
          <p className="text-sm text-slate-300 md:text-[15px]">
            My experience includes building modern client‑side and full‑stack
            web applications with React, Next.js, Laravel / Node.js, and
            TypeScript. I enjoy developing custom features, integrating APIs,
            and designing layouts that feel both fast and polished.
          </p>
          <p className="text-sm text-slate-300 md:text-[15px]">
            I also have experience with deployment, version control, and design
            collaboration — from Git and CI to working in Figma and iterating
            with designers and stakeholders.
          </p>
          <p className="text-xs text-slate-400">
            For a deeper look at my work and experience, visit my{" "}
            <a
              href="https://www.linkedin.com/in/vinuja-k-8545b41b1"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent-cyan)] underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-6 shadow-[0_26px_80px_rgba(0,0,0,0.9)] md:px-8 md:py-8">
          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-slate-50 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">
                    <Icon className="h-7 w-7" color={skill.color} />
                  </div>
                  <p className="text-xs font-medium text-slate-200">
                    {skill.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Tag>JavaScript / TypeScript</Tag>
          <Tag>React & Next.js</Tag>
          <Tag>Laravel & Node.js</Tag>
          <Tag>Tailwind CSS</Tag>
          <Tag>Databases & APIs</Tag>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}


