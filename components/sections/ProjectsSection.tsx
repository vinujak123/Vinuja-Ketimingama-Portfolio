"use client";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Tag } from "@/components/ui/tag";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const allProjects = [
  {
    title: "Lumi AI Platform",
    description:
      "Full-stack AI human model platform with admin and customer dashboards.",
    tags: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    image: "/Lumi.jpg",
    category: "Full-Stack",
  },
  {
    title: "Wijeya Newspaper Front-Web",
    description:
      "React-based front-end focused on fast content delivery, accessibility, and SEO.",
    tags: ["React", "Tailwind CSS", "REST APIs", "SMTP", "SEO"],
    image: "/Wijeya Front web.jpg",
    category: "Frontend",
  },
  {
    title: "Wijeya Newspaper Admin System",
    description:
      "Administrative web application for Wijeya Newspapers with role-based dashboards, RESTful APIs, rich-text content, and Amazon S3 file storage.",
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Amazon S3"],
    image: "/Wijeya admin system.jpg",
    category: "Full-Stack",
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
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          navigation={true}
          loop={true}
          className="projects-swiper !overflow-visible"
        >
          {allProjects.map((project, index) => (
            <SwiperSlide key={project.title}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-white/15 bg-gradient-to-br from-slate-950/60 via-slate-900/50 to-slate-950/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-white/30 hover:shadow-[0_30px_100px_rgba(0,0,0,0.9)] sm:rounded-3xl"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
                  <Image
                    src={project.image || "/placeholder-project.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-10">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                  >
                    {/* Category badge */}
                    <div className="mb-3 flex items-center gap-3 sm:mb-4 sm:gap-4">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border-2 border-white/30 bg-gradient-to-r from-black/60 via-black/40 to-black/60 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-200 backdrop-blur-sm shadow-lg sm:px-4"
                      >
                        {project.category}
                      </motion.span>
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-gradient-to-br group-hover:from-cyan-500/20 group-hover:to-blue-500/20"
                        whileHover={{ rotate: 45 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowUpRight className="h-5 w-5 text-slate-300 transition-colors group-hover:text-cyan-300" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-200 sm:mb-3 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-3 max-w-2xl text-xs leading-relaxed text-slate-200 sm:mb-4 sm:text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.3 + tagIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Tag className="border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/20 group-hover:text-cyan-100">
                            {tag}
                          </Tag>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Shine effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Styles */}
        <style jsx global>{`
          .projects-swiper .swiper-button-next,
          .projects-swiper .swiper-button-prev {
            color: rgba(56, 189, 248, 0.8);
            background: rgba(15, 23, 42, 0.9);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          }
          @media (min-width: 640px) {
            .projects-swiper .swiper-button-next,
            .projects-swiper .swiper-button-prev {
              width: 50px;
              height: 50px;
            }
          }
          .projects-swiper .swiper-button-next:hover,
          .projects-swiper .swiper-button-prev:hover {
            color: rgb(56, 189, 248);
            background: rgba(15, 23, 42, 0.95);
            border-color: rgba(56, 189, 248, 0.5);
            transform: scale(1.1);
          }
          .projects-swiper .swiper-button-next::after,
          .projects-swiper .swiper-button-prev::after {
            font-size: 20px;
            font-weight: bold;
          }
          .projects-swiper .swiper-pagination {
            bottom: 20px !important;
          }
          .projects-swiper .custom-bullet {
            background: rgba(255, 255, 255, 0.3);
            opacity: 1;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            transition: all 0.3s ease;
            margin: 0 4px;
          }
          .projects-swiper .swiper-pagination-bullet-active.custom-bullet {
            background: rgb(56, 189, 248);
            width: 32px;
            border-radius: 6px;
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.6);
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}
