"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const isActive = (path: string) => pathname === path || (path === "/services" && pathname.startsWith("/services"));

    const linkClasses = (path: string) =>
        `transition-all duration-200 flex items-center gap-1 ${isActive(path)
            ? "text-brand-authority font-semibold border-b-2 border-brand-silver pb-1"
            : "text-brand-steel hover:text-brand-authority"
        }`;

    const dropdownItems = [
        { name: "Security & Protection", href: "/security" },
        { name: "CCTV & Electronics", href: "/cctv" },
        { name: "Control Room Ops", href: "/control-room" },
        { name: "Facilities & Infrastructure", href: "/facilities" },
    ];

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl bg-white/45 backdrop-blur-xl rounded-xl shadow-lg border border-brand-silver transition-all duration-300">
            <div className="px-6 py-4 flex items-center justify-between">

                {/* LOGO / COMPANY NAME */}
                <Link href="/" className="flex items-center gap-3.5 group hover:opacity-80 transition-opacity">
                    <div className="relative w-7 h-7 flex items-center justify-center">
                        <div className="absolute inset-0 bg-brand-authority/10 rounded-sm transform rotate-45 transition-transform group-hover:rotate-90 duration-500"></div>
                        <div className="relative w-3.5 h-3.5 bg-brand-authority"></div>
                    </div>
                    <span className="text-brand-authority font-bold text-lg tracking-[0.25em] uppercase leading-none">
                        DARMA INITIATIVES
                    </span>
                </Link>

                {/* NAVIGATION */}
                <nav className="hidden md:flex space-x-8 text-sm md:text-base font-medium">
                    <Link href="/" className={linkClasses("/")}>
                        Home
                    </Link>
                    <Link href="/about" className={linkClasses("/about")}>
                        About
                    </Link>

                    {/* SERVICES DROPDOWN */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <Link href="/services" className={linkClasses("/services")}>
                            Services
                            <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>

                        {/* DROPDOWN MENU */}
                        <div className={`absolute left-0 mt-2 w-64 bg-white/90 backdrop-blur-2xl rounded-xl shadow-2xl border border-brand-silver py-3 transition-all duration-200 origin-top-left ${isServicesOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none"}`}>
                            {dropdownItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block px-5 py-2.5 text-sm transition-colors hover:bg-brand-platinum/50 ${pathname === item.href ? "text-brand-authority font-bold" : "text-brand-steel hover:text-brand-authority"}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mx-4 mt-2 pt-2 border-t border-brand-silver/50">
                                <Link href="/services" className="text-xs font-bold text-brand-corporate-blue uppercase tracking-wider hover:text-brand-authority transition-colors">
                                    All Service Lines →
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/contact" className={linkClasses("/contact")}>
                        Contact
                    </Link>
                </nav>

                {/* CTA */}
                <Link href="/contact" className="bg-brand-authority hover:bg-brand-burgundy text-white px-5 py-2.5 text-sm font-semibold rounded-lg shadow-md transition-all">
                    Request a Quote
                </Link>
            </div>
        </header>
    );
}
