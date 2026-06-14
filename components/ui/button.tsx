"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
    {
        variants: {
            variant: {
                default:
                    "bg-white/10 backdrop-blur-md border border-white/10 text-slate-100 hover:bg-white/15 hover:border-white/20 shadow-lg",
                primary:
                    "bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-400/30 text-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-purple-500/30",
                destructive:
                    "bg-red-500/20 backdrop-blur-md border border-red-400/30 text-red-300 hover:bg-red-500/30 shadow-lg",
                outline:
                    "bg-transparent border border-white/10 text-slate-300 hover:bg-white/5 hover:border-white/20",
                secondary:
                    "bg-white/5 backdrop-blur-md border border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/10",
                ghost: "text-slate-400 hover:bg-white/5 hover:text-slate-200",
                link: "text-blue-400 underline-offset-4 hover:underline hover:text-blue-300",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-lg px-4 text-xs",
                lg: "h-13 rounded-xl px-9 text-base",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };