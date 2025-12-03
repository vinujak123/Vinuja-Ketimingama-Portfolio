import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#00E5FF] via-[#FF46A6] to-[#FF8A00] text-slate-950 shadow-[0_0_40px_rgba(0,229,255,0.5)] hover:shadow-[0_0_55px_rgba(0,229,255,0.8)]",
        ghost:
          "border border-white/15 bg-white/5 text-slate-100 hover:border-white/35 hover:bg-white/10",
        neon:
          "border border-[#00E5FF]/60 bg-[#020617] text-sky-100 shadow-[0_0_30px_rgba(56,189,248,0.65)] hover:border-[#FF46A6]/70 hover:shadow-[0_0_45px_rgba(244,114,182,0.75)]",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-11 px-6 text-sm md:h-12 md:px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // accepted but ignored to keep API flexible
}

export function Button({
  className,
  variant,
  size,
  // asChild is intentionally accepted but removed before spreading props
  asChild,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        "relative overflow-hidden",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 opacity-0 mix-blend-screen blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative z-10">{props.children}</span>
    </button>
  );
}


