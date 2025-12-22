import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { guidesData } from "@/lib/guides-data";

export const metadata = {
    title: "Financial Guides | CanMore Accounting",
    description: "Expert financial advice and guides for Ontario businesses.",
};

export default function FinancialGuidesPage() {
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
                        {guidesData.map((guide) => (
                            <div key={guide.slug} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[#991b1b] text-sm font-bold uppercase tracking-wider">{guide.category}</span>
                                        <span className="text-gray-400 text-sm">{guide.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#991b1b] transition-colors">{guide.title}</h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3">{guide.description}</p>
                                    <Link href={`/resources/guides/${guide.slug}`} className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-[#991b1b] transition-colors">
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
