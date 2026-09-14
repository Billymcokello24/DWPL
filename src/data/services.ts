import {
  TargetIcon,
  CpuIcon,
  MonitorCheckIcon,
  ShieldIcon,
  CodeIcon,
  BuildingIcon,
  CloudIcon,
  DatabaseIcon,
  ZapIcon,
  NetworkIcon,
  SparklesIcon,
} from "../components/Icons";

export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  icon: React.FC<{ size?: number; color?: string }>;
  heroImg: string;
  overviewImg: string;
  methodologyImg: string;
  color: string;
  overview: string;
  capabilities: { title: string; desc: string }[];
  methodology: { step: string; title: string; desc: string }[];
  deliverables: string[];
  slaTiers: { tier: string; responseTime: string; coverage: string; targetUptime: string }[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "consulting",
    name: "Consulting & IT Strategy",
    tagline: "Strategic technology alignment, architecture design, and digital transformation roadmaps.",
    icon: TargetIcon,
    heroImg: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&auto=format",
    methodologyImg: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent)",
    overview: "In an era of rapid technological shifts, organizations need seasoned technology leadership to navigate complex IT decisions. DWPL's consulting specialists work alongside C-level executives and IT teams to audit current infrastructure, establish multi-year technology roadmaps, optimize IT budgets, and mitigate operational risks.",
    capabilities: [
      { title: "IT Strategy & Master Planning", desc: "Crafting 3-to-5 year technology roadmaps closely aligned with business expansion goals." },
      { title: "Infrastructure & Security Audit", desc: "Comprehensive risk assessments and bottleneck evaluations across server, network, and cloud layers." },
      { title: "Vendor & Licensing Optimization", desc: "Streamlining hardware and software procurement to eliminate redundant licensing costs." },
      { title: "Disaster Recovery & Business Continuity", desc: "Designing robust failover strategies to guarantee business operations during outages." },
    ],
    methodology: [
      { step: "01", title: "Discovery & Assessment", desc: "In-depth review of existing hardware, software assets, workflows, and pain points." },
      { step: "02", title: "Gap & Risk Analysis", desc: "Identifying vulnerabilities, compliance bottlenecks, and cost inefficiencies." },
      { step: "03", title: "Target Architecture Design", desc: "Formulating modern technology standards, network blueprints, and cloud strategies." },
      { step: "04", title: "Implementation Roadmap", desc: "Delivering phased action plans with clear timelines, budgets, and milestone metrics." },
    ],
    deliverables: [
      "Executive Technology Audit Report",
      "Enterprise Architecture Blueprints",
      "Cybersecurity Governance Framework",
      "Vendor Licensing Cost Reduction Matrix",
      "Disaster Recovery & BCP Policy Manual",
    ],
    slaTiers: [
      { tier: "Advisory", responseTime: "< 24 Hours", coverage: "Business Hours (8am-5pm)", targetUptime: "N/A" },
      { tier: "Strategic Partner", responseTime: "< 4 Hours", coverage: "Extended (7am-9pm)", targetUptime: "99.9%" },
      { tier: "Embedded CTO", responseTime: "< 1 Hour", coverage: "24/7 Priority Access", targetUptime: "99.99%" },
    ],
    faqs: [
      { q: "How long does a typical IT consulting audit take?", a: "A comprehensive infrastructure and cybersecurity audit typically takes between 2 to 3 weeks." },
      { q: "Do you assist with implementing the recommended roadmap?", a: "Yes, DWPL provides end-to-end implementation support and fully managed execution." },
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Network Engineering",
    tagline: "High-performance enterprise networking, data center hardware, and fiber optics.",
    icon: CpuIcon,
    heroImg: "https://images.unsplash.com/photo-1785682231847-93265d8e633d?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&h=600&fit=crop&auto=format",
    methodologyImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-teal)",
    overview: "Your network is the foundation of your digital organization. DWPL designs, deploys, and certifies enterprise structured cabling, high-throughput routing, campus Wi-Fi, and data center server infrastructure capable of supporting heavy concurrent workloads.",
    capabilities: [
      { title: "Structured Cabling & Fiber Optics", desc: "Cat6A/Cat7 copper cabling, single/multi-mode fiber backbones, and server rack cleanup." },
      { title: "Enterprise Routing & Switching", desc: "Multi-gigabit core switches, BGP routing, and SD-WAN branch interconnections." },
      { title: "High-Density Enterprise Wi-Fi", desc: "Wi-Fi 6/6E wireless networks engineered for dense office and warehouse environments." },
      { title: "Data Center Rack Infrastructure", desc: "Modular racks, precision cooling, clean UPS power distribution, and physical cable management." },
    ],
    methodology: [
      { step: "01", title: "Site Survey & Heatmapping", desc: "Conducting physical RF wireless heatmaps and fiber pathway measurements." },
      { step: "02", title: "Network Architecture Blueprint", desc: "Designing VLAN segmentation, core routing topology, and redundancy links." },
      { step: "03", title: "Installation & Certification", desc: "Deploying certified cable runs and configuring enterprise switches." },
      { step: "04", title: "Testing & Handover", desc: "Fluke cable testing, throughput validation, and documentation delivery." },
    ],
    deliverables: [
      "Fluke Certified Cable Test Documentation",
      "Network Topology & VLAN Diagrams",
      "Wireless RF Heatmap Verification Report",
      "Data Center Rack Layout Schema",
      "Hardware Maintenance Warranty Certificate",
    ],
    slaTiers: [
      { tier: "Standard", responseTime: "< 4 Hours", coverage: "Business Hours", targetUptime: "99.5%" },
      { tier: "Business Critical", responseTime: "< 2 Hours", coverage: "24/7 Remote & On-Site", targetUptime: "99.9%" },
      { tier: "Enterprise Mission-Critical", responseTime: "< 30 Mins", coverage: "24/7 Dedicated On-Site", targetUptime: "99.99%" },
    ],
    faqs: [
      { q: "Does DWPL provide manufacturer warranty on structured cabling?", a: "Yes, our cabling installations come with up to 25-year certified manufacturer warranties." },
      { q: "Can you upgrade live production networks without downtime?", a: "We schedule maintenance windows during off-peak hours and utilize redundant links during switch migrations." },
    ],
  },
  {
    id: "managed-services",
    name: "Managed IT & Cloud Operations",
    tagline: "Proactive 24/7 IT management, cloud server hosting, and helpdesk support.",
    icon: MonitorCheckIcon,
    heroImg: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=600&fit=crop&auto=format",
    methodologyImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-secondary)",
    overview: "Outsource the burden of day-to-day IT management to DWPL's certified engineers. Our Managed Services provide 24/7 proactive system monitoring, automated server patch management, cloud backup automation, and dedicated helpdesk support.",
    capabilities: [
      { title: "24/7 Server & Network Monitoring", desc: "Real-time automated tracking of system metrics, disk health, CPU loads, and uptime." },
      { title: "User Helpdesk & Remote Support", desc: "Tier 1 to Tier 3 helpdesk resolving user issues quickly via phone, remote access, or on-site." },
      { title: "Automated Cloud Backup & DR", desc: "Encrypted daily cloud backups with automated restore testing to prevent data loss." },
      { title: "Patch Management & Maintenance", desc: "Routine security patching and firmware updates applied during non-business hours." },
    ],
    methodology: [
      { step: "01", title: "Onboarding & Agent Deployment", desc: "Installing monitoring probes across all workstations and servers." },
      { step: "02", title: "Baseline Health Clean-up", desc: "Resolving existing system errors, updating patches, and securing credentials." },
      { step: "03", title: "Proactive Monitoring", desc: "24/7 automated alert management catching issues before users notice." },
      { step: "04", title: "Monthly SLA & Insights Report", desc: "Delivering executive reports on ticket resolution speeds and system health." },
    ],
    deliverables: [
      "24/7 Ticketing System Access",
      "Automated Off-Site Encrypted Backups",
      "Quarterly Executive SLA Performance Reviews",
      "Standard Operating Procedure (SOP) Library",
      "Dedicated Technical Account Manager",
    ],
    slaTiers: [
      { tier: "Essential", responseTime: "< 4 Hours", coverage: "Mon-Fri (8am-5pm)", targetUptime: "99.0%" },
      { tier: "Professional", responseTime: "< 1 Hour", coverage: "Mon-Sat (7am-9pm)", targetUptime: "99.9%" },
      { tier: "Enterprise 24/7", responseTime: "< 15 Mins", coverage: "24/7/365 Non-Stop", targetUptime: "99.99%" },
    ],
    faqs: [
      { q: "How quickly are helpdesk tickets resolved?", a: "Over 80% of routine helpdesk tickets are resolved on the first contact via remote support within 30 minutes." },
      { q: "Do you manage existing on-premise hardware?", a: "Yes, we manage both on-premise physical servers and hybrid cloud environments." },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Compliance",
    tagline: "Proactive threat intelligence, vulnerability testing, SOC monitoring, and compliance advisory.",
    icon: ShieldIcon,
    heroImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=600&fit=crop&auto=format",
    methodologyImg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-rose)",
    overview: "Protect your digital assets from escalating cyber threats, ransomware, and data breaches. DWPL delivers a multi-layered security ecosystem combining Next-Gen Firewalls, endpoint threat detection (EDR), Security Operations Center (SOC) monitoring, and compliance readiness.",
    capabilities: [
      { title: "Penetration Testing & Vulnerability Assessment", desc: "Simulating real-world cyber attacks to discover security gaps before malicious actors do." },
      { title: "Managed Security Operations Center (SOC)", desc: "Continuous SIEM log analysis, threat hunting, and automated incident containment." },
      { title: "Endpoint Detection & Response (EDR)", desc: "AI-driven endpoint protection stopping malware, zero-day exploits, and ransomware." },
      { title: "Employee Phishing Training & Security Culture", desc: "Automated simulation campaigns training staff to spot phishing emails and social engineering." },
    ],
    methodology: [
      { step: "01", title: "Threat Landscape Audit", desc: "Evaluating current security posture, firewall policies, and external exposure." },
      { step: "02", title: "Defensive Hardening", desc: "Deploying multi-factor authentication (MFA), firewall rules, and zero-trust policies." },
      { step: "03", title: "Continuous SOC Surveillance", desc: "Monitoring network traffic and endpoints 24/7 for suspicious activities." },
      { step: "04", title: "Incident Response & Remediation", desc: "Swift containment, threat eradication, and forensic reporting during incidents." },
    ],
    deliverables: [
      "Penetration Test & Remediation Report",
      "ISO 27001 / Regulatory Gap Analysis",
      "24/7 Managed SOC Threat Alerting",
      "Incident Response Playbook",
      "Employee Security Awareness Scorecard",
    ],
    slaTiers: [
      { tier: "Defensive", responseTime: "< 2 Hours", coverage: "Business Hours", targetUptime: "N/A" },
      { tier: "Proactive SOC", responseTime: "< 30 Mins", coverage: "24/7 Monitoring", targetUptime: "99.9%" },
      { tier: "Incident Response Retainer", responseTime: "< 15 Mins", coverage: "24/7 Immediate On-Site", targetUptime: "99.99%" },
    ],
    faqs: [
      { q: "What is the difference between a vulnerability assessment and penetration testing?", a: "Vulnerability assessment scans for known security flaws, while penetration testing actively attempts to exploit them to test defensive controls." },
      { q: "How do you handle a suspected ransomware attack?", a: "Our automated EDR instantly isolates compromised machines from the network within seconds to prevent lateral spread." },
    ],
  },
  {
    id: "software-integration",
    name: "Enterprise Software & Cloud Integration",
    tagline: "Custom software development, ERP integration, API connectivity, and database management.",
    icon: CodeIcon,
    heroImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=600&fit=crop&auto=format",
    methodologyImg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-amber)",
    overview: "Disconnect between software applications creates data silos and inefficient manual workarounds. DWPL builds custom software solutions, connects enterprise ERP systems via secure APIs, and modernizes database architectures.",
    capabilities: [
      { title: "Custom Web & Mobile Application Development", desc: "Tailor-made software applications built with modern frameworks and robust security." },
      { title: "ERP & CRM System Integration", desc: "Seamless bi-directional data synchronization between SAP, Oracle, Dynamics, and custom systems." },
      { title: "API Development & Middleware", desc: "Building scalable REST/GraphQL APIs and microservices for enterprise connectivity." },
      { title: "Database Optimization & Analytics", desc: "SQL/NoSQL tuning, data warehousing, and automated executive reporting dashboards." },
    ],
    methodology: [
      { step: "01", title: "Requirement Specification", desc: "Gathering business workflows, user stories, and system architecture parameters." },
      { step: "02", title: "Agile Development & Sprint Plan", desc: "Iterative software development with bi-weekly client demo sessions." },
      { step: "03", title: "Automated QA & Security Testing", desc: "Code reviews, stress testing, and vulnerability scans prior to deployment." },
      { step: "04", title: "Deployment & Knowledge Transfer", desc: "Production release, staff training, and detailed technical documentation." },
    ],
    deliverables: [
      "Custom Software Source Code & IP Rights",
      "API Documentation & Integration Specs",
      "User Training Manuals & Video Guides",
      "Automated Testing Suite Scripts",
      "12-Month Post-Launch Bug Warranty",
    ],
    slaTiers: [
      { tier: "Maintenance", responseTime: "< 24 Hours", coverage: "Standard Business Hours", targetUptime: "99.0%" },
      { tier: "Business Application", responseTime: "< 2 Hours", coverage: "Extended Support", targetUptime: "99.9%" },
      { tier: "Mission-Critical App", responseTime: "< 15 Mins", coverage: "24/7 Dedicated Engineers", targetUptime: "99.99%" },
    ],
    faqs: [
      { q: "Who owns the intellectual property (IP) of custom software built by DWPL?", a: "The client retains 100% full ownership of all custom source code and intellectual property." },
      { q: "Can you integrate legacy desktop software with cloud platforms?", a: "Yes, we build custom API wrappers and middleware to connect legacy systems with cloud services." },
    ],
  },
  {
    id: "smart-building",
    name: "Smart Building & Physical Security",
    tagline: "IP CCTV surveillance, biometric access control, fire suppression, and environmental sensors.",
    icon: BuildingIcon,
    heroImg: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&h=600&fit=crop&auto=format",
    methodologyImg: "https://images.unsplash.com/photo-1558002038-1055907df827?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent)",
    overview: "Physical facility security is as critical as cybersecurity. DWPL installs intelligent IP video surveillance, biometric door access control, FM200 server room fire suppression systems, and environmental monitoring systems to protect physical corporate assets.",
    capabilities: [
      { title: "AI-Powered IP Surveillance Systems", desc: "4K resolution IP cameras with license plate recognition, facial detection, and night vision." },
      { title: "Biometric & RFID Access Control", desc: "Centralized door access management using fingerprint, facial recognition, and smart cards." },
      { title: "Server Room Environmental Monitoring", desc: "Real-time alerts for temperature, humidity, water leakage, and power supply." },
      { title: "Clean Agent Fire Suppression", desc: "Automatic FM200 / NOVEC 1230 fire suppression systems protecting server rooms without water damage." },
    ],
    methodology: [
      { step: "01", title: "Physical Risk & Vulnerability Survey", desc: "Evaluating building entry points, server room blind spots, and perimeter risks." },
      { step: "02", title: "System Engineering & Layout", desc: "Designing camera coverage cones, access control zones, and pipe runs." },
      { step: "03", title: "Equipment Mounting & Cabling", desc: "Installing conduit, running shielded cables, and mounting hardware." },
      { step: "04", title: "Commissioning & Training", desc: "Testing alarm triggers, configuring VMS software, and training security guards." },
    ],
    deliverables: [
      "Physical Security As-Built Drawings",
      "Central Video Management System (VMS) License",
      "Access Control User Credentials Registry",
      "Fire Suppression Certification Report",
      "Annual Preventative Maintenance Schedule",
    ],
    slaTiers: [
      { tier: "Basic", responseTime: "< 8 Hours", coverage: "Business Hours", targetUptime: "99.0%" },
      { tier: "Advanced Facility", responseTime: "< 2 Hours", coverage: "24/7 Emergency Dispatch", targetUptime: "99.9%" },
      { tier: "Critical Infrastructure", responseTime: "< 30 Mins", coverage: "24/7 Immediate On-Site", targetUptime: "99.99%" },
    ],
    faqs: [
      { q: "How long is video footage stored on the VMS storage servers?", a: "Storage duration is customized to your needs, typically ranging from 30 days to 180 days in high-definition." },
      { q: "What happens to the access control doors during a power outage?", a: "All access control systems include backup battery power banks ensuring doors remain secured and functional." },
    ],
  },
];

export const getServiceById = (id: string): ServiceDetail | undefined =>
  servicesData.find((s) => s.id === id);
