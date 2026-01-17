import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Darma Initiatives",
    description: "Explore our integrated security, surveillance, facilities, and infrastructure service lines.",
};

export default function ServicesIndex() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* HEADER IMAGE BANNER - Image on top */}
                <div className="relative h-72 w-full overflow-hidden bg-brand-platinum">
                    <Image
                        src="/images/home/teaser-2.jpg"
                        fill
                        className="object-cover"
                        alt="Our Services"
                        priority
                    />
                </div>

                {/* Header text section below image */}
                <div className="bg-white py-12 border-b border-brand-silver">
                    <div className="max-w-5xl mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-authority">Our Services</h1>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-6 space-y-12 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION - Card structure */}
                    <div className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl flex flex-col">
                        {/* Image section */}
                        <div className="relative w-full h-64 overflow-hidden bg-brand-platinum">
                            <Image src="/images/home/teaser-3.jpg" fill className="object-cover" alt="" />
                        </div>
                        
                        {/* Text section */}
                        <div className="p-8 md:p-12 bg-white">
                            <p className="text-lg text-brand-steel leading-relaxed max-w-3xl">
                                Darma Initiatives delivers integrated security, surveillance, facilities and infrastructure services through structured, compliant and operationally ready service lines.
                            </p>
                        </div>
                    </div>

                    {/* SECTION 2: SERVICES LISTING (CLICKABLE GRID) */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1: Security */}
                        <Link
                            href="/security"
                            className="overflow-hidden rounded-2xl border border-brand-silver shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                        >
                            {/* Image section on top */}
                            <div className="relative w-full h-48 overflow-hidden bg-brand-platinum">
                                <Image 
                                    src="/images/home/service-card-1.jpg" 
                                    fill 
                                    className="object-cover" 
                                    alt="Security & Protection Services" 
                                />
                            </div>
                            
                            {/* Text section below image */}
                            <div className="p-8 bg-white flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-brand-authority hover:text-brand-corporate-blue transition-colors">
                                    Security & Protection Services
                                </h3>
                                <p className="text-brand-steel leading-relaxed text-sm flex-grow">
                                    Professional guarding, tactical response, and VIP protection services.
                                </p>
                            </div>
                        </Link>

                        {/* Card 2: CCTV */}
                        <Link
                            href="/cctv"
                            className="overflow-hidden rounded-2xl border border-brand-silver shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                        >
                            {/* Image section on top */}
                            <div className="relative w-full h-48 overflow-hidden bg-brand-platinum">
                                <Image 
                                    src="/images/home/service-card-2.jpg" 
                                    fill 
                                    className="object-cover" 
                                    alt="CCTV & Electronic Security" 
                                />
                            </div>
                            
                            {/* Text section below image */}
                            <div className="p-8 bg-white flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-brand-authority hover:text-brand-corporate-blue transition-colors">
                                    CCTV & Electronic Security
                                </h3>
                                <p className="text-brand-steel leading-relaxed text-sm flex-grow">
                                    Surveillance design, installation, and integrated electronic security systems.
                                </p>
                            </div>
                        </Link>

                        {/* Card 3: Control Room */}
                        <Link
                            href="/control-room"
                            className="overflow-hidden rounded-2xl border border-brand-silver shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                        >
                            {/* Image section on top */}
                            <div className="relative w-full h-48 overflow-hidden bg-brand-platinum">
                                <Image 
                                    src="/images/home/service-card-3.jpg" 
                                    fill 
                                    className="object-cover" 
                                    alt="Control Room Operations" 
                                />
                            </div>
                            
                            {/* Text section below image */}
                            <div className="p-8 bg-white flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-brand-authority hover:text-brand-corporate-blue transition-colors">
                                    Control Room Operations
                                </h3>
                                <p className="text-brand-steel leading-relaxed text-sm flex-grow">
                                    24/7 monitoring, incident escalation, and operational response coordination.
                                </p>
                            </div>
                        </Link>

                        {/* Card 4: Facilities */}
                        <Link
                            href="/facilities"
                            className="overflow-hidden rounded-2xl border border-brand-silver shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                        >
                            {/* Image section on top */}
                            <div className="relative w-full h-48 overflow-hidden bg-brand-platinum">
                                <Image 
                                    src="/images/home/service-card-4.jpg" 
                                    fill 
                                    className="object-cover" 
                                    alt="Facilities, Cleaning & Infrastructure" 
                                />
                            </div>
                            
                            {/* Text section below image */}
                            <div className="p-8 bg-white flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-brand-authority hover:text-brand-corporate-blue transition-colors">
                                    Facilities, Cleaning & Infrastructure
                                </h3>
                                <p className="text-brand-steel leading-relaxed text-sm flex-grow">
                                    Cleaning, landscaping, and infrastructure maintenance services.
                                </p>
                            </div>
                        </Link>

                    </section>

                </div>
            </main>
        </>
    );
}
