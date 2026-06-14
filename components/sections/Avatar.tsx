"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Avatar() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2,
            }}
            className="relative"
        >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl scale-125" />
            {/* Outer ring */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/avatar.svg"
                        alt="Avatar"
                        width={160}
                        height={160}
                        className="object-cover w-full h-full rounded-full"
                        priority
                    />
                </div>
            </div>
            {/* Status dot */}
            <motion.div
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-[#0a0a0f]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.div>
    );
}