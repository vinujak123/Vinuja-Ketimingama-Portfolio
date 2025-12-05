"use client";

import { motion } from "framer-motion";
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

        <div className="relative overflow-hidden rounded-3xl border-2 border-white/15 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl md:p-8">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.2), transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(244,114,182,0.2), transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.2), transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.2), transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Skills Grid - Creative Layout */}
          <div className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isLarge = index % 4 === 0 || index % 4 === 3;
              
              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    rotate: [0, -2, 2, 0],
                  }}
                  className="group relative"
                >
                  <div className="relative flex flex-col items-center gap-3 rounded-2xl border-2 border-white/20 bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-slate-800/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-gradient-to-br hover:from-slate-800/80 hover:via-slate-900/80 hover:to-slate-800/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:p-5">
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle, ${skill.color}20, transparent 70%)`,
                      }}
                    />
                    
                    {/* Icon container with animated glow */}
                    <motion.div
                      className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 shadow-lg sm:h-20 sm:w-20"
                      whileHover={{
                        boxShadow: `0 0 30px ${skill.color}40`,
                      }}
                    >
                      <Icon
                        className="relative z-10 h-8 w-8 sm:h-10 sm:w-10"
                        color={skill.color}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: `radial-gradient(circle, ${skill.color}30, transparent 70%)`,
                        }}
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                    
                    {/* Label */}
                    <p className="relative z-10 text-center text-xs font-semibold text-slate-200 transition-colors group-hover:text-white sm:text-sm">
                      {skill.label}
                    </p>
                    
                    {/* Decorative corner accent */}
                    <div
                      className="absolute top-2 right-2 h-2 w-2 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
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


