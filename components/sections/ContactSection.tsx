"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { RevealOnScroll } from "@/components/motion/motion-wrappers";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { Mail, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("submitting");
    setMessage(null);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json?.error ?? "Something went wrong");
      }

      setStatus("success");
      setMessage("Message sent. I’ll get back to you soon.");
    } catch (error: any) {
      setStatus("error");
      setMessage(
        error?.message ?? "Something went wrong. Please try again in a moment."
      );
    }
  }

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Let’s build something"
      title="Have an idea, roadmap, or product that needs polish?"
      description="Tell me what you’re building and where you need help — architecture, UI, motion, or the full stack."
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
        <RevealOnScroll delay={0.05}>
          <form
            className="space-y-4 rounded-2xl border border-white/15 bg-slate-950/70 p-5 shadow-[0_26px_80px_rgba(0,0,0,0.9)] backdrop-blur-3xl"
            action={onSubmit}
          >
            <div className="flex items-center gap-3 pb-1">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-cyan-300">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Contact form
                </p>
                <p className="text-sm text-slate-100">
                  I usually reply within 1–2 business days.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs text-slate-300">
                  Name
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  placeholder="What should I call you?"
                  className="h-10 w-full rounded-full border border-white/15 bg-slate-950/80 px-4 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/80 focus:bg-slate-900"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs text-slate-300">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.dev"
                  className="h-10 w-full rounded-full border border-white/15 bg-slate-950/80 px-4 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/80 focus:bg-slate-900"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs text-slate-300">
                  Project details
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share context, timelines, and where you’d like support."
                  className="w-full rounded-2xl border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/80 focus:bg-slate-900"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Button
                type="submit"
                size="lg"
                className="group relative overflow-hidden"
                disabled={status === "submitting"}
              >
                <span className="flex items-center gap-2">
                  <span>
                    {status === "submitting"
                      ? "Sending…"
                      : "Send message to start"}
                  </span>
                  <Send className="h-4 w-4" />
                </span>
              </Button>
              <p className="text-[11px] text-slate-500">
                Or email me directly at{" "}
                <a
                  href="mailto:hello@example.dev"
                  className="text-slate-200 underline decoration-cyan-400/70 underline-offset-4"
                >
                  hello@example.dev
                </a>
              </p>
            </div>

            {message && (
              <div
                className={`mt-2 rounded-xl border px-3 py-2 text-xs ${
                  status === "success"
                    ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-200"
                    : "border-rose-400/50 bg-rose-500/10 text-rose-100"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 via-slate-950 to-black p-5 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Ideal collaborations
            </p>
            <p className="text-sm text-slate-100 md:text-[15px]">
              I&apos;m a good fit for teams that care about thoughtful UX,
              motion, and long‑term code quality. I enjoy pairing with design,
              collaborating with backend and infra, and helping teams ship with
              confidence.
            </p>
            <div className="grid gap-2 text-xs text-slate-300">
              <p>· Product surfaces that need a higher level of polish</p>
              <p>· Design systems and component libraries to scale UI</p>
              <p>· Refactors and migrations that need extra care</p>
              <p>· Landing pages with cinematic storytelling</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Tag>Contract</Tag>
              <Tag>Consulting</Tag>
              <Tag>Hands‑on build</Tag>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}


