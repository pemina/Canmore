"use client";

import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { User, Building2, Users, ExternalLink, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { craResourcesData } from "@/lib/cra-data";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
    User: <User className="h-8 w-8 text-[#991b1b]" />,
    Building2: <Building2 className="h-8 w-8 text-[#991b1b]" />,
    Users: <Users className="h-8 w-8 text-[#991b1b]" />,
};

export default function CRAResourcesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        CRA Resources
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Quick access to official Canada Revenue Agency services and secure portals.
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {craResourcesData.map((resource, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    {iconMap[resource.iconName]}
                                </div>
                                <div className="mb-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{resource.target}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                                <p className="text-gray-600 mb-8 flex-grow">{resource.desc}</p>
                                <Link
                                    href={resource.url}
                                    target="_blank"
                                    className="flex items-center justify-center w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-[#991b1b] transition-colors"
                                >
                                    Access Portal <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center md:text-left md:flex items-center gap-8"
                    >
                        <div className="bg-white p-4 rounded-full shadow-sm mb-6 md:mb-0 inline-block">
                            <ShieldCheck className="h-10 w-10 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need help navigating CRA services?</h3>
                            <p className="text-gray-700 max-w-2xl">
                                We can act as your authorized representative to deal with the CRA on your behalf. Contact us to set up authorization and simplify your tax management.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 md:ml-auto flex-shrink-0">
                            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <HoverFooter />
        </main>
    );
}
