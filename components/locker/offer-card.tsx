"use client";

import { useState } from "react";
import { Check, ArrowRight, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Offer {
    id: string;
    anchor: string; // Title
    conversion: string; // Description
    url: string;
}

interface OfferCardProps {
    offer: Offer;
    index: number;
    onClick: () => void;
    isCompleted: boolean;
}

export function OfferCard({ offer, index, onClick, isCompleted }: OfferCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        window.open(offer.url, "_blank");
        onClick();
    };

    return (
        <div
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative group cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300",
                isCompleted
                    ? "border-neon-cyan/50 bg-neon-cyan/10 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                    : "border-white/10 bg-white/5 hover:border-neon-purple/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(188,19,254,0.15)]"
            )}
        >
            <div className="flex items-center gap-4">
                {/* Number Badge / Checkmark */}
                <div
                    className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors",
                        isCompleted
                            ? "border-neon-cyan bg-neon-cyan text-black"
                            : "border-white/20 bg-black/40 text-white/70 group-hover:border-neon-purple group-hover:text-neon-purple"
                    )}
                >
                    {isCompleted ? <Check className="h-6 w-6" /> : <span className="font-heading font-bold text-lg">{index + 1}</span>}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className={cn("font-heading font-bold text-lg leading-tight mb-1 transition-colors",
                        isCompleted ? "text-neon-cyan" : "text-white group-hover:text-neon-purple")}>
                        {offer.anchor}
                    </h3>
                    <p className="text-sm text-white/60">{offer.conversion}</p>
                </div>

                {/* Action Arrow */}
                <div className={cn("rounded-full p-2 transition-all duration-300",
                    isCompleted ? "bg-neon-cyan/20" : "bg-white/5 group-hover:bg-neon-purple/20")}>
                    <ArrowRight className={cn("h-5 w-5 transition-transform",
                        isCompleted ? "text-neon-cyan" : "text-white/30 group-hover:text-neon-purple group-hover:translate-x-1")} />
                </div>
            </div>

            {/* Decorative Reward Badge */}
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge variant="outline" className="text-[10px] h-6 px-2 border-gold/50 text-gold bg-black/60 backdrop-blur-md shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                    <DollarSign className="h-3 w-3 mr-1" /> +$50 CASH
                </Badge>
            </div>
        </div>
    );
}
