"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";

interface MagneticCTAProps extends ButtonProps {
    href: string;
    children: ReactNode;
}

export default function MagneticCTA({
    href,
    children,
    variant = "default",
    size = "default",
    ...props
}: MagneticCTAProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={ref as any}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            style={{ display: "inline-block", textDecoration: "none" }}
        >
            <Button variant={variant} size={size} asChild={false} {...props}>
                {children}
            </Button>
        </motion.a>
    );
}