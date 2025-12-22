import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { Briefcase, CheckCircle, GraduationCap } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Careers | CanMore Accounting",
    description: "Join our team of dedicated accounting professionals.",
};

export default function CareersPage() {
    const openings = [
        {
            title: "Senior Bookkeeper",
            type: "Full-time",
            location: "Scarborough, ON",
            description: "We are looking for an experienced bookkeeper to manage complex client accounts.",
        },
        {
            title: "Tax Specialist",
            type: "Seasonal / Full-time",
            location: "Scarborough, ON",
            description: "Seeking a tax expert for the upcoming tax season with possibility of extension.",
        },
        {
            title: "Administrative Assistant",
            type: "Part-time",
            location: "Scarborough, ON",
            description: "Support our team with administrative tasks and client communication.",
        },
    ];

    const benefits = [
        { icon: <Briefcase className="h-6 w-6" />, title: "Professional Growth", desc: "Continuous learning and development opportunities." },
        { icon: <CheckCircle className="h-6 w-6" />, title: "Work-Life Balance", desc: "Flexible scheduling and supportive work environment." },
        { icon: <GraduationCap className="h-6 w-6" />, title: "Mentorship", desc: "Work alongside experienced CPAs and industry veterans." },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <section className="relative bg-[#991b1b] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
                    <p className="text-xl max-w-2xl mx-auto text-white/90">
                        Build your career with CanMore Accounting. We are always looking for talented individuals to help our clients succeed.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-50 text-[#991b1b] rounded-xl mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Current Openings</h2>
                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {openings.map((job, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500">
                                        <span className="bg-gray-100 px-3 py-1 rounded-full">{job.type}</span>
                                        <span className="bg-gray-100 px-3 py-1 rounded-full">{job.location}</span>
                                    </div>
                                    <p className="text-gray-600 max-w-xl">{job.description}</p>
                                </div>
                                <button className="bg-[#991b1b] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7f1d1d] transition-colors whitespace-nowrap">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <HoverFooter />
        </main>
    );
}
