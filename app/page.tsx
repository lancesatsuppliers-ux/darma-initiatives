import HomeSlideshow from "@/components/HomeSlideshow";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrated Security & Infrastructure | Darma Initiatives",
  description: "Enterprise security, surveillance, and infrastructure services for government, industrial, and commercial sectors.",
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-brand-platinum text-brand-authority relative flex flex-col">

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center pt-24">
          {/* Hero Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Industrial Infrastructure"
              fill
              className="object-cover opacity-60 contrast-110 transition-opacity"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-authority/30 via-brand-authority/10 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl bg-white/45 backdrop-blur-xl border border-brand-silver p-8 md:p-12 rounded-2xl shadow-2xl">
              <span className="text-brand-corporate-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                Integrated Operational Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-authority mb-6 leading-[1.1]">
                Security, Surveillance & Infrastructure Development
              </h1>
              <p className="text-brand-steel text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
                Darma Initiatives delivers mission-critical services to government departments, institutional environments, and enterprise organizations across South Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-brand-corporate-blue hover:bg-brand-authority text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg transition-all">
                  Request a Quote
                </Link>
                <Link href="/services" className="bg-white/60 hover:bg-white text-brand-authority border border-brand-silver px-8 py-3.5 rounded-lg font-semibold transition-all">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CORE SERVICE CATEGORIES (4-Card Grid) */}
        <section className="py-24 bg-white relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-authority mb-4">Core Service Lines</h2>
              <div className="w-20 h-1.5 bg-brand-corporate-blue mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Security & Protection", icon: "01", desc: "Professional guarding, tactical response and high-risk protection operations.", img: "/images/security/panel-1.jpg" },
                { title: "Surveillance Technology", icon: "02", desc: "Design, installation and maintenance of integrated CCTV and electronic security.", img: "/images/cctv/panel-1.jpg" },
                { title: "Control Room Ops", icon: "03", desc: "24/7 centralized monitoring, incident management and emergency coordination.", img: "/images/control-room/panel-1.jpg" },
                { title: "Facilities & Infrastructure", icon: "04", desc: "Maintenance, cleaning and infrastructure support for institutional facilities.", img: "/images/facilities/panel-1.jpg" },
              ].map((item, i) => (
                <div key={i} className="bg-brand-platinum/50 border border-brand-silver rounded-2xl hover:shadow-xl transition-all group overflow-hidden flex flex-col">
                  <div className="relative w-full h-40 bg-brand-platinum">
                    <Image 
                      src={item.img} 
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-2xl font-bold text-brand-corporate-blue/30 group-hover:text-brand-corporate-blue transition-colors mb-4 block">{item.icon}</span>
                    <h3 className="text-xl font-bold text-brand-authority mb-3">{item.title}</h3>
                    <p className="text-brand-steel leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHY DARMA INITIATIVES (Strength Signals) */}
        <section className="py-24 bg-brand-authority text-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 leading-tight">Delivering Factual Operational Strength</h2>
                <div className="space-y-6">
                  {[
                    { label: "Regulatory Compliance", text: "Fully accredited with PSIRA, CIDB and SARS requirements." },
                    { label: "National Footprint", text: "Capability to mobilize and deploy within all 9 provinces." },
                    { label: "Technical Expertise", text: "Qualified personnel with specialized systems and engineering backgrounds." },
                    { label: "Rapid Deployment", text: "Proven ability to scale operations for urgent institutional requirements." },
                  ].map((signal, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-corporate-blue flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-brand-silver mb-1">{signal.label}</h4>
                        <p className="text-brand-platinum/70 leading-relaxed">{signal.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <HomeSlideshow />
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVICE TEASERS */}
        <section className="py-24 bg-brand-platinum">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-authority mb-4">Operational Deep-Dive</h2>
                <p className="text-brand-steel text-lg italic">Explore the specifics of our key service divisions.</p>
              </div>
              <Link href="/services" className="text-brand-corporate-blue font-bold hover:text-brand-authority transition-colors border-b-2 border-brand-corporate-blue pb-1">
                View All Service Lines
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Physical Security", link: "/security", text: "Guarding and tactical protection services for high-risk corporate and property sectors.", img: "/images/security/card-guarding.jpg" },
                { title: "Electronic Systems", link: "/cctv", text: "State-of-the-art surveillance and access control integration for secure perimeters.", img: "/images/cctv/card-design.jpg" },
                { title: "Facilities Care", link: "/facilities", text: "Integrated Soft and Hard FM services ensuring compliant and clean environments.", img: "/images/facilities/card-maintenance.jpg" },
              ].map((teaser, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-md rounded-2xl border border-brand-silver shadow-lg flex flex-col overflow-hidden">
                  <div className="relative w-full h-40 bg-white">
                    <Image 
                      src={teaser.img} 
                      alt={teaser.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-10 flex flex-col items-start flex-grow">
                    <h3 className="text-2xl font-bold text-brand-authority mb-4">{teaser.title}</h3>
                    <p className="text-brand-steel leading-relaxed mb-6 flex-grow">{teaser.text}</p>
                    <Link href={teaser.link} className="text-brand-corporate-blue font-bold hover:gap-2 flex items-center transition-all group">
                      Service Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PROOF (Compliance & Accreditation Strip) */}
        <section className="py-12 border-y border-brand-silver bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
              {["PSIRA ACCREDITED", "CIDB LEVEL 4", "B-BBEE LEVEL 1", "SABS QUALITY CONTROL", "CSD REGISTERED"].map((text, i) => (
                <span key={i} className="text-brand-authority font-extrabold tracking-widest text-xs md:text-sm whitespace-nowrap">{text}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 6. LATEST INSIGHTS (News placeholder) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-brand-authority mb-12 text-center">Latest Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { date: "Oct 2025", title: "Modernizing Security in High-Density Environments", desc: "An analysis of integrated surveillance systems in urban infrastructure projects." },
                { date: "Sep 2025", title: "Statutory Compliance in Security Procurement", desc: "Understanding the importance of PSIRA and CIDB registrations for institutional buyers." }
              ].map((news, i) => (
                <div key={i} className="border-l-4 border-brand-corporate-blue pl-8 py-4">
                  <span className="text-brand-steel text-sm font-semibold">{news.date}</span>
                  <h4 className="text-xl font-bold text-brand-authority mt-2 mb-3">{news.title}</h4>
                  <p className="text-brand-steel leading-relaxed">{news.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="py-24 px-6 relative overflow-hidden bg-brand-corporate-blue">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Discuss Your Requirements</h2>
            <p className="text-brand-platinum text-xl mb-12 max-w-2xl mx-auto">
              Contact our corporate engagement team for a structured assessment and service proposal.
            </p>
            <Link href="/contact" className="inline-block bg-white text-brand-corporate-blue px-12 py-4 rounded-xl font-bold text-lg hover:bg-brand-platinum transition-all shadow-2xl">
              Request a Quote
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
