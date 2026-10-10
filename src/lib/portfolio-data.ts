import atelierImage from "@/assets/project-atelier.jpg";
import northstarImage from "@/assets/project-northstar.jpg";
import fleetImage from "@/assets/project-fleet.jpg";
import wellnessImage from "@/assets/project-wellness.jpg";

export type ProjectCategory =
  "Business Websites" | "E-commerce" | "Web Applications" | "Portals" | "Dashboards";

export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  category: ProjectCategory;
  tech: string[];
  summary: string;
  image: string;
  challenge: string;
  approach: string;
  solution: string;
  features: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "atelier-living-commerce",
    name: "Atelier Living",
    client: "Independent furniture studio",
    industry: "Retail & interiors",
    category: "E-commerce",
    tech: ["React", "Node.js", "MySQL", "Payment integration"],
    summary:
      "A calm, product-led online store designed to make considered furniture easier to discover and purchase.",
    image: atelierImage,
    challenge:
      "The catalogue was visually strong but difficult to browse, and the purchase journey relied on manual enquiries.",
    approach:
      "I mapped the buying journey, simplified product discovery and designed a flexible catalogue structure for the team.",
    solution:
      "A responsive commerce experience with structured collections, product variants, secure checkout and practical order administration.",
    features: [
      "Category and material filters",
      "Product variants",
      "Secure checkout",
      "Order dashboard",
      "Responsive product storytelling",
    ],
    outcome:
      "A credible digital storefront that gives customers clarity while reducing manual work for the business.",
  },
  {
    slug: "northstar-advisory",
    name: "Northstar Advisory",
    client: "Business consulting practice",
    industry: "Professional services",
    category: "Business Websites",
    tech: ["Next.js", "TypeScript", "WordPress"],
    summary:
      "A refined consulting website that makes a complex offer clear and turns expertise into qualified conversations.",
    image: northstarImage,
    challenge:
      "The firm had deep expertise but its old website made services feel fragmented and difficult to understand.",
    approach:
      "I reorganized the content around client decisions, creating a clear path from expertise to service detail to enquiry.",
    solution:
      "A fast, editorial website with modular service pages, insight publishing and a focused enquiry journey.",
    features: [
      "Flexible content system",
      "Service architecture",
      "Insight library",
      "Lead capture",
      "Performance optimization",
    ],
    outcome:
      "A professional web presence that better reflects the value and confidence of the advisory team.",
  },
  {
    slug: "routewise-operations",
    name: "Routewise Operations",
    client: "Regional logistics company",
    industry: "Logistics",
    category: "Dashboards",
    tech: ["React", "Express", "MySQL", "REST API"],
    summary:
      "An operations dashboard that brings fleet status, delivery exceptions and daily priorities into one clear workspace.",
    image: fleetImage,
    challenge:
      "Operational information was spread across spreadsheets, messages and separate tracking tools.",
    approach:
      "I worked from the team's daily decisions, prioritizing exceptions, ownership and quick updates over decorative analytics.",
    solution:
      "A role-aware dashboard with live status views, searchable records, task ownership and exportable reporting.",
    features: [
      "Role-based views",
      "Fleet overview",
      "Exception tracking",
      "Search and filters",
      "Operational reports",
    ],
    outcome:
      "A simpler daily workflow with faster handoffs and a shared view of what needs attention.",
  },
  {
    slug: "stillwell-booking",
    name: "Stillwell Studio",
    client: "Boutique wellness studio",
    industry: "Wellness",
    category: "Web Applications",
    tech: ["React", "PHP", "MySQL"],
    summary:
      "A mobile-first booking experience combining service discovery, appointments and day-to-day studio management.",
    image: wellnessImage,
    challenge:
      "Bookings happened over calls and messages, creating missed details and unnecessary coordination.",
    approach:
      "I shaped a short booking flow around real availability and built straightforward controls for studio staff.",
    solution:
      "A responsive customer booking journey paired with schedule, service and customer management tools.",
    features: [
      "Appointment booking",
      "Availability rules",
      "Customer records",
      "Service management",
      "Automated confirmations",
    ],
    outcome:
      "A smoother client experience and a more dependable way for the studio to manage its schedule.",
  },
  {
    slug: "civic-connect-portal",
    name: "Civic Connect",
    client: "Community organization",
    industry: "Public services",
    category: "Portals",
    tech: ["WordPress", "PHP", "MySQL"],
    summary:
      "An accessible information portal that helps residents find services, submit requests and track updates.",
    image: northstarImage,
    challenge:
      "Essential information was buried in PDFs and residents had no consistent way to follow service requests.",
    approach:
      "I designed the information structure around common resident tasks and accessibility from the outset.",
    solution:
      "A searchable content portal with guided requests, status tracking and a manageable publishing workflow.",
    features: [
      "Accessible content patterns",
      "Service directory",
      "Request forms",
      "Status tracking",
      "CMS workflow",
    ],
    outcome: "Fewer steps for residents and a clearer publishing process for the internal team.",
  },
  {
    slug: "meridian-commerce-admin",
    name: "Meridian Commerce",
    client: "Multi-brand retailer",
    industry: "Retail operations",
    category: "Dashboards",
    tech: ["React", "Node.js", "Express", "MySQL"],
    summary:
      "A practical admin workspace for catalogue, inventory and order operations across multiple storefronts.",
    image: fleetImage,
    challenge:
      "Teams duplicated updates across stores and lacked a single view of stock and order exceptions.",
    approach:
      "I defined permissions and frequent workflows before building reusable tables, actions and validation patterns.",
    solution:
      "A focused administration system with bulk editing, inventory alerts and auditable operational actions.",
    features: [
      "Catalogue administration",
      "Bulk updates",
      "Inventory alerts",
      "Order exceptions",
      "Permissions",
    ],
    outcome:
      "More consistent product data and less time spent reconciling routine operational changes.",
  },
];

