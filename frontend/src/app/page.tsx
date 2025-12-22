import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Phone, Mail, FileText, TrendingUp, Shield, Calculator, Presentation } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-2";
import { Cta4 } from "@/components/ui/cta-4";
import { HoverFooter } from "@/components/ui/hover-footer-demo";

const features = [
    {
        Icon: FileText,
        name: "Bookkeeping",
        description: "Accurate and timely bookkeeping to keep your finances organized.",
        href: "/services/bookkeeping",
        cta: "Learn more",
        background: <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" alt="Bookkeeping" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: Calculator,
        name: "Tax Preparation",
        description: "Expert tax preparation services ensuring compliance and maximizing returns.",
        href: "/services/tax-preparation",
        cta: "Learn more",
        background: <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=800" alt="Tax Prep" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: TrendingUp,
        name: "Payroll",
        description: "Seamless payroll management so you can focus on growing your business.",
        href: "/services/payroll",
        cta: "Learn more",
        background: <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Payroll" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: Shield,
        name: "Insurance",
        description: "Protect your assets and grow your wealth with our financial planning services.",
        href: "/services/insurance",
        cta: "Learn more",
        background: <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" alt="Insurance" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: Presentation,
        name: "Financial Planning",
        description: "Tailored strategies to help you achieve your long-term financial goals and security.",
        href: "/services/financial-planning",
        cta: "Learn more",
        background: <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" alt="Financial Planning" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];

export default function Home() {
    return (
        <main>
            {/* Navbar Removed for Fullscreen Hero Look */}

            {/* Hero */}
            <HeroSection
                // Logo removed in favor of fixed SiteHeader
                slogan="ELEVATE YOUR BUSINESS"
                title={
                    <>
                        Professional <br />
                        <span className="text-primary">Financial Management</span>
                    </>
                }
                subtitle="We provide peace of mind that small to medium-sized business clients bookkeeping, payroll, tax preparation, insurance and investment services are professionally managed."
                callToAction={{
                    text: "FREE CONSULTATION",
                    href: "#contact",
                }}
                backgroundImage="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&q=80&w=2000"
                contactInfo={{
                    website: "canmorefinancial.com",
                    phone: "416-477-0644",
                    address: "310 - 1585 Markham Road, Scarborough Ontario M1B 2W1",
                }}
                className=""
            />

            {/* Services */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container">
                    <h2 className="text-4xl font-bold text-center text-primary mb-2">Our Services</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Small to medium-sized business clients bookkeeping, payroll, tax preparation, insurance and investment services.</p>

                    <BentoGrid className="lg:grid-rows-3 h-full">
                        {features.map((feature) => (
                            <BentoCard key={feature.name} {...feature} />
                        ))}
                    </BentoGrid>
                </div>
            </section>

            {/* Contact / CTA */}
            <section id="contact">
                <Cta4
                    title="Free Consultation"
                    description="Call or Email Today to schedule your session. We are ready to help you elevate your business with professional financial management."
                    buttonText="Contact Us Now"
                    buttonUrl="mailto:INFO@CANMOREFINANCIAL.COM"
                    items={[
                        "Expert Financial Guidance",
                        "Tax Compliance Assurance",
                        "Seamless Payroll Management",
                        "Personalized Business Strategies",
                        "Peace of Mind for Your Business"
                    ]}
                />
            </section>

            {/* Replaced old footer with new HoverFooter */}
            <HoverFooter />
        </main>
    );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="service-card">
            <div style={{ marginBottom: '20px' }}>{icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--primary)' }}>{title}</h3>
            <p style={{ color: 'var(--text-light)' }}>{desc}</p>
        </div>
    )
}
