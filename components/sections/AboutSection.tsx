"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  MotionFadeIn,
  RevealOnScroll,
} from "@/components/motion/motion-wrappers";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Tag } from "@/components/ui/tag";

const OrbitalSkillsScene = dynamic(
  () =>
    import("@/components/ThreeScenes/OrbitalSkillsScene").then(
      (m) => m.OrbitalSkillsScene
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[220px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black md:h-[260px]">
        <p className="text-xs text-slate-400">Loading skill orbits…</p>
      </div>
    ),
  }
);

const skills = [
  "React / Next.js",
  "TypeScript",
  "Laravel & PHP",
  "Tailwind CSS",
  "RESTful APIs",
  "MySQL / PostgreSQL",
];

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About me"
      title="I design products that feel fast and look great."
      description="Software Engineering undergraduate with a strong interest in front-end and full-stack development. I focus on building responsive, user-centered interfaces while continuously improving my technical skills."
      className="relative overflow-hidden"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <RevealOnScroll delay={0.05} className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/20 bg-slate-900 shadow-[0_18px_55px_rgba(0,0,0,0.9)] aspect-square">
              <Image
                src="/vinuja.png"
                alt="Portrait of Vinuja Ketimingama"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_0_0,rgba(0,229,255,0.6),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,70,166,0.7),transparent_55%)] opacity-60" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Software Engineering Undergraduate
              </p>
              <p className="text-sm text-slate-200">
                I&apos;m a Software Engineering student who enjoys front-end and
                full-stack development — from building UIs to integrating
                secure, scalable backends.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300 md:text-[15px]">
            I am committed to contributing to innovative projects and growing as
            a professional developer. My experience spans full-stack work across
            admin systems, content platforms, and CRM dashboards, with a focus
            on clean architecture and maintainable code.
          </p>

          <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                What I bring
              </p>
              <ul className="space-y-1.5 text-sm text-slate-200">
                <li>· Strong foundations in React, Next.js, and TypeScript</li>
                <li>· Laravel & RESTful API development</li>
                <li>· Tailwind CSS and responsive UI design</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                How I work
              </p>
              <ul className="space-y-1.5 text-sm text-slate-200">
                <li>· Organized and detail-oriented delivery</li>
                <li>· Focus on communication and teamwork</li>
                <li>· Always learning and improving my skills</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {skills.map((label) => (
              <Tag key={label}>{label}</Tag>
            ))}
          </div>
        </RevealOnScroll>

        <MotionFadeIn delay={0.12}>
          <OrbitalSkillsScene />
        </MotionFadeIn>
      </div>
    </SectionWrapper>
  );
}


