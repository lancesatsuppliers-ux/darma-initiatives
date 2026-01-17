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

                {/* 
                   HEADER IMAGE BANNER
                */}
                <div className="relative h-72 w-full overflow-hidden">
                    <Image
                        src="/images/control-room/panel-1.jpg"
                        alt="Control Room Header"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Control Room Operations</h1>
                    </div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="max-w-4xl mx-auto px-6 space-y-8 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl mb-12">
                        {/* Image section on top */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image 
                                src="/images/control-room/card-monitoring.jpg" 
                                alt="Control Room Operations Overview" 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        
                        {/* Text content below image */}
                        <div className="p-8 md:p-12 bg-white">
                            <p className="text-lg text-brand-authority leading-relaxed">
                                Darma Initiatives operates integrated control room capabilities that enable real-time monitoring, incident management and coordinated response across security and surveillance operations.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2: CAPABILITY PANELS */}

                    {[
                        { title: "24/7 Monitoring & Surveillance", desc: "Continuous monitoring of CCTV systems, alarms and security infrastructure.", img: "card-monitoring.jpg" },
                        { title: "Incident Escalation & Response Coordination", desc: "Structured escalation protocols aligned with response teams and stakeholders.", img: "card-escalation.jpg" },
                        { title: "Integration with Guarding & Armed Response", desc: "Seamless coordination between monitoring, field personnel and tactical response.", img: "card-integration.jpg" },
                        { title: "Reporting & Operational Oversight", desc: "Incident logging, reporting and operational visibility for clients.", img: "card-reporting.jpg" },
                    ].map((item, i) => (
                        <section key={i} className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl hover:shadow-2xl transition-all">
                            {/* Image section on top */}
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image 
                                    src={`/images/control-room/${item.img}`} 
                                    alt={item.title}
                                    fill 
                                    className="object-cover" 
                                />
                            </div>
                            
                            {/* Text content below image */}
                            <div className="p-8 bg-white">
                                <h2 className="text-2xl font-bold mb-2 text-brand-authority">
                                    {item.title}
                                </h2>
                                <p className="text-brand-authority leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </section>
                    ))}

                </div>
            </main>
        </>
    );
}
