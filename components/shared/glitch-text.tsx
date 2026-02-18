"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
    return (
        <div className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-cyan opacity-0 group-hover:opacity-70 animate-glitch sm:group-hover:translate-x-[2px]">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-magenta opacity-0 group-hover:opacity-70 animate-glitch sm:group-hover:-translate-x-[2px]" style={{ animationDelay: "0.1s" }}>
                {text}
            </span>
        </div>
    );
}
