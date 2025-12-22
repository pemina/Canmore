import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { guidesData } from "@/lib/guides-data";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

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

    // Get related guides (exclude current one)
    const relatedGuides = guidesData
        .filter(g => g.slug !== params.slug)
        .slice(0, 3);

    if (!guide) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            {/* Full-width Hero Image */}
            <div className="relative w-full h-[50vh] md:h-[60vh] bg-gray-900">
                <Image
                    src={guide.coverImage || "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"}
                    alt={guide.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                {/* Back button overlay */}
                <div className="absolute top-8 left-4 md:left-8 z-10">
                    <Link href="/resources/guides" className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Guides
                    </Link>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16">
                    <div className="container mx-auto max-w-4xl">
                        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-white/80 mb-4">
                            <span className="bg-[#991b1b] px-3 py-1 rounded-full text-white">{guide.category}</span>
                            <span>{guide.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight shadow-sm">
                            {guide.title}
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                            {guide.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg prose-red max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-li:text-gray-600">
                            <div dangerouslySetInnerHTML={{ __html: guide.content }} />
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts Section ("See Also") */}
            <section className="bg-gray-50 py-20 border-t border-gray-100 mt-auto">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">See Also</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedGuides.map((related) => (
                            <Link href={`/resources/guides/${related.slug}`} key={related.slug} className="group block h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={related.coverImage || "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"}
                                            alt={related.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-gray-900 uppercase tracking-wide">
                                                {related.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#991b1b] transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                                            {related.description}
                                        </p>
                                        <div className="flex items-center text-[#991b1b] text-sm font-semibold mt-auto">
                                            Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <HoverFooter />
        </main>
    );
}
