"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
    const { education } = portfolioConfig;

    return (
        <section className="py-24 px-4 relative">
            {/* Section background glow */}
            <div
                className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Học vấn
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Nền tảng kiến thức chuyên môn
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <div className="w-full max-w-lg rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] p-8 shadow-lg hover:border-cyan-400/20 transition-all duration-300">
                        <div className="flex items-center gap-3 text-cyan-400 mb-4">
                            <GraduationCap className="w-6 h-6" />
                            <span className="text-sm font-semibold uppercase tracking-wider">
                                {education.period}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            {education.degree}
                        </h3>
                        <p className="text-base text-cyan-300 mb-4">
                            {education.school}
                        </p>
                        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-1.5">
                            <span className="text-sm text-slate-300">GPA:</span>
                            <span className="text-lg font-bold text-cyan-400">
                                {education.gpa}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}