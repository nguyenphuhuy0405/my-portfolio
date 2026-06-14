"use client";

import { motion } from "framer-motion";
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";
import { portfolioConfig } from "@/config/portfolio";

export default function TechStack() {
    const { skills } = portfolioConfig;

    return (
        <section className="py-24 px-4 overflow-hidden relative">
            {/* Section background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Công nghệ sử dụng
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Những công nghệ tôi sử dụng hàng ngày để xây dựng sản phẩm
                    </p>
                </div>

                {/* Infinite horizontal scroll marquee */}
                <TooltipProvider delayDuration={100}>
                    <div className="relative">
                        {/* Gradient fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-[#0a0a0f] to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-[#0a0a0f] to-transparent pointer-events-none" />

                        <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                            <motion.div
                                className="flex flex-shrink-0 gap-6 py-4"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 35,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                {[...skills, ...skills].map((skill, i) => (
                                    <Tooltip key={i}>
                                        <TooltipTrigger asChild>
                                            <motion.div
                                                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/4 backdrop-blur-xl border border-white/8 shadow-lg cursor-pointer hover:border-blue-400/30 hover:bg-white/8 transition-all duration-300"
                                                whileHover={{ scale: 1.05, y: -4 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 15,
                                                }}
                                            >
                                                <span className="text-2xl">{skill.icon}</span>
                                                <span className="font-medium text-slate-200 whitespace-nowrap">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        </TooltipTrigger>
                                        <TooltipContent side="top" align="center">
                                            <p className="font-medium text-slate-100">{skill.name}</p>
                                            <p className="text-xs text-slate-400">
                                                Kinh nghiệm 1+ năm
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </TooltipProvider>
            </div>
        </section>
    );
}