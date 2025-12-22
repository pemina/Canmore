"use client";

import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { Calendar } from "lucide-react";
import { calendarData } from "@/lib/calendar-data";
import { motion } from "framer-motion";

export default function TaxCalendarPage() {
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
                        Tax Calendar
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Stay on top of important CRA deadlines for your business and personal taxes.
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="space-y-12">
                        {calendarData.map((month, monthIndex) => (
                            <motion.div
                                key={month.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: monthIndex * 0.1 }}
                                className="relative pl-8 md:pl-0"
                            >
                                <div className="hidden md:block absolute left-[50%] -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200"></div>

                                <div className="md:flex items-start justify-between relative z-10">
                                    <div className="md:w-5/12 text-right pr-12 hidden md:block">
                                        <h2 className="text-3xl font-bold text-[#991b1b] sticky top-24">{month.name}</h2>
                                    </div>

                                    <div className="bg-[#991b1b] text-white rounded-full w-12 h-12 flex items-center justify-center absolute left-0 md:left-[50%] md:-translate-x-1/2 -mt-2 shadow-lg z-20">
                                        <Calendar className="h-5 w-5" />
                                    </div>

                                    <div className="md:hidden mb-6 pl-12">
                                        <h2 className="text-3xl font-bold text-[#991b1b]">{month.name}</h2>
                                    </div>

                                    <div className="md:w-5/12 pl-12 md:pl-12 space-y-6">
                                        {month.events.map((event, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.02 }}
                                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="text-center min-w-[3rem]">
                                                        <span className="block text-2xl font-bold text-gray-900">{event.day}</span>
                                                        <span className="block text-xs uppercase text-gray-400 font-bold">{month.name.substring(0, 3)}</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 mb-1">{event.title}</h3>
                                                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">{event.type}</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <HoverFooter />
        </main>
    );
}
