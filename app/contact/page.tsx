import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Darma Initiatives",
    description: "Contact Darma Initiatives for enquiries relating to security, surveillance, facilities, or infrastructure services.",
};

export default function Contact() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* 
                   HEADER IMAGE BANNER
                   CLIENT IMAGE: /public/images/contact/header.jpg
                */}
                <div className="relative h-64 w-full border-b border-brand-silver bg-[#0B1220] overflow-hidden">
                    <Image
                        src="/images/contact/header.jpg"
                        alt="Contact Header"
                        fill
                        className="object-cover opacity-90 contrast-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-at from-brand-authority to-brand-corporate-blue/40"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 space-y-8 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="relative overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* CLIENT IMAGE: /public/images/contact/panel-1.jpg */}
                        <Image src="/images/contact/panel-1.jpg" fill className="object-cover opacity-15" alt="" />
                        <div className="relative z-10 p-8 md:p-12 bg-white/45 backdrop-blur-xl">
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                                Contact Darma Initiatives
                            </h1>
                            <p className="text-lg text-brand-steel leading-relaxed">
                                For enquiries relating to security services, surveillance systems, facilities management or infrastructure support, please contact Darma Initiatives using the details below.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2: CONTACT DETAILS */}
                    <section className="relative overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* CLIENT IMAGE: /public/images/contact/panel-details.jpg */}
                        <Image src="/images/contact/panel-details.jpg" fill className="object-cover opacity-10" alt="" />
                        <div className="relative z-10 p-8 md:p-12 bg-white/45 backdrop-blur-xl">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-steel">
                                <div>
                                    <h3 className="text-lg font-bold text-brand-authority mb-2">Email</h3>
                                    <p className="leading-relaxed">info@darmainitiatives.co.za<br />info.darmainitiatives@gmail.com</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-brand-authority mb-2">Telephone</h3>
                                    <p className="leading-relaxed">Tel: 010 023 1338<br />Cell: 072 049 9849</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-brand-authority mb-2">Operations</h3>
                                    <p className="leading-relaxed">National Footprint (South Africa)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: ENQUIRY FORM */}
                    <section className="relative overflow-hidden rounded-2xl border border-brand-silver shadow-xl">
                        {/* CLIENT IMAGE: /public/images/contact/panel-form.jpg */}
                        <Image src="/images/contact/panel-form.jpg" fill className="object-cover opacity-10" alt="" />
                        <div className="relative z-10 p-8 md:p-12 bg-white/45 backdrop-blur-xl">
                            <h2 className="text-2xl font-bold mb-8 text-brand-authority">
                                Operational Enquiry
                            </h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="fullName" className="block text-sm font-semibold text-brand-authority">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            className="w-full bg-white/50 border border-brand-silver rounded-lg px-4 py-3 text-brand-authority focus:outline-none focus:ring-2 focus:ring-brand-authority/20 transition-all font-sans"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="organisation" className="block text-sm font-semibold text-brand-authority">Organisation</label>
                                        <input
                                            type="text"
                                            id="organisation"
                                            className="w-full bg-white/50 border border-brand-silver rounded-lg px-4 py-3 text-brand-authority focus:outline-none focus:ring-2 focus:ring-brand-authority/20 transition-all font-sans"
                                            placeholder="Company or Department"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-semibold text-brand-authority">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-white/50 border border-brand-silver rounded-lg px-4 py-3 text-brand-authority focus:outline-none focus:ring-2 focus:ring-brand-authority/20 transition-all font-sans"
                                        placeholder="name@company.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-semibold text-brand-authority">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full bg-white/50 border border-brand-silver rounded-lg px-4 py-3 text-brand-authority focus:outline-none focus:ring-2 focus:ring-brand-authority/20 transition-all resize-none font-sans"
                                        placeholder="Describe your requirements"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="bg-brand-authority text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-burgundy transition-all shadow-md"
                                >
                                    Request a Quote
                                </button>
                            </form>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
}
