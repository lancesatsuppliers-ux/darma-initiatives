import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security & Protection | Darma Initiatives",
    description: "Professional, compliant security and protection services for government, commercial, and enterprise clients.",
};

export default function SecurityServices() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* 
                   HEADER IMAGE BANNER
                */}
                <div className="relative h-72 w-full overflow-hidden">
                    <Image
                        src="/images/security/header.jpg"
                        alt="Security Header"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Security & Protection Services</h1>
                    </div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="max-w-5xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* Image section on top */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image 
                                src="/images/security/card-guarding.jpg" 
                                alt="Security Services" 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        
                        {/* Text content below image */}
                        <div className="p-8 md:p-12 bg-white">
                            <p className="text-lg text-brand-authority leading-relaxed max-w-3xl">
                                Darma Initiatives provides professional, compliant and operationally ready security and protection services to government, commercial and enterprise clients across South Africa.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2: SERVICES GRID */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {[
                            { title: "Normal Guarding Services", desc: "Professionally trained security officers providing static and mobile guarding services.", img: "card-guarding.jpg" },
                            { title: "Armed Security Services", desc: "Armed protection services deployed in high-risk and sensitive environments.", img: "card-armed.jpg" },
                            { title: "Tactical / Armed Response", desc: "Rapid response capability integrated with monitoring and escalation protocols.", img: "card-tactical.jpg" },
                            { title: "VIP Protection Services", desc: "Close protection for executives, officials and high-profile individuals.", img: "card-vip.jpg" },
                            { title: "Event & Crowd Control Security", desc: "Structured crowd management and event security operations.", img: "card-event.jpg" },
                            { title: "Security Training Services", desc: "Accredited training and instruction aligned to regulatory requirements.", img: "card-training.jpg" },
                        ].map((item, i) => (
                            <div key={i} className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl hover:shadow-2xl transition-all">
                                {/* Image section on top */}
                                <div className="relative h-32 w-full overflow-hidden">
                                    <Image 
                                        src={`/images/security/${item.img}`} 
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
