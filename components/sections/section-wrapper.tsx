import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

export function SectionWrapper({
  id,
  className,
  eyebrow,
  title,
  description,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-28 space-y-8 rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(0,229,255,0.08),transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,70,166,0.08),transparent_55%)]/10 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.7)] backdrop-blur-3xl md:p-8",
        className
      )}
    >
      {(eyebrow || title || description) && (
        <div className="max-w-2xl space-y-3">
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-gradient text-2xl font-semibold md:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-slate-300 md:text-base">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}


