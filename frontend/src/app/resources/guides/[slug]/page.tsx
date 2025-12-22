import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { guidesData } from "@/lib/guides-data";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

export function generateMetadata({ params }: Props): Metadata {
    const guide = guidesData.find(g => g.slug === params.slug);

    if (!guide) {
        return {
            title: "Guide Not Found | CanMore Accounting",
        };
    }

    return {
        title: `${guide.title} | CanMore Accounting`,
        description: guide.description,
    };
}

export function generateStaticParams() {
    return guidesData.map((guide) => ({
        slug: guide.slug,
    }));
}

export default function GuideSlugPage({ params }: Props) {
    const guide = guidesData.find(g => g.slug === params.slug);

    if (!guide) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Link href="/resources/guides" className="inline-flex items-center text-gray-500 hover:text-[#991b1b] mb-8 transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Guides
                        </Link>
                        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-[#991b1b] mb-4">
                            <span>{guide.category}</span>
                            <span className="text-gray-300">•</span>
                            <span>{guide.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{guide.title}</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {guide.description}
                        </p>
                    </div>
                </div>
            </section>

            <article className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-red">
                        <div dangerouslySetInnerHTML={{ __html: guide.content }} />
                    </div>
                </div>
            </article>

            <HoverFooter />
        </main>
    );
}
