/** Sample content. Everything here is PROPOSED and needs client approval. */

export type PracticeArea = {
  slug: string;
  title: string;
  summary: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "arbitration-litigation",
    title: "Arbitration and Litigation",
    summary:
      "Representation and dispute resolution support through domestic and international arbitration, litigation, and related legal proceedings.",
  },
  {
    slug: "real-estate-construction",
    title: "Real Estate and Construction Law",
    summary:
      "Legal support for property transactions, interests in land and buildings, construction matters, and related agreements.",
  },
  {
    slug: "employment-immigration",
    title: "Employment, Labour and Immigration",
    summary:
      "Advice on employment relationships, labour matters, workplace obligations, and immigration-related legal requirements.",
  },
  {
    slug: "capital-markets-corporate-transactions",
    title: "Capital Markets and Corporate Transactions",
    summary:
      "Legal support for capital market matters, corporate transactions, commercial arrangements, and business activities.",
  },
  {
    slug: "energy-mining",
    title: "Energy and Mining",
    summary:
      "Legal guidance on matters involving energy, natural resources, mining operations, and relevant regulatory obligations.",
  },
  {
    slug: "taxation",
    title: "Taxation",
    summary:
      "Legal advice on taxation matters, tax obligations, and related compliance considerations.",
  },
  {
    slug: "shipping-maritime",
    title: "Shipping and Maritime Law",
    summary:
      "Legal support for shipping, maritime transactions, and other matters arising from maritime and marine-related activities.",
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    summary:
      "Legal support concerning intellectual property rights, their protection, and related commercial matters.",
  },
  {
    slug: "telecommunications-information-technology",
    title: "Telecommunications and Information Technology",
    summary:
      "Legal guidance on telecommunications, information technology, and associated commercial and regulatory issues.",
  },
  {
    slug: "entertainment-sports",
    title: "Entertainment and Sports Law",
    summary:
      "Legal support for entertainment and sports-related matters, agreements, and commercial relationships.",
  },
  {
    slug: "insurance",
    title: "Insurance",
    summary:
      "Legal support for insurance-related matters, contractual issues, and associated disputes.",
  },
];

export type Lawyer = {
  slug: string; name: string; title: string; bio: string;
  areas: string[]; photo?: string; profileUrl?: string;
};
export const team: Lawyer[] = [1, 2, 3].map((n) => ({
  slug: `placeholder-${n}`,
  name: "[Lawyer Name]",
  title: "[Professional Title]",
  bio: "[Biography to be supplied by the firm.]",
  areas: n === 1 ? ["corporate-commercial"] : n === 2 ? ["property", "dispute-resolution"] : ["family-private-client"],
}));

export type Article = {
  slug: string; title: string; category: string; date: string;
  excerpt: string; body: string[];
};
/** Generic explainers only. No legal developments or advice. Replace with approved articles. */

