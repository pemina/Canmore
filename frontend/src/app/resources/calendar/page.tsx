import { HoverFooter } from "@/components/ui/hover-footer-demo";
import { Calendar } from "lucide-react";

export const metadata = {
    title: "Tax Calendar | CanMore Accounting",
    description: "Key tax dates and deadlines for Ontario businesses.",
};

const months = [
    {
        name: "January",
        events: [
            { day: "15", title: "Payroll Remittances Due", type: "Payroll" },
            { day: "31", title: "Interest Payment on Family Loans", type: "Tax" },
        ]
    },
    {
        name: "February",
        events: [
            { day: "15", title: "Payroll Remittances Due", type: "Payroll" },
            { day: "28", title: "T4/T4A Summaries Due", type: "Reporting" },
            { day: "28", title: "T5 Summaries Due", type: "Reporting" },
        ]
    },
    {
        name: "March",
        events: [
            { day: "1", title: "RRSP Contribution Deadline", type: "Personal Tax" },
            { day: "15", title: "First Quarterly Tax Installment", type: "Tax" },
            { day: "31", title: "T3 Trust Returns Due", type: "Trusts" },
        ]
    },
    {
        name: "April",
        events: [
            { day: "15", title: "Payroll Remittances Due", type: "Payroll" },
            { day: "30", title: "Personal Income Tax Returns Due", type: "Tax Filing" },
            { day: "30", title: "Balance Owing for Self-Employed", type: "Tax Payment" },
        ]
    },
    {
        name: "June",
        events: [
            { day: "15", title: "Self-Employed Tax Returns Due", type: "Tax Filing" },
            { day: "15", title: "Second Quarterly Tax Installment", type: "Tax" },
        ]
    },
];

export default function TaxCalendarPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tax Calendar</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Stay on top of important CRA deadlines for your business and personal taxes.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="space-y-12">
                        {months.map((month) => (
                            <div key={month.name} className="relative pl-8 md:pl-0">
                                <div className="hidden md:block absolute left-[50%] -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200"></div>

                                <div className="md:flex items-start justify-between relative z-10">
                                    <div className="md:w-5/12 text-right pr-12 hidden md:block">
                                        <h2 className="text-3xl font-bold text-[#991b1b]">{month.name}</h2>
                                    </div>

                                    <div className="bg-[#991b1b] text-white rounded-full w-12 h-12 flex items-center justify-center absolute left-0 md:left-[50%] md:-translate-x-1/2 -mt-2 shadow-lg">
                                        <Calendar className="h-5 w-5" />
                                    </div>

                                    <div className="md:hidden mb-6 pl-12">
                                        <h2 className="text-3xl font-bold text-[#991b1b]">{month.name}</h2>
                                    </div>

                                    <div className="md:w-5/12 pl-12 md:pl-12 space-y-6">
                                        {month.events.map((event, i) => (
                                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                                                <div className="flex items-start gap-4">
                                                    <div className="text-center min-w-[3rem]">
                                                        <span className="block text-2xl font-bold text-gray-900">{event.day}</span>
                                                        <span className="block text-xs uppercase text-gray-400 font-bold">{month.name.substring(0, 3)}</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 mb-1">{event.title}</h3>
                                                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">{event.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
