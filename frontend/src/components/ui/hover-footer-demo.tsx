"use client";
import React from "react";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Dribbble,
    Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export function HoverFooter() {
    // Footer link data
    const footerLinks = [
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Careers", href: "/careers" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Financial Guides", href: "/resources/guides" },
                { label: "Tax Calendar", href: "/resources/calendar" },
                { label: "CRA Resources", href: "/resources/cra" },
            ],
        },
    ];

    // Contact info data
    const contactInfo = [
        {
            icon: <Mail size={18} className="text-primary" />,
            text: "INFO@CANMOREACCOUNTING.COM",
            href: "mailto:INFO@CANMOREACCOUNTING.COM",
        },
        {
            icon: <Phone size={18} className="text-primary" />,
            text: "416-477-0644",
            href: "tel:+14164770644",
        },
        {
            icon: <MapPin size={18} className="text-primary" />,
            text: "310 - 1585 Markham Road, Scarborough Ontario M1B 2W1",
        },
    ];

    // Social media icons
    const socialLinks = [
        { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
        { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
        { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    ];

    return (
        <footer className="bg-white relative h-fit rounded-t-3xl overflow-hidden mt-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto p-14 z-40 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
                    {/* Brand section */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/canmore-logo.jpg"
                                alt="CanMore Accounting"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-500">
                            Professional bookkeeping, payroll, tax preparation, insurance and investment services for your business growth.
                        </p>
                    </div>

                    {/* Footer link sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-gray-900 text-lg font-semibold mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label} className="relative">
                                        <a
                                            href={link.href}
                                            className="text-gray-600 hover:text-primary transition-colors hover:font-medium"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact section */}
                    <div>
                        <h4 className="text-gray-900 text-lg font-semibold mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-gray-600">
                                    {item.icon}
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="">
                                            {item.text}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-gray-200 my-8" />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    {/* Social icons */}
                    <div className="flex space-x-6 text-gray-400">
                        {socialLinks.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="hover:text-primary transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-center md:text-left text-gray-500">
                        &copy; {new Date().getFullYear()} CanMore Accounting. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Text hover effect */}
            <div className="flex justify-center h-[20rem] md:h-[25rem] -mt-32 md:-mt-40 -mb-28 pointer-events-auto">
                <div className="w-full max-w-7xl px-4">
                    <TextHoverEffect text="CANMORE" />
                </div>
            </div>

            <FooterBackgroundGradient />
        </footer>
    );
}
