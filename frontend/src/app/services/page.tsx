import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { Cta4 } from "@/components/ui/cta-4";
import { FileText, Calculator, TrendingUp, Shield, Briefcase, DollarSign } from "lucide-react";
import Link from "next/link";

const services = [
    {
        category: "Accounting Services",
        items: [
            {
                title: "Accounting & Bookkeeping",
                icon: FileText,
                description: "Full accounting cycle management, financial statements, and audit preparation. We specialize in QuickBooks, Sage, and manual bookkeeping for corporations, partnerships, small businesses, and non-profits.",
                href: "/services/bookkeeping"
            },
            {
                title: "Payroll Management",
                icon: Calculator,
                description: "Comprehensive payroll services including CPP, EI, income taxes, T4/T4A preparation, donation receipts, and Service Canada/CRA account handling.",
                href: "/services/payroll"
            },
            {
                title: "Tax Services",
                icon: DollarSign,
                description: "Expert preparation for Corporation Tax, GST returns, Import & Export tax, Partnership tax, and Individual tax returns.",
                href: "/services/tax-preparation"
            }
        ]
    },
    {
        category: "Financial Services",
        items: [
            {
                title: "Insurance Solutions",
                icon: Shield,
                description: "Protect what matters with Life, Critical Illness, Health, Dental, Disability, Accident, Mortgage, and Business Insurance solutions.",
                href: "/services/insurance"
            },
            {
                title: "Investments",
                icon: TrendingUp,
                description: "Strategic investment planning for Retirement (RRSP), Education (RESP), Savings, Shares, and specialized Business investments.",
                href: "/services/financial-planning"
            },
            {
                title: "Business Consulting",
                icon: Briefcase,
                description: "Business setup, business plans, CRA account setup, software setup (QuickBooks/Sage), budgeting, costing, and general advisory services.",
                href: "/services/financial-planning" // Grouped under planning for now or could be a new page
            }
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive financial solutions tailored to help you meet your goals.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <div className="container mx-auto px-4 py-20 space-y-24">
                {services.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-3xl font-bold text-[#991b1b] mb-12 border-b-2 border-red-100 pb-4 inline-block">
                            {section.category}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {section.items.map((service, sIdx) => (
                                <Link key={sIdx} href={service.href} className="block h-full">
                                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group h-full">
                                        <div className="flex flex-col h-full">
                                            <div className="bg-red-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#991b1b] transition-colors duration-300">
                                                <service.icon className="text-[#991b1b] w-7 h-7 group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                            <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6">
                                                {service.description}
                                            </p>
                                            <div className="flex items-center text-[#991b1b] font-bold text-sm group-hover:translate-x-1 transition-transform">
                                                LEARN MORE <span className="ml-2">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <section className="bg-white">
                <Cta4
                    title="Ready to Elevate Your Business?"
                    description="Contact us today to discuss how our comprehensive financial services can help you achieve your goals."
                    buttonText="Get Started"
                    buttonUrl="/contact"
                    items={[
                        "Professional Accounting",
                        "Strategic Planning",
                        "Risk Management",
                        "Growth Focused"
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop"
                />
            </section>

            <HoverFooter />
        </main>
    );
}
