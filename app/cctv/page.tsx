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

                {/* 
                   HEADER IMAGE BANNER
                */}
                <div className="relative h-72 w-full overflow-hidden">
                    <Image
                        src="/images/cctv/header.png.jpg"
                        alt="CCTV Header"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">CCTV & Electronic Security</h1>
                    </div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="max-w-5xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* Image section on top */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image 
                                src="/images/cctv/panel-1.jpg" 
                                alt="CCTV Services" 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        
                        {/* Text content below image */}
                        <div className="p-8 md:p-12 bg-white">
                            <p className="text-lg text-brand-authority leading-relaxed max-w-3xl">
                                Darma Initiatives designs, installs and maintains electronic security systems that enhance situational awareness, asset protection and operational control for government, commercial and enterprise environments.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2: SERVICES GRID */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            { title: "CCTV System Design & Installation", desc: "Surveillance planning, camera placement, cabling, configuration and commissioning.", img: "card-installation.jpg" },
                            { title: "CCTV Monitoring & Integration", desc: "Integration with control rooms, access control and response protocols.", img: "card-monitoring.jpg" },
                            { title: "Access Control Systems", desc: "Biometric, card-based and controlled entry solutions.", img: "card-access.jpg" },
                            { title: "Alarm Systems", desc: "Intrusion detection, alarm monitoring and escalation readiness.", img: "card-alarms.jpg" },
                            { title: "X-Ray & Metal Detection Systems", desc: "Supply, installation and maintenance of screening and detection equipment.", img: "card-xray.jpg" },
                            { title: "Motion Detection Systems", desc: "Advanced detection and alerting for perimeter and internal monitoring.", img: "card-detection.jpg" },
                        ].map((item, i) => (
                            <div key={i} className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl hover:shadow-2xl transition-all">
                                {/* Image section on top */}
                                <div className="relative h-32 w-full overflow-hidden">
                                    <Image 
                                        src={`/images/cctv/${item.img}`} 
                                        alt={item.title}
                                        fill 
                                        className="object-cover" 
                                    />
                                </div>
                                
                                {/* Text content below image */}
                                <div className="p-6 bg-white">
                                    <h3 className="text-lg font-bold mb-2 text-brand-authority">
                                        {item.title}
                                    </h3>
                                    <p className="text-brand-authority text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </section>
                </div>
            </main>
        </>
    );
}
