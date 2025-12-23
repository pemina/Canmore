import { SiteHeader } from "@/components/site-header";
import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { Cta4 } from "@/components/ui/cta-4";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header is global in Layout, but we need to ensure padding */}

            {/* Page Header */}
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Dedicated to providing peace of mind through professional financial management since 2014.
                    </p>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <img
                                src="/about-team.png"
                                alt="Meeting"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-[#991b1b] mb-6">Our Team</h2>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sujay Fonseka</h3>
                                <p className="text-sm font-semibold text-[#b91c1c] uppercase tracking-wide mb-4">B.com (Acct) M.Div (Advise) - Owner</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Sujay began her Accounting & Finance career in April 2007. In January of 2016, she gained authorization for Tax and Payroll with the CRA, achieved Payroll Accounting Certification, and established CanMore Financial Services.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Our team is composed of qualified professionals (B.com, CA) dedicated to serving your business needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Comprehensive Approach */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <CheckCircle2 className="text-[#991b1b] h-8 w-8" />
                                <h2 className="text-3xl font-bold text-gray-900">Comprehensive Approach</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We use proven finance strategies designed to meet your needs, risk tolerance, and government requirements. You can count on unbiased recommendations and impartial guidance based directly on your specific situation and goals.
                            </p>
                        </div>

                        {/* Committed to Service */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <CheckCircle2 className="text-[#991b1b] h-8 w-8" />
                                <h2 className="text-3xl font-bold text-gray-900">Committed to Service</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Every successful financial strategy starts with an excellent client relationship. Our mission is to exceed your expectations. We work closely with you to protect what you save against unexpected events and prepare financially for the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section>
                <Cta4
                    title="Partner With Us"
                    description="Experience the difference of working with a team that truly cares about your financial success."
                    buttonText="Get a Free Quote"
                    buttonUrl="/contact"
                    items={[
                        "Personalized Attention",
                        "Expert Knowledge",
                        "Timely Service",
                        "Long-term Partnership"
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000"
                />
            </section>

            <HoverFooter />
        </main>
    );
}
