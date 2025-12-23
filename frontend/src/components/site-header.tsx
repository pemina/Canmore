"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

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
        {
            name: "Resources",
            href: "#",
            children: [
                { name: "Guides", href: "/resources/guides" },
                { name: "Tax Calendar", href: "/resources/calendar" },
                { name: "CRA My Account", href: "/resources/cra" },
            ]
        },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
                            <div key={link.name} className="relative group">
                                {link.children ? (
                                    <>
                                        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#991b1b] transition-colors py-2">
                                            {link.name}
                                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                        </button>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2 min-w-[200px]">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#991b1b] hover:bg-gray-50 rounded-lg transition-colors"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-gray-600 hover:text-[#991b1b] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
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
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-lg flex flex-col animate-in slide-in-from-top-2 overflow-y-auto max-h-[80vh]">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-gray-50 last:border-0">
                                {link.children ? (
                                    <div>
                                        <button
                                            onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                                            className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-[#991b1b] py-3"
                                        >
                                            {link.name}
                                            <ChevronDown className={cn("h-4 w-4 transition-transform", isMobileResourcesOpen ? "rotate-180" : "")} />
                                        </button>
                                        {isMobileResourcesOpen && (
                                            <div className="bg-gray-50 rounded-lg p-2 mb-2 flex flex-col gap-1">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#991b1b] rounded-md"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block text-base font-medium text-gray-700 hover:text-[#991b1b] py-3"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="mt-4 pb-2">
                            <Button asChild className="bg-[#991b1b] text-white w-full">
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Free Consultation</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
