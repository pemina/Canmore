import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { Cta4 } from "@/components/ui/cta-4";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PayrollPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="bg-red-50 p-4 rounded-2xl">
                            <TrendingUp className="h-12 w-12 text-[#991b1b]" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Payroll Management</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Seamless payroll solutions so you can focus on growing your business.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Payroll Management"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reliable Payroll Services</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Your employees are your most valuable asset. ensure they are paid accurately and on time with our full-service payroll management. We handle all the deductions, remittances, and filings so you don't have to worry about compliance penalties.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "CPP & EI Calculations",
                                    "Income Tax Deductions",
                                    "T4 & T4A Preparation",
                                    "Direct Deposit Setup",
                                    "WSIB / EHT Filing",
                                    "Record of Employment (ROE)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#991b1b]" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button asChild className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-8 py-6 text-lg rounded-full">
                                <Link href="/contact">Get Payroll Help</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section>
                <Cta4
                    title="Simplifying Payroll for You"
                    description="Ensure your team is paid on time, every time, while we handle the compliance and calculations."
                    buttonText="Start Payroll Services"
                    buttonUrl="/contact"
                    items={[
                        "Timely Payments",
                        "Compliance Guarantee",
                        "Automated Systems",
                        "Employee Satisfaction"
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                />
            </section>

            <HoverFooter />
        </main>
    );
}
