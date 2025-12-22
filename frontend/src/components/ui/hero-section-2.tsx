"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Globe, Phone, MapPin } from 'lucide-react';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: <Globe className="h-5 w-5 text-primary" />,
        phone: <Phone className="h-5 w-5 text-primary" />,
        address: <MapPin className="h-5 w-5 text-primary" />,
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

// Prop types for the HeroSection component
interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    logo?: {
        url: string;
        alt: string;
        text?: string;
    };
    slogan?: string;
    title: React.ReactNode;
    subtitle: string;
    callToAction: {
        text: string;
        href: string;
    };
    backgroundImage: string;
    contactInfo: {
        website: string;
        phone: string;
        address: string;
    };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
    ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {

        // Animation variants for the container to orchestrate children animations
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                },
            },
        };

        // Animation variants for individual text/UI elements
        const itemVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut",
                },
            },
        };

        return (
            <motion.div
                ref={ref}
                className={cn(
                    "relative flex w-full flex-col overflow-hidden bg-white text-gray-900 md:flex-row", // Switched to bg-white
                    className
                )}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            // removing spread props to avoid type collision with HTMLDivElement vs HTMLMotionProps
            >
                {/* Left Side: Content */}
                <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-20 z-10">
                    {/* Top Section: Logo & Main Content */}
                    <div>
                        <motion.header className="mb-10" variants={itemVariants}>
                            {logo && (
                                <div className="flex items-center gap-4">
                                    {/* Placeholder for when image is missing, or actual image */}
                                    {logo.url ? (
                                        <img src={logo.url} alt={logo.alt} className="h-12 w-12 rounded-full object-cover shadow-sm" />
                                    ) : (
                                        <div className="h-12 w-12 rounded-full bg-gray-100" />
                                    )}
                                    <div>
                                        {logo.text && <p className="text-xl font-bold text-gray-900 leading-none mb-1">{logo.text}</p>}
                                        {slogan && <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{slogan}</p>}
                                    </div>
                                </div>
                            )}
                        </motion.header>

                        <motion.main variants={containerVariants}>
                            <motion.h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl mb-6" variants={itemVariants}>
                                {title}
                            </motion.h1>
                            <motion.div className="mb-8 h-1 w-24 bg-primary" variants={itemVariants}></motion.div>
                            <motion.p className="mb-10 max-w-lg text-lg text-gray-600 leading-relaxed font-medium" variants={itemVariants}>
                                {subtitle}
                            </motion.p>
                            <motion.a
                                href={callToAction.href}
                                className="inline-block rounded-md bg-primary px-8 py-4 text-sm font-bold tracking-[0.1em] text-white uppercase shadow-lg transition-all hover:bg-red-700 hover:shadow-xl hover:-translate-y-1"
                                variants={itemVariants}
                            >
                                {callToAction.text}
                            </motion.a>
                        </motion.main>
                    </div>

                    {/* Bottom Section: Contact Info */}
                    <motion.div className="mt-16 w-full" variants={itemVariants}>
                        <div className="grid grid-cols-1 gap-y-4 gap-x-8 text-sm sm:grid-cols-3">
                            <div className="flex items-center gap-3">
                                <InfoIcon type="website" />
                                <span className="font-semibold text-gray-700 hover:text-primary transition-colors">{contactInfo.website}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <InfoIcon type="phone" />
                                <span className="font-semibold text-gray-700 hover:text-primary transition-colors">{contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <InfoIcon type="address" />
                                <span className="font-semibold text-gray-700 hover:text-primary transition-colors">{contactInfo.address}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Image with Clip Path Animation */}
                <motion.div
                    className="w-full min-h-[400px] bg-cover bg-center md:absolute md:right-0 md:top-0 md:h-full md:w-[55%]"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                </motion.div>
            </motion.div>
        );
    }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
