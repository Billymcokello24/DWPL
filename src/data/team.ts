export interface TeamProject {
  name: string;
  url: string;
  description: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  color: string;
  tagline: string;
  bio: string;
  responsibility: string;
  educationCertifications: string[];
  skills?: string[];
  personalWebsite?: string;
  keyAchievements: string[];
  quote: string;
  projects?: TeamProject[];
}

export const teamData: TeamMember[] = [
  {
    id: "david-wesonga",
    name: "Engineer David Wesonga",
    role: "Founder & Managing Director",
    image: "/team/David.jpeg",
    color: "var(--accent)",
    tagline: "Visionary Engineering Leader & Enterprise IT Strategist",
    bio: "Engineer David Wesonga is the Founder and Managing Director of Digital World Prodigy Limited. With over a decade of hands-on experience in telecommunications, infrastructure engineering, and enterprise ICT delivery across East Africa, Eng. Wesonga has guided DWPL from a regional startup into a trusted partner for public universities, government institutions, hospitality groups, and logistics enterprises.",
    responsibility: "Directs overall corporate strategy, strategic vendor partnerships (Microsoft, Cisco, Fortinet, Dell), major infrastructure projects, and executive client relationship management across Kenya.",
    educationCertifications: [
      "B.Sc. Electrical & Information Engineering",
      "Registered Professional Engineer (EBK / IEK)",
      "Certified Enterprise Systems Architect",
      "Project Management Professional (PMP)"
    ],
    keyAchievements: [
      "Spearheaded 30+ major IT & campus infrastructure deployments across Kenya",
      "Established long-term technology partnerships with Maseno University & Tom Mboya University",
      "Pioneered DWPL's expansion into AI, Cloud Infrastructure, and Cyber Defense"
    ],
    quote: "Technology is not just about equipment — it is the foundation upon which modern African institutions and enterprises build their future."
  },
  {
    id: "milton-mata",
    name: "Milton Mata",
    role: "Senior Manager",
    image: "/team/milton.jpg",
    color: "var(--accent-secondary)",
    tagline: "Enterprise Operations & Strategic Delivery Executive",
    bio: "Milton Mata serves as Senior Manager at Digital World Prodigy Limited, leading enterprise operations, project governance, and organizational execution. Milton brings extensive expertise in managing multi-disciplinary engineering teams, service level agreements (SLAs), client accounts, and operational compliance.",
    responsibility: "Directs day-to-day project operations, service delivery teams, customer success management, vendor supply chains, and administrative governance.",
    educationCertifications: [
      "B.A. Business Administration & Operations Management",
      "ITIL v4 Managing Professional Certified",
      "Agile Project Leadership Certification",
      "Client Relationship Management Specialist"
    ],
    keyAchievements: [
      "Established DWPL's 24/7 Managed IT Services Operations & SLA Framework",
      "Maintained 99.8% client satisfaction rate across enterprise accounts",
      "Optimized cross-functional project delivery timelines by 40%"
    ],
    quote: "Operational excellence and relentless commitment to client success are what transform technical solutions into lasting business value."
  },
  {
    id: "billy-ochieng",
    name: "Eng. Billy Ochieng",
    role: "Senior Software Engineer",
    image: "/team/bill.png",
    color: "var(--accent-teal)",
    tagline: "Full-Stack Systems Architect, AI Systems Developer & University Digital Platforms Lead",
    bio: "Eng. Billy Ochieng is the Senior Software Engineer at Digital World Prodigy Limited — a prolific software developer, system administrator, and innovation advocate based in Kenya. Specializing in AI systems, DevOps, and enterprise software engineering, Billy architects resilient, high-throughput web systems that power higher education, research centers, and commercial SaaS platforms across East Africa. From engineering Tom Mboya University's entire web ecosystem to building custom contractor procurement and e-learning portals, his work drives digital transformation and serves tens of thousands of active users daily.",
    responsibility: "Leads custom software architecture, institutional web platforms, e-learning system engineering, AI integration, DevOps deployment pipelines, API design, database architecture, and full-stack engineering across DWPL's client portfolio.",
    personalWebsite: "https://billyochieng.vercel.app/",
    educationCertifications: [
      "B.Sc. Computer Science & Software Engineering",
      "Certified Information Systems Security Professional (CISSP)",
      "AWS Certified Solutions Architect & Developer",
      "Full-Stack Web & Mobile Systems Specialist",
      "DevOps Engineering & Cloud Infrastructure Certification",
      "AI Systems & Machine Learning Integration Specialist"
    ],
    skills: [
      "Full-Stack Development (Vue.js, React, Node.js, Python/Django, Laravel)",
      "AI & Machine Learning Integrations (LLMs, Automation, Intelligent Systems)",
      "DevOps & Infrastructure (Docker, Kubernetes, AWS, CI/CD, NGINX)",
      "System Administration & Linux Server Hardening",
      "Database Architecture & Optimization (PostgreSQL, MySQL, Redis)",
      "API & Microservices Architecture (REST, GraphQL)"
    ],
    keyAchievements: [
      "Developed the entire Tom Mboya University (TMU) web ecosystem — main website (tmu.ac.ke), library portal (library.tmu.ac.ke), e-learning platform (elearning.tmu.ac.ke), ICLD portal (icld.tmu.ac.ke), and SERC research centre (serc.tmu.ac.ke)",
      "Built the Mfundi Platform (mfundi.digiprojects.co.ke) — a Kenya-focused contractor and project management SaaS",
      "Engineered the We Contractors procurement and tendering platform for Kenya's construction sector",
      "Delivered Ellen Spear Group Limited corporate web platform (ellenspeargroup.com) for an international professional services firm",
      "Built Verte Concepts' commercial website (verteconcepts.co.ke) serving Kenya's creative and events industry",
      "Architected cloud dispatch & telematics engine for Lala Cabs Limited"
    ],
    quote: "Great software is invisible — it just works. My goal is to build platforms so reliable and intuitive that the people using them never have to think about the technology underneath.",
    projects: [
      {
        name: "Tom Mboya University — Main Website",
        url: "https://tmu.ac.ke",
        description: "Official institutional website for Tom Mboya University, serving thousands of students, staff, and applicants with programme information, news, admissions, and events.",
        category: "Higher Education"
      },
      {
        name: "TMU Library Portal",
        url: "https://library.tmu.ac.ke",
        description: "University library management and catalogue portal enabling students and researchers to access resources, manage borrowing, and search the institutional repository.",
        category: "Higher Education"
      },
      {
        name: "TMU E-Learning Platform",
        url: "https://elearning.tmu.ac.ke",
        description: "Full-featured learning management system (LMS) for Tom Mboya University — supporting online course delivery, student assessments, and lecturer content management.",
        category: "E-Learning"
      },
      {
        name: "ICLD Portal — TMU",
        url: "https://icld.tmu.ac.ke",
        description: "International Centre for Livelihoods and Development (ICLD) portal hosted at Tom Mboya University, managing research programmes, partnerships, and publications.",
        category: "Research & Development"
      },
      {
        name: "SERC Portal — TMU",
        url: "https://serc.tmu.ac.ke",
        description: "Sustainable Energy Research Centre (SERC) web platform for TMU's renewable energy research division, showcasing projects, findings, and academic collaborations.",
        category: "Research & Development"
      },
      {
        name: "Mfundi Platform",
        url: "https://mfundi.digiprojects.co.ke",
        description: "Kenya-focused SaaS platform connecting contractors, artisans, and clients — enabling project tendering, contractor discovery, and payments for Kenya's construction sector.",
        category: "SaaS / Construction Tech"
      },
      {
        name: "We Contractors Platform",
        url: "#",
        description: "Digital procurement and tendering platform purpose-built for Kenya's contracting and construction industry — streamlining bid management, project tracking, and compliance.",
        category: "Construction Tech"
      },
      {
        name: "Ellen Spear Group Limited",
        url: "https://ellenspeargroup.com",
        description: "Corporate website for Ellen Spear Group Limited, an international professional services and consultancy firm — built for brand authority and lead generation.",
        category: "Professional Services"
      },
      {
        name: "Verte Concepts",
        url: "https://verteconcepts.co.ke",
        description: "Commercial website for Verte Concepts, a Kenyan creative and events company — designed for client acquisition, portfolio showcase, and service promotion.",
        category: "Creative & Events"
      }
    ]
  }
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamData.find((m) => m.id === id);
}
