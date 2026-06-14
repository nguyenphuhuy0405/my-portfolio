"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
    const { experience } = portfolioConfig;

    return (
        <section className="py-24 px-4 relative">
            {/* Section background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Kinh nghiệm làm việc
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Hành trình phát triển sự nghiệp của tôi
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent -translate-x-1/2"
                        aria-hidden="true"
                    />

                    <div className="space-y-12">
                        {experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="relative flex flex-col items-start gap-6"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#0a0a0f] shadow-lg shadow-blue-500/30 z-10 mt-6" />

                                {/* Content card - centered on mobile, offset on desktop */}
                                <div className="w-full sm:w-1/2 sm:mx-auto pl-12 sm:pl-0">
                                    <div className="rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] p-6 shadow-lg hover:border-blue-400/20 hover:bg-white/[0.06] transition-all duration-300">
                                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                                            <Briefcase className="w-4 h-4" />
                                            <span className="text-sm font-semibold uppercase tracking-wider">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white">
                                            {exp.title}
                                        </h3>
                                        <p className="text-sm font-medium text-blue-400 mb-3">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-slate-400 mb-4">
                                            {exp.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {exp.highlights.map((item, j) => (
                                                <li
                                                    key={j}
                                                    className="text-sm text-slate-300 flex items-start gap-2"
                                                >
                                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}