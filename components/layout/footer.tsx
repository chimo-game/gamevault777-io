import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = [
    {
        title: "Games",
        links: [
            { name: "Slots", href: "/games?category=slots" },
            { name: "Fish Games", href: "/games?category=fish" },
            { name: "Table Games", href: "/games?category=table" },
            { name: "Live Casino", href: "/games?category=live" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "Help Center", href: "/support" },
            { name: "Contact Us", href: "/contact" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Affiliate Program", href: "/affiliate" },
            { name: "Responsible Gaming", href: "/responsible-gaming" },
        ],
    },
];

export function Footer() {
    return (
        <footer className="bg-black py-20 px-4 border-t border-neon-cyan/20 relative overflow-hidden">
            {/* Top Glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <span className="font-display text-2xl text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:text-shadow-neon transition-all">GAME VAULT</span>
                            <span className="font-heading text-xs tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">
                                777
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            The elite decentralized gaming platform. Instant crypto payouts,
                            <span className="text-neon-cyan"> 500+ verified games</span>, and zero-latency functionality.
                        </p>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="col-span-1">
                            <h4 className="font-heading text-white font-bold mb-6 tracking-widest uppercase text-xs border-b border-white/5 pb-2 inline-block">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/50 hover:text-neon-cyan transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/20 text-xs text-center md:text-left font-mono">
                        &copy; {new Date().getFullYear()} GAME VAULT 777_SYSTEMS. ENCRYPTED.
                    </p>
                    <div className="flex gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Payment Icons Simulation */}
                        <div className="h-6 w-10 bg-white/10 rounded border border-white/10" />
                        <div className="h-6 w-10 bg-white/10 rounded border border-white/10" />
                        <div className="h-6 w-10 bg-white/10 rounded border border-white/10" />
                        <div className="h-6 w-10 bg-white/10 rounded border border-white/10" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
