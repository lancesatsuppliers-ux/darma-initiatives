import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Governance & Accreditation | Darma Initiatives",
    description: "Explore our commitment to statutory compliance, regulatory standards, and corporate governance.",
};

export default function Governance() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* 
                   HEADER IMAGE BANNER
                   CLIENT IMAGE: /public/images/governance/header.jpg
                */}
                <div className="relative h-64 w-full border-b border-brand-silver bg-[#0B1220] overflow-hidden">
                    <Image
                        src="/images/governance/header.jpg"
                        alt="Governance Header"
                        fill
                        className="object-cover opacity-90 contrast-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-at from-brand-authority to-brand-corporate-blue/40"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="relative overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* CLIENT IMAGE: /public/images/governance/panel-1.jpg */}
                        <Image src="/images/governance/panel-1.jpg" fill className="object-cover opacity-15" alt="" />
                        <div className="relative z-10 p-8 md:p-12 bg-white/45 backdrop-blur-xl">
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                                Governance & Accreditation
                            </h1>
                            <p className="text-lg text-brand-steel leading-relaxed">
                                Darma Initiatives operates under a governance framework and maintains the statutory registrations, accreditations and policies required to deliver compliant services to government and enterprise clients.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2: STATUTORY REGISTRATIONS */}
                    <section className="relative overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* CLIENT IMAGE: /public/images/governance/panel-stats.jpg */}
                        <Image src="/images/governance/panel-stats.jpg" fill className="object-cover opacity-10" alt="" />
                        <div className="relative z-10 p-8 md:p-12 bg-white/45 backdrop-blur-xl">
                            <h2 className="text-2xl font-bold mb-8 text-brand-authority">
                                Statutory Registrations
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-brand-steel">
                                <div className="border-b border-brand-silver pb-4">
                                    <span className="block font-semibold text-brand-authority mb-1">PSIRA Registration</span>
                                    <span className="text-sm">Active & Compliant</span>
                                </div>
                                <div className="border-b border-brand-silver pb-4">
                                    <span className="block font-semibold text-brand-authority mb-1">CIDB Registration</span>
                                    <span className="text-sm">Active & Compliant</span>
                                </div>
                                <div className="border-b border-brand-silver pb-4">
                                    <span className="block font-semibold text-brand-authority mb-1">CSD Registration</span>
                                    <span className="text-sm">Central Supplier Database Listed</span>
                                </div>
                                <div className="border-b border-brand-silver pb-4">
                                    <span className="block font-semibold text-brand-authority mb-1">VAT Registration</span>
                                    <span className="text-sm">SARS Compliant</span>
                                </div>
                                <div className="md:col-span-2 border-b border-brand-silver pb-4">
                                    <span className="block font-semibold text-brand-authority mb-1">B-BBEE Status</span>
                                    <span className="text-sm">Certified Level Contributor</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: POLICIES & COMPLIANCE */}
                    <section className="relative overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* CLIENT IMAGE: /public/images/governance/panel-compliance.jpg */}
                        <Image src="/images/governance/panel-compliance.jpg" fill className="object-cover opacity-10" alt="" />
                        <div className="relative z-10 p-8 md:p-12 bg-white/45 backdrop-blur-xl">
                            <h2 className="text-2xl font-bold mb-8 text-brand-authority">
                                Compliance & Policies
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-brand-authority mb-2">Health & Safety</h3>
                                    <p className="text-brand-steel leading-relaxed">
                                        Adherence to occupational health and safety standards to ensure the safety of personnel and clients.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-brand-authority mb-2">Environmental Management</h3>
                                    <p className="text-brand-steel leading-relaxed">
                                        Commitment to sustainable practices and minimizing operational impact through management protocols.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-brand-authority mb-2">Personnel Development</h3>
                                    <p className="text-brand-steel leading-relaxed">
                                        Training and certification programs to ensure personnel competency and regulatory compliance.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-brand-authority mb-2">Risk Management</h3>
                                    <p className="text-brand-steel leading-relaxed">
                                        Risk assessment methodologies and oversight mechanisms to mitigate threats and ensure service continuity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: CORPORATE GOVERNANCE */}
                    <section className="relative overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* CLIENT IMAGE: /public/images/governance/panel-corp.jpg */}
                        <Image src="/images/governance/panel-corp.jpg" fill className="object-cover opacity-10" alt="" />
                        <div className="relative z-10 p-8 md:p-12 bg-white/45 backdrop-blur-xl">
                            <h2 className="text-2xl font-bold mb-6 text-brand-authority">
                                Corporate Governance
                            </h2>
                            <div className="text-brand-steel leading-relaxed space-y-4">
                                <p>
                                    Darma Initiatives is committed to standards of governance, accountability, and ethical conduct. Transparent operations and regulatory adherence are the basis of our engagement with government and enterprise partners.
                                </p>
                                <p>
                                    Our governance framework establishes accountability and decision-making structures, ensuring service delivery is monitored, audited, and aligned with statutory requirements.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
}
