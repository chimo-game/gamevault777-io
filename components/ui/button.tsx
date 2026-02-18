import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-heading tracking-wide uppercase selected-none relative overflow-hidden",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:scale-105 active:scale-95 border border-gold-bright/50",
                neon:
                    "bg-gradient-to-r from-neon-purple to-neon-cyan text-black font-bold hover:shadow-[0_0_20px_rgba(188,19,254,0.6)] hover:scale-105 border border-white/20",
                shiny:
                    "relative overflow-hidden bg-black border border-gold/50 text-gold hover:text-white hover:border-white transition-colors before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[0_0_20px_rgba(255,23,68,0.5)]",
                outline:
                    "border border-white/20 bg-transparent hover:bg-white/5 hover:border-gold text-white hover:text-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]",
                secondary:
                    "bg-card border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
                ghost: "hover:bg-white/5 hover:text-neon-cyan",
                link: "text-neon-cyan underline-offset-4 hover:underline",
                glass:
                    "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-lg px-8 text-base",
                icon: "h-10 w-10",
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
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading, children, ...props }, ref) => {
        if (asChild) {
            return (
                <Slot
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                >
                    {children}
                </Slot>
            );
        }

        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
