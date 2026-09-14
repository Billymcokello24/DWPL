import type { Page } from "../App";
import {
  CloudIcon, ShieldIcon, NetworkIcon, ServerIcon,
  ArrowRightIcon
} from "../components/Icons";
import {
  MasenoUniversityLogo,
  TomMboyaUniversityLogo,
  HomelandItoyaLogo,
  ElleGardensLogo,
  ProdigyConstructionsLogo,
  LalaCabsLogo,
  EllenSpearLogo,
  RockwellLogo,
  ClientLogoMarquee
} from "../components/ClientLogos";

interface Props {
  navigate: (to: Page, id?: string) => void;
}

const HERO_IMG = "https://images.unsplash.com/photo-1782338938316-1251155944c9?w=1600&h=700&fit=crop&auto=format";

// ── Key Clients & Regional Partners ─────────────────────────────────────────
const featuredClients = [
  {
    id: "tom-mboya-university",
    name: "Tom Mboya University",
    sector: "Higher Education & Research",
    location: "Homa Bay, Kenya",
    LogoComponent: TomMboyaUniversityLogo,
    color: "#059669",
    desc: "Tom Mboya University is a premier higher education institution in Homa Bay, Kenya, empowering future leaders through modern digital learning platforms, ICT research, and campus infrastructure.",
    stats: "Campus Network & E-Learning",
    tag: "Education",
  },
  {
    id: "maseno-university",
    name: "Maseno University",
    sector: "Higher Education & Academic Research",
    location: "Kisumu, Kenya",
    LogoComponent: MasenoUniversityLogo,
    color: "#0284C7",
    desc: "Maseno University is a leading public university in Kenya renowned for academic excellence, digital campus innovation, high-density wireless networks, and student management systems.",
    stats: "Digital Campus & Wi-Fi 6",
    tag: "Education",
  },
  {
    id: "homeland-itoya-events",
    name: "Homeland Itoya Events",
    sector: "Event Management & Supply",
    location: "Kenya",
    LogoComponent: HomelandItoyaLogo,
    color: "#D97706",
    desc: "Homeland Itoya Events is a premier, full-service event management and supply company based in Kenya, specializing in large-scale event logistics, technical production, and equipment supply.",
    stats: "Event Supply & Tech Ops",
    tag: "Event Management",
  },
  {
    id: "elle-gardens",
    name: "Elle Gardens",
    sector: "Hospitality & Events",
    location: "Kisumu, Kenya",
    LogoComponent: ElleGardensLogo,
    color: "#E11D48",
    desc: "Elle Gardens is a highly regarded establishment in Kisumu, providing serene event hosting, lifestyle venue services, and modern hospitality infrastructure.",
    stats: "Venue POS & Guest Wi-Fi",
    tag: "Hospitality & Events",
  },
  {
    id: "prodigy-constructions-limited",
    name: "Prodigy Constructions Limited",
    sector: "Infrastructure & Engineering",
    location: "Kenya",
    LogoComponent: ProdigyConstructionsLogo,
    color: "#0D9488",
    desc: "Prodigy Constructions Limited is a prominent firm specializing in technology-driven infrastructure services, structural engineering, civil projects, and smart site developments.",
    stats: "Smart Site Office IT",
    tag: "Infrastructure",
  },
  {
    id: "lala-cabs-limited",
    name: "Lala Cabs Limited",
    sector: "Mobility & Logistics",
    location: "Kenya",
    LogoComponent: LalaCabsLogo,
    color: "#9333EA",
    desc: "Lala Cabs Limited is a Kenya-based mobility company providing car rental services, airport transfers, corporate fleet logistics, and transport technology solutions.",
    stats: "Fleet IoT & Mobility Tech",
    tag: "Mobility & Logistics",
  },
  {
    id: "ellen-spear-group",
    name: "Ellen Spear Group",
    sector: "Security & Operations",
    location: "East Africa",
    LogoComponent: EllenSpearLogo,
    color: "#0284C7",
    desc: "Ellen Spear Group is a leading security and operational solutions firm delivering integrated physical protection, surveillance intelligence, and corporate security services.",
    stats: "Surveillance & Security IT",
    tag: "Security Operations",
  },
  {
    id: "rockwell",
    name: "Rockwell",
    sector: "Industrial Systems",
    location: "Global",
    LogoComponent: RockwellLogo,
    color: "#D97706",
    desc: "Rockwell is a global industrial solutions brand providing high-performance automation, engineering, and manufacturing technology systems.",
    stats: "Industrial Tech Systems",
    tag: "Industrial Systems",
  },
];

