"use client";

import { motion } from "framer-motion";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/config/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    const { projects } = portfolioConfig;

    return (
        <section id="projects" className="py-24 px-4 relative">
            {/* Section background glow */}
            <div
                className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Dự án nổi bật
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Những dự án tôi đã tham gia phát triển và tối ưu
                    </p>
                </div>

                {/* Project grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group"
                        >
                            <Card className="h-full flex flex-col overflow-hidden">
                                {/* Top accent bar with gradient */}
                                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-60" />

                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-3 mt-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    {/* Tech stack badges */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech) => (
                                            <Badge key={tech} variant="tech">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Impact / Role */}
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Vai trò
                                            </span>
                                            <p className="text-sm font-medium text-slate-200">
                                                {project.role}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Tác động
                                            </span>
                                            <p className="text-sm text-slate-400">{project.impact}</p>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="gap-4">
                                    <a
                                        ref={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                                    >
                                        GitHub{" "}
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            Live Demo{" "}
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}