"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Mail, Lock } from "lucide-react";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Simulate check for locker status (In real app, this comes from API response)
            const needsLocker = true;

            if (needsLocker) {
                window.location.href = "/locker";
            } else {
                window.location.href = "/dashboard";
            }
        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-deep py-12 px-4">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] -translate-y-1/2 animate-pulse-slow" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

            <Card className="w-full max-w-md border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/60 backdrop-blur-2xl relative z-10">
                <CardHeader className="space-y-2 text-center pb-8 border-b border-white/5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark mx-auto flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,215,0,0.3)] transform rotate-3">
                        <Lock className="w-8 h-8 text-black" />
                    </div>
                    <CardTitle className="text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold animate-shimmer bg-[length:200%_100%]">
                        Welcome Back
                    </CardTitle>
                    <p className="text-sm text-white/50">
                        Enter your credentials to access the vault
                    </p>
                </CardHeader>
                <CardContent className="pt-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-neon-cyan">Email Address</label>
                            <Input id="email" type="email" placeholder="player@gamevault777.com" required className="bg-black/40 border-white/10 focus:border-neon-cyan/50 h-12" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-neon-purple">Password</label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs font-medium text-white/50 hover:text-gold transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required className="bg-black/40 border-white/10 focus:border-neon-purple/50 h-12" />
                        </div>

                        <Button type="submit" variant="neon" className="w-full h-12 text-lg shadow-[0_0_20px_rgba(0,240,255,0.2)]" isLoading={isLoading}>
                            Sign In
                        </Button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-bg-deep px-4 text-white/30 tracking-widest">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full h-11 border-white/10 hover:bg-white/5 hover:border-white/20">
                            <Mail className="mr-2 h-4 w-4 text-white/70" /> Google
                        </Button>
                        <Button variant="outline" className="w-full h-11 border-white/10 hover:bg-white/5 hover:border-white/20">
                            <Facebook className="mr-2 h-4 w-4 text-blue-500" /> Facebook
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 text-center text-sm border-t border-white/5 pt-6 bg-white/5">
                    <div className="text-white/50">
                        Don't have an account?{" "}
                        <Link href="/register" className="font-bold text-gold hover:text-white transition-colors">
                            Register Now
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
