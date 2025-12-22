import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Financial Guides | CanMore Accounting",
    description: "Expert financial advice and guides for Ontario businesses.",
};

export default function FinancialGuidesPage() {
    const guides = [
        {
            title: "Starting a Business in Ontario",
            category: "Business Startup",
            desc: "A comprehensive checklist for registering your business, setting up HST, and payroll accounts in Ontario.",
            readTime: "10 min read",
        },
        {
            title: "Understanding HST for Small Businesses",
            category: "Taxation",
            desc: "Everything you need to know about collecting, filing, and remitting Harmonized Sales Tax (HST).",
            readTime: "8 min read",
        },
        {
            title: "Payroll Deductions Explained",
            category: "Payroll",
            desc: "Guide to CPP, EI, and income tax deductions for employers in Canada.",
            readTime: "12 min read",
        },
        {
            title: "Incorporation vs. Sole Proprietorship",
            category: "Business Structure",
            desc: "Key differences, tax implications, and benefits of each business structure.",
            readTime: "15 min read",
        },
        {
            title: "Year-End Tax Planning Tips",
            category: "Tax Planning",
            desc: "Strategies to minimize your corporate tax liability before the fiscal year ends.",
            readTime: "7 min read",
        },
        {
            title: "Record Keeping Best Practices",
            category: "Bookkeeping",
            desc: "How to organize your receipts and financial documents for a stress-free audit.",
            readTime: "5 min read",
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Financial Guides</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Expert insights and practical advice to help you manage your business finances in Ontario.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guides.map((guide, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[#991b1b] text-sm font-bold uppercase tracking-wider">{guide.category}</span>
                                        <span className="text-gray-400 text-sm">{guide.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#991b1b] transition-colors">{guide.title}</h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3">{guide.desc}</p>
                                    <Link href="#" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-[#991b1b] transition-colors">
                                        Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <HoverFooter />
        </main>
    );
}
