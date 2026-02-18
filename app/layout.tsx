import type { Metadata } from "next";
import { Cinzel_Decorative, Cinzel, Rajdhani } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Game Vault 777 | Win Big. Play Now.",
  description: "The ultimate online gaming experience with 500+ casino-style games, fast payouts, and huge jackpots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-body text-foreground antialiased",
          cinzelDecorative.variable,
          cinzel.variable,
          rajdhani.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
