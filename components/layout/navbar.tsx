"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Games", href: "/games" },
    { name: "Bonuses", href: "/bonuses" },
    { name: "VIP", href: "/vip" },
    { name: "Download", href: "/locker?intent=download" },
    { name: "Support", href: "/support" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border-white/10 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container px-4 mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gold to-gold-dark rounded-full shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">
                            <span className="font-display text-black font-bold text-xl">7</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display text-lg leading-none tracking-widest text-gold text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">
                                GAME VAULT
                            </span>
                            <span className="font-heading text-xs tracking-[0.3em] text-white/70">
                                777 CASINO
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold relative group",
                                    pathname === link.href ? "text-gold" : "text-white/80"
                                )}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA / Auth */}
                    <div className="hidden md:flex items-center gap-4">
                        {isLoggedIn ? (
                            <Button variant="ghost" size="sm" className="gap-2">
                                <User size={16} />
                                Dashboard
                            </Button>
                        ) : (
                            <>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/login">Log In</Link>
                                </Button>
                                <Button size="sm" variant="neon" className="shadow-[0_0_20px_rgba(0,240,255,0.3)]" asChild>
                                    <Link href="/register">Play Now</Link>
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white hover:text-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-card border-l border-white/10 p-6 md:hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-display text-xl text-gold">MENU</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-white/90 hover:text-gold transition-colors flex items-center justify-between group"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto flex flex-col gap-4">
                                <Button variant="outline" className="w-full justify-center" asChild>
                                    <Link href="/login">Log In</Link>
                                </Button>
                                <Button className="w-full justify-center" asChild>
                                    <Link href="/register">Create Account</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
