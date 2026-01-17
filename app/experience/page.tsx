import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience & References | Darma Initiatives",
    description: "Track record of service delivery across government, commercial, and institutional sectors.",
};

export default function Experience() {
    return (
        <>
            <main className="min-h-screen bg-brand-platinum text-brand-authority pb-24">

                {/* 
                   HEADER IMAGE BANNER
                */}
                <div className="relative h-72 w-full overflow-hidden">
                    <Image
                        src="/images/experience/experience-government.jpg"
                        alt="Experience Header"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Experience & References</h1>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 space-y-8 pt-12 relative z-10">

                    {/* SECTION 1: PAGE INTRODUCTION */}
                    <section className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl mb-12">
                        {/* Image section on top */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image 
                                src="/images/experience/experience-commercial.jpg" 
                                alt="Experience Overview" 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        
                        {/* Text content below image */}
                        <div className="p-8 md:p-12 bg-white">
                            <p className="text-lg text-brand-authority leading-relaxed">
                                Darma Initiatives provides services across government, commercial and institutional environments, supporting security, surveillance, facilities and infrastructure requirements.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2: SECTOR EXPERIENCE */}

                    {[
                        { title: "Public Sector", desc: "Security services, surveillance systems, facilities and infrastructure support delivered to public sector environments. Operations are aligned with government mandates and regulatory requirements.", img: "experience-government.jpg" },
                        { title: "Commercial & Property", desc: "Guarding, CCTV, monitoring and facilities services for commercial and property clients. Operations focus on asset protection and tenant safety.", img: "experience-commercial.jpg" },
                        { title: "Institutional", desc: "Security, surveillance and infrastructure services for educational and institutional facilities. We ensure safe operational environments for learning and service delivery.", img: "experience-institutional.jpg" },
                    ].map((item, i) => (
                        <section key={i} className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl hover:shadow-2xl transition-all">
                            {/* Image section on top */}
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image 
                                    src={`/images/experience/${item.img}`} 
                                    alt={item.title}
                                    fill 
                                    className="object-cover" 
                                />
                            </div>
                            
                            {/* Text content below image */}
                            <div className="p-8 bg-white">
                                <h2 className="text-2xl font-bold mb-3 text-brand-authority">
                                    {item.title}
                                </h2>
                                <p className="text-brand-authority leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </section>
                    ))}

                    {/* SECTION 3: REFERENCE POLICY */}
                    <section className="overflow-hidden rounded-2xl border border-brand-silver shadow-xl mt-12">
                        {/* Image section on top */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image 
                                src="/images/experience/experience-institutional.jpg" 
                                alt="Reference Policy" 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        
                        {/* Text content below image */}
                        <div className="p-8 md:p-12 bg-white">
                            <h2 className="text-2xl font-bold mb-6 text-brand-authority">
                                Reference Policy
                            </h2>
                            <div className="text-brand-authority leading-relaxed space-y-4">
                                <p>
                                    Detailed performance references and contact information for past and current projects are available upon request.
                                </p>
                                <p>
                                    We maintain the privacy and security of our clients, particularly within sensitive sectors. Verified credentials are provided during formal procurement or engagement processes to ensure confidentiality.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
}
