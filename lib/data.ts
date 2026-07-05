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
      "Own infrastructure deployment pipelines for core and managed AWS systems. Build and optimize CI/CD workflows with Jenkins and GitHub Actions, implement reusable Terraform modules adopted across projects, and lead infrastructure code reviews. Migrated on-premises workloads via AWS Migration Services and implemented AWS Landing Zone governance.",
    tags: ["AWS", "Terraform", "GitHub Actions", "Jenkins", "IAM", "VPC"],
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
