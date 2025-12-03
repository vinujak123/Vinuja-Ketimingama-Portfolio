"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center">
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 flex w-[min(960px,100%-1.5rem)] items-center justify-between rounded-2xl border border-white/8 bg-[rgba(7,12,28,0.9)] px-4 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#00E5FF] via-[#FF46A6] to-[#FF8A00] shadow-[0_0_30px_rgba(0,229,255,0.7)]" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Vinuja Ketimingama
            </span>
            <span className="text-sm font-semibold text-slate-100">
              Full Stack Developer
            </span>
          </div>
        </Link>

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
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--muted)] transition hover:border-white/30 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinuja-k-8545b41b1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--muted)] transition hover:border-white/30 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}


