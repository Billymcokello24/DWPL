import {
  MasenoUniversityLogo,
  TomMboyaUniversityLogo,
  HomelandItoyaLogo,
  ElleGardensLogo,
  ProdigyConstructionsLogo,
  LalaCabsLogo,
  EllenSpearLogo,
  RockwellLogo
} from "../components/ClientLogos";

export interface ClientData {
  id: string;
  name: string;
  sector: string;
  location: string;
  tag: string;
  color: string;
  LogoComponent: React.ComponentType<{ className?: string }>;
  heroImg: string;
  headline: string;
  desc: string;
  fullStory: string;
  solutionsDeployed: string[];
  keyResults: { metric: string; label: string }[];
  testimonial: {
    quote: string;
    author: string;
  };
}

export const clientsData: ClientData[] = [
  {
    id: "tom-mboya-university",
    name: "Tom Mboya University",
    sector: "Higher Education & Academic Research",
    location: "Homa Bay, Kenya",
    tag: "Education",
    color: "#059669",
    LogoComponent: TomMboyaUniversityLogo,
    heroImg: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=700&fit=crop&auto=format",
    headline: "Empowering Higher Education Through Next-Generation Campus Fiber & Wireless Infrastructure",
    desc: "Tom Mboya University is a premier public higher education institution located in Homa Bay, Kenya, empowering thousands of students through modern digital learning and academic research.",
    fullStory: "To meet the growing demands of modern higher education, Tom Mboya University partnered with Digital World Prodigy Limited (DWPL) to build a high-capacity, resilient digital campus ecosystem. DWPL engineered a campus-wide optical fiber backbone connecting all faculties, administrative offices, and hostels. We deployed high-density Wi-Fi 6 wireless access points, implemented next-generation Fortinet firewall security, and established a 24/7 Network Operations Center (NOC) monitoring setup.",
    solutionsDeployed: [
      "High-Density Campus Wi-Fi 6 Mesh Network",
      "10Gbps Optical Fiber Ring Backbone",
      "Next-Gen Fortinet Firewall & Zero-Trust Security",
      "Academic E-Learning & Student Portal Infrastructure",
      "IP High-Definition CCTV & Campus Access Control"
    ],
    keyResults: [
      { metric: "100%", label: "Campus Wi-Fi Coverage for 8,000+ Students" },
      { metric: "99.9%", label: "Network Uptime During Exams & Registrations" },
      { metric: "10Gbps", label: "Core Fiber Optic Backbone Bandwidth" }
    ],
    testimonial: {
      quote: "Digital World Prodigy Limited has transformed our campus network into a fast, reliable, and secure digital ecosystem that powers our modern e-learning environment.",
      author: "Directorate of ICT, Tom Mboya University"
    }
  },
  {
    id: "maseno-university",
    name: "Maseno University",
    sector: "Higher Education & Academic Research",
    location: "Kisumu, Kenya",
    tag: "Education",
    color: "#0284C7",
    LogoComponent: MasenoUniversityLogo,
    heroImg: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=700&fit=crop&auto=format",
    headline: "Enterprise Digital Campus Infrastructure & High-Throughput Wireless Integration",
    desc: "Maseno University is a leading public university in Kenya renowned for academic excellence, digital campus innovation, high-density wireless networks, and student management systems.",
    fullStory: "As one of Kenya's pioneering higher education institutions, Maseno University required a modern IT architecture capable of supporting over 20,000 students and staff across multiple campus sites. DWPL delivered a comprehensive enterprise infrastructure upgrade featuring Dell PowerEdge rack servers, high-density wireless AP deployment across lecture halls and auditoriums, centralized threat prevention, and campus-wide IP surveillance.",
    solutionsDeployed: [
      "Enterprise High-Density Wi-Fi 6 Architecture",
      "Dell PowerEdge Virtualized Server Cluster",
      "Fortinet Unified Threat Management & SD-WAN",
      "VoIP Telecom & Multi-Campus Interconnect",
      "24/7 Managed IT Support & NOC Services"
    ],
    keyResults: [
      { metric: "20,000+", label: "Concurrent Student & Staff Connections Supported" },
      { metric: "0", label: "Security Breaches Post-Fortinet Deployment" },
      { metric: "3x", label: "Faster Access to Student Management Services" }
    ],
    testimonial: {
      quote: "Digital World Prodigy Limited brought exceptional technical expertise and dedication in upgrading our university infrastructure to modern enterprise standards.",
      author: "Head of ICT Infrastructure, Maseno University"
    }
  },
  {
    id: "homeland-itoya-events",
    name: "Homeland Itoya Events",
    sector: "Event Management & Technical Supply",
    location: "Kenya",
    tag: "Event Management",
    color: "#D97706",
    LogoComponent: HomelandItoyaLogo,
    heroImg: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=700&fit=crop&auto=format",
    headline: "Large-Scale Event Operations Technology, POS Integration & Mobile Power Systems",
    desc: "Homeland Itoya Events is a premier, full-service event management and supply company based in Kenya, specializing in large-scale event logistics, technical production, and equipment supply.",
    fullStory: "Hosting major national events and corporate gatherings requires instant, reliable connectivity and rapid transaction processing in temporary outdoor venues. DWPL equips Homeland Itoya Events with mobile high-density outdoor Wi-Fi mesh systems, cloud-synced POS terminals for food/beverage and merchandise vendor stalls, temporary surveillance control hubs, and clean uninterruptible power units.",
    solutionsDeployed: [
      "Rapid Deployable Outdoor Wi-Fi Mesh Towers",
      "Cloud-Synced Mobile POS & Ticketing Terminals",
      "Temporary Event IP Surveillance & Monitoring",
      "Uninterruptible Power Supply (UPS) & Clean Power Units",
      "Live Technical Support & Event On-Site Engineers"
    ],
    keyResults: [
      { metric: "5,000+", label: "Simultaneous Guest Wi-Fi Users per Event" },
      { metric: "100%", label: "Cashless Ticketing & Instant Revenue Sync" },
      { metric: "Zero", label: "Unplanned Technical Downtime in Live Shows" }
    ],
    testimonial: {
      quote: "Whenever we host major national events, DWPL ensures our IT, POS, and event connectivity run flawlessly from start to finish.",
      author: "Executive Operations Team, Homeland Itoya Events"
    }
  },
  {
    id: "elle-gardens",
    name: "Elle Gardens",
    sector: "Hospitality & Event Venue",
    location: "Kisumu, Kenya",
    tag: "Hospitality & Events",
    color: "#E11D48",
    LogoComponent: ElleGardensLogo,
    heroImg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=700&fit=crop&auto=format",
    headline: "Serene Hospitality Venue Technology, Guest Wi-Fi & Multi-Station POS Management",
    desc: "Elle Gardens is a highly regarded establishment in Kisumu, providing serene event hosting, lifestyle venue services, and modern hospitality infrastructure.",
    fullStory: "To deliver a luxury hospitality experience for guests attending private celebrations, corporate retreats, and dining events, Elle Gardens engaged DWPL to modernize its IT footprint. DWPL deployed property-wide guest Wi-Fi coverage with customizable captive portals, multi-station kitchen and bar POS order billing systems, ambient acoustic management, and comprehensive venue surveillance.",
    solutionsDeployed: [
      "Property-Wide Guest Wi-Fi with Captive Portal",
      "Multi-Station Hospitality Cloud POS System",
      "Kitchen Display System (KDS) & Order Automation",
      "HD Security Cameras & Perimeter Night Vision",
      "Smart Energy Management & Ambient Controls"
    ],
    keyResults: [
      { metric: "3x", label: "Faster Order Processing & Table Billing Speed" },
      { metric: "100%", label: "Garden & Dining Area High-Speed Wi-Fi Coverage" },
      { metric: "Real-time", label: "Inventory Tracking across Kitchen & Bar Outlets" }
    ],
    testimonial: {
      quote: "Our guests love the fast Wi-Fi and seamless billing experience provided by Digital World Prodigy. It has significantly elevated our hospitality standards.",
      author: "General Manager, Elle Gardens"
    }
  },
  {
    id: "prodigy-constructions-limited",
    name: "Prodigy Constructions Limited",
    sector: "Infrastructure & Structural Engineering",
    location: "Kenya",
    tag: "Infrastructure",
    color: "#0D9488",
    LogoComponent: ProdigyConstructionsLogo,
    heroImg: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=1600&h=700&fit=crop&auto=format",
    headline: "Smart Construction Site Networking, IoT Site Surveillance & Remote Office SD-WAN",
    desc: "Prodigy Constructions Limited is a prominent firm specializing in technology-driven infrastructure services, structural engineering, civil projects, and smart site developments.",
    fullStory: "Operating active construction yards and remote engineering sites across Kenya requires robust communications and real-time site oversight. DWPL architected site-to-headquarters SD-WAN VPN connections, solar-powered ruggedized IP surveillance cameras for site security and equipment monitoring, temporary site office Wi-Fi, and cloud ERP access for site project managers.",
    solutionsDeployed: [
      "Site-to-HQ Encrypted SD-WAN & Cellular VPN",
      "Solar-Powered Outdoor Rugged IP Surveillance",
      "Ruggedized Construction Site Office Wi-Fi Kits",
      "IoT Asset & Heavy Machinery GPS Telematics",
      "Centralized Project Management Cloud Access"
    ],
    keyResults: [
      { metric: "100%", label: "Real-Time Site Monitoring & Asset Protection" },
      { metric: "Instant", label: "HQ Access to CAD Drawings & Structural Reports" },
      { metric: "99.8%", label: "Connectivity Uptime in Remote Worksite Locations" }
    ],
    testimonial: {
      quote: "DWPL keeps our remote construction sites connected to headquarters seamlessly, helping us deliver complex engineering projects on time.",
      author: "Operations Director, Prodigy Constructions Limited"
    }
  },
  {
    id: "lala-cabs-limited",
    name: "Lala Cabs Limited",
    sector: "Mobility & Transport Logistics",
    location: "Kenya",
    tag: "Mobility & Logistics",
    color: "#9333EA",
    LogoComponent: LalaCabsLogo,
    heroImg: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=700&fit=crop&auto=format",
    headline: "Fleet Telematics Operations, Real-Time Dispatch Tech & Mobile Booking Infrastructure",
    desc: "Lala Cabs Limited is a Kenya-based mobility company providing car rental services, airport transfers, corporate fleet logistics, and transport technology solutions.",
    fullStory: "To deliver reliable mobility services to corporate clients and travelers in Kenya, Lala Cabs required a unified fleet technology platform. DWPL implemented vehicle telematics for real-time GPS tracking and fuel diagnostics, integrated a cloud dispatch booking engine, deployed driver mobile app connectivity, and automated passenger billing and corporate invoicing.",
    solutionsDeployed: [
      "IoT Fleet Telematics & Engine Diagnostics",
      "Cloud Dispatch & Passenger Booking Engine",
      "Driver Mobile App & GPS Navigation Integration",
      "Automated Corporate Invoicing & Mobile Payments",
      "24/7 Vehicle Security & Remote Immobilization"
    ],
    keyResults: [
      { metric: "100%", label: "Fleet Real-Time GPS & Diagnostics Visibility" },
      { metric: "25%", label: "Reduction in Fleet Operating & Fuel Costs" },
      { metric: "Automated", label: "Corporate Billing & Passenger Receipts" }
    ],
    testimonial: {
      quote: "DWPL transformed our fleet logistics into a high-tech, efficient operation that our corporate and individual clients rely on every day.",
      author: "Managing Director, Lala Cabs Limited"
    }
  },
  {
    id: "ellen-spear-group",
    name: "Ellen Spear Group",
    sector: "Security & Operational Intelligence",
    location: "East Africa",
    tag: "Security Operations",
    color: "#0284C7",
    LogoComponent: EllenSpearLogo,
    heroImg: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&h=700&fit=crop&auto=format",
    headline: "High-Security Command Control Center, Video Analytics & Access Control Systems",
    desc: "Ellen Spear Group is a leading security and operational solutions firm delivering integrated physical protection, surveillance intelligence, and corporate security services.",
    fullStory: "As a premier security services provider, Ellen Spear Group needed a state-of-the-art Command Control Center to monitor client facilities and coordinate response teams. DWPL engineered a centralized video wall monitoring setup, deployed AI facial and license plate recognition video analytics, implemented biometric access control systems, and secured client incident databases.",
    solutionsDeployed: [
      "Centralized Command Control Center Video Wall",
      "AI Video Analytics (License Plate & Facial Recognition)",
      "Enterprise Biometric & Smartcard Access Control",
      "Encrypted Incident Reporting & Dispatch Database",
      "Thermal Imaging & Perimeter Protection Cameras"
    ],
    keyResults: [
      { metric: "< 1 Sec", label: "AI Threat Recognition & Instant Incident Alerting" },
      { metric: "100%", label: "Centralized Monitoring Across Corporate Locations" },
      { metric: "Encrypted", label: "Data Logging for High-Security Audits" }
    ],
    testimonial: {
      quote: "Digital World Prodigy Limited engineered a command control center that sets the benchmark for security technology in the region.",
      author: "Chief Security Officer, Ellen Spear Group"
    }
  },
  {
    id: "rockwell",
    name: "Rockwell",
    sector: "Industrial Automation & Systems",
    location: "Global / Kenya Operations",
    tag: "Industrial Systems",
    color: "#D97706",
    LogoComponent: RockwellLogo,
    heroImg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=700&fit=crop&auto=format",
    headline: "Industrial Automation Networking, PLC Control Integration & OT Cybersecurity",
    desc: "Rockwell is a global industrial solutions brand providing high-performance automation, engineering, and manufacturing technology systems.",
    fullStory: "Modern manufacturing plants require reliable integration between Information Technology (IT) and Operational Technology (OT). DWPL collaborates with Rockwell in Kenya as a systems integration partner, deploying industrial Ethernet switching, redundant fiber rings for PLC controllers, OT firewall defense, SCADA real-time telemetry, and predictive maintenance sensors.",
    solutionsDeployed: [
      "Industrial Ethernet Switching & Fiber Ring Topology",
      "Operational Technology (OT) Firewall Defense",
      "SCADA & Programmable Logic Controller (PLC) Bridges",
      "Predictive Equipment Maintenance IoT Sensors",
      "Plant Real-Time Telemetry & Historian Database"
    ],
    keyResults: [
      { metric: "< 1ms", label: "Industrial Network Latency for PLC Sync" },
      { metric: "Hardened", label: "Protection Against OT & Industrial Cyber Threats" },
      { metric: "Maximized", label: "Manufacturing Plant Production Line Efficiency" }
    ],
    testimonial: {
      quote: "DWPL's deep expertise in bridging enterprise IT with industrial OT networks makes them an invaluable partner for industrial automation.",
      author: "Industrial Systems Lead, Rockwell Partner Network"
    }
  }
];

export function getClientById(id: string): ClientData | undefined {
  return clientsData.find((c) => c.id === id);
}
