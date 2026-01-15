import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security & Protection | Darma Initiatives",
    description: "Professional, compliant security and protection services for government, commercial, and enterprise clients.",
};

export default function SecurityServices() {
    return (
        <>
            {/* Main container with relative positioning for image background if needed, but here we use a block header */}
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* HEADER IMAGE BANNER */}
                <div className="relative h-64 w-full">
                    <Image
                        src="/security-header.png"
                        alt="Corporate Security Architecture"
                        fill
                        className="object-cover opacity-90 contrast-110"
                        priority
                    />
                    {/* Neutral overlay to dampen visuals and maintain enterprise calm */}
                    <div className="absolute inset-0 bg-brand-authority/20"></div>
                </div>

                {/* CONTENT CONTAINER - Starts after banner with some spacing */}
                <div className="max-w-5xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                            Security & Protection Services
                        </h1>
                        <p className="text-lg text-brand-steel leading-relaxed max-w-3xl">
                            Darma Initiatives provides professional, compliant and operationally ready security and protection services to government, commercial and enterprise clients across South Africa.
                        </p>
                    </section>

                    {/* SECTION 2: SERVICES GRID */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1: Normal Guarding */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Normal Guarding Services
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Professionally trained security officers providing static and mobile guarding services.
                            </p>
                        </div>

                        {/* Card 2: Armed Security */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Armed Security Services
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Armed protection services deployed in high-risk and sensitive environments.
                            </p>
                        </div>

                        {/* Card 3: Tactical / Armed Response */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Tactical / Armed Response
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Rapid response capability integrated with monitoring and escalation protocols.
                            </p>
                        </div>

                        {/* Card 4: VIP Protection */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                VIP Protection Services
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Close protection for executives, officials and high-profile individuals.
                            </p>
                        </div>

                        {/* Card 5: Event & Crowd Control */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Event & Crowd Control Security
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Structured crowd management and event security operations.
                            </p>
                        </div>

                        {/* Card 6: Security Training */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Security Training Services
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Accredited training and instruction aligned to regulatory requirements.
                            </p>
                        </div>

                    </section>
                </div>
            </main>
        </>
    );
}
