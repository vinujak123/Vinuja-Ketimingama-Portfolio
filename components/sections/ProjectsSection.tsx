"use client";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { RevealOnScroll } from "@/components/motion/motion-wrappers";
import { Card, CardContent } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const featuredProjects = [
  {
    title: "Wijeya Newspaper Admin System",
    description:
      "Administrative web application for Wijeya Newspapers with role-based dashboards, RESTful APIs, rich-text content, and Amazon S3 file storage.",
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Amazon S3"],
    hrefDemo: "#",
    hrefCode: "#",
  },
  {
    title: "Wijeya Newspaper Front-Web",
    description:
      "React-based front-end focused on fast content delivery, accessibility, and SEO with RESTful APIs, SMTP integration, and production deployment.",
    tags: ["React", "Tailwind CSS", "REST APIs", "SMTP", "SEO"],
    hrefDemo: "#",
    hrefCode: "#",
  },
  {
    title: "Lumi AI Platform",
    description:
      "Full-stack AI human model platform with admin and customer dashboards, wardrobe management, media uploads, and SEO-optimized marketing pages.",
    tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS"],
    hrefDemo: "#",
    hrefCode: "#",
  },
];

const gridProjects = [
  {
    title: "Education CRM for TSHE",
    description:
      "Comprehensive CRM for educational institutions with multi-role access, dashboards, exports, WhatsApp campaigns, and activity logging.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3"],
  },
  {
    title: "Lumi Admin & Customer Dashboards",
    description:
      "Admin and customer dashboards for managing AI models, wardrobe items, subscriptions, and CMS content.",
    stack: ["Next.js", "Prisma", "MySQL", "Tailwind CSS"],
  },
  {
    title: "SEO & Analytics Toolkit",
    description:
      "Meta tags, OG tags, sitemaps, and monitoring setup reused across multiple projects for better SEO and observability.",
    stack: ["Next.js", "SEO", "Analytics"],
  },
  {
    title: "UI Component Library",
    description:
      "Reusable React components styled with Tailwind CSS to speed up delivery across projects.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work from internships, freelance, and academic projects."
      description="Real-world projects across admin systems, content platforms, CRM dashboards, and AI experiences — all focused on usability, performance, and maintainability."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)]">
        <RevealOnScroll delay={0.05}>
          <Card className="h-full">
            <CardContent className="flex h-full flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Slider · Cinematic overview
                </p>
                <Tag variant="outline">Swiper.js</Tag>
              </div>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={28}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5200, disableOnInteraction: false }}
                className="!pb-10"
              >
                {featuredProjects.map((project) => (
                  <SwiperSlide key={project.title}>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-50 md:text-xl">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-300 md:text-[15px]">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 pt-1">
                        <Button asChild size="sm">
                          <a href={project.hrefDemo} target="_blank">
                            View demo
                          </a>
                        </Button>
                        <Button asChild variant="ghost" size="sm">
                          <a href={project.hrefCode} target="_blank">
                            Source code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardContent>
          </Card>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12}>
          <div className="grid gap-4 md:grid-cols-2">
            {gridProjects.map((project) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden border-white/15 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--accent-cyan)]/70 hover:shadow-[0_28px_70px_rgba(8,47,73,0.85)]"
              >
                <CardContent className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-medium text-slate-50">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      Case study
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </CardContent>
                <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              </Card>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}


