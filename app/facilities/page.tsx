import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Facilities & Infrastructure | Darma Initiatives",
    description: "Structured facilities management, cleaning, and infrastructure maintenance services.",
};

export default function FacilitiesServices() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* 
                   HEADER IMAGE BANNER
                */}
                <div className="relative h-72 w-full overflow-hidden">
                    <Image
                        src="/images/facilities/panel-1.jpg"
                        alt="Facilities Header"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Facilities & Infrastructure Services</h1>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* Image section on top */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image 
                                src="/images/facilities/card-cleaning.jpg" 
                                alt="Facilities Services" 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        
                        {/* Text content below image */}
                        <div className="p-8 md:p-12 bg-white">
                            <p className="text-lg text-brand-authority leading-relaxed max-w-3xl">
                                Darma Initiatives provides facilities management, cleaning and infrastructure support services to ensure safe, compliant and maintained environments for institutional and corporate clients.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2: SERVICES GRID */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            { title: "Cleaning Services", desc: "Routine and specialized cleaning services delivered to defined operational standards.", img: "card-cleaning.jpg" },
                            { title: "Consumables Supply", desc: "Provision of approved cleaning consumables and materials for site operations.", img: "card-supplies.jpg" },
                            { title: "Landscaping & Grounds", desc: "Grounds maintenance, landscaping and outdoor area management.", img: "card-landscaping.jpg" },
                            { title: "Building Maintenance", desc: "Wall and floor care, post-construction cleaning and general building upkeep.", img: "card-maintenance.jpg" },
                            { title: "Infrastructure Support", desc: "Operational support services aligned with facility utilities and site requirements.", img: "card-infrastructure.jpg" },
                        ].map((item, i) => (
                            <div key={i} className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl hover:shadow-2xl transition-all">
                                {/* Image section on top */}
                                <div className="relative h-32 w-full overflow-hidden">
                                    <Image 
                                        src={`/images/facilities/${item.img}`} 
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
