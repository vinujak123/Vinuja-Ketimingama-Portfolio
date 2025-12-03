"use client";

import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

// Lightweight wrapper so we can easily reintroduce advanced scrolling later
export function SmoothScroll({ children }: SmoothScrollProps) {
  return <div className="min-h-screen">{children}</div>;
}

