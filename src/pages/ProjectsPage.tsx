import { useState } from "react";
import type { Page } from "../App";

interface Props { navigate: (to: Page, id?: string) => void; }

const IMG = {
  hero:    "https://images.unsplash.com/photo-1785682231847-93265d8e633d?w=1400&h=600&fit=crop&auto=format",
  bank:    "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=700&h=400&fit=crop&auto=format",
  cyber:   "https://images.unsplash.com/photo-1762279389083-abf71f22d338?w=700&h=400&fit=crop&auto=format",
  govt:    "https://images.unsplash.com/photo-1573164574511-73c773193279?w=700&h=400&fit=crop&auto=format",
  hospital:"https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=700&h=400&fit=crop&auto=format",
  campus:  "https://images.unsplash.com/photo-1783149622498-89e87f7c3e04?w=700&h=400&fit=crop&auto=format",
  cloud:   "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=700&h=400&fit=crop&auto=format",
};

const caseStudies = [
  {
    id: 1, title: "Enterprise Network Transformation", industry: "Corporate", color: "var(--accent)", img: IMG.bank,
    tags: ["Networking", "SD-WAN", "Infrastructure"],
    challenge: "A large commercial organisation operated with a fragmented network across 12 offices, causing regular outages and poor inter-office connectivity.",
    solution: "DWPL designed and deployed a centralised SD-WAN architecture connecting all 12 offices with redundant links, centralised monitoring and unified security policies.",
    result: "99.8% network uptime, 60% reduction in connectivity incidents, full visibility across all sites from a single dashboard.",
    metrics: [{ val: "99.8%", label: "Uptime" }, { val: "60%", label: "Fewer Incidents" }, { val: "12", label: "Sites Connected" }],
  },
  {
    id: 2, title: "Cybersecurity Modernisation", industry: "Financial Services", color: "var(--accent-teal)", img: IMG.cyber,
    tags: ["Cybersecurity", "Financial Services", "Compliance"],
    challenge: "A regional bank had grown its technology environment rapidly without a comprehensive security architecture, creating significant exposure.",
    solution: "DWPL conducted a full security assessment, designed a layered security architecture and implemented endpoint protection, email security, IAM and a SIEM platform.",
    result: "Comprehensive security visibility achieved within 90 days. Zero major incidents post-implementation. Full compliance with central bank requirements.",
    metrics: [{ val: "90", label: "Days to deploy" }, { val: "0", label: "Post-impl incidents" }, { val: "100%", label: "Compliance" }],
  },
  {
    id: 3, title: "Government Digital Services Platform", industry: "Government", color: "var(--accent-secondary)", img: IMG.govt,
    tags: ["Digital Transformation", "Government", "Software"],
    challenge: "A national government agency needed to digitise citizen-facing services, reducing manual paperwork and improving service delivery speed.",
    solution: "DWPL developed a citizen services portal, integrated with back-office systems, deployed on secure cloud infrastructure with full identity verification.",
    result: "Service delivery time reduced from 14 days to 2 days. 85% of applications now processed digitally.",
    metrics: [{ val: "14→2", label: "Days processing" }, { val: "85%", label: "Digital uptake" }, { val: "10k+", label: "Citizens served" }],
  },
  {
    id: 4, title: "Hospital Information System", industry: "Healthcare", color: "var(--accent-amber)", img: IMG.hospital,
    tags: ["Healthcare", "Enterprise Systems", "Integration"],
    challenge: "A 300-bed hospital was managing patient records on paper, leading to errors, delays and inability to access historical patient data efficiently.",
    solution: "DWPL implemented a comprehensive HIS covering patient registration, clinical records, pharmacy, laboratory, billing and reporting.",
    result: "Full digitisation of patient records. 40% improvement in administrative efficiency. Billing errors reduced by 70%.",
    metrics: [{ val: "40%", label: "Efficiency gain" }, { val: "70%", label: "Fewer errors" }, { val: "300", label: "Bed facility" }],
  },
  {
    id: 5, title: "University Campus Network & Wi-Fi", industry: "Education", color: "var(--accent-rose)", img: IMG.campus,
    tags: ["Networking", "Wi-Fi", "Education"],
    challenge: "A rapidly growing university needed reliable campus-wide network and Wi-Fi for 8,000 students and 600 staff across a 15-building campus.",
    solution: "DWPL designed and deployed a high-density campus network with Wi-Fi 6, structured cabling, core switching and centralised management.",
    result: "Seamless connectivity for 8,600 users. 99.9% Wi-Fi uptime. Full network visibility and authenticated guest Wi-Fi.",
    metrics: [{ val: "8,600", label: "Users served" }, { val: "99.9%", label: "Wi-Fi uptime" }, { val: "15", label: "Buildings covered" }],
  },
  {
    id: 6, title: "Cloud Migration & Managed Services", industry: "NGO", color: "var(--accent)", img: IMG.cloud,
    tags: ["Cloud", "Microsoft 365", "Managed Services"],
    challenge: "An international development organisation needed to migrate ageing on-premise infrastructure to cloud while reducing IT burden on a small internal team.",
    solution: "DWPL designed and executed a phased migration to Microsoft Azure, implemented Microsoft 365 and took over managed IT services post-migration.",
    result: "100% cloud-based IT environment. 35% reduction in IT costs. Internal team freed to focus on programmes.",
    metrics: [{ val: "100%", label: "Cloud-based" }, { val: "35%", label: "Cost reduction" }, { val: "3 months", label: "Migration time" }],
  },
];

