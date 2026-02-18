import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    eyebrow?: string;
    description?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeader({
    title,
    eyebrow,
    description,
    centered = false,
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-2 mb-12",
                centered ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            {eyebrow && (
                <span className="text-gold font-bold tracking-widest uppercase text-sm font-heading">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-white/60 text-lg max-w-2xl leading-relaxed mt-4">
                    {description}
                </p>
            )}
            <div
                className={cn(
                    "h-1 w-24 bg-gradient-to-r from-gold to-transparent mt-6 rounded-full",
                    centered ? "mx-auto" : "mr-auto"
                )}
            />
        </div>
    );
}
