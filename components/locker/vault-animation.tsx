"use client";

import { motion } from "framer-motion";
import { Lock, Unlock } from "lucide-react";

interface VaultAnimationProps {
    isUnlocked: boolean;
}

export function VaultAnimation({ isUnlocked }: VaultAnimationProps) {
    return (
        <div className="relative w-64 h-64 flex items-center justify-center mx-auto mb-10">
            {/* Outer Rotating Ring - Neon Cyan */}
            <motion.div
                className="absolute inset-0 rounded-full border-[3px] border-dashed border-neon-cyan/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Middle Counter-Rotating Ring - Neon Purple */}
            <motion.div
                className="absolute inset-4 rounded-full border-[1px] border-neon-purple/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner Pulsing Ring - Gold */}
            <motion.div
                className="absolute inset-8 rounded-full border-[2px] border-gold/20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Core Glow */}
            <div className="absolute inset-20 bg-neon-cyan/20 blur-[40px] rounded-full animate-pulse" />

            {/* Center Icon Background */}
            <motion.div
                className="relative z-10 w-28 h-28 rounded-full bg-black/80 border border-gold/50 flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.1)] backdrop-blur-xl"
                animate={isUnlocked ? {
                    borderColor: "#00F0FF",
                    boxShadow: "0 0 60px rgba(0,240,255,0.5)",
                    scale: [1, 1.1, 1]
                } : {}}
            >
                {isUnlocked ? (
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <Unlock className="w-12 h-12 text-neon-cyan drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                    </motion.div>
                ) : (
                    <motion.div
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Lock className="w-12 h-12 text-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