const allTags = ["All", "Networking", "Cybersecurity", "Cloud", "Infrastructure", "Software", "Enterprise Systems", "Digital Transformation", "Managed Services"];

export default function ProjectsPage({ navigate }: Props) {
  const [activeTag, setActiveTag] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeTag === "All" ? caseStudies : caseStudies.filter((c) => c.tags.some((t) => t === activeTag || t.includes(activeTag)));

  return (
    <div className="pt-[66px]">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[52vh] flex items-end">
        <img src={IMG.hero} alt="Projects" className="absolute inset-0 img-cover" style={{ opacity: 0.60 }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="section-label anim-fade-up mb-5">Projects & Case Studies</div>
              <h1 className="font-display font-black text-5xl md:text-6xl mb-4 leading-none anim-fade-up delay-200" style={{ color: 'var(--text-main)' }}>
                Technology Delivered.<br />
                <span className="heading-highlight">Results Demonstrated.</span>
              </h1>
              <p className="text-lg leading-relaxed anim-fade-up delay-300" style={{ color: "var(--text-muted)" }}>
                Real projects. Real challenges. Real outcomes across East Africa.
              </p>
            </div>
            <div className="flex gap-6 justify-start lg:justify-end anim-fade-up delay-400">
              {[
                { num: "30+",  label: "Projects" },
                { num: "12+",  label: "Industries" },
                { num: "20+",  label: "Clients" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-black text-3xl heading-highlight">{s.num}</div>
                  <div className="text-xs" style={{ color: "var(--text-dim)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter ────────────────────────────────────────────── */}
      <div className="sticky z-30" style={{ top: "66px", background: "var(--nav-bg)", borderBottom: "1px solid var(--border-subtle)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {allTags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)}
              className="chip flex-shrink-0 text-xs"
              style={activeTag === tag ? { borderColor: "var(--accent)", color: "var(--accent)", background: "color-mix(in srgb, var(--accent) 8%, transparent)" } : {}}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── Case Studies ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14 space-y-6">
        {filtered.map((cs) => (
          <div key={cs.id} className="card overflow-hidden group">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image */}
              <div className="md:col-span-2 relative h-48 sm:h-56 md:h-auto overflow-hidden" style={{ minHeight: "180px" }}>
                <img src={cs.img} alt={cs.title} className="img-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-[var(--card-bg)] opacity-80" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-[0.65rem] sm:text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "var(--card-bg)", color: cs.color, border: "1px solid var(--border-subtle)" }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="chip text-xs mb-3 inline-block">{cs.industry}</span>
                    <h3 className="font-display font-bold text-2xl" style={{ color: 'var(--text-main)' }}>{cs.title}</h3>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex gap-6 mb-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display font-black text-xl" style={{ color: cs.color }}>{m.val}</div>
                      <div className="text-xs" style={{ color: "var(--text-dim)" }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: "Challenge", text: cs.challenge, color: "var(--accent-amber)" },
                    { label: "Solution",  text: cs.solution,  color: cs.color  },
                    { label: "Result",    text: cs.result,    color: "var(--accent-teal)" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="font-mono-tech text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: item.color, fontSize: "0.6rem" }}>{item.label}</div>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="band">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display font-bold text-3xl mb-4" style={{ color: 'var(--text-main)' }}>
            Want to be our next <span className="heading-highlight">success story?</span>
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--text-dim)" }}>
            Speak with our team about your technology challenge and let's design the solution together.
          </p>
          <button onClick={() => navigate("contact")} className="btn-primary">Start Your Project →</button>
        </div>
      </section>
    </div>
  );
}
