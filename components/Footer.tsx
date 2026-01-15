"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-authority text-brand-silver py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3.5">
                    <div className="relative w-7 h-7 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/10 rounded-sm transform rotate-45"></div>
                        <div className="relative w-3.5 h-3.5 bg-brand-corporate-blue"></div>
                    </div>
                    <span className="font-bold tracking-[0.25em] text-white uppercase leading-none">DARMA INITIATIVES</span>
                </div>
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} Darma Initiatives (Pty) Ltd. All Rights Reserved.
                </div>
                <div className="flex gap-8 text-sm font-medium">
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
                    <Link href="/governance" className="hover:text-white transition-colors">Governance</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
