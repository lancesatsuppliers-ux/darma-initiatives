import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience & References | Darma Initiatives",
    description: "Track record of service delivery across government, commercial, and institutional sectors.",
};

export default function Experience() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* HEADER IMAGE BANNER (Stylized CSS Pattern) */}
                <div className="relative h-64 w-full bg-[#0B1220] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        {/* Dot Map Pattern */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: `radial-gradient(#475569 0.5px, transparent 0.5px)`,
                            backgroundSize: '12px 12px'
                        }}></div>
                        {/* Large Geometric Shapes */}
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-corporate-blue/10 rounded-full blur-[100px]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-silver/20 to-transparent"></div>
                    </div>
                    {/* Perspective Lines */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, #CBD5E1 1deg, transparent 2deg)`,
                        backgroundSize: '100% 100%'
                    }}></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-authority/60 to-brand-authority"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 space-y-8 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12 mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                            Experience & References
                        </h1>
                        <p className="text-lg text-brand-steel leading-relaxed">
                            Darma Initiatives provides services across government, commercial and institutional environments, supporting security, surveillance, facilities and infrastructure requirements.
                        </p>
                    </section>

                    {/* SECTION 2: SECTOR EXPERIENCE */}

                    {/* Category 1: Government */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 text-brand-authority">
                            Public Sector
                        </h2>
                        <p className="text-brand-steel leading-relaxed">
                            Security services, surveillance systems, facilities and infrastructure support delivered to public sector environments. Operations are aligned with government mandates and regulatory requirements.
                        </p>
                    </section>

                    {/* Category 2: Commercial */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 text-brand-authority">
                            Commercial & Property
                        </h2>
                        <p className="text-brand-steel leading-relaxed">
                            Guarding, CCTV, monitoring and facilities services for commercial and property clients. Operations focus on asset protection and tenant safety.
                        </p>
                    </section>

                    {/* Category 3: Institutional */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 hover:bg-white/60 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 text-brand-authority">
                            Institutional
                        </h2>
                        <p className="text-brand-steel leading-relaxed">
                            Security, surveillance and infrastructure services for educational and institutional facilities. We ensure safe operational environments for learning and service delivery.
                        </p>
                    </section>

                    {/* SECTION 3: REFERENCE POLICY */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12 mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-brand-authority">
                            Reference Policy
                        </h2>
                        <div className="text-brand-steel leading-relaxed space-y-4">
                            <p>
                                Detailed performance references and contact information for past and current projects are available upon request.
                            </p>
                            <p>
                                We maintain the privacy and security of our clients, particularly within sensitive sectors. Verified credentials are provided during formal procurement or engagement processes to ensure confidentiality.
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
}
