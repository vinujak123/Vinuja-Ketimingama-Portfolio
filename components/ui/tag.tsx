import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Tag({ className, variant = "default", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.18em]",
        variant === "default"
          ? "border-white/15 bg-white/5 text-slate-200"
          : "border-white/25 text-slate-300",
        className
      )}
      {...props}
    />
  );
}




