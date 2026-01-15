import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Facilities & Infrastructure | Darma Initiatives",
    description: "Structured facilities management, cleaning, and infrastructure maintenance services.",
};

export default function FacilitiesServices() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* HEADER IMAGE BANNER (Stylized CSS Pattern) */}
                <div className="relative h-64 w-full bg-[#0B1220] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        {/* Technical Grid */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: `linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)`,
                            backgroundSize: '30px 30px'
                        }}></div>
                        {/* Crosshairs Patterns */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: `radial-gradient(circle, #CBD5E1 1px, transparent 1px)`,
                            backgroundSize: '120px 120px'
                        }}></div>
                    </div>
                    {/* Shadow Layer for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-authority/80 via-transparent to-brand-corporate-blue/20"></div>
                    <div className="absolute bottom-0 right-0 w-2/3 h-full bg-brand-authority/30 clip-path-polygon"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                            Facilities & Infrastructure Services
                        </h1>
                        <p className="text-lg text-brand-steel leading-relaxed max-w-3xl">
                            Darma Initiatives provides facilities management, cleaning and infrastructure support services to ensure safe, compliant and maintained environments for institutional and corporate clients.
                        </p>
                    </section>

                    {/* SECTION 2: SERVICES GRID */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1: Cleaning */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Cleaning Services
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Routine and specialized cleaning services delivered to defined operational standards.
                            </p>
                        </div>

                        {/* Card 2: Material Supply */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Consumables Supply
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Provision of approved cleaning consumables and materials for site operations.
                            </p>
                        </div>

                        {/* Card 3: Landscaping */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Landscaping & Grounds
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Grounds maintenance, landscaping and outdoor area management.
                            </p>
                        </div>

                        {/* Card 4: Building Care */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Building Maintenance
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Wall and floor care, post-construction cleaning and general building upkeep.
                            </p>
                        </div>

                        {/* Card 5: Infrastructure Support */}
                        <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-brand-authority">
                                Infrastructure Support
                            </h3>
                            <p className="text-brand-steel leading-relaxed">
                                Operational support services aligned with facility utilities and site requirements.
                            </p>
                        </div>

                    </section>

                </div>
            </main>
        </>
    );
}
