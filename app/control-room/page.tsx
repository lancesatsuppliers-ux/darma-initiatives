import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Control Room Operations | Darma Initiatives",
    description: "24/7 monitoring, incident management, and coordinated response capabilities for secure environments.",
};

export default function ControlRoom() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* HEADER IMAGE BANNER */}
                <div className="relative h-64 w-full">
                    <Image
                        src="/control-room-header.png"
                        alt="Integrated Control Room Operations"
                        fill
                        className="object-cover opacity-90 contrast-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-authority/30"></div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="max-w-4xl mx-auto px-6 space-y-8 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12 mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                            Control Room Operations
                        </h1>
                        <p className="text-lg text-brand-steel leading-relaxed">
                            Darma Initiatives operates integrated control room capabilities that enable real-time monitoring, incident management and coordinated response across security and surveillance operations.
                        </p>
                    </section>

                    {/* SECTION 2: CAPABILITY PANELS (STACKED VERTICALLY) */}

                    {/* Capability 1 */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                        <h2 className="text-xl font-bold mb-3 text-brand-authority">
                            24/7 Monitoring & Surveillance
                        </h2>
                        <p className="text-brand-steel leading-relaxed">
                            Continuous monitoring of CCTV systems, alarms and security infrastructure.
                        </p>
                    </section>

                    {/* Capability 2 */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                        <h2 className="text-xl font-bold mb-3 text-brand-authority">
                            Incident Escalation & Response Coordination
                        </h2>
                        <p className="text-brand-steel leading-relaxed">
                            Structured escalation protocols aligned with response teams and stakeholders.
                        </p>
                    </section>

                    {/* Capability 3 */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                        <h2 className="text-xl font-bold mb-3 text-brand-authority">
                            Integration with Guarding & Armed Response
                        </h2>
                        <p className="text-brand-steel leading-relaxed">
                            Seamless coordination between monitoring, field personnel and tactical response.
                        </p>
                    </section>

                    {/* Capability 4 */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                        <h2 className="text-xl font-bold mb-3 text-brand-authority">
                            Reporting & Operational Oversight
                        </h2>
                        <p className="text-brand-steel leading-relaxed">
                            Incident logging, reporting and operational visibility for clients.
                        </p>
                    </section>

                </div>
            </main>
        </>
    );
}
