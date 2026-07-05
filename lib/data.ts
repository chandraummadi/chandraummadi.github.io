export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const CONTACT = {
  phone: "9000881239",
  phoneHref: "tel:+919000881239",
  email: "ummadi.chandra@gmail.com",
  linkedinLabel: "linkedin.com/in/chandraummadi-devops",
  linkedinHref: "https://www.linkedin.com/in/chandraummadi-devops",
} as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/chandraummadi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/chandraummadi-devops" },
  { label: "Email", href: "mailto:ummadi.chandra@gmail.com" },
] as const;

export type ExperienceEntry = {
  range: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  tags: string[];
};

/**
 * Sourced directly from Chandra's ATS resume — do not invent achievements
 * or dates here. Update this file when the resume changes.
 */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    range: "2022 — Present",
    title: "Digital Engineering Sr Staff Engineer",
    company: "NTT DATA",
    description:
      "Redesigned 12 CI/CD deployment pipelines using GitHub Actions and Terraform, cutting deployment time by 40% and enabling on-demand releases. Built a reusable GitHub Actions workflow library (15+ workflows) adopted by 8 teams, reducing pipeline maintenance by 60%. Created 25+ Terraform modules published to a private registry, enabling 3x faster environment provisioning. Led migration of 200+ VMs to AWS using AWS MGN + DMS, achieving 99.9% data integrity and a 40% infrastructure cost reduction. Designed a multi-account VPC architecture (Inspection, Shared Services, Workloads) with Transit Gateway and Route 53 Resolver across 20+ VPCs. Deployed a Prometheus/Grafana + Loki monitoring stack on EKS (50+ services), defining 200+ alerts with 95% noise reduction.",
    tags: ["AWS", "Terraform", "GitHub Actions", "EKS", "Prometheus", "Grafana", "Transit Gateway"],
  },
  {
    range: "2017 — 2022",
    title: "Senior Systems Administrator (SRE)",
    company: "JPMorgan Chase",
    description:
      "Supported Site Reliability Engineering initiatives by defining operational best practices, improving system reliability, and enhancing production stability. Automated 15+ manual runbooks (patch management, cert rotation) using Python, saving 40 hours/month of ops time. Implemented monitoring tools to proactively identify and mitigate performance issues. Managed production incidents for Tier-1 applications, reducing Mean Time to Recovery (MTTR) from 45 minutes to 12 minutes through standardized runbooks and automated diagnostics. Performed root cause analysis and implemented preventive measures to improve platform reliability. Served as primary on-call for Tier-1 services.",
    tags: ["Python Automation", "SRE", "Incident Management", "Monitoring", "Runbooks"],
  },
  {
    range: "2012 — 2017",
    title: "Server Support Specialist",
    company: "IBM India Pvt Ltd",
    description:
      "Managed virtualized server environments across multiple data centers. Migrated business applications to cloud platforms, automated server provisioning, and streamlined patch management to reduce vulnerabilities and downtime.",
    tags: ["Linux", "AIX", "Virtualization", "Automation"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
};

/**
 * Real infrastructure work — described generically to respect client
 * confidentiality (JPMorgan, NTT DATA). No fabricated metrics or links.
 */
export const PROJECTS: Project[] = [
  {
    title: "Reusable Terraform Module Library",
    description:
      "A production-grade module repository covering VPC, EC2, EKS, RDS, Lambda, IAM, Load Balancer, and 10+ other AWS services — built for reuse across multiple environments (dev/staging/prod) rather than one-off scripts.",
    tags: ["Terraform", "AWS", "IaC"],
  },
  {
    title: "AWS Application Migration (MGN) — SAP Lift-and-Shift",
    description:
      "Led a 44-instance SAP EC2 migration between VPCs using AWS Application Migration Service, including a custom CloudFormation template for networking, HA NAT gateways, and SAP-specific security groups.",
    tags: ["AWS MGN", "CloudFormation", "VPC", "SAP"],
  },
  {
    title: "Claude Code Skills Library for Infrastructure Engineering",
    description:
      "Built a personal library of reusable Claude Code skills encoding IaC standards, cloud security review patterns, and a custom stdlib-only Python cross-stack asset scanner with HTML report output.",
    tags: ["Python", "AI Tooling", "DevOps Automation"],
  },
];
