import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-50",
                className
            )}
        />
    );
}
