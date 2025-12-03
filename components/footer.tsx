import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-4 border-t border-white/10 bg-gradient-to-t from-black/60 via-[#050818]/70 to-transparent">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
          Vinuja Ketimingama · Full Stack Developer
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="mailto:vinujak777@gmail.com"
            className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>vinujak777@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/40 hover:text-white"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-handle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/40 hover:text-white"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


