import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Darma Initiatives",
    description: "Contact Darma Initiatives for enquiries relating to security, surveillance, facilities, or infrastructure services.",
};

export default function Contact() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">
                {/* HEADER IMAGE BANNER (Stylized CSS Pattern) */}
                <div className="relative h-64 w-full bg-[#0B1220] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: `repeating-linear-gradient(-45deg, #475569 0px, #475569 1px, transparent 1px, transparent 15px)`,
                        }}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-corporate-blue/20 to-brand-authority/80"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 space-y-8 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-brand-authority">
                            Contact Darma Initiatives
                        </h1>
                        <p className="text-lg text-brand-steel leading-relaxed">
                            For enquiries relating to security services, surveillance systems, facilities management or infrastructure support, please contact Darma Initiatives using the details below.
                        </p>
                    </section>

                    {/* SECTION 2: CONTACT DETAILS */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-steel">
                            <div>
                                <h3 className="text-lg font-bold text-brand-authority mb-2">Email</h3>
                                <p className="leading-relaxed">info@darmainitiatives.co.za</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-brand-authority mb-2">Telephone</h3>
                                <p className="leading-relaxed">+27 (0) 10 000 0000</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-brand-authority mb-2">Operations</h3>
                                <p className="leading-relaxed">National Footprint (South Africa)</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: ENQUIRY FORM */}
                    <section className="bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-silver shadow-xl p-8 md:p-12">
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
                    </section>

                </div>
            </main>
        </>
    );
}
