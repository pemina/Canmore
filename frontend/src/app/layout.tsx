import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "CanMore Financial | Professional Bookkeeping & Tax Services",
    description: "Small to medium-sized business clients bookkeeping, payroll, tax preparation, insurance and investment services.",
};

import { SiteHeader } from "@/components/site-header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="pt-20"> {/* Add padding-top to account for fixed header */}
                <SiteHeader />
                {children}
            </body>
        </html>
    );
}
