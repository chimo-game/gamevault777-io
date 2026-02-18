"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Play, Star, Shield, Info, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/shared/section-header";
import { GameCard } from "@/components/game-card";

// Mock Data (Simulated fetch based on slug)
const GAME_DATA = {
    title: "Golden Dragon",
    provider: "Fish Hunter",
    category: "Fish Games",
    rtp: "97.5%",
    volatility: "Medium",
    maxWin: "5000x",
    description: "Dive deep into the ocean and hunt for the legendary Golden Dragon. Features multipliers, bomb crabs, and massive jackpots.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    screenshots: [
        "https://images.unsplash.com/photo-1582967788606-a171f1080cae?q=80&w=600",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600",
        "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=600",
    ],
};

const RELATED_GAMES = [
    { id: 5, title: "Deep Sea King", category: "Fish Games", image: "https://images.unsplash.com/photo-1582967788606-a171f1080cae?q=80&w=800", new: true, slug: "deep-sea-king" },
    { id: 10, title: "Ocean King", category: "Fish Games", image: "https://images.unsplash.com/photo-1582967788606-a171f1080cae?q=80&w=800", slug: "ocean-king" },
    { id: 1, title: "Golden Dragon", category: "Fish Games", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", hot: true, slug: "golden-dragon" },
    { id: 6, title: "Vegas Nights", category: "Slots", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800", slug: "vegas-nights" },
];

export default function GameDetailPage({ params }: { params: { slug: string } }) {
    // In a real app, use params.slug to fetch data
    const game = GAME_DATA;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero / Header */}
            <div className="relative pt-32 pb-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover opacity-20 blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="container px-4 mx-auto relative z-10">
                    <Button variant="ghost" size="sm" className="mb-8 pl-0 hover:pl-2 transition-all" asChild>
                        <Link href="/games"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Lobby</Link>
                    </Button>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Game Poster */}
                        <div className="w-full md:w-1/3 max-w-sm shrink-0">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-gold/20">
                                <Image
                                    src={game.image}
                                    alt={game.title}
                                    fill
                                    className="object-cover"
                                />
                                <Badge variant="hot" className="absolute top-4 left-4">HOT</Badge>
                            </div>
                        </div>

                        {/* Game Info */}
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <Badge variant="outline" className="text-gold border-gold/30">{game.category}</Badge>
                                <span className="text-white/50 text-sm">{game.provider}</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                                {game.title}
                            </h1>

                            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl">
                                {game.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <div className="bg-white/5 rounded-lg p-4 border border-white/5 flex items-center gap-3">
                                    <Star className="text-gold h-5 w-5" />
                                    <div>
                                        <p className="text-xs text-white/50 uppercase">RTP</p>
                                        <p className="font-bold text-white">{game.rtp}</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 border border-white/5 flex items-center gap-3">
                                    <Shield className="text-gold h-5 w-5" />
                                    <div>
                                        <p className="text-xs text-white/50 uppercase">Volatility</p>
                                        <p className="font-bold text-white">{game.volatility}</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 border border-white/5 flex items-center gap-3">
                                    <Info className="text-gold h-5 w-5" />
                                    <div>
                                        <p className="text-xs text-white/50 uppercase">Max Win</p>
                                        <p className="font-bold text-white">{game.maxWin}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button size="lg" className="h-14 px-10 text-lg shadow-lg shadow-gold/20" asChild>
                                    <Link href={`/play/${params.slug || 'game-1'}`}>
                                        <Play className="mr-2 h-5 w-5 fill-current" /> Play Now
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="h-14 px-6 text-lg">
                                    Demo Mode
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Screenshots */}
            <section className="py-12 bg-black/20">
                <div className="container px-4 mx-auto">
                    <SectionHeader title="Gallery" className="mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {game.screenshots.map((src, index) => (
                            <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-white/5 hover:border-gold/30 transition-colors">
                                <Image src={src} alt={`Screenshot ${index + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Games */}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <SectionHeader title="You May Also Like" className="mb-12" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {RELATED_GAMES.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
