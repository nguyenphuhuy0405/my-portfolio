// Server component - SSR for maximum SEO indexing
import { portfolioConfig } from "@/config/portfolio";
import MagneticCTA from "./MagneticCTA";
import Avatar from "./Avatar";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            {/* Animated gradient orbs */}
            <div
                className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent blur-3xl orb-animate"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-purple-500/10 via-purple-400/5 to-transparent blur-3xl orb-animate-delayed"
                aria-hidden="true"
            />

            {/* Scanline effect */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none"
                style={{ backgroundSize: "100% 4px" }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Avatar */}
                <div className="mb-8 flex justify-center">
                    <Avatar />
                </div>

                {/* Greeting */}
                <p className="text-sm sm:text-base font-medium text-blue-400 tracking-[0.2em] uppercase mb-4">
                    Xin chào, tôi là
                </p>

                {/* Name - SSR for SEO */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-4">
                    <span className="text-gradient">{portfolioConfig.name}</span>
                </h1>

                {/* Role - SSR for SEO */}
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6">
                    {portfolioConfig.role}
                    <span className="inline-block ml-2 w-1 h-7 sm:h-8 bg-blue-400 animate-pulse" />
                </p>

                {/* Bio - SSR for SEO */}
                <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {portfolioConfig.bio}
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <MagneticCTA href="#projects" variant="primary" size="lg">
                        Xem dự án
                    </MagneticCTA>
                    <MagneticCTA
                        href={`mailto:${portfolioConfig.socials.email}`}
                        variant="outline"
                        size="lg"
                    >
                        Liên hệ ngay
                    </MagneticCTA>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
                <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
                    <div className="w-1 h-2 bg-blue-400/60 rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    );
}