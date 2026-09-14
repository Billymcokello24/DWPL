import {
  LandmarkIcon,
  BuildingIcon,
  HospitalIcon,
  GraduationCapIcon,
  ShoppingBagIcon,
  ZapIcon,
  TruckIcon,
  ShieldIcon,
  DatabaseIcon,
  CloudIcon,
  NetworkIcon,
  MonitorCheckIcon,
  SparklesIcon,
  FactoryIcon,
  HotelIcon,
  HeartHandshakeIcon,
  HardHatIcon,
  BriefcaseIcon,
} from "../components/Icons";

export interface IndustryDetail {
  id: string;
  name: string;
  tagline: string;
  icon: React.FC<{ size?: number; color?: string }>;
  heroImg: string;
  overviewImg: string;
  caseStudyImg: string;
  color: string;
  overview: string;
  stats: { label: string; value: string }[];
  challenges: { title: string; desc: string }[];
  solutionsProvided: { title: string; desc: string; icon: React.FC<{ size?: number; color?: string }> }[];
  compliance: string[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  faqs: { q: string; a: string }[];
}

export const industriesData: IndustryDetail[] = [
  {
    id: "government",
    name: "Government & Public Sector",
    tagline: "Secure, compliant, and accessible digital infrastructure for modern public governance.",
    icon: LandmarkIcon,
    heroImg: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent)",
    overview: "Governments across East Africa are accelerating digital transformation to deliver citizen services efficiently, enhance transparency, and safeguard national data. DWPL partners with public sector agencies to modernize legacy infrastructure, implement sovereign cloud environments, and establish zero-trust cybersecurity frameworks.",
    stats: [
      { label: "Public Agencies Served", value: "35+" },
      { label: "Citizen Service Uptime", value: "99.99%" },
      { label: "Compliance Pass Rate", value: "100%" },
      { label: "Data Records Secured", value: "10M+" },
    ],
    challenges: [
      { title: "Legacy System Bottlenecks", desc: "Outdated infrastructure slows down citizen service delivery and increases maintenance overhead." },
      { title: "Data Sovereignty & Privacy", desc: "Strict national regulations require public data to remain hosted securely within country borders." },
      { title: "Cyber Threat Resilience", desc: "Government networks are high-priority targets for ransomware and state-sponsored attacks." },
    ],
    solutionsProvided: [
      { title: "Sovereign Private Cloud", desc: "High-security cloud deployments built within local data centers under government sovereignty.", icon: CloudIcon },
      { title: "Zero-Trust Security Framework", desc: "End-to-end security architecture protecting public databases and administrative portals.", icon: ShieldIcon },
      { title: "E-Government Portals", desc: "High-concurrency web platforms enabling citizens to access services 24/7.", icon: MonitorCheckIcon },
    ],
    compliance: ["National Data Protection Act", "ISO 27001", "NIST Security Standards", "Government Interoperability Standards"],
    caseStudy: {
      client: "Ministry of ICT & Digital Economy",
      challenge: "High system downtime during peak tax reporting and citizen registration windows.",
      solution: "Migrated infrastructure to a high-availability hyperconverged cluster with multi-site automated redundancy.",
      results: ["Zero downtime during peak citizen traffic", "60% reduction in server management costs", "Sub-second database query performance"],
    },
    faqs: [
      { q: "How does DWPL handle government data privacy regulations?", a: "We ensure all data hosting, storage, and processing strictly align with local Data Protection Acts and national sovereignty requirements." },
      { q: "Can legacy databases be integrated without service disruption?", a: "Yes, we utilize staged database replication and shadow testing to guarantee zero service interruption during migrations." },
    ],
  },
  {
    id: "financial",
    name: "Financial Services & Banking",
    tagline: "Ultra-secure, low-latency IT systems for banks, microfinance institutions, and fintechs.",
    icon: BuildingIcon,
    heroImg: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-teal)",
    overview: "Financial institutions require maximum uptime, millisecond transactions, and uncompromised cybersecurity. DWPL delivers enterprise banking infrastructure, payment gateway security, disaster recovery, and continuous threat monitoring tailored for Central Bank audit standards.",
    stats: [
      { label: "Daily Transactions Processed", value: "5M+" },
      { label: "RTO Recovery Target", value: "< 15 Mins" },
      { label: "PCI-DSS Compliance", value: "Certified" },
      { label: "Financial Clients", value: "24+" },
    ],
    challenges: [
      { title: "Strict Central Bank Audits", desc: "Demanding regulatory compliance requires rigorous access controls and real-time audit logging." },
      { title: "Ransomware & Fraud Risks", desc: "Sophisticated financial fraud demands real-time threat intelligence and automated incident response." },
      { title: "24/7 Digital Banking Expectations", desc: "Mobile banking users demand zero downtime and instant transaction confirmation." },
    ],
    solutionsProvided: [
      { title: "Core Banking High-Availability Infrastructure", desc: "Redundant server clusters engineered for continuous financial operations.", icon: DatabaseIcon },
      { title: "Automated Disaster Recovery (DR)", desc: "Real-time data replication between primary and secondary bank data centers.", icon: MonitorCheckIcon },
      { title: "24/7 Managed SOC & SIEM", desc: "Continuous monitoring for financial fraud, unauthorized access, and anomaly detection.", icon: ShieldIcon },
    ],
    compliance: ["PCI-DSS", "Central Bank Cybersecurity Guidelines", "ISO 27001", "SWIFT Security Controls Framework"],
    caseStudy: {
      client: "Regional Commercial Bank",
      challenge: "Slow core banking batch processes and risk of data loss during regional power disruptions.",
      solution: "Deployed active-active SAN storage and automated failover architecture across dual data centers.",
      results: ["Batch processing time reduced by 70%", "Zero data loss (RPO = 0) achieved during power outages", "Passed Central Bank audit with 100% score"],
    },
    faqs: [
      { q: "Does DWPL support PCI-DSS compliant infrastructure setups?", a: "Yes, our hardware, network architecture, and security policies are engineered from the ground up for PCI-DSS compliance." },
      { q: "What is the typical disaster recovery failover time?", a: "We achieve Recovery Time Objectives (RTO) of under 15 minutes and Recovery Point Objectives (RPO) near zero." },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Resilient IT infrastructure supporting electronic health records, telemedicine, and medical imaging.",
    icon: HospitalIcon,
    heroImg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-secondary)",
    overview: "Hospitals and healthcare providers rely on digital infrastructure for patient care, PACS medical imaging, and hospital management systems (HMIS). DWPL designs high-uptime medical networks and HIPAA-compliant data backup solutions to keep healthcare services available around the clock.",
    stats: [
      { label: "Hospitals Secured", value: "18+" },
      { label: "Patient Records Protected", value: "4M+" },
      { label: "PACS Uptime", value: "99.99%" },
      { label: "Telemedicine Sessions Supported", value: "100K+" },
    ],
    challenges: [
      { title: "Critical Patient Care Uptime", desc: "Network or server failures directly impact emergency treatment and diagnostic workflows." },
      { title: "Medical Record Privacy", desc: "Patient health information (PHI) requires strict encryption and access management." },
      { title: "Large PACS Imaging Storage", desc: "High-resolution DICOM files consume terabytes of storage requiring fast archival retrieval." },
    ],
    solutionsProvided: [
      { title: "HMIS & PACS Hybrid Cloud Storage", desc: "High-speed tiered storage built specifically for medical imaging and EHR databases.", icon: DatabaseIcon },
      { title: "Hospital Wi-Fi & Clinical Mobility", desc: "Secure wireless networks separating patient access from medical equipment streams.", icon: NetworkIcon },
      { title: "Healthcare Ransomware Shield", desc: "Dedicated endpoint protection preventing ransomware from encrypting clinical databases.", icon: ShieldIcon },
    ],
    compliance: ["HIPAA Standards", "Data Protection Act", "ISO 27701 Privacy Management"],
    caseStudy: {
      client: "Premier Referral Hospital",
      challenge: "PACS radiology scan loading delays caused long patient wait times in the diagnostic department.",
      solution: "Implemented NVMe flash storage tiering and dedicated 10Gbps optical network backbones.",
      results: ["Scan retrieval speeds improved by 85%", "Radiologist diagnostic turnaround cut in half", "Secured 100% HIPAA compliance for patient data"],
    },
    faqs: [
      { q: "How do you protect medical equipment connected to the hospital network?", a: "We implement micro-segmentation to isolate IoT medical devices from general staff and guest networks." },
      { q: "Can DWPL support 24/7 hospital emergency operations?", a: "Yes, our managed service agreements include 24/7 dedicated rapid response teams for critical healthcare incidents." },
    ],
  },
  {
    id: "education",
    name: "Education & Research",
    tagline: "High-bandwidth campus networks, e-learning platforms, and digital research infrastructure.",
    icon: GraduationCapIcon,
    heroImg: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-amber)",
    overview: "Modern universities and schools require robust Wi-Fi networks, virtual learning environments, student management portals, and cloud compute for academic research. DWPL equips institutions across East Africa with scalable campus infrastructure.",
    stats: [
      { label: "Universities Supported", value: "12+" },
      { label: "Students Connected", value: "150K+" },
      { label: "Campus Wi-Fi APs Deployed", value: "2,500+" },
      { label: "E-Learning Platform Uptime", value: "99.9%" },
    ],
    challenges: [
      { title: "High Concurrent User Density", desc: "Thousands of students connecting simultaneously during exams and lecture hours strain wireless networks." },
      { title: "Cybersecurity & Content Filtering", desc: "Educational institutions require campus network security while permitting open academic research." },
      { title: "Budget Optimization", desc: "Educational institutions require cost-effective technology investments with low total cost of ownership." },
    ],
    solutionsProvided: [
      { title: "High-Density Campus Wi-Fi 6", desc: "Next-gen enterprise wireless supporting tens of thousands of concurrent student devices.", icon: NetworkIcon },
      { title: "Virtual Classroom & LMS Infrastructure", desc: "Scalable cloud servers hosting Moodle, Canvas, and custom portal platforms.", icon: CloudIcon },
      { title: "Academic Data Center & Virtualization", desc: "Consolidated server hardware for administrative databases and computer labs.", icon: MonitorCheckIcon },
    ],
    compliance: ["Data Protection Act", "Academic Interoperability Standards", "ISO 27001"],
    caseStudy: {
      client: "Leading Private University",
      challenge: "Frequent Wi-Fi dropouts across student hostels and library lecture halls during peak study periods.",
      solution: "Designed and deployed Wi-Fi 6 access points with centralized cloud controller management.",
      results: ["100% seamless campus-wide roaming", "Handled 15,000+ simultaneous connections during exam week", "Zero network outages reported"],
    },
    faqs: [
      { q: "Can DWPL manage campus network operations remotely?", a: "Yes, we provide fully managed network services including remote monitoring, bandwidth control, and user provisioning." },
      { q: "Do you offer special licensing for educational institutions?", a: "We partner with major vendors to secure academic discount pricing for hardware, software, and cloud licenses." },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial Operations",
    tagline: "OT/IT convergence, factory floor IoT monitoring, and high-resilience production networks.",
    icon: FactoryIcon,
    heroImg: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-rose)",
    overview: "Manufacturing facilities rely on continuous production lines, automated ERP inventory tracking, and industrial sensor networks. DWPL delivers ruggedized network switches, SCADA security boundaries, and factory floor connectivity built for 24/7 industrial uptime.",
    stats: [
      { label: "Factories Connected", value: "28+" },
      { label: "Production Line Uptime", value: "99.98%" },
      { label: "IoT Sensors Managed", value: "8,000+" },
      { label: "Downtime Reduction", value: "65%" },
    ],
    challenges: [
      { title: "Costly Production Line Downtime", desc: "Network disruptions on the plant floor freeze automated assembly systems and ruin production schedules." },
      { title: "OT Security Vulnerabilities", desc: "Legacy industrial machines lack built-in cybersecurity, exposing factory networks to malware." },
      { title: "Inventory & ERP Desynchronization", desc: "Lag between raw material consumption and ERP updates leads to stockouts." },
    ],
    solutionsProvided: [
      { title: "Industrial Ethernet & Wireless", desc: "Ruggedized switches and dust-proof access points built for factory environments.", icon: NetworkIcon },
      { title: "OT/IT Security Microsegmentation", desc: "Isolating industrial control systems (ICS) behind specialized SCADA firewalls.", icon: ShieldIcon },
      { title: "Factory Floor IoT Telemetry", desc: "Real-time machine performance and thermal tracking dashboards.", icon: MonitorCheckIcon },
    ],
    compliance: ["ISO 9001", "IEC 62443 Industrial Security", "Data Protection Compliance"],
    caseStudy: {
      client: "East Africa Beverage Bottling Company",
      challenge: "Unplanned network drops in the bottling plant halted conveyor belts, resulting in heavy daily loss.",
      solution: "Replaced commercial switches with IP67 industrial ring-redundancy switches and dedicated fiber backbones.",
      results: ["Achieved 99.99% factory floor network uptime", "Eliminated line stoppage caused by IT network faults", "Real-time automated ERP inventory sync"],
    },
    faqs: [
      { q: "Can industrial switches withstand extreme heat and dust?", a: "Yes, our industrial switches are IP67-rated for operation in temperatures from -40°C to +75°C." },
      { q: "How do you secure old factory machinery that cannot run antivirus?", a: "We place legacy equipment in isolated VLANs with strict firewall rules regulating input commands." },
    ],
  },
  {
    id: "retail",
    name: "Retail & FMCG",
    tagline: "Point-of-sale infrastructure, inventory network sync, and multi-location security.",
    icon: ShoppingBagIcon,
    heroImg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent)",
    overview: "Retail chains and FMCG distributors depend on reliable POS networks, inventory synchronization, and store surveillance. DWPL supplies robust hardware and network infrastructure that prevents sales downtime during peak shopping hours.",
    stats: [
      { label: "Retail Stores Connected", value: "120+" },
      { label: "POS Transactions/Sec", value: "2,500" },
      { label: "Surveillance Cameras Managed", value: "1,800+" },
      { label: "Store Downtime Reduction", value: "90%" },
    ],
    challenges: [
      { title: "POS Network Outages", desc: "Network disruptions at checkout counters lead directly to lost revenue and customer frustration." },
      { title: "Real-Time Inventory Sync", desc: "Stock management requires instantaneous communication between outlets and central warehouses." },
      { title: "In-Store Loss Prevention", desc: "High-definition IP surveillance needed to combat shrinkage and monitor store traffic." },
    ],
    solutionsProvided: [
      { title: "Failover POS Store Connectivity", desc: "Dual cellular and fiber store routers ensuring checkout terminals never go offline.", icon: NetworkIcon },
      { title: "AI Smart IP Surveillance & Analytics", desc: "Intelligent video cameras with motion detection, heatmapping, and central monitoring.", icon: MonitorCheckIcon },
      { title: "Central Warehousing IT Infrastructure", desc: "Server and barcode scanner networking built for fast logistics processing.", icon: SparklesIcon },
    ],
    compliance: ["PCI-DSS Payment Standards", "Data Protection Compliance"],
    caseStudy: {
      client: "Supermarket Chain with 35 Locations",
      challenge: "Internet dropouts caused long checkout lines and delayed stock updates during holiday sales.",
      solution: "Installed DWPL store failover routers with automated 4G/5G secondary links and local caching.",
      results: ["Zero checkout downtime during holiday peak season", "Real-time stock level synchronization", "Customer checkout speeds improved by 25%"],
    },
    faqs: [
      { q: "What happens if the main internet line in a store cuts out?", a: "Our backup failover router instantly switches POS traffic to 4G/5G in under 1 second without dropping active payments." },
      { q: "Can DWPL centralize surveillance feeds from 50+ stores?", a: "Yes, our smart VMS solutions aggregate video streams into a central security monitoring center." },
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality & Tourism",
    tagline: "Guest Wi-Fi, property management integration, and smart room automation.",
    icon: HotelIcon,
    heroImg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-teal)",
    overview: "Hotels, resorts, and safari lodges require seamless guest Wi-Fi coverage, property management system (PMS) integrations, IPTV entertainment networks, and secure back-office IT infrastructure. DWPL enhances guest satisfaction through high-performance hospitality tech.",
    stats: [
      { label: "Hotels & Lodges Tech Managed", value: "32+" },
      { label: "Guest Wi-Fi Sessions/Mo", value: "250K+" },
      { label: "Guest Satisfaction Increase", value: "40%" },
      { label: "PMS Uptime Guarantee", value: "99.95%" },
    ],
    challenges: [
      { title: "Poor Guest Wi-Fi Ratings", desc: "Sluggish internet connection causes negative online reviews and guest dissatisfaction." },
      { title: "Remote Lodge Connectivity", desc: "Safari lodges in national parks lack traditional fiber optic infrastructure." },
      { title: "PMS & POS Disconnects", desc: "Front desk booking software failing to communicate with restaurant billing systems." },
    ],
    solutionsProvided: [
      { title: "High-Bandwidth Captive Portal Guest Wi-Fi", desc: "Tiered wireless speed options with branded login portals and band steering.", icon: NetworkIcon },
      { title: "Satellite & Microwave Link Deployment", desc: "High-speed internet installation for remote luxury safari lodges.", icon: CloudIcon },
      { title: "Hospitality PMS & IPTV Integration", desc: "Connecting Opera, HMS, and POS systems across a unified hotel network backbone.", icon: DatabaseIcon },
    ],
    compliance: ["PCI-DSS for Guest Payments", "Data Protection Compliance"],
    caseStudy: {
      client: "Luxury Safari Lodge Group",
      challenge: "Unreliable satellite connectivity caused guest complaints and reservation sync delays.",
      solution: "Engineered dual-WAN bonded satellite and Starlink links paired with campus mesh Wi-Fi.",
      results: ["100% guest Wi-Fi coverage across 40 private villas", "Instant guest billing and PMS synchronization", "Guest review score rose from 4.1 to 4.9"],
    },
    faqs: [
      { q: "Can we monetize premium high-speed Wi-Fi for guests?", a: "Yes, our captive portal allows offering free basic Wi-Fi and paid high-speed tiers for business travelers." },
      { q: "How do you protect guest personal data on public Wi-Fi?", a: "We enforce client isolation on all guest networks to prevent devices from communicating with or spying on each other." },
    ],
  },
  {
    id: "logistics",
    name: "Logistics, Ports & Supply Chain",
    tagline: "Fleet IoT telemetry, port infrastructure, and real-time cargo tracking networks.",
    icon: TruckIcon,
    heroImg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-secondary)",
    overview: "Logistics companies, logistics hubs, and ports require high-speed wireless coverage, IoT sensor connectivity, and continuous warehouse tracking to move goods efficiently across supply chains.",
    stats: [
      { label: "Logistics Hubs Covered", value: "25+" },
      { label: "IoT Sensors Managed", value: "10K+" },
      { label: "Warehouse Wireless Range", value: "500K sq ft" },
      { label: "Tracking Latency", value: "< 100ms" },
    ],
    challenges: [
      { title: "Wide-Area Warehouse Wireless", desc: "Metal containers and stacked cargo cause severe Wi-Fi signal attenuation." },
      { title: "Fleet & Asset Telemetry", desc: "Tracking temperature-sensitive shipments across borders without losing signal." },
      { title: "24/7 Logistics Continuous Operations", desc: "Warehouse scanners and gate systems cannot afford network dropouts." },
    ],
    solutionsProvided: [
      { title: "Industrial Warehouse Wi-Fi Infrastructure", desc: "High-power directional wireless access points built for container yards and deep aisles.", icon: NetworkIcon },
      { title: "IoT Asset & Cold-Chain Monitoring", desc: "Real-time temperature, humidity, and location tracking for high-value cargo.", icon: MonitorCheckIcon },
      { title: "Cross-Border SD-WAN Networks", desc: "Unified corporate communications connecting depots across East Africa.", icon: CloudIcon },
    ],
    compliance: ["GDP Cold-Chain Standards", "ISO 28000 Supply Chain Security", "Data Protection Compliance"],
    caseStudy: {
      client: "East Africa Freight & Logistics Terminal",
      challenge: "Wi-Fi dead zones across a 15-acre container depot caused barcode scanner disconnects.",
      solution: "Deployed outdoor mesh access points with beamforming antennas and ruggedized fiber backhaul.",
      results: ["100% wireless coverage across the entire depot yard", "Zero barcode scanner drops", "Gate turnaround time improved by 40%"],
    },
    faqs: [
      { q: "How do you overcome signal blockage caused by metal shipping containers?", a: "We utilize specialized high-gain directional antennas and mesh nodes mounted on high towers." },
      { q: "Can DWPL integrate cold-chain temperature alerts with our ERP?", a: "Yes, our IoT gateways transmit real-time telemetry directly to your enterprise management software." },
    ],
  },
  {
    id: "ngo",
    name: "NGOs & International Development",
    tagline: "Cost-effective, reliable IT infrastructure for field offices and development agencies.",
    icon: HeartHandshakeIcon,
    heroImg: "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-amber)",
    overview: "Non-governmental organizations (NGOs) and humanitarian agencies operate in challenging remote environments requiring reliable communications, donor data protection, cloud collaboration, and cost-efficient hardware procurement.",
    stats: [
      { label: "NGO Clients Supported", value: "45+" },
      { label: "Field Offices Connected", value: "110+" },
      { label: "Donor Audit Compliance", value: "100%" },
      { label: "Hardware Cost Savings", value: "30%" },
    ],
    challenges: [
      { title: "Remote Field Office Connectivity", desc: "Humanitarian missions in deep rural regions lack terrestrial broadband access." },
      { title: "Strict Donor Compliance & Audits", desc: "Grants require transparent IT procurement records and strict data privacy protocols." },
      { title: "High Staff Turnover & Onboarding", desc: "Rotating international and local staff require rapid identity and access provisioning." },
    ],
    solutionsProvided: [
      { title: "Field-Ready Mobile Satellite Routers", desc: "Portable, rugged satellite and cellular Wi-Fi kits for emergency response teams.", icon: NetworkIcon },
      { title: "Non-Profit Cloud & M365 Setup", desc: "Configuring discounted non-profit Microsoft 365, Google Workspace, and cloud storage.", icon: CloudIcon },
      { title: "Donor Data Protection & Encryption", desc: "Securing beneficiary databases with end-to-end encryption and MFA access.", icon: ShieldIcon },
    ],
    compliance: ["Non-Profit Procurement Standards", "Data Protection Act", "ISO 27001"],
    caseStudy: {
      client: "International Relief Organization",
      challenge: "Field offices in 6 East African countries lacked centralized email security and backup.",
      solution: "Migrated 800+ staff to non-profit Microsoft 365 E3 with centralized cloud backup and mobile device management.",
      results: ["Streamlined multi-country staff collaboration", "Achieved 100% compliance during USAID donor IT audit", "Reduced IT licensing expenditure by 60%"],
    },
    faqs: [
      { q: "Can DWPL assist us in applying for non-profit software discounts?", a: "Yes, we guide non-profits through TechSoup and vendor validation to secure up to 75% software discounts." },
      { q: "Do you supply portable solar power units for IT gear in off-grid sites?", a: "Yes, we configure battery-backed solar power stations designed specifically for remote field office routers and laptops." },
    ],
  },
  {
    id: "construction",
    name: "Construction & Real Estate",
    tagline: "Site office networking, project management systems, and temporary wireless backhaul.",
    icon: HardHatIcon,
    heroImg: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-rose)",
    overview: "Construction firms and real estate developers require rapidly deployable IT infrastructure for temporary site offices, CAD file transfer servers, site surveillance cameras, and project management portals.",
    stats: [
      { label: "Construction Sites Equipped", value: "40+" },
      { label: "Deploy Time / Site", value: "< 24 Hours" },
      { label: "CCTV Cameras Managed", value: "600+" },
      { label: "Project Data Sync Uptime", value: "99.9%" },
    ],
    challenges: [
      { title: "Temporary Site Office Connectivity", desc: "New building sites have no fixed internet lines, delaying CAD drawing updates and site reports." },
      { title: "Equipment Theft & Vandalism", desc: "Unsecured construction sites face high risk of building material and tool theft." },
      { title: "Large File Transfer Lag", desc: "Engineers struggle to upload heavy 3D BIM models over weak mobile hotspots." },
    ],
    solutionsProvided: [
      { title: "Rapid-Deploy 5G/LTE Site Routers", desc: "Ruggedized plug-and-play cellular routers providing instant high-speed Wi-Fi to site cabins.", icon: NetworkIcon },
      { title: "Solar-Powered Wireless CCTV Trailers", desc: "Standalone surveillance towers with night vision and remote security monitoring.", icon: MonitorCheckIcon },
      { title: "Cloud BIM & Document Sharing Servers", desc: "Accelerated local file caching servers for rapid architectural drawing access.", icon: DatabaseIcon },
    ],
    compliance: ["Occupational Safety Standards", "Data Protection Compliance"],
    caseStudy: {
      client: "Commercial Real Estate Developer",
      challenge: "Delay in internet setup at a flagship 20-story building site hindered daily contractor reporting.",
      solution: "Deployed dual-SIM 5G point-to-point wireless routers and solar-powered perimeter IP cameras.",
      results: ["Site office connected within 12 hours of contract signature", "100% security coverage preventing night site intrusions", "Smooth transmission of heavy BIM CAD files"],
    },
    faqs: [
      { q: "Can site office IT gear be relocated when the construction project finishes?", a: "Yes, all our site equipment is modular and can be seamlessly moved to your next construction project." },
      { q: "How are site surveillance cameras powered before main grid electricity is connected?", a: "We deploy solar panel battery trailers that keep security cameras and LTE routers running 24/7." },
    ],
  },
  {
    id: "professional",
    name: "Professional Services & Legal",
    tagline: "High-confidentiality document management, secure client portals, and cloud compliance.",
    icon: BriefcaseIcon,
    heroImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent)",
    overview: "Law firms, accounting practices, and management consultancies manage sensitive client data and legal contracts. DWPL delivers encrypted document management, secure remote working platforms, and ironclad cybersecurity.",
    stats: [
      { label: "Professional Firms Supported", value: "60+" },
      { label: "Legal Documents Encrypted", value: "5M+" },
      { label: "Cyber Incident Target", value: "Zero Breaches" },
      { label: "Helpdesk Resolution Speed", value: "< 15 Mins" },
    ],
    challenges: [
      { title: "Strict Client Confidentiality", desc: "Leaked legal or financial documents can cause severe reputational and legal penalties." },
      { title: "Secure Hybrid Remote Work", desc: "Partners and associates need safe access to client files from home or courtrooms." },
      { title: "Email Phishing & Wire Fraud", desc: "Law firms are targeted by wire fraud schemes intercepting client transaction instructions." },
    ],
    solutionsProvided: [
      { title: "Encrypted Document Management (DMS)", desc: "Controlled access storage with version tracking, digital signatures, and audit trails.", icon: DatabaseIcon },
      { title: "Zero-Trust Remote Access & VPN", desc: "Securing attorney laptops with MFA, device encryption, and secure cloud tunnels.", icon: ShieldIcon },
      { title: "Email Security & Anti-Spoofing", desc: "Advanced DMARC enforcement preventing fraudulent wire instruction spoofing.", icon: MonitorCheckIcon },
    ],
    compliance: ["Advocate Data Privacy Standards", "ISO 27001", "Data Protection Act"],
    caseStudy: {
      client: "Top Tier Corporate Law Firm",
      challenge: "Risk of confidential client M&A documents being leaked during remote work periods.",
      solution: "Implemented Microsoft Purview Information Protection, full disk BitLocker encryption, and strict DLP rules.",
      results: ["Zero unauthorized document sharing", "Secured 100% client data privacy compliance", "Seamless, safe remote work capability for 120 attorneys"],
    },
    faqs: [
      { q: "How do you prevent staff from downloading confidential files to personal USB drives?", a: "We configure Data Loss Prevention (DLP) policies that block unauthorized USB storage devices and external email forwards." },
      { q: "Can DWPL assist with digital signature implementation?", a: "Yes, we integrate legally compliant e-signature platforms connected to your document management system." },
    ],
  },
  {
    id: "sme",
    name: "Small & Medium Enterprises (SMEs)",
    tagline: "Enterprise-grade IT infrastructure and support scaled to growing business budgets.",
    icon: ZapIcon,
    heroImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=700&fit=crop&auto=format",
    overviewImg: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=600&fit=crop&auto=format",
    caseStudyImg: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=600&fit=crop&auto=format",
    color: "var(--accent-teal)",
    overview: "Growing businesses need reliable IT infrastructure without the expense of an internal IT department. DWPL offers complete SME technology packages covering cloud email, network setup, cybersecurity, and monthly IT support.",
    stats: [
      { label: "SME Businesses Managed", value: "150+" },
      { label: "Average IT Cost Savings", value: "40%" },
      { label: "User Tickets Resolved", value: "98.5%" },
      { label: "Setup Deployment Speed", value: "48 Hours" },
    ],
    challenges: [
      { title: "No Dedicated Internal IT Team", desc: "Business owners spend valuable time troubleshooting computer glitches instead of growing sales." },
      { title: "Unpredictable IT Repair Costs", desc: "Unexpected hardware crashes create sudden financial strain." },
      { title: "Cyber Attacks Targeting Small Business", desc: "Hackers target SMEs assuming they lack firewalls and backup protections." },
    ],
    solutionsProvided: [
      { title: "All-in-One SME IT Managed Package", desc: "Fixed monthly fee covering unlimited remote support, monitoring, and backups.", icon: MonitorCheckIcon },
      { title: "Turnkey Office Network & Wi-Fi", desc: "Fast firewall, wireless access points, and VoIP phones for new office spaces.", icon: NetworkIcon },
      { title: "Cloud Storage & Backup Package", desc: "Automated Google Workspace or Microsoft 365 cloud setup with daily backups.", icon: CloudIcon },
    ],
    compliance: ["Data Protection Act Basics", "Standard Business Security Practices"],
    caseStudy: {
      client: "Growing Architectural & Design Studio",
      challenge: "Frequent server crashes and lack of backup risked losing months of client project files.",
      solution: "Deployed a Synology NAS server paired with automated backblaze cloud backup and Managed IT support.",
      results: ["100% protection against file loss", "Fixed monthly IT budget with zero surprise repair bills", "Immediate helpdesk support for all employees"],
    },
    faqs: [
      { q: "Is there a minimum number of employees required for DWPL SME services?", a: "No, we support growing businesses ranging from 5 employees up to 100+ team members." },
      { q: "Are Managed IT Service contracts flexible?", a: "Yes, we offer straightforward monthly contracts that can scale up or down as your business hires staff." },
    ],
  },
];

export const getIndustryById = (id: string): IndustryDetail | undefined =>
  industriesData.find((i) => i.id === id);
