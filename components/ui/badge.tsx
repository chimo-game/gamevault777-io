import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-heading",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-gold text-black shadow-[0_0_10px_rgba(255,215,0,0.3)] hover:bg-gold/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
                neon: "border-transparent bg-neon-cyan text-black shadow-[0_0_10px_rgba(0,229,255,0.5)]",
                hot: "border-transparent bg-gradient-to-r from-neon-red to-orange-500 text-white shadow-[0_0_10px_rgba(255,45,85,0.5)] animate-pulse",
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
