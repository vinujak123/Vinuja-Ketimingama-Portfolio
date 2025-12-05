"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center">
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 flex w-[min(1200px,100%-1.5rem)] items-center justify-between rounded-2xl border border-white/8 bg-[rgba(7,12,28,0.9)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl md:px-6 md:py-4"
      >
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-[#00E5FF] via-[#FF46A6] to-[#FF8A00] shadow-[0_0_30px_rgba(0,229,255,0.7)] md:h-12 md:w-12">
            <Image
              src="/vinuja.png"
              alt="Vinuja Ketimingama avatar"
              fill
              sizes="(max-width: 768px) 40px, 48px"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-black/10 via-transparent to-black/25" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--muted)] md:text-sm">
              <span className="hidden sm:inline">Vinuja Ketimingama</span>
              <span className="sm:hidden">V. Ketimingama</span>
            </span>
            <span className="text-sm font-semibold text-slate-100 md:text-base">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="relative flex items-center gap-1 rounded-full bg-white/5 p-1 text-xs">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-slate-300 transition-colors hover:text-white"
                )}
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/vinujak123"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--muted)] transition hover:border-white/30 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinuja-k-8545b41b1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--muted)] transition hover:border-white/30 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/30 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              />
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-white/20 bg-gradient-to-br from-[rgba(7,12,28,0.98)] to-[rgba(5,8,20,0.98)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl md:hidden"
              >
                <div className="flex flex-col gap-1">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 hover:text-white"
                      >
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100"
                          layoutId="mobileMenuBg"
                        />
                        <span className="relative z-10">{link.label}</span>
                        <motion.span
                          className="relative z-10 ml-auto opacity-0 transition-opacity group-hover:opacity-100"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                  <div className="mt-3 flex items-center justify-center gap-3 border-t border-white/10 pt-3">
                    <motion.a
                      href="https://github.com/vinujak123"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-slate-300 shadow-lg transition-all hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-cyan-300"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/vinuja-k-8545b41b1"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-slate-300 shadow-lg transition-all hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-blue-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