// ── Global Vendor Ecosystem ──────────────────────────────────────────────────
const vendorCategories = [
  {
    name: "Cloud Platforms",
    color: "var(--accent)",
    icon: CloudIcon,
    vendors: [
      { name: "Microsoft Azure", tier: "Gold Partner", desc: "Enterprise cloud infrastructure, Azure AI, and Microsoft 365 migrations." },
      { name: "Amazon Web Services", tier: "Select Partner", desc: "AWS scalable cloud compute, storage, and managed cloud environments." },
      { name: "Google Cloud Platform", tier: "Partner", desc: "Google Workspace, BigQuery analytics, and cloud infrastructure." },
    ],
  },
  {
    name: "Cybersecurity & Firewalls",
    color: "var(--accent-teal)",
    icon: ShieldIcon,
    vendors: [
      { name: "Fortinet", tier: "Authorized Partner", desc: "Next-gen firewalls, zero-trust network access, and unified threat management." },
      { name: "Sophos", tier: "Gold Partner", desc: "AI-driven endpoint protection, email security, and managed threat response." },
      { name: "CrowdStrike", tier: "Partner", desc: "Cloud-native Falcon endpoint detection and response (EDR/XDR)." },
    ],
  },
  {
    name: "Enterprise Networking",
    color: "var(--accent-secondary)",
    icon: NetworkIcon,
    vendors: [
      { name: "Cisco Systems", tier: "Select Partner", desc: "Core switching, BGP routing, Wi-Fi 6 wireless, and SD-WAN branch networks." },
      { name: "Ubiquiti Networks", tier: "Authorized Dealer", desc: "Enterprise UniFi Wi-Fi 6 access points and site surveillance." },
      { name: "MikroTik", tier: "Certified Engineer", desc: "High-throughput ISP routers, wireless links, and VPN gateways." },
    ],
  },
  {
    name: "Data Center & Servers",
    color: "var(--accent-amber)",
    icon: ServerIcon,
    vendors: [
      { name: "Dell Technologies", tier: "Enterprise Partner", desc: "PowerEdge rack servers, PowerStore SAN storage, and VxRail hyperconverged infrastructure." },
      { name: "HPE", tier: "Authorized Partner", desc: "ProLiant servers, Nimble storage arrays, and Aruba networking." },
      { name: "Lenovo Enterprise", tier: "Partner", desc: "ThinkSystem data center hardware, SAN storage, and edge servers." },
    ],
  },
];

