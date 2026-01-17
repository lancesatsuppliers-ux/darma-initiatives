import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Darma Initiatives",
    description: "Learn about Darma Initiatives, our mission, values, and our commitment to operational excellence in security and infrastructure.",
};

export default function About() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* HEADER IMAGE BANNER - Image on top section */}
                <div className="relative h-72 w-full overflow-hidden bg-brand-platinum">
                    <Image
                        src="/images/about/about-operations.jpg"
                        fill
                        className="object-cover"
                        alt="About Us"
                        priority
                    />
                </div>

                {/* Header text section below image */}
                <div className="bg-white py-12 border-b border-brand-silver">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-authority">About Darma Initiatives</h1>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: INTRODUCTION - Card structure */}
                    <div className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl flex flex-col">
                        {/* Image section */}
                        <div className="relative w-full h-72 overflow-hidden bg-brand-platinum">
                            <Image src="/images/about/about-overview.jpg" fill className="object-cover" alt="" />
                        </div>
                        
                        {/* Text section */}
                        <div className="p-8 md:p-12 bg-white">
                            <p className="text-lg text-brand-steel leading-relaxed max-w-2xl">
                                Darma Initiatives is a premier integrated solutions provider specializing in high-level security, advanced surveillance technology, infrastructure development, and facilities management. We are dedicated to delivering robust protection services and operational excellence to ensure the safety and continuity of our clients' critical assets.
                            </p>
                        </div>
                    </div>

                    {/* SECTION 2: COMPANY OVERVIEW - Card structure */}
                    <div className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl flex flex-col">
                        {/* Image section */}
                        <div className="relative w-full h-72 overflow-hidden bg-brand-platinum">
                            <Image src="/images/about/about-values.jpg" fill className="object-cover" alt="" />
                        </div>
                        
                        {/* Text section */}
                        <div className="p-8 md:p-12 bg-white">
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
                        </div>
                    </div>

                    {/* SECTION 3: VALUES & OPERATING PRINCIPLES - Card structure */}
                    <div className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl flex flex-col">
                        {/* Image section */}
                        <div className="relative w-full h-72 overflow-hidden bg-brand-platinum">
                            <Image src="/images/about/about-operations.jpg" fill className="object-cover" alt="" />
                        </div>
                        
                        {/* Text section */}
                        <div className="p-8 md:p-12 bg-white">
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
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
