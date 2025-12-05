import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden border border-white/10",
        "before:pointer-events-none before:absolute before:inset-[-1px] before:bg-[radial-gradient(circle_at_0_0,rgba(0,229,255,0.2),transparent_55%),radial-gradient(circle_at_100%_0,rgba(255,70,166,0.15),transparent_55%)] before:opacity-60",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative z-10 p-5 md:p-6", className)} {...props} />
  );
}




