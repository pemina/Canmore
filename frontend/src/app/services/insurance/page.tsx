import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InsurancePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="bg-red-50 p-4 rounded-2xl">
                            <Shield className="h-12 w-12 text-[#991b1b]" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Insurance Solutions</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Protect your assets and secure your family's future.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                                alt="Insurance"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Coverage Guidance</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Risk management is a crucial part of any financial plan. We offer access to a wide range of insurance products tailored to protect you, your family, and your business from the unexpected.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Life Insurance",
                                    "Critical Illness Coverage",
                                    "Disability Insurance",
                                    "Group Health & Dental Benefits",
                                    "Business & Liability Insurance",
                                    "Mortgage Insurance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#991b1b]" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button asChild className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-8 py-6 text-lg rounded-full">
                                <Link href="/contact">Get a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <HoverFooter />
        </main>
    );
}
