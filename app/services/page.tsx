import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Darma Initiatives",
    description: "Explore our integrated security, surveillance, facilities, and infrastructure service lines.",
};

export default function ServicesIndex() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* HEADER IMAGE BANNER (Stylized CSS Pattern) */}
                <div className="relative h-64 w-full bg-[#0B1220] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        {/* Angled Stripes */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: `repeating-linear-gradient(45deg, #475569 0px, #475569 1px, transparent 1px, transparent 20px)`,
                        }}></div>
                        {/* Horizontal Scanning Line Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-corporate-blue/5 to-transparent h-1 bg-[length:100%_40px] animate-[pulse_4s_infinite]"></div>
                    </div>
                    {/* Focal Element - Abstract Prism */}
                    <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-authority/40 rotate-12 blur-3xl rounded-full"></div>
                    <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-corporate-blue/20 -rotate-12 blur-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-authority to-transparent opacity-60"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                            Our Services
                        </h1>
                        <p className="text-lg text-brand-steel leading-relaxed max-w-3xl">
                            Darma Initiatives delivers integrated security, surveillance, facilities and infrastructure services through structured, compliant and operationally ready service lines.
                        </p>
                    </section>

                    {/* SECTION 2: SERVICES LISTING (CLICKABLE GRID) */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1: Security */}
                        <Link
                            href="/security"
                            className="block bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors group"
                        >
                            <h3 className="text-xl font-bold mb-3 text-brand-authority group-hover:text-brand-burgundy transition-colors">
                                Security & Protection Services
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Professional guarding, tactical response, and VIP protection services.
                            </p>
                        </Link>

                        {/* Card 2: CCTV */}
                        <Link
                            href="/cctv"
                            className="block bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors group"
                        >
                            <h3 className="text-xl font-bold mb-3 text-brand-authority group-hover:text-brand-burgundy transition-colors">
                                CCTV & Electronic Security
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Surveillance design, installation, and integrated electronic security systems.
                            </p>
                        </Link>

                        {/* Card 3: Control Room */}
                        <Link
                            href="/control-room"
                            className="block bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors group"
                        >
                            <h3 className="text-xl font-bold mb-3 text-brand-authority group-hover:text-brand-burgundy transition-colors">
                                Control Room Operations
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                24/7 monitoring, incident escalation, and operational response coordination.
                            </p>
                        </Link>

                        {/* Card 4: Facilities */}
                        <Link
                            href="/facilities"
                            className="block bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors group"
                        >
                            <h3 className="text-xl font-bold mb-3 text-brand-authority group-hover:text-brand-burgundy transition-colors">
                                Facilities, Cleaning & Infrastructure
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Cleaning, landscaping, and infrastructure maintenance services.
                            </p>
                        </Link>

                    </section>

                </div>
            </main>
        </>
    );
}
