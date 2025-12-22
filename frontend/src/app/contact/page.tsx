import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are here to help. Reach out to schedule your free consultation.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Information */}
                        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-50 p-3 rounded-lg shrink-0">
                                        <Phone className="text-[#991b1b] h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                        <a href="tel:4164770644" className="text-gray-600 hover:text-[#991b1b] transition-colors block">(416) 477-0644</a>
                                        <p className="text-sm text-gray-500 mt-1">Calgary: (403) 404-2729</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-red-50 p-3 rounded-lg shrink-0">
                                        <Mail className="text-[#991b1b] h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:info@canmorefinancial.com" className="text-gray-600 hover:text-[#991b1b] transition-colors">info@canmorefinancial.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-red-50 p-3 rounded-lg shrink-0">
                                        <MapPin className="text-[#991b1b] h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Main Office (Markham)</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            UNIT#94 - 7393 Markham Road<br />
                                            Markham, Ontario L3S 0B5, Canada
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-red-50 p-3 rounded-lg shrink-0">
                                        <MapPin className="text-[#991b1b] h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Calgary Office</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            5 Richard Way SW<br />
                                            Calgary, AB T3E 7M8
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-[#991b1b] rounded-2xl p-10 shadow-lg text-white">
                            <div className="flex items-center gap-4 mb-8">
                                <Clock className="h-8 w-8 text-white/90" />
                                <h2 className="text-2xl font-bold">Business Hours</h2>
                            </div>

                            <div className="space-y-4 text-white/90 font-medium">
                                <div className="flex justify-between border-b border-white/20 pb-3">
                                    <span>Monday</span>
                                    <span>09:30 am – 04:30 pm</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-3">
                                    <span>Tuesday</span>
                                    <span>09:30 am – 04:30 pm</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-3">
                                    <span>Wednesday</span>
                                    <span>09:30 am – 04:30 pm</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-3">
                                    <span>Thursday</span>
                                    <span>09:30 am – 04:30 pm</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-3">
                                    <span>Friday</span>
                                    <span>09:30 am – 04:30 pm</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-3">
                                    <span>Saturday</span>
                                    <span>By Appointment</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>By Appointment</span>
                                </div>
                            </div>

                            <div className="mt-12 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                                <p className="text-sm leading-relaxed">
                                    We are happy to accommodate appointments outside of regular business hours upon request. Please call or email to schedule.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <HoverFooter />
        </main>
    );
}
