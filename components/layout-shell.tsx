"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

interface LayoutShellProps {
  children: ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <SmoothScroll>
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-[#050816] via-[#020617] to-[#02010f]">
        <Navbar />
        <main
          data-scroll-container
          className="smooth-scroll relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-14 px-4 pb-4 pt-28 md:px-8 lg:px-10"
        >
          {children}
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}


