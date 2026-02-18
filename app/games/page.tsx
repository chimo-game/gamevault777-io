"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/shared/section-header";
import { GameCard } from "@/components/game-card";
import { Badge } from "@/components/ui/badge";

// Mock Data
const ALL_GAMES = [
    { id: 1, title: "Golden Dragon", category: "Fish Games", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", hot: true, slug: "golden-dragon" },
    { id: 2, title: "Buffalo Thunder", category: "Slots", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", hot: true, slug: "buffalo-thunder" },
    { id: 3, title: "Royal Poker", category: "Table Games", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=800", new: true, slug: "royal-poker" },
    { id: 4, title: "Fortune Wheel", category: "Specialty", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800", slug: "fortune-wheel" },
    { id: 5, title: "Deep Sea King", category: "Fish Games", image: "https://images.unsplash.com/photo-1582967788606-a171f1080cae?q=80&w=800", new: true, slug: "deep-sea-king" },
    { id: 6, title: "Vegas Nights", category: "Slots", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800", slug: "vegas-nights" },
    { id: 7, title: "Blackjack Pro", category: "Table Games", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=800", slug: "blackjack-pro" },
    { id: 8, title: "Live Roulette", category: "Live Casino", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800", hot: true, slug: "live-roulette" },
    { id: 9, title: "Fire Link", category: "Slots", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", slug: "fire-link" },
    { id: 10, title: "Ocean King", category: "Fish Games", image: "https://images.unsplash.com/photo-1582967788606-a171f1080cae?q=80&w=800", slug: "ocean-king" },
];

const CATEGORIES = ["All", "Slots", "Fish Games", "Table Games", "Live Casino"];

export default function GamesPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredGames = ALL_GAMES.filter((game) => {
        const matchesCategory = activeCategory === "All" || game.category === activeCategory;
        const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-32 pb-20 container px-4 mx-auto">
                <SectionHeader title="Game Lobby" description="Browse our collection of over 500+ premium casino games." />

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveCategory(category)}
                                className="rounded-full"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search games..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 bg-white/5 border-white/10 focus:border-gold"
                        />
                    </div>
                </div>

                {/* Games Grid */}
                {filteredGames.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {filteredGames.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-white/50 text-lg">No games found matching your criteria.</p>
                        <Button variant="link" onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}>
                            Clear Filters
                        </Button>
                    </div>
                )}

                {/* Load More */}
                {filteredGames.length > 0 && (
                    <div className="mt-12 text-center">
                        <Button variant="outline" size="lg" className="min-w-[200px]">
                            Load More Games
                        </Button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
