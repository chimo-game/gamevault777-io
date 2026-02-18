"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Maximize, Minimize, RefreshCw, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function GamePlayerPage({ params }: { params: { gameId: string } }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
            {/* Top Bar Overlay */}
            <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-4">
                    <Button variant="secondary" size="icon" className="rounded-full bg-black/50 backdrop-blur-md border-white/10 hover:bg-white/10" asChild>
                        <Link href="/games">
                            <ArrowLeft className="h-5 w-5 text-white" />
                        </Link>
                    </Button>
                    <div className="hidden md:block">
                        <h1 className="text-white font-bold font-heading text-lg drop-shadow-md">Golden Dragon</h1>
                        <span className="text-white/60 text-xs">Fish Hunter</span>
                    </div>
                </div>

                <div className="pointer-events-auto flex items-center gap-4">
                    {/* Balance Display */}
                    <div className="bg-black/60 backdrop-blur-md border border-gold/30 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                        <span className="text-xs text-gold uppercase font-bold tracking-wider">Balance</span>
                        <span className="text-white font-display font-bold text-lg">$1,250.50</span>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-black/40 hover:bg-white/10 text-white"
                            onClick={() => setIsMuted(!isMuted)}
                        >
                            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-black/40 hover:bg-white/10 text-white"
                            onClick={toggleFullscreen}
                        >
                            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Game Iframe Mock */}
            <div className="flex-1 relative bg-zinc-900 w-full h-full flex items-center justify-center">
                {isLoading ? (
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-gold font-display text-xl animate-pulse">Loading Game Vault...</p>
                    </div>
                ) : (
                    <div className="w-full h-full relative">
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1" // Placeholder
                            className="w-full h-full object-cover opacity-50 pointer-events-none"
                            allow="autoplay; encrypted-media"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-black/80 backdrop-blur-md p-8 rounded-2xl border border-gold/30 text-center max-w-md">
                                <h2 className="text-2xl font-display text-gold mb-2">Game Simulation</h2>
                                <p className="text-white/70">
                                    This is a placeholder for the actual game iframe integration.
                                    In production, this would load the game provider URL.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
