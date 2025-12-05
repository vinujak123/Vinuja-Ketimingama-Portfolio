"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MotionFadeIn,
  RevealOnScroll,
} from "@/components/motion/motion-wrappers";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Tag } from "@/components/ui/tag";
import { getImagePath } from "@/lib/image-path";

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
      description="Full-stack developer with a strong interest in front-end and full-stack development. I focus on building responsive, user-centered interfaces while continuously improving my technical skills."
      className="relative overflow-hidden"
    >
      <div className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <RevealOnScroll delay={0.05} className="space-y-4 sm:space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white/30 bg-slate-900 shadow-[0_18px_55px_rgba(0,0,0,0.9)] sm:h-24 sm:w-24"
            >
              <Image
                src={getImagePath("/vinuja2.jpg")}
                alt="Portrait of Vinuja Ketimingama"
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-cover"
                priority
              />
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(0,229,255,0.6), transparent 55%), radial-gradient(circle at 100% 100%, rgba(255,70,166,0.7), transparent 55%)",
                    "radial-gradient(circle at 100% 0%, rgba(255,70,166,0.7), transparent 55%), radial-gradient(circle at 0% 100%, rgba(0,229,255,0.6), transparent 55%)",
                    "radial-gradient(circle at 0% 0%, rgba(0,229,255,0.6), transparent 55%), radial-gradient(circle at 100% 100%, rgba(255,70,166,0.7), transparent 55%)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full opacity-60"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/30 ring-offset-2 ring-offset-transparent" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Full-Stack Developer
              </p>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                Building responsive, user-centered interfaces and integrating
                secure, scalable backends.
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base md:text-[15px]">
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

          <div className="flex flex-wrap gap-2">
            {skills.map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Tag className="border-white/20 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-sm shadow-md transition-all hover:border-cyan-400/40 hover:shadow-cyan-500/20">
                  {label}
                </Tag>
              </motion.div>
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


