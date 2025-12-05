import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
   center?: boolean;
  children: ReactNode;
}

export function SectionWrapper({
  id,
  className,
  eyebrow,
  title,
  description,
  center,
  children,
}: SectionWrapperProps) {
  const headerClasses = center
    ? "mx-auto max-w-3xl space-y-3 text-center"
    : "max-w-2xl space-y-3";

  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 space-y-6 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(0,229,255,0.08),transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,70,166,0.08),transparent_55%)]/10 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.7)] backdrop-blur-3xl sm:scroll-mt-24 sm:space-y-8 sm:rounded-3xl sm:p-6 md:scroll-mt-28 md:p-8 md:rounded-[32px]",
        className
      )}
    >
      {(eyebrow || title || description) && (
        <div className={headerClasses}>
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-gradient text-xl font-semibold leading-tight sm:text-2xl md:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}


