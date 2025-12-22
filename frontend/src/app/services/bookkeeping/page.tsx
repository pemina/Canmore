import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BookkeepingPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="bg-red-50 p-4 rounded-2xl">
                            <FileText className="h-12 w-12 text-[#991b1b]" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bookkeeping</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Accurate and timely bookkeeping to keep your finances organized.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
                                alt="Bookkeeping"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Organized Financial Records</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Clean books are the foundation of a successful business. We provide meticulous bookkeeping services using modern software like QuickBooks and Sage, ensuring you always have a clear picture of your financial health.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Daily Transaction Categorization",
                                    "Bank & Credit Card Reconciliation",
                                    "Accounts Payable & Receivable",
                                    "Financial Statement Preparation",
                                    "Cloud Accounting Setup (QuickBooks/Sage)",
                                    "Monthly/Quarterly Reporting"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#991b1b]" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button asChild className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-8 py-6 text-lg rounded-full">
                                <Link href="/contact">Organize My Books</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <HoverFooter />
        </main>
    );
}
