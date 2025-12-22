import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl",
            "bg-white border border-gray-100 shadow-sm", // Clean base
            "hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-1 transition-all duration-500 ease-out", // Premium hover Lift
            className,
        )}
    >
        {/* Background Layer with Gradient Fade for Readability */}
        {/* Background Layer - Full Cover */}
        <div className="absolute inset-0 z-0 h-full w-full">
            {background}
        </div>

        {/* Content Layer - Floating Glass Card for Max Readability */}
        <div className="relative z-10 p-6 mt-auto">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                {/* Icon Box */}
                <div className="flex mb-4 h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                </div>

                <div className="space-y-1">
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                        {name}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 font-medium">
                        {description}
                    </p>
                </div>

                <div className="mt-4">
                    <a href={href} className="flex items-center text-xs font-bold text-primary uppercase tracking-wider group/cta">
                        {cta}
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    </div >
);

export { BentoCard, BentoGrid };
