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

const heroKeywords = ["Clean code", "Scalable systems", "Polished UI"];

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
      className="relative grid gap-8 rounded-[32px] border border-white/15 bg-black/40 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.9)] backdrop-blur-3xl md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:p-8"
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
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300 shadow-[0_18px_60px_rgba(0,0,0,0.85)]">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#FF46A6] shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
            Vinuja Ketimingama · Full-Stack Developer
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl lg:text-[2.7rem] lg:leading-[1.1]">
            I build fast, maintainable products —{" "}
            <span className="text-gradient">from prototype to production.</span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300 md:text-base">
            Full-stack developer focused on front-end and
            full-stack development. I build responsive, user-centered
            interfaces and full-stack systems with React, Next.js, TypeScript,
            and modern backends.
          </p>
        </MotionFadeIn>

        <MotionFadeIn delay={0.15} className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button className="group" size="lg">
              <a href="/projects" className="flex items-center gap-2">
                <span>See my work</span>
                <span className="text-lg leading-none">↗</span>
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="group">
              <a href="/contact" className="flex items-center gap-2">
                <span>Let&apos;s build together</span>
                <span className="text-base leading-none text-slate-300 group-hover:text-white">
                  ●
                </span>
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 md:text-[13px]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Hero keywords
            </span>
            <div className="flex flex-wrap gap-2">
              {heroKeywords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.08,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em]"
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
            <div className="flex h-[220px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black">
              <div className="space-y-2 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                  3D Scene
                </p>
                <p className="text-sm text-slate-200">
                  Optimized static preview on mobile. Interact on desktop for
                  full motion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionFadeIn>
    </section>
  );
}


