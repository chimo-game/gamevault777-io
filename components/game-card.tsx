"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GameProps {
    id: string | number;
    title: string;
    category: string;
    image: string;
    hot?: boolean;
    new?: boolean;
    slug?: string;
}

export function GameCard({ game }: { game: GameProps }) {
    return (
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <Card className="h-full overflow-hidden group cursor-pointer border-white/5 hover:border-gold/50 bg-card/40 relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-sm">
                        <Button className="rounded-full px-6 gap-2" asChild>
                            <Link href={`/games/${game.slug || game.id}`}>
                                <Play size={16} fill="currentColor" /> Play
                            </Link>
                        </Button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {game.hot && <Badge variant="hot">HOT</Badge>}
                        {game.new && <Badge variant="neon">NEW</Badge>}
                    </div>
                </div>

                <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                        <div className="w-full">
                            <h3 className="font-heading font-bold text-lg text-white group-hover:text-gold transition-colors truncate">
                                {game.title}
                            </h3>
                            <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{game.category}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
