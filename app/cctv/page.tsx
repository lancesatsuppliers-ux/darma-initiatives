import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CCTV & Electronic Security | Darma Initiatives",
    description: "Specialized design, installation, and maintenance of advanced surveillance and electronic security systems.",
};

export default function CCTVService() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* HEADER IMAGE BANNER */}
                <div className="relative h-64 w-full">
                    <Image
                        src="/cctv-header.png"
                        alt="Surveillance Technology Architecture"
                        fill
                        className="object-cover opacity-90 contrast-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-authority/20"></div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="max-w-5xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                            CCTV & Electronic Security
                        </h1>
                        <p className="text-lg text-brand-steel leading-relaxed max-w-3xl">
                            Darma Initiatives designs, installs and maintains electronic security systems that enhance situational awareness, asset protection and operational control for government, commercial and enterprise environments.
                        </p>
                    </section>

                    {/* SECTION 2: SERVICES GRID */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1: System Design */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                CCTV System Design & Installation
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Surveillance planning, camera placement, cabling, configuration and commissioning.
                            </p>
                        </div>

                        {/* Card 2: Monitoring */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                CCTV Monitoring & Integration
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Integration with control rooms, access control and response protocols.
                            </p>
                        </div>

                        {/* Card 3: Access Control */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Access Control Systems
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Biometric, card-based and controlled entry solutions.
                            </p>
                        </div>

                        {/* Card 4: Alarm Systems */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Alarm Systems
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Intrusion detection, alarm monitoring and escalation readiness.
                            </p>
                        </div>

                        {/* Card 5: X-Ray */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                X-Ray & Metal Detection Systems
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Supply, installation and maintenance of screening and detection equipment.
                            </p>
                        </div>

                    </section>
                </div>
            </main>
        </>
    );
}
