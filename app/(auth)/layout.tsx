import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background relative flex flex-col">
            <Navbar />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none" />

            <main className="flex-1 flex items-center justify-center p-4 relative z-10 pt-24 pb-12">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </main>

            <Footer />
        </div>
    );
}