export const articles: Article[] = [
  {
    slug: "corporate-disclosure-obligations-nigeria",
    title:
      "Corporate Disclosure in Nigeria: Why the Details on Your Business Documents Matter",
    category: "Corporate & Commercial",
    date: "2026-10-05",
    excerpt:
      "Corporate compliance extends beyond incorporation and annual returns. Businesses should also review the information appearing on their official correspondence and commercial documents.",
    body: [
      "For many businesses, compliance is associated with incorporation, tax filings and annual returns. Yet the documents a company issues every day also form part of its legal and commercial identity. Quotations, invoices, letters, notices and other business communications can reveal whether a company maintains consistent and accurate corporate records.",
      "The Companies and Allied Matters Act 2020 (CAMA) provides a framework for the administration and disclosure obligations of companies in Nigeria. Businesses should identify the statutory requirements applicable to their particular corporate structure and ensure that their routine documentation reflects those requirements.",
      "A practical starting point is to review the company's standard templates. The company name, registration particulars, registered office details and other required information should be checked against the company's official records. Where a document is generated automatically, the same review should extend to invoices, email signatures, proposals and digital correspondence.",
      "Responsibility for maintaining these records should be clearly allocated. Directors, company secretaries, finance teams and administrative personnel may each contribute to compliance, but the organisation should establish a consistent process for reviewing changes and updating templates. A document that was accurate when first created may become outdated following a change in company particulars.",
      "Businesses should also distinguish between legal requirements and internal preferences. Not every document necessarily carries identical disclosure requirements, and the applicable obligations should be confirmed against the legislation, relevant regulations and current Corporate Affairs Commission guidance.",
      "A structured document review can reduce avoidable errors, improve consistency and support stronger corporate governance. It is best approached as part of an ongoing compliance programme rather than an exercise undertaken only when a filing deadline approaches.",
      "This article provides general information and is not legal advice. Companies should obtain advice on the requirements applicable to their particular circumstances."
    ],
  },
  {
    slug: "corporate-governance-practical-guide-2026",
    title:
      "Corporate Governance in 2026: Turning Compliance into Better Business Decisions",
    category: "Corporate Governance",
    date: "2026-09-22",
    excerpt:
      "Effective governance is more than a collection of policies. It connects board oversight, reliable records, accountability and commercial decision-making.",
    body: [
      "Corporate governance is often discussed as a regulatory obligation, but its practical value is broader. Clear decision-making structures help businesses allocate responsibility, identify risks and demonstrate why important commercial decisions were taken.",
      "In Nigeria, the Companies and Allied Matters Act 2020 provides a central statutory framework for companies, including matters concerning directors, company administration and corporate records. Depending on the business, additional sector-specific laws, regulations and governance codes may also apply.",
      "One of the most useful improvements a company can make is to clarify who has authority to make particular decisions. Approval thresholds, delegated responsibilities and escalation procedures should be documented and communicated. This can reduce uncertainty when a business enters a major transaction, takes on significant obligations or responds to an unexpected problem.",
      "Board and shareholder meetings also deserve careful attention. Proper notices, agendas, minutes and records of resolutions help establish what was considered, what was approved and which actions remain outstanding. These records can become particularly important when there is a disagreement among stakeholders or a question about the authority for a transaction.",
      "Governance should also address conflicts of interest, access to information and the monitoring of material risks. Policies are most effective when they are proportionate to the organisation and supported by actual working procedures. A policy that employees do not understand or follow offers limited practical protection.",
      "Growing businesses should periodically assess whether their existing arrangements still fit their size and activities. Changes in ownership, financing, management, technology or regulatory exposure may require updated documentation and approval processes.",
      "A governance review can identify gaps before they develop into disputes or operational disruption. The appropriate scope will depend on the company's structure, sector, existing controls and applicable legal obligations.",
      "This article is general information, not legal advice. The legal and regulatory position should be reviewed for the particular company and sector."
    ],
  },
  {
    slug: "data-protection-responsibilities-nigerian-businesses",
    title:
      "Data Protection for Nigerian Businesses: Building Accountability into Everyday Operations",
    category: "Technology & Data Protection",
    date: "2026-09-08",
    excerpt:
      "A practical look at personal information, privacy responsibilities, vendor relationships and the internal processes that support responsible data handling.",
    body: [
      "Businesses routinely collect personal information through customer enquiries, employment applications, marketing activities, service delivery and digital platforms. The information may be held in a customer relationship system, an email account, a spreadsheet or a third-party application. Regardless of the format, its handling should be considered part of the organisation's legal and operational responsibilities.",
      "The Nigeria Data Protection Act 2023 establishes the statutory framework for personal data processing in Nigeria. The precise obligations that apply depend on the organisation's activities, the information being processed, its role in the processing and other relevant circumstances.",
      "A sensible first step is to map the personal information the organisation collects. For each category, the business should understand why the information is needed, where it comes from, who can access it, which parties receive it and how long it should be retained. This exercise can reveal unnecessary collection, duplicated records and information stored without a clear business purpose.",
      "Businesses should then review the notices and processes through which information is collected. Individuals should receive appropriate information about the processing of their data, and the organisation should establish and document the applicable lawful basis for processing. Consent is not automatically the correct basis for every activity; the appropriate basis depends on the circumstances and applicable law.",
      "Third-party relationships require attention as well. Cloud platforms, payroll providers, marketing services and other vendors may handle personal data on behalf of a business or for their own purposes. Contracts and operational arrangements should address the parties' respective responsibilities, security expectations, permitted uses and procedures for responding to incidents.",
      "Access controls, staff training, secure storage, retention procedures and incident-response arrangements can help translate written policies into daily practice. Businesses should also establish a process for handling requests from individuals and determining when an incident requires escalation or notification under applicable requirements.",
      "Data protection should not be treated as a document-only exercise. Policies need to reflect actual business processes and should be revisited when the organisation introduces new systems, expands into new markets or changes the information it collects.",
      "This article is general information, not legal advice. Businesses should consult the Nigeria Data Protection Act 2023 and current Nigeria Data Protection Commission guidance when assessing their obligations."
    ],
  },
  {
    slug: "commercial-contracts-risk-management",
    title:
      "Commercial Contracts: Seven Issues Businesses Should Address Before Signing",
    category: "Commercial Law",
    date: "2026-08-25",
    excerpt:
      "A commercial agreement should explain the transaction, allocate responsibility and provide a workable framework for handling problems when they arise.",
    body: [
      "Commercial contracts establish the expectations between businesses, suppliers, customers, consultants and other counterparties. A well-prepared agreement does more than record a price. It explains what each party must do, when performance is due, how changes will be managed and what happens if the arrangement breaks down.",
      "The first issue is scope. The goods, services, deliverables or obligations should be described with enough clarity to reduce disagreements about what was promised. Where technical specifications, statements of work or service levels are relevant, the agreement should identify those documents and explain how they fit together.",
      "Second, the payment provisions should be workable. Parties should review the price, currency, invoicing requirements, payment dates, taxes, approved expenses and any conditions that affect payment. If payment depends on milestones or acceptance, the agreement should explain how those milestones are assessed and how disputes are handled.",
      "Third, the agreement should allocate responsibility for delay, defective performance and other failures. The parties should consider notice requirements, opportunities to remedy a breach, suspension rights and the consequences of termination. Any exclusions or limitations of liability require particular care because their operation depends on the wording, applicable law and circumstances.",
      "Fourth, confidentiality and intellectual property should be addressed expressly. Parties should determine which information must remain confidential, who owns pre-existing materials, who owns newly created work and what licences are needed to use the deliverables. These questions can be especially important in technology, creative and consultancy engagements.",
      "Fifth, the agreement should address data protection and information security where personal information or sensitive business data is involved. Responsibilities should be aligned with the parties' actual roles rather than relying on generic wording.",
      "Sixth, the parties should consider how disputes will be resolved. Negotiation, mediation, arbitration and court proceedings are not interchangeable. The appropriate mechanism, governing law, seat or venue where relevant, and procedural details should be considered in light of the transaction.",
      "Finally, the agreement should explain how notices are given, how variations are approved, whether subcontracting is permitted and how the relationship can be ended. A contract that is difficult to operate in practice may create unnecessary friction even where its main commercial terms are sound.",
      "A structured review before signing is often more efficient than attempting to resolve unclear obligations after performance has begun. The level of review should be proportionate to the value, complexity and risk of the transaction.",
      "This article is general information, not legal advice. Contract terms should be reviewed in the context of the transaction and applicable law."
    ],
  },
  {
    slug: "property-transactions-due-diligence-nigeria",
    title:
      "Buying Property in Nigeria: The Legal Checks That Should Come Before Payment",
    category: "Real Estate",
    date: "2026-08-11",
    excerpt:
      "Property transactions require more than an inspection and a handshake. Appropriate due diligence helps buyers assess title, authority, restrictions and completion requirements.",
    body: [
      "A property may look suitable and appear to be offered by a credible seller, but neither fact establishes that the seller can transfer the interest being offered. Before committing substantial funds, a prospective buyer should understand the nature of the interest, the identity and authority of the seller and the legal requirements relevant to the transaction.",
      "The appropriate title investigation depends on the property, its location, the documents available and the history of previous transactions. A lawyer may need to examine title documents, relevant registry records, survey information and other available evidence to assess whether the seller's claimed interest is adequately supported.",
      "The buyer should also verify the seller's identity and authority. Where a company, estate, attorney or multiple co-owners are involved, the relevant corporate records, probate documents, power of attorney or other authority documents may require examination. The precise checks depend on the circumstances.",
      "Physical inspection and legal due diligence serve different purposes. An inspection can help identify occupation, access, boundary or development concerns, but it does not replace a review of the title. Similarly, a survey may assist with identifying the land and investigating potential overlaps, but it does not alone establish ownership.",
      "The parties should establish whether there are mortgages, existing leases, disputes, restrictions, unpaid charges or other matters that could affect the proposed transfer. Where appropriate, enquiries should be made with the relevant land registry and public authorities. The availability and significance of particular records may vary by jurisdiction and property type.",
      "Transaction documents should clearly identify the property, the interest being transferred, the consideration, completion obligations and the documents each party must provide. The parties should also understand the applicable requirements for consent, stamping, registration and any related payments before assuming that a transaction is complete.",
      "Payment arrangements deserve equal care. Buyers should understand when funds become payable, what conditions must be satisfied before completion and how the transaction will proceed if a material issue is discovered. Any proposed deposit, escrow arrangement or staged payment should be reviewed in the context of the transaction.",
      "Property law and land administration are affected by the applicable state legislation and the facts of the particular property. Early professional review can help identify issues that may otherwise emerge only after money has changed hands.",
      "This article is general information, not legal advice. It does not replace a property-specific title investigation by a qualified legal practitioner."
    ],
  },
  {
    slug: "employment-contracts-and-workplace-policies",
    title:
      "Employment Contracts and Workplace Policies: Getting the Fundamentals Right",
    category: "Employment & Labour",
    date: "2026-07-30",
    excerpt:
      "Clear employment documentation can help employers and employees understand their respective responsibilities and manage workplace expectations.",
    body: [
      "Employment relationships work best when the parties understand the terms on which they are working. Ambiguity about duties, compensation, working arrangements or termination can create avoidable disagreements and make workplace decisions more difficult to manage.",
      "An employment contract should accurately reflect the role and the agreed terms. Depending on the position and circumstances, relevant provisions may address responsibilities, reporting lines, remuneration, benefits, working hours, leave, probation, confidentiality and termination. The wording should be consistent with applicable legislation and any relevant collective arrangements.",
      "Employers should also ensure that their policies are appropriate for the organisation and communicated to the people expected to follow them. Policies may address conduct, grievance handling, disciplinary procedures, health and safety, information security and the use of company equipment. A policy should be practical enough to guide real decisions, not simply exist in a handbook.",
      "Workplace investigations and disciplinary decisions require particular care. Employers should follow applicable legal requirements and their own valid procedures, document relevant steps and approach allegations fairly. Employees should understand the process for raising concerns and responding to matters affecting them.",
      "Confidentiality, intellectual property and the handling of personal information may also require attention, especially where employees have access to customer records, commercial information, software or proprietary materials. Any restrictions should be drafted with the applicable law and the legitimate interests involved in mind.",
      "Termination provisions should not be treated as routine boilerplate. Notice, payment obligations, outstanding entitlements, contractual procedures and any statutory protections should be considered in the relevant context. A clause that appears clear in isolation may not resolve every issue arising from a particular employment relationship.",
      "The Nigerian Labour Act is an important part of the legal framework, but its application and the relevance of other legislation depend on the category of worker and the facts. Employers should not assume that one standard contract is appropriate for every role.",
      "Periodic reviews can help organisations keep employment documentation aligned with changes in business operations, applicable requirements and workplace practices. Clear documents cannot eliminate every dispute, but they can improve understanding and provide a more reliable basis for managing the relationship.",
      "This article is general information, not legal advice. Employment documents and workplace procedures should be reviewed against the law applicable to the particular relationship."
    ],
  },
  {
    slug: "arbitration-or-litigation-commercial-disputes",
    title:
      "Arbitration or Litigation? Choosing a Dispute Resolution Strategy for Business",
    category: "Dispute Resolution",
    date: "2026-07-16",
    excerpt:
      "The right dispute resolution mechanism depends on the contract, the nature of the disagreement, the desired outcome and the practical realities of enforcement.",
    body: [
      "Commercial disagreements can arise even where the parties entered a transaction with clear intentions. A missed deadline, disputed invoice, alleged breach or breakdown in a business relationship may require a structured process for resolving the issue.",
      "Litigation and arbitration offer different procedures and considerations. Litigation involves proceedings before a court with jurisdiction over the dispute. Arbitration is generally based on an agreement to submit qualifying disputes to an arbitral tribunal, subject to the applicable arbitration framework and the terms of that agreement.",
      "The first question is often whether a binding dispute resolution clause already exists. The wording may specify negotiation, mediation, arbitration or court proceedings, and it may contain requirements about notice, timing, the seat of arbitration or other procedural matters. Those provisions should be examined before a party decides how to proceed.",
      "Confidentiality, urgency, cost, procedural flexibility and the technical nature of the dispute may influence the choice of process. Arbitration may offer procedural flexibility in appropriate cases, but it is not automatically faster or less expensive than litigation. Costs can be significant, particularly where multiple arbitrators, experts or complex evidence are involved.",
      "The parties should also consider the remedies they need and how a decision may be enforced. The location of relevant assets, the parties' jurisdictions and the applicable legal framework can affect the practical value of an outcome. Interim relief and urgent protective measures may require separate consideration.",
      "Before formal proceedings begin, a careful assessment of the evidence can help clarify the dispute. Relevant contracts, communications, invoices, payment records and contemporaneous documents should be preserved. The parties should also identify applicable notice requirements, potential limitation issues and any contractual steps that must be completed before commencing proceedings.",
      "Negotiation or mediation may provide a useful route where the parties have an ongoing commercial relationship or wish to explore a practical settlement. However, informal discussions should not be allowed to create a false sense of security about deadlines or procedural requirements.",
      "A dispute resolution strategy should therefore be tailored to the contract, the legal issues, the available evidence, the desired remedy and the commercial context. Early advice may help a party avoid procedural mistakes and evaluate the available options more realistically.",
      "This article is general information, not legal advice. The appropriate approach depends on the applicable law, contract terms and specific facts."
    ],
  },
  {
    slug: "protecting-intellectual-property-businesses",
    title:
      "Protecting Intellectual Property: A Practical Guide for Growing Businesses",
    category: "Intellectual Property",
    date: "2026-07-02",
    excerpt:
      "A business name, logo, software product, creative work or confidential process may have significant commercial value. Protection begins with understanding what the business actually owns.",
    body: [
      "Intellectual property is often embedded in a business long before the business recognises its value. A trading name, logo, software product, original content, product design, technical process or confidential commercial method may help distinguish the organisation from its competitors.",
      "Different forms of intellectual property protect different interests. Trade marks may protect signs that distinguish goods or services, copyright may protect qualifying original works, and patents may be relevant to inventions that satisfy the applicable legal requirements. Confidential information may also require contractual, operational and other appropriate protections.",
      "The first step is to identify the assets the business relies on. This may include brand names, visual identities, website content, photographs, software, marketing materials, designs, databases and proprietary business information. The business should determine who created each asset, the circumstances in which it was created and what agreements govern its ownership or use.",
      "Ownership should not be assumed simply because a business paid for a project or received the final files. The legal position can depend on the type of work, the relationship between the parties, the applicable law and the wording of relevant agreements. Contracts with employees, consultants, designers, developers and agencies should address ownership and permitted use clearly.",
      "Registration may be important for certain rights and should be considered where appropriate. The availability, scope and effect of registration depend on the type of intellectual property and the relevant jurisdiction. A business operating across borders may need to consider protection in more than one market.",
      "Confidential information requires attention beyond legal documents. Access permissions, secure storage, staff training and carefully drafted confidentiality arrangements can help reduce the risk of unauthorised disclosure. The business should also consider what happens when an employee or contractor leaves or a commercial relationship ends.",
      "Before adopting a new brand or product identity, a business may benefit from appropriate clearance searches and professional advice. Early investigation can help identify potential conflicts before significant investment is made in marketing, packaging or distribution.",
      "Intellectual property protection is most effective when integrated into the business's broader commercial strategy. Maintaining an asset register, reviewing agreements and assigning responsibility for renewals and recordkeeping can make protection more consistent.",
      "This article is general information, not legal advice. Intellectual property rights, registration requirements and available remedies depend on the asset, jurisdiction and specific circumstances."
    ],
  },
  {
    slug: "preparing-for-a-productive-legal-consultation",
    title:
      "Making Your First Legal Consultation Count: A Guide for Individuals and Businesses",
    category: "Working with Us",
    date: "2026-06-18",
    excerpt:
      "Good preparation helps a lawyer understand the issue, identify missing information and use the initial consultation more effectively.",
    body: [
      "A first legal consultation is an opportunity to explain a problem, understand the questions that need to be answered and discuss possible next steps. It does not require a client to know the law or arrive with a perfect account of every event. It does, however, benefit from a clear and organised explanation of the circumstances.",
      "Begin by preparing a short chronology. Record the important events in the order they occurred, including relevant dates, people involved, agreements made and communications exchanged. Distinguish what you personally know from what you have been told or what you suspect. Where dates or details are uncertain, say so rather than presenting an estimate as a fact.",
      "Gather the documents that relate to the issue. Depending on the matter, these may include contracts, letters, emails, notices, invoices, payment records, property documents, company records or previous legal correspondence. Organise the documents by date or topic and identify any important document that is missing.",
      "Explain what you hope to achieve. The desired outcome may be to understand your obligations, negotiate a settlement, complete a transaction, recover money, protect an asset or respond to a claim. There may be more than one acceptable outcome, and explaining your priorities can help the lawyer understand the commercial or personal context.",
      "Identify deadlines and urgent developments. A court document, formal notice, proposed transaction date or contractual deadline may affect the advice required. Bring the relevant document and explain when it was received. Do not assume that a deadline can be extended simply because you are seeking advice.",
      "Prepare questions about the process, likely stages, information still required, potential risks, costs and communication arrangements. You can also ask who will handle the matter, how updates will be provided and what you should do while the matter is being assessed.",
      "The consultation is also an opportunity to establish whether the lawyer has enough information to advise you and what further work may be necessary. A lawyer may need to review documents, conduct research, verify facts or investigate a legal issue before providing a reliable assessment.",
      "After the meeting, review any agreed next steps and provide requested information through the appropriate channel. Keep copies of important communications and avoid making material decisions on the assumption that a preliminary discussion is a final legal opinion.",
      "A well-prepared consultation cannot guarantee a particular result, but it can make the initial discussion more focused and help establish a clearer path forward.",
      "This article is general information, not legal advice. The appropriate preparation and next steps will depend on the matter."
    ],
  },
];


export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
