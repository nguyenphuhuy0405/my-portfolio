import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f]",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-white/10 text-slate-200 backdrop-blur-sm",
                secondary:
                    "border-white/5 bg-white/5 text-slate-300 backdrop-blur-sm",
                destructive:
                    "border-red-400/30 bg-red-500/20 text-red-300 backdrop-blur-sm",
                outline: "border-white/10 text-slate-400",
                tech: "border-blue-400/30 bg-blue-500/10 text-blue-300 backdrop-blur-sm",
                neon: "border-purple-400/30 bg-purple-500/10 text-purple-300 backdrop-blur-sm",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };