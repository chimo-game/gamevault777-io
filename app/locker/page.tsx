"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Timer, ArrowRight, ShieldCheck, Gamepad2, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { VaultAnimation } from "@/components/locker/vault-animation";
import { OfferCard } from "@/components/locker/offer-card";
import { cn } from "@/lib/utils";

// Mock Offer Feed
const MOCK_OFFERS = [
    { id: "1", anchor: "Play Raid Shadow Legends", conversion: "Reach Level 10 to unlock", url: "https://example.com/offer1" },
    { id: "2", anchor: "Download TikTok", conversion: "Install and run for 30 seconds", url: "https://example.com/offer2" },
    { id: "3", anchor: "Complete Quick Survey", conversion: "Answer 5 questions", url: "https://example.com/offer3" },
    { id: "4", anchor: "Sign up for Free Trial", conversion: "Valid credit card required", url: "https://example.com/offer4" },
    { id: "5", anchor: "Watch Video", conversion: "Watch full 30s video", url: "https://example.com/offer5" },
];

export default function LockerPage() {
    const router = useRouter();
    const [step, setStep] = useState(2); // 1: Account, 2: Unlock, 3: Play
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(30);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [completedOffers, setCompletedOffers] = useState<string[]>([]);

    // Timer Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerActive(false);
        }
        return () => clearInterval(interval);
    }, [isTimerActive, timer]);

    const handleOfferClick = (offerId: string) => {
        if (!completedOffers.includes(offerId)) {
            setCompletedOffers([...completedOffers, offerId]);
            if (!isTimerActive && timer > 0) {
                setIsTimerActive(true);
            }
        }
    };

    const handleVerify = async () => {
        setIsLoading(true);
        // Simulate API verification call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsUnlocked(true);
        setStep(3);

        // Simulate redirect delay after unlock animation
        setTimeout(() => {
            router.push("/dashboard");
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-bg-deep text-white flex flex-col relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center relative z-10">
                {/* Step Progress UI */}
                <div className="w-full max-w-4xl mb-16">
                    <div className="relative flex justify-between items-center">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -z-10" />

                        <div className="flex flex-col items-center gap-3 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-black border-2 border-neon-purple text-neon-purple flex items-center justify-center shadow-[0_0_15px_rgba(188,19,254,0.3)]">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-neon-purple">Account</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 relative z-10">
                            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500",
                                step >= 2 ? "bg-neon-cyan border-none text-black shadow-[0_0_20px_rgba(0,240,255,0.6)] scale-110" : "bg-black border-2 border-white/20 text-white/30")}>
                                <Unlock className="w-6 h-6" />
                            </div>
                            <span className={cn("text-xs font-bold uppercase tracking-widest transition-colors", step >= 2 ? "text-neon-cyan" : "text-white/30")}>Unlock</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 relative z-10">
                            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                                step >= 3 ? "bg-gold border-none text-black shadow-[0_0_20px_rgba(255,215,0,0.5)]" : "bg-black border-2 border-white/20 text-white/30")}>
                                <Gamepad2 className="w-6 h-6" />
                            </div>
                            <span className={cn("text-xs font-bold uppercase tracking-widest transition-colors", step >= 3 ? "text-gold" : "text-white/30")}>Play</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="text-center mb-12 max-w-3xl">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-xs font-bold uppercase tracking-wider mb-6">
                        Security Verification Required
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-none">
                        UNLOCK THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan animate-pulse">VAULT</span>
                    </h1>
                    <p className="text-xl text-white/60 font-light">
                        Complete one verification task below to verify you are human and instantly release your <span className="text-gold font-bold">$500 Balance</span>.
                    </p>
                </div>

                {/* Vault Visual */}
                <VaultAnimation isUnlocked={isUnlocked} />

                {/* Offer Section */}
                {!isUnlocked && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-xl space-y-4"
                    >
                        {/* Instruction Box */}
                        <div className="bg-neon-cyan/5 border border-neon-cyan/20 rounded-xl p-5 flex items-start gap-4 mb-8 backdrop-blur-sm">
                            <div className="p-2 rounded-full bg-neon-cyan/20 text-neon-cyan">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div className="text-sm text-white/80">
                                <p className="font-bold text-neon-cyan mb-2 uppercase tracking-wide">Verification Steps:</p>
                                <ul className="list-disc pl-4 space-y-1.5 font-light">
                                    <li>Click any offer below to open it in a new tab.</li>
                                    <li>Complete the task (typically 30s - 1min).</li>
                                    <li>Return here and click <span className="text-white font-bold">"Verify Status"</span>.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Offers List */}
                        <div className="grid gap-4">
                            {MOCK_OFFERS.map((offer, idx) => (
                                <OfferCard
                                    key={offer.id}
                                    offer={offer}
                                    index={idx}
                                    onClick={() => handleOfferClick(offer.id)}
                                    isCompleted={completedOffers.includes(offer.id)}
                                />
                            ))}
                        </div>

                        {/* Verify Button Area */}
                        <div className="mt-10 p-6 rounded-2xl border border-white/5 bg-black/60 backdrop-blur-xl sticky bottom-4 z-50 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                            {timer > 0 && isTimerActive ? (
                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex items-center gap-2 text-neon-cyan animate-pulse">
                                        <Timer className="w-5 h-5" />
                                        <span className="font-heading font-bold text-lg tracking-wide">SCANNING... {timer}s</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-neon-cyan box-shadow-[0_0_10px_#00F0FF]"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 30, ease: "linear" }}
                                        />
                                    </div>
                                    <p className="text-xs text-white/30 text-center">Waiting for offer provider postback...</p>
                                </div>
                            ) : (
                                <Button
                                    size="lg"
                                    variant={completedOffers.length > 0 ? "neon" : "outline"}
                                    className={cn("w-full h-16 text-xl font-bold uppercase tracking-widest transition-all",
                                        timer === 0 && completedOffers.length > 0 ? "animate-pulse shadow-[0_0_30px_rgba(0,240,255,0.4)]" : "opacity-50"
                                    )}
                                    disabled={completedOffers.length === 0 || (isTimerActive && timer > 0)}
                                    onClick={handleVerify}
                                    isLoading={isLoading}
                                >
                                    {isLoading ? "Unlocking..." : (
                                        <>
                                            <ShieldCheck className="mr-3 h-6 w-6" /> Verify & Access Vault
                                        </>
                                    )}
                                </Button>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Success Message */}
                {isUnlocked && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-neon-cyan/20 text-neon-cyan mb-8 ring-4 ring-neon-cyan/10 shadow-[0_0_40px_rgba(0,240,255,0.3)] animate-bounce">
                            <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <h2 className="text-4xl font-heading font-bold text-white mb-4">ACCESS GRANTED</h2>
                        <p className="text-xl text-white/50 mb-10">Initializing dashboard redirects...</p>
                        <Button variant="neon" size="lg" className="px-12" asChild>
                            <Link href="/dashboard">Enter Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </motion.div>
                )}
            </main>
            <Footer />
        </div>
    );
}