export const services = [
  {
    id: "business-website",
    number: "01",
    title: "Business Website Development",
    shortTitle: "Business Websites",
    overview:
      "Professional websites that clarify your offer and make it easy for the right clients to take the next step.",
    suited: "Consultants, service businesses, organizations and growing teams.",
    capabilities: ["Content structure", "Responsive frontend", "CMS setup", "Lead generation"],
    functionality:
      "Service pages, enquiry flows, blog or insights, analytics and editable content.",
  },
  {
    id: "dynamic-website",
    number: "02",
    title: "Dynamic Website Development",
    shortTitle: "Dynamic Websites",
    overview:
      "Content-rich websites with structured data, user-friendly publishing and tailored interactive features.",
    suited: "Directories, publications, institutions and businesses with changing content.",
    capabilities: ["Dynamic content", "Custom CMS", "Search and filters", "User workflows"],
    functionality: "Listings, member areas, content workflows, forms and integrations.",
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce Development",
    shortTitle: "E-commerce Development",
    overview:
      "Modern online stores built around confident product discovery and dependable operations.",
    suited: "Product brands, retailers and independent makers.",
    capabilities: [
      "Catalogue design",
      "Checkout integration",
      "Order workflows",
      "Store administration",
    ],
    functionality: "Products, variants, inventory, payments, shipping and reporting.",
  },
  {
    id: "web-application",
    number: "04",
    title: "Custom Web Applications",
    shortTitle: "Custom Web Applications",
    overview:
      "Purpose-built digital tools that replace scattered manual work with clear, reliable workflows.",
    suited: "Teams with a specific operational challenge or product idea.",
    capabilities: ["Product planning", "Frontend systems", "Backend logic", "API integration"],
    functionality: "Portals, workflow tools, role-based access, records and notifications.",
  },
  {
    id: "admin-dashboard",
    number: "05",
    title: "Admin Panel & Dashboard Development",
    shortTitle: "Admin Dashboards",
    overview: "Focused internal tools that make complex information easier to monitor and manage.",
    suited: "Operations, sales, support and management teams.",
    capabilities: ["Data hierarchy", "Role permissions", "Operational actions", "Reporting"],
    functionality: "Tables, filters, charts, approvals, exports and activity records.",
  },
  {
    id: "redesign",
    number: "06",
    title: "Website Redesign",
    shortTitle: "Website Redesign",
    overview:
      "A strategic refresh for websites that no longer reflect the quality of the business behind them.",
    suited: "Established businesses with dated, slow or unclear websites.",
    capabilities: ["Content audit", "Visual refresh", "Responsive rebuild", "Performance work"],
    functionality: "Improved navigation, updated page templates, migration and redirect planning.",
  },
  {
    id: "maintenance",
    number: "07",
    title: "Website Maintenance & Support",
    shortTitle: "Maintenance & Support",
    overview:
      "Practical ongoing care that keeps websites secure, current and working well after launch.",
    suited: "Businesses that need reliable technical support without a full internal team.",
    capabilities: ["Updates", "Monitoring", "Issue resolution", "Content support"],
    functionality: "Regular maintenance, backups, small improvements and hosting coordination.",
  },
];

export const techGroups = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap"],
  },
  { name: "Backend", items: ["PHP", "Node.js", "Express"] },
  { name: "Database", items: ["MySQL"] },
  { name: "CMS", items: ["WordPress", "Elementor"] },
  { name: "Deployment", items: ["Vercel", "Hostinger", "GoDaddy"] },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/prajakta-inamke-4381bb207/",
  github: "https://github.com/inamkeprajakta1997-maker",
};
