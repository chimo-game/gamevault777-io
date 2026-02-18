"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Shield, Zap, Gift, Headphones, Smartphone, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ParticleBackground } from "@/components/shared/particle-background";
import { SectionHeader } from "@/components/shared/section-header";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GlitchText } from "@/components/shared/glitch-text";

const features = [
  {
    icon: Zap,
    title: "Instant Crypto Payouts",
    description: "Withdraw winnings in under 5 minutes via Bitcoin, Litecoin, or CashApp.",
  },
  {
    icon: Shield,
    title: "Vault-Grade Security",
    description: "Protected by military-grade encryption and automated fraud detection systems.",
  },
  {
    icon: Gift,
    title: "Daily Neon Bonuses",
    description: "Login daily for free spins, chip drops, and exclusive flash rewards.",
  },
];

const games = [
  {
    id: 1,
    title: "Golden Dragon",
    category: "Fish Game",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    hot: true,
  },
  {
    id: 2,
    title: "Buffalo Thunder",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    hot: true,
  },
  {
    id: 3,
    title: "Royal Poker",
    category: "Cards",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=800&auto=format&fit=crop",
    new: true,
  },
  {
    id: 4,
    title: "Fortune Wheel",
    category: "Specialty",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-bg-deep selection:bg-neon-cyan selection:text-black">
      <Navbar />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-cyan/20 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden z-10">
        <div className="container px-4 mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-16">

            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 border border-neon-cyan/30 bg-neon-cyan/5 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                  <span className="text-neon-cyan text-xs font-bold tracking-widest uppercase">Vegas Style Sweepstakes</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-[0.85] tracking-tight"
              >
                GAME <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-cyan animate-gradient-x filter drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]">
                  <GlitchText text="VAULT" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-blue-100/70 mb-10 max-w-lg font-light leading-relaxed"
              >
                Enter the neon-soaked arena of high-stakes entertainment.
                <span className="text-neon-cyan font-semibold"> 500+ Games.</span>
                <span className="text-neon-purple font-semibold"> Instant Wins.</span>
                <span className="text-gold font-semibold"> Zero Limits.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-cyan hover:to-neon-purple text-black font-bold shadow-[0_0_20px_rgba(188,19,254,0.4)] border-none transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/register">
                    <Play className="fill-black w-5 h-5 mr-2" /> Start Playing
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/20 hover:bg-white/5 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300" asChild>
                  <Link href="/games">View Gallery</Link>
                </Button>
              </motion.div>
            </div>

            {/* Visual Element: Neon Portal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2 flex items-center justify-center relative z-10"
            >
              <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px]">
                {/* Cyber Rings */}
                <div className="absolute inset-0 rounded-full border-[2px] border-neon-cyan/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border-[1px] border-neon-purple/30 animate-[spin_15s_linear_infinite_reverse] border-dashed" />
                <div className="absolute inset-16 rounded-full border-[4px] border-transparent border-t-gold/50 border-r-gold/50 animate-[spin_8s_linear_infinite]" />

                {/* Core Glow */}
                <div className="absolute inset-[20%] bg-gradient-to-br from-neon-purple via-black to-neon-cyan blur-[60px] opacity-60 animate-pulse" />

                {/* Main Graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 transform hover:scale-110 transition-transform duration-500 cursor-default">
                    <span className="text-[140px] md:text-[240px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                      777
                    </span>
                    {/* Floating Assets */}
                    <motion.div
                      animate={{ y: [-15, 15, -15] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-10 -right-4 bg-black/60 backdrop-blur-xl border border-neon-gold/50 p-4 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                          <Trophy className="text-gold w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs text-gold/80 font-bold uppercase tracking-wider">Mega Jackpot</p>
                          <p className="text-xl font-display font-bold text-white">$42,981.00</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Games Strip - Glass Version */}
      <section className="py-24 relative z-10">
        <div className="container px-4 mx-auto">
          <SectionHeader
            title="Trending Now"
            eyebrow="Hot Picks"
            description="The most played games in the vault this week."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="group relative h-full rounded-2xl overflow-hidden cursor-pointer">
                  {/* Card Background & Border */}
                  <div className="absolute inset-0 bg-bg-card border border-white/5 group-hover:border-neon-cyan/50 transition-colors duration-300 rounded-2xl z-0" />

                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl z-10 m-1">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent opacity-80" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <p className="text-neon-cyan text-xs font-bold uppercase mb-1 tracking-wider">{game.category}</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors">{game.title}</h3>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                      <div className="w-16 h-16 rounded-full bg-neon-cyan flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.6)] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <Play className="fill-black w-6 h-6 ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  {game.hot && (
                    <Badge className="absolute top-4 right-4 bg-neon-red text-white shadow-[0_0_15px_rgba(255,45,85,0.6)] border-none">HOT</Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Neon Icons */}
      <section className="py-24 relative bg-bg-deep/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-neon-purple/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(188,19,254,0.3)]">
                  <feature.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 opacity-20" />
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Level Up Your Game
          </h2>
          <Button size="lg" className="h-20 px-16 text-2xl rounded-full bg-white text-black hover:bg-neon-cyan hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]" asChild>
            <Link href="/register">Join The Vault</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
