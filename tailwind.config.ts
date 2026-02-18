import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "var(--bg-deep)",
                foreground: "var(--text-primary)",
                card: {
                    DEFAULT: "var(--bg-card)",
                    foreground: "var(--text-primary)",
                },
                popover: {
                    DEFAULT: "var(--bg-card)",
                    foreground: "var(--text-primary)",
                },
                primary: {
                    DEFAULT: "var(--gold)",
                    foreground: "black",
                },
                secondary: {
                    DEFAULT: "var(--bg-card)",
                    foreground: "var(--text-primary)",
                },
                muted: {
                    DEFAULT: "var(--bg-glass)",
                    foreground: "var(--text-dim)",
                },
                accent: {
                    DEFAULT: "var(--gold-dark)",
                    foreground: "var(--text-primary)",
                },
                destructive: {
                    DEFAULT: "var(--error)",
                    foreground: "white",
                },
                border: "var(--border-gold)",
                input: "var(--bg-glass)",
                ring: "var(--gold)",
                gold: {
                    DEFAULT: "var(--gold)",
                    bright: "var(--gold-bright)",
                    dark: "var(--gold-dark)",
                },
                neon: {
                    cyan: "var(--neon-cyan)",
                    purple: "var(--neon-purple)",
                    magenta: "var(--neon-magenta)",
                    blue: "var(--neon-blue)",
                },
            },
            fontFamily: {
                display: ["var(--font-cinzel-decorative)", "serif"],
                heading: ["var(--font-cinzel)", "serif"],
                body: ["var(--font-rajdhani)", "sans-serif"],
            },
            boxShadow: {
                'neon-gold': '0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)',
                'neon-cyan': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
                'neon-purple': '0 0 10px rgba(188, 19, 254, 0.5), 0 0 20px rgba(188, 19, 254, 0.3)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "shimmer": "shimmer 2s linear infinite",
                "glitch": "glitch 1s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px var(--gold), 0 0 10px var(--gold-dark)" },
                    "100%": { boxShadow: "0 0 20px var(--gold), 0 0 30px var(--gold-dark)" },
                },
                shimmer: {
                    "from": { backgroundPosition: "0 0" },
                    "to": { backgroundPosition: "-200% 0" },
                },
                glitch: {
                    "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
                    "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
                    "62%": { transform: "translate(0,0) skew(5deg)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
