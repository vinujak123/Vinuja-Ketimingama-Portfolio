"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MotionFadeIn } from "@/components/motion/motion-wrappers";
import { useRef } from "react";

const FloatingWorkbenchScene = dynamic(
  () =>
    import("@/components/ThreeScenes/FloatingWorkbenchScene").then(
      (m) => m.FloatingWorkbenchScene
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[260px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black md:h-[320px]">
        <p className="text-xs text-slate-400">Initializing 3D workspace…</p>
      </div>
    ),
  }
);

const heroKeywords = ["Modern Stack", "User-Focused", "Production Ready"];

export function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const blur = useTransform(scrollYProgress, [0, 1], ["16px", "28px"]);

  return (
    <section
      ref={ref}
      className="relative grid gap-6 rounded-2xl border border-white/15 bg-black/40 p-4 shadow-[0_26px_90px_rgba(0,0,0,0.9)] backdrop-blur-3xl sm:gap-8 sm:rounded-3xl sm:p-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:rounded-[32px] md:p-8"
    >
      <motion.div
        style={{ y: translateY }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      >
        <motion.div
          style={{ filter: blur }}
          className="gradient-orbit h-full w-full"
        />
      </motion.div>

      <div className="flex flex-col justify-center gap-6">
        <MotionFadeIn delay={0.05} className="space-y-4">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-black/60 via-black/40 to-black/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-300 shadow-[0_18px_60px_rgba(0,0,0,0.85)] backdrop-blur-sm"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#FF46A6] shadow-[0_0_16px_rgba(56,189,248,0.9)]"
            />
            <span className="hidden sm:inline">Vinuja Ketimingama · Full-Stack Developer</span>
            <span className="sm:hidden">V. Ketimingama · Full-Stack Dev</span>
          </motion.p>
          <h1 className="text-2xl font-semibold leading-tight text-slate-50 sm:text-3xl md:text-4xl lg:text-[2.7rem] lg:leading-[1.1]">
            Turning ideas into{" "}
            <span className="text-gradient">digital experiences</span>{" "}
            that users love.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I craft modern web applications that combine beautiful interfaces
            with robust backend systems. Specializing in React, Next.js, and Laravel
            to deliver scalable solutions that perform.
          </p>
        </MotionFadeIn>

        <MotionFadeIn delay={0.15} className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button className="group relative w-full overflow-hidden sm:w-auto" size="lg">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-orange-500/20"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <a href="/#projects" className="relative z-10 flex items-center justify-center gap-2">
                  <span>See my work</span>
                  <motion.span
                    animate={{ rotate: [0, 45, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-lg leading-none"
                  >
                    ↗
                  </motion.span>
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button variant="ghost" size="lg" className="group relative w-full overflow-hidden border-2 border-white/20 sm:w-auto">
                <a href="/#contact" className="relative z-10 flex items-center justify-center gap-2">
                  <span>Let&apos;s build together</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-base leading-none text-cyan-400"
                  >
                    ●
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 md:text-[13px]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Hero keywords
            </span>
            <div className="flex flex-wrap gap-2">
              {heroKeywords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 8, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.25 + i * 0.08,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="rounded-full border border-white/20 bg-gradient-to-r from-black/60 via-black/40 to-black/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] backdrop-blur-sm shadow-lg"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </MotionFadeIn>
      </div>

      <MotionFadeIn delay={0.12} className="relative flex items-center">
        <div className="relative w-full">
          <div className="absolute -inset-4 -z-10 rounded-[32px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.16)_0deg,rgba(244,114,182,0.16)_160deg,rgba(249,115,22,0.26)_240deg,transparent_320deg)] blur-2xl" />
          <div className="hidden md:block">
            <FloatingWorkbenchScene />
          </div>
          <div className="md:hidden">
            <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/95 via-slate-950 to-black shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              {/* Animated gradient orbs */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/20 blur-3xl"
                />
                <motion.div
                  animate={{
                    x: [0, -80, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-600/20 blur-3xl"
                />
                <motion.div
                  animate={{
                    x: [0, 60, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-600/15 blur-2xl"
                />
              </div>
              
              {/* Floating tech icons */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-6">
                {["⚛", "▲", "λ", "⚡", "🔷"].map((icon, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-2xl backdrop-blur-sm shadow-lg"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent" />
            </div>
          </div>
        </div>
      </MotionFadeIn>
    </section>
  );
}


