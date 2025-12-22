import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Cta4Props {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
    items?: string[];
}

const defaultItems = [
    "Easy Integration",
    "24/7 Support",
    "Customizable Design",
    "Scalable Performance",
    "Hundreds of Blocks",
];

export const Cta4 = ({
    title = "Call to Action",
    description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
    buttonText = "Get Started",
    buttonUrl = "https://shadcnblocks.com",
    items = defaultItems,
}: Cta4Props) => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="max-w-5xl w-full">
                        <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-gray-50 border border-gray-100 px-6 py-10 md:flex-row lg:px-20 lg:py-16 shadow-sm hover:shadow-md transition-shadow">
                            <div className="md:w-1/2">
                                <h4 className="mb-4 text-2xl font-bold md:text-3xl text-gray-900">{title}</h4>
                                <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
                                <Button className="font-bold tracking-wide uppercase text-white" asChild>
                                    <a href={buttonUrl}>
                                        {buttonText} <ArrowRight className="ml-2 size-4" />
                                    </a>
                                </Button>
                            </div>
                            <div className="md:w-1/3">
                                <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
                                    {items.map((item, idx) => (
                                        <li className="flex items-center" key={idx}>
                                            <div className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                <Check className="size-3.5 text-primary" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
