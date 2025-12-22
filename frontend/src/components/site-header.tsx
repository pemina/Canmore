"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                // Always white background for safety and cleanliness based on user request style
                "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}

                    <Link href="/" className="flex items-center gap-3 group">
                        <img
                            src="/canmore-logo.jpg"
                            alt="CanMore Accounting"
                            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-[#991b1b] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white rounded-full px-6 shadow-sm hover:shadow-md transition-all">
                            <Link href="/contact">Free Consultation</Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-gray-700 hover:text-[#991b1b] py-2 border-b border-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="bg-[#991b1b] w-full mt-2">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Free Consultation</Link>
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
}