export default function PartnersPage({ navigate }: Props) {
  return (
    <div className="pt-[66px] min-h-screen pb-20">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <img src={HERO_IMG} alt="Partners background" className="absolute inset-0 img-cover opacity-65" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl backdrop-blur-[2px] p-6 rounded-2xl" style={{ background: "rgba(var(--bg), 0.25)" }}>
            <div className="section-label mb-4">Partners & Esteemed Clients</div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[var(--text-main)] mb-6 leading-tight">
              Empowering Leading <span className="heading-highlight">Clients & Institutions</span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--text-muted)] font-medium">
              Digital World Prodigy Limited partners with premier universities, hospitality establishments, mobility firms, and global technology vendors across Kenya and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ── LOGO MARQUEE RIBBON ────────────────────────────────── */}
      <ClientLogoMarquee />

      {/* ── FEATURED CLIENT LOGOS SHOWCASE ───────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="section-label mb-3">Client Logo Portfolio</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-main)]">
            Featured Client & Partner Brands
          </h2>
          <p className="text-sm max-w-2xl mx-auto mt-2 text-[var(--text-muted)]">
            Providing reliable technology foundations, ICT infrastructure, and managed services for leading institutions in Kenya.
          </p>
        </div>

        {/* Client Logo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredClients.map((client) => {
            const Logo = client.LogoComponent;
            return (
              <div
                key={client.name}
                onClick={() => navigate("client-detail", client.id)}
                className="card p-7 flex flex-col justify-between group border transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
                style={{ borderColor: `color-mix(in srgb, ${client.color} 30%, transparent)` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Visual Brand Logo */}
                    <Logo className="h-14 w-auto" />

                    <span
                      className="text-[0.68rem] px-2.5 py-1 rounded-md font-mono-tech font-bold"
                      style={{ background: "var(--surface)", border: "1px solid var(--card-border)", color: client.color }}
                    >
                      {client.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[var(--text-main)] mb-1">
                    {client.name}
                  </h3>

                  <div className="text-xs font-mono-tech mb-3" style={{ color: "var(--text-dim)" }}>
                    📍 {client.location}
                  </div>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                    {client.desc}
                  </p>
                </div>

                <div
                  className="pt-4 border-t flex items-center justify-between text-xs font-mono-tech"
                  style={{ borderColor: "var(--border-subtle)", color: "var(--text-main)" }}
                >
                  <span className="truncate max-w-[200px]" style={{ color: client.color }}>
                    {client.stats}
                  </span>
                  <ArrowRightIcon size={14} color={client.color} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── GLOBAL VENDOR ECOSYSTEM ───────────────────────────── */}
      <section className="band py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label mb-3">Global Vendor Network</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[var(--text-main)]">
              Authorized Technology Vendors
            </h2>
            <p className="text-sm max-w-xl mx-auto mt-2 text-[var(--text-muted)]">
              We maintain official partnerships with international hardware and software leaders to ensure certified deployment and warranty coverage.
            </p>
          </div>

          <div className="space-y-10">
            {vendorCategories.map((cat) => {
              const CategoryIcon = cat.icon;
              return (
                <div key={cat.name}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `color-mix(in srgb, ${cat.color} 15%, transparent)`, border: `1px solid color-mix(in srgb, ${cat.color} 30%, transparent)` }}
                    >
                      <CategoryIcon size={20} color={cat.color} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[var(--text-main)]">{cat.name}</h3>
                    <div className="flex-1 h-px ml-2" style={{ background: `linear-gradient(90deg, color-mix(in srgb, ${cat.color} 30%, transparent), transparent)` }} />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {cat.vendors.map((v) => (
                      <div key={v.name} className="card p-6 border" style={{ borderColor: "var(--card-border)" }}>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-display font-bold text-base text-[var(--text-main)]">{v.name}</h4>
                          <span
                            className="text-[0.65rem] px-2 py-0.5 rounded font-mono-tech font-bold"
                            style={{ background: `color-mix(in srgb, ${cat.color} 12%, transparent)`, color: cat.color }}
                          >
                            {v.tier}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP CTA ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="card p-10 md:p-14 text-center border" style={{ borderColor: "var(--accent)" }}>
          <h2 className="font-display font-bold text-3xl text-[var(--text-main)] mb-3">
            Ready to Implement Technology With DWPL?
          </h2>
          <p className="text-sm max-w-xl mx-auto mb-8 text-[var(--text-muted)]">
            Whether you are an educational institution, hospitality establishment, mobility provider, or enterprise, our engineers are ready to build your solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate("contact")} className="btn-primary">
              Schedule Consultation <ArrowRightIcon size={16} />
            </button>
            <button onClick={() => navigate("projects")} className="btn-outline">
              View Completed Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
