"use client";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { RevealOnScroll } from "@/components/motion/motion-wrappers";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy load the 3D tech network
const TechNetworkScene = dynamic(
  () => import("@/components/ThreeScenes/TechNetworkScene").then((mod) => ({ default: mod.TechNetworkScene })),
  { ssr: false, loading: () => <div className="h-full w-full bg-slate-900/50" /> }
);

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      className="border-0 bg-transparent shadow-none backdrop-blur-none p-0"
    >
      <div className="grid min-h-[500px] gap-6 sm:gap-8 md:min-h-[600px] md:grid-cols-2 md:gap-12">
        {/* Tech Network Visualization */}
        <RevealOnScroll delay={0.1}>
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border-2 border-white/20 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 shadow-[0_20px_60px_rgba(0,0,0,0.8)] sm:h-[350px] sm:rounded-3xl md:h-full">
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(56,189,248,0.3)",
                  "0 0 40px rgba(244,114,182,0.4)",
                  "0 0 20px rgba(56,189,248,0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <TechNetworkScene />
          </div>
        </RevealOnScroll>

        {/* Contact Content */}
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                What would you do if a software expert was just a click away?
              </h2>
              
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                Whether you want to start a new project or just say hello, I&apos;d love to hear from you.
                You can also follow me on{" "}
                <a
                  href="https://github.com/vinujak123"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-400 transition-colors hover:text-orange-300"
                >
                  GitHub
                </a>
                {" "}or{" "}
                <a
                  href="https://www.linkedin.com/in/vinuja-k-8545b41b1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-400 transition-colors hover:text-orange-300"
                >
                  LinkedIn
                </a>
                .
              </p>

              {/* Email Address */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="pt-2 sm:pt-4"
              >
                <a
                  href="mailto:vinujak777@gmail.com"
                  className="group relative inline-flex flex-wrap items-center gap-2 rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-3 text-lg font-bold text-white backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-300 sm:gap-3 sm:px-6 sm:py-4 sm:text-xl md:text-2xl lg:text-3xl"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Mail className="h-5 w-5 shrink-0 text-cyan-400 transition-colors group-hover:text-cyan-300 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </motion.div>
                  <span className="break-all underline decoration-cyan-400/50 underline-offset-4 transition-colors group-hover:decoration-cyan-300">
                    vinujak777@gmail.com
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 transition-opacity group-hover:opacity-100"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </a>
              </motion.div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <motion.a
                  href="https://github.com/vinujak123"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-slate-300 shadow-lg transition-all hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-300 sm:h-16 sm:w-16"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <Github className="relative z-10 h-6 w-6 sm:h-7 sm:w-7" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vinuja-k-8545b41b1"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-slate-300 shadow-lg transition-all hover:border-blue-400/50 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-500/20 hover:text-blue-300 sm:h-16 sm:w-16"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0"
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <Linkedin className="relative z-10 h-6 w-6 sm:h-7 sm:w-7" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}
