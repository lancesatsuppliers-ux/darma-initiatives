import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Darma Initiatives",
    description: "Learn about Darma Initiatives, our mission, values, and our commitment to operational excellence in security and infrastructure.",
};

export default function About() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* HEADER IMAGE BANNER (Stylized CSS Pattern) */}
                <div className="relative h-64 w-full bg-[#0B1220] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)`,
                            backgroundSize: '60px 60px'
                        }}></div>
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, #CBD5E1 1px, transparent 0)`,
                            backgroundSize: '20px 20px',
                            backgroundPosition: '10px 10px'
                        }}></div>
                    </div>
                    {/* Abstract Geometric Elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-corporate-blue/20 to-transparent skew-x-12 transform translate-x-24"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-burgundy/10 blur-3xl rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-authority/40 to-transparent"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: INTRODUCTION */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-2xl p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                            About Darma Initiatives
                        </h1>
                        <p className="text-lg text-brand-steel leading-relaxed">
                            Darma Initiatives is a premier integrated solutions provider specializing in high-level security, advanced surveillance technology, infrastructure development, and facilities management. We are dedicated to delivering robust protection services and operational excellence to ensure the safety and continuity of our clients' critical assets.
                        </p>
                    </section>

                    {/* SECTION 2: COMPANY OVERVIEW */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-2xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold mb-6 text-brand-authority">
                            Company Overview
                        </h2>
                        <div className="space-y-4 text-brand-steel leading-relaxed">
                            <p>
                                Established to meet the evolving demands of modern security and infrastructure management, Darma Initiatives brings together a multi-disciplinary team of experts. Our capability spans across physical guarding, electronic security systems, and civil engineering support.
                            </p>
                            <p>
                                We proudly serve a diverse portfolio of clients, including significant government departments, commercial property groups, and large-scale enterprise organisations. Our holistic approach allows us to tailor solutions that address specific operational risks while maintaining compliance and efficiency.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: VALUES & OPERATING PRINCIPLES */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-2xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold mb-8 text-brand-authority">
                            Values & Operating Principles
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-semibold text-lg text-brand-authority mb-2">Timely Response</h3>
                                <p className="text-brand-steel">
                                    Rapid deployment and effective incident escalation protocols are at the core of our service delivery model.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg text-brand-authority mb-2">Quality Assurance</h3>
                                <p className="text-brand-steel">
                                    We adhere to strict operational standards and continuous monitoring to ensure zero-defect service execution.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg text-brand-authority mb-2">Competitive Pricing</h3>
                                <p className="text-brand-steel">
                                    Delivering premium enterprise capability with optimized cost structures to provide exceptional value.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg text-brand-authority mb-2">Investment in People</h3>
                                <p className="text-brand-steel">
                                    Continuous training, vetting, and professional development ensure our staff remain our strongest asset.
                                </p>
                            </div>

                            <div className="md:col-span-2">
                                <h3 className="font-semibold text-lg text-brand-authority mb-2">Safety & Environmental Responsibility</h3>
                                <p className="text-brand-steel">
                                    Committed to safe working practices and environmentally conscious operations across all our sites.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
}
