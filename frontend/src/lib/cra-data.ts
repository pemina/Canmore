import { User, Building2, Users } from "lucide-react";
import React from "react";

// Note: We need to exporting types or use a structure that doesn't rely on importing icons directly in shared data if we want strict separation, 
// but for this simple app, keeping icons in the data file (if interpreted by client) or just strings is fine. 
// However, to keep it "dynamic" and pure, usually we store strings and map to icons in the component. 
// For simplicity and speed while maintaining quality, I'll store the icon identifier string.

export const craResourcesData = [
    {
        title: "My Account for Individuals",
        iconName: "User",
        desc: "Manage your tax and benefit information online. View your notice of assessment, check benefit payments, and set up direct deposit.",
        url: "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html",
        target: "Tax Payers",
    },
    {
        title: "My Business Account",
        iconName: "Building2",
        desc: "Access your GST/HST, payroll, corporation income tax, excise tax, excise duties, and other levies accounts online.",
        url: "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/business-account.html",
        target: "Business Owners",
    },
    {
        title: "Represent a Client",
        iconName: "Users",
        desc: "Securely access tax information on behalf of individuals and businesses, including your employer.",
        url: "https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html",
        target: "Representatives",
    },
];
