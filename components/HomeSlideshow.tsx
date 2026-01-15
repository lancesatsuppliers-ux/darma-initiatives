"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Slideshow images are loaded from:
// /public/images/home-slideshow/
// Add or replace images here using the same naming pattern (slide-1.jpg, slide-2.jpg, etc.).
const SLIDES = [
    { src: "/images/home-slideshow/slide-1.jpg", alt: "Corporate Operational Readiness" },
    { src: "/images/home-slideshow/slide-2.jpg", alt: "Industrial Security Infrastructure" },
    { src: "/images/home-slideshow/slide-3.jpg", alt: "Integrated Control Room Systems" },
    { src: "/images/home-slideshow/slide-4.jpg", alt: "Advanced Surveillance Monitoring" },
];

export default function HomeSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5000); // 5 seconds per slide

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden bg-brand-authority/20">
            {SLIDES.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover opacity-90 transition-opacity duration-700"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-brand-corporate-blue/10"></div>
                </div>
            ))}

            {/* Subtle Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {SLIDES.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-4" : "bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
