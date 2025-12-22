export const guidesData = [
    {
        slug: "starting-business-ontario",
        title: "Starting a Business in Ontario",
        category: "Business Startup",
        readTime: "10 min read",
        description: "A comprehensive checklist for registering your business, setting up HST, and payroll accounts in Ontario.",
        coverImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000",
        content: `
            <h2>1. Register Your Business Name</h2>
            <p>If you are operating under a name other than your own legal name, you must register your business name with the Ontario government. This applies to sole proprietorships, partnerships, and corporations.</p>
            <p><strong>Official Resource:</strong> <a href="https://www.ontario.ca/page/register-business-ontario" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Ontario Business Registry</a></p>

            <h2>2. Get a Business Number (BN)</h2>
            <p>The Business Number is a unique 9-digit number provided by the Canada Revenue Agency (CRA). It is the standard identifier for your business when dealing with the federal government.</p>
            <p>You need a BN if you require any of the following program accounts:</p>
            <ul>
                <li>GST/HST (RT)</li>
                <li>Payroll deductions (RP)</li>
                <li>Corporation income tax (RC)</li>
                <li>Import-export (RM)</li>
            </ul>
            <p><strong>Official Resource:</strong> <a href="https://www.canada.ca/en/services/taxes/business-number.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Register for a Business Number (CRA)</a></p>

            <h2>3. Register for GST/HST</h2>
            <p>In Ontario, if your business has total taxable revenues of more than $30,000 over four consecutive calendar quarters, you must register for GST/HST. The current HST rate in Ontario is 13%.</p>
            <p>Even if you are a "small supplier" (under $30k), you may choose to register voluntarily to claim Input Tax Credits (ITCs) on your business expenses.</p>

            <h2>4. Understand Your Payroll Obligations</h2>
            <p>If you plan to hire employees, you must open a payroll program account. You are responsible for deducting CPP, EI, and income tax from remuneration and remitting it to the CRA.</p>
        `
    },
    {
        slug: "understanding-hst",
        title: "Understanding HST for Small Businesses",
        category: "Taxation",
        readTime: "8 min read",
        description: "Everything you need to know about collecting, filing, and remitting Harmonized Sales Tax (HST).",
        coverImage: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=2000",
        content: `
            <h2>When to Register</h2>
            <p>You must register for a GST/HST account if you are no longer considered a "small supplier." This generally means your total worldwide taxable supplies of goods and services exceed $30,000 in a single calendar quarter or over four consecutive quarters.</p>
            <p><strong>Official Resource:</strong> <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">When to register for and charge the GST/HST</a></p>

            <h2>Collecting HST</h2>
            <p>In Ontario, the Harmonized Sales Tax (HST) rate is 13%. This consists of the 5% federal portion (GST) and the 8% provincial portion.</p>

            <h2>Filing and Remitting</h2>
            <p>Your filing frequency (monthly, quarterly, or annually) depends on your total annual taxable supplies. You must file a return even if you have no business activity or no net tax to remit for the reporting period.</p>
            <p><strong>Official Resource:</strong> <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/complete-file-return-business.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Complete and file a return</a></p>
        `
    },
    {
        slug: "payroll-deductions-explained",
        title: "Payroll Deductions Explained",
        category: "Payroll",
        readTime: "12 min read",
        description: "Guide to CPP, EI, and income tax deductions for employers in Canada.",
        coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
        content: `
            <h2>Employer Responsibilities</h2>
            <p>As an employer, you must deduce the following from your employees' pay:</p>
            <ul>
                <li><strong>Canada Pension Plan (CPP):</strong> You must also contribute an amount equal to the employee's share.</li>
                <li><strong>Employment Insurance (EI):</strong> You must contribute 1.4 times the employee's share.</li>
                <li><strong>Income Tax:</strong> Federal and provincial tax based on the employee's claim codes (TD1 forms).</li>
            </ul>

            <h2>Remitting Source Deductions</h2>
            <p>You must hold these amounts in trust and remit them to the Receiver General for Canada. Penalties for late remittance are severe (starting at 3% and up to 20%).</p>
            <p><strong>Official Resource:</strong> <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/remitting-source-deductions.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Remitting payroll deductions</a></p>

            <h2>T4 Slips</h2>
            <p>You must file T4 slips (Statement of Remuneration Paid) by the end of February of the following calendar year.</p>
        `
    },
    {
        slug: "incorporation-vs-sole-proprietorship",
        title: "Incorporation vs. Sole Proprietorship",
        category: "Business Structure",
        readTime: "15 min read",
        description: "Key differences, tax implications, and benefits of each business structure.",
        coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
        content: `
            <h2>Sole Proprietorship</h2>
            <p><strong>Pros:</strong> Simplest and least expensive to set up. Detailed regulatory burden is low.</p>
            <p><strong>Cons:</strong> Unlimited personal liability. Business income is taxed at your personal marginal tax rate.</p>
            <p><strong>Tax Filing:</strong> T1 Personal Tax Return (Form T2125).</p>

            <h2>Corporation</h2>
            <p><strong>Pros:</strong> Separate legal entity, limited liability protection, potential access to the Small Business Deduction (lower tax rate ~12.2% in Ontario for eligible income), income splitting opportunities.</p>
            <p><strong>Cons:</strong> More expensive to set up and maintain. Requires separate T2 Corporate Tax Return, minute books, and annual resolutions.</p>
            <p><strong>Official Resource:</strong> <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/sole-proprietorship.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Sole proprietorships (CRA)</a></p>
            <p><strong>Official Resource:</strong> <a href="https://www.canada.ca/en/services/business/start/register-with-gov/register-inc.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Incorporating a business</a></p>
        `
    },
    {
        slug: "year-end-tax-planning",
        title: "Year-End Tax Planning Tips",
        category: "Tax Planning",
        readTime: "7 min read",
        description: "Strategies to minimize your corporate tax liability before the fiscal year ends.",
        coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000",
        content: `
            <h2>Purchase Capital Assets</h2>
            <p>If you are planning to buy new equipment or computers, doing so before your fiscal year-end allows you to claim Capital Cost Allowance (depreciation) for that year (subject to the half-year rule).</p>

            <h2>Accrue Expenses</h2>
            <p>Ensure all expenses related to the current year are recorded, even if you haven't paid them yet (if using accrual accounting).</p>

            <h2>Salaries vs. Dividends</h2>
            <p>Review the mix of salary and dividends paid to owner-managers to optimize personal and corporate tax loads. This often requires professional advice.</p>
            <p><strong>Official Resource:</strong> <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/corporation-income-tax-return/reporting-income/capital-cost-allowance.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Claiming Capital Cost Allowance (CCA)</a></p>
        `
    },
    {
        slug: "record-keeping-best-practices",
        title: "Record Keeping Best Practices",
        category: "Bookkeeping",
        readTime: "5 min read",
        description: "How to organize your receipts and financial documents for a stress-free audit.",
        coverImage: "https://images.unsplash.com/photo-1554224154-260312cb07e1?auto=format&fit=crop&q=80&w=2000",
        content: `
            <h2>What to Keep</h2>
            <p>You must keep all records and supporting documents that are required to determine your tax obligations and entitlements. This includes:</p>
            <ul>
                <li>Sales invoices and receipts</li>
                <li>Purchase receipts and expense records</li>
                <li>Bank statements and cancelled cheques</li>
                <li>Payroll records</li>
            </ul>

            <h2>Retention Period</h2>
            <p>Generally, you must keep your records for <strong>six years</strong> from the end of the last tax year they relate to.</p>

            <h2>Digital Records</h2>
            <p>The CRA accepts digital records, but they must be readable and accessible. It is highly recommended to have backups.</p>
            <p><strong>Official Resource:</strong> <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Keeping records (CRA)</a></p>
        `
    },
];
