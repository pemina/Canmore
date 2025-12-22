import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { ExternalLink, ShieldCheck, User, Building2, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "CRA Resources | CanMore Accounting",
    description: "Official CRA links and resources for individuals and businesses.",
};

export default function CRAResourcesPage() {
    const resources = [
        {
            title: "My Account for Individuals",
            icon: <User className="h-8 w-8 text-[#991b1b]" />,
            desc: "Manage your tax and benefit information online. View your notice of assessment, check benefit payments, and set up direct deposit.",
            url: "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html",
            target: "Tax Payers",
        },
        {
            title: "My Business Account",
            icon: <Building2 className="h-8 w-8 text-[#991b1b]" />,
            desc: "Access your GST/HST, payroll, corporation income tax, excise tax, excise duties, and other levies accounts online.",
            url: "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/business-account.html",
            target: "Business Owners",
        },
        {
            title: "Represent a Client",
            icon: <Users className="h-8 w-8 text-[#991b1b]" />,
            desc: "Securely access tax information on behalf of individuals and businesses, including your employer.",
            url: "https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html",
            target: "Representatives",
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">CRA Resources</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Quick access to official Canada Revenue Agency services and secure portals.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.map((resource, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
                                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    {resource.icon}
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
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center md:text-left md:flex items-center gap-8">
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
                    </div>
                </div>
            </section>

            <HoverFooter />
        </main>
    );
}
