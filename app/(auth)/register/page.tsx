"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Check, Loader2, Sparkles, User, Shield, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
        phone: "",
        otp: "",
        bonus: "welcome-500",
        terms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Redirect to Locker for verification
            window.location.href = "/locker";
        }, 2000);
    };

    const steps = [
        { id: 1, icon: User, label: "Identity" },
        { id: 2, icon: Shield, label: "Security" },
        { id: 3, icon: Gift, label: "Bonus" },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-deep py-12 px-4">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(188,19,254,0.15),transparent_50%)]" />

            <Card className="w-full max-w-lg border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] bg-black/80 backdrop-blur-2xl overflow-hidden relative z-10">
                <CardHeader className="text-center pb-0">
                    <div className="flex justify-center mb-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-white/10 -z-10" />

                        {/* Steps */}
                        <div className="flex items-center justify-between w-full max-w-xs">
                            {steps.map((s) => {
                                const isActive = s.id === step;
                                const isCompleted = s.id < step;
                                return (
                                    <div key={s.id} className="flex flex-col items-center gap-2 bg-black px-2">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-neon-cyan text-black shadow-[0_0_15px_rgba(0,240,255,0.6)] scale-110" :
                                                isCompleted ? "bg-neon-purple text-white" : "bg-white/10 text-white/30"
                                            }`}>
                                            {isCompleted ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                                        </div>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-neon-cyan" : "text-white/30"}`}>
                                            {s.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <CardTitle className="text-3xl font-display text-white">
                        {step === 1 && "Start Your Journey"}
                        {step === 2 && "Secure Your Account"}
                        {step === 3 && "Claim 500% Bonus"}
                    </CardTitle>
                    <CardDescription className="text-white/50">
                        {step === 1 && "Enter your details to join the elite."}
                        {step === 2 && "Verify your age and contact info."}
                        {step === 3 && "You're one step away from the vault."}
                    </CardDescription>
                </CardHeader>

                <CardContent className="pt-8">
                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-white/70 uppercase">First Name</label>
                                            <Input name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} required className="bg-white/5" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-white/70 uppercase">Last Name</label>
                                            <Input name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required className="bg-white/5" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-white/70 uppercase">Email Address</label>
                                        <Input name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required className="bg-white/5" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-white/70 uppercase">Password</label>
                                        <Input name="password" type="password" value={formData.password} onChange={handleChange} required className="bg-white/5" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-white/70 uppercase">Confirm Password</label>
                                        <Input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required className="bg-white/5" />
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-5"
                                >
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-white/70 uppercase">Date of Birth</label>
                                        <Input name="dob" type="date" value={formData.dob} onChange={handleChange} required className="bg-white/5" />
                                        <p className="text-[10px] text-neon-red flex items-center gap-1"><Shield className="w-3 h-3" /> You must be 21+ to play.</p>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-white/70 uppercase">Phone Number</label>
                                        <Input name="phone" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} required className="bg-white/5" />
                                    </div>
                                    {formData.phone && (
                                        <div className="space-y-2 animate-in fade-in slide-in-from-top-2 p-4 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20">
                                            <label className="text-xs font-bold text-neon-cyan uppercase">SMS Verification Code</label>
                                            <div className="flex gap-2">
                                                <Input name="otp" placeholder="000 000" value={formData.otp} onChange={handleChange} className="bg-black/50 border-neon-cyan/30 text-center tracking-widest text-lg font-mono placeholder:tracking-normal placeholder:font-sans" />
                                                <Button type="button" variant="secondary" size="sm" className="h-10">Send</Button>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="rounded-2xl bg-gradient-to-br from-gold/10 to-transparent p-6 border border-gold/30 relative overflow-hidden group shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/20 blur-[60px] rounded-full group-hover:bg-gold/30 transition-colors" />

                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-3">
                                                <Sparkles className="w-6 h-6 text-gold animate-pulse" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gold mb-1 uppercase tracking-widest">VIP Welcome Package</h3>
                                            <div className="text-4xl font-display font-bold text-white mb-4 drop-shadow-md">
                                                $500 <span className="text-lg text-white/60 font-sans">+ 50 Spins</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2 relative z-10 mt-4 bg-black/40 p-3 rounded-lg backdrop-blur-sm border border-white/5">
                                            <div className="flex items-center justify-between text-sm text-white/80">
                                                <span className="flex items-center gap-2"><Check size={14} className="text-neon-cyan" /> Matches</span>
                                                <span className="font-mono text-neon-cyan">100%</span>
                                            </div>
                                            <div className="w-full h-px bg-white/5" />
                                            <div className="flex items-center justify-between text-sm text-white/80">
                                                <span className="flex items-center gap-2"><Check size={14} className="text-neon-cyan" /> Availability</span>
                                                <span className="font-mono text-neon-cyan">Instant</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            id="terms"
                                            checked={formData.terms}
                                            onChange={handleChange}
                                            className="mt-1 w-4 h-4 rounded border-gray-600 bg-black text-gold focus:ring-gold focus:ring-offset-0 cursor-pointer"
                                            required
                                        />
                                        <label htmlFor="terms" className="text-xs text-muted-foreground select-none cursor-pointer">
                                            I agree to the <Link href="/terms" className="text-white hover:text-gold transition-colors">Terms of Service</Link> and confirm I am over 21 years old.
                                        </label>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex justify-between mt-10 pt-6 border-t border-white/5">
                            {step > 1 ? (
                                <Button type="button" variant="ghost" onClick={prevStep} className="hover:text-white">
                                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                                </Button>
                            ) : (
                                <div />
                            )}

                            {step < 3 ? (
                                <Button type="button" onClick={nextStep} variant="default" className="w-32 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                                    Next <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            ) : (
                                <Button type="submit" variant="neon" className="w-48 shadow-[0_0_30px_rgba(0,240,255,0.4)]" disabled={isLoading || !formData.terms}>
                                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    Claim Details
                                </Button>
                            )}
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="justify-center bg-black/50 py-4 border-t border-white/5">
                    <p className="text-xs text-white/40">
                        Already have an account?{" "}
                        <Link href="/login" className="text-accent hover:text-white transition-colors">
                            Log in here
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
