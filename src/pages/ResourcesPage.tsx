import { useState } from "react";
import type { Page } from "../App";
import { FileTextIcon, LayersIcon, ShieldIcon, CloudIcon, MonitorCheckIcon, SparklesIcon } from "../components/Icons";

interface Props { navigate: (to: Page, id?: string) => void; }

const IMG = {
  hero: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&h=700&fit=crop&auto=format",
  ai: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=450&fit=crop&auto=format",
  cyber: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?w=800&h=450&fit=crop&auto=format",
  cloud: "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=800&h=450&fit=crop&auto=format",
  network: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=800&h=450&fit=crop&auto=format",
  managed: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=800&h=450&fit=crop&auto=format",
  data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&auto=format",
};

const articles = [
  {
    id: 1,
    title: "The Future of AI-Driven Business in Africa",
    category: "AI",
    date: "September 2026",
    excerpt: "Artificial intelligence is no longer a technology of the future — it is a business imperative of today. We explore how African organizations can adopt AI practically and profitably.",
    readTime: "8 min read",
    featured: true,
    color: "var(--accent)",
    img: IMG.ai,
  },
  {
    id: 2,
    title: "Cybersecurity Maturity: A Practical Framework for East African Organizations",
    category: "Cybersecurity",
    date: "August 2026",
    excerpt: "Most organizations in the region are not asking the right cybersecurity questions. This guide gives IT leaders a practical framework for assessing and improving security maturity.",
    readTime: "12 min read",
    featured: false,
    color: "var(--accent-teal)",
    img: IMG.cyber,
  },
  {
    id: 3,
    title: "Cloud Migration: What Your Organization Needs to Know Before You Start",
    category: "Cloud",
    date: "July 2026",
    excerpt: "Cloud migration is not simply moving servers to the internet. Successful migrations require careful planning, the right architecture and a clear understanding of total cost.",
    readTime: "10 min read",
    featured: false,
    color: "var(--accent-secondary)",
    img: IMG.cloud,
  },
  {
    id: 4,
    title: "Building a Resilient Network: The Case for SD-WAN in Multi-Site Organizations",
    category: "Networking",
    date: "July 2026",
    excerpt: "Traditional WAN architectures are no longer adequate for modern distributed organizations. SD-WAN provides the agility, visibility and resilience today's networks require.",
    readTime: "7 min read",
    featured: false,
    color: "var(--accent-amber)",
    img: IMG.network,
  },
  {
    id: 5,
    title: "Managed IT Services vs. In-House IT: Making the Right Decision for Your Organization",
    category: "Managed Services",
    date: "June 2026",
    excerpt: "The debate between managing IT internally and outsourcing to a managed services provider is nuanced. We break down the key considerations for different types of organizations.",
    readTime: "9 min read",
    featured: false,
    color: "var(--accent-rose)",
    img: IMG.managed,
  },
  {
    id: 6,
    title: "Data Governance in Practice: Turning Data into a Strategic Asset",
    category: "Data",
    date: "May 2026",
    excerpt: "Data governance is not a one-time project. It is an ongoing programme that gives organizations control, visibility and confidence in their most valuable asset.",
    readTime: "11 min read",
    featured: false,
    color: "var(--accent)",
    img: IMG.data,
  },
];

const downloads = [
  { title: "DWPL Company Profile", type: "PDF", size: "2.4 MB", icon: FileTextIcon },
  { title: "Technology Solutions Catalogue", type: "PDF", size: "5.1 MB", icon: LayersIcon },
  { title: "Cybersecurity Services Brochure", type: "PDF", size: "1.8 MB", icon: ShieldIcon },
  { title: "Cloud Computing Guide", type: "PDF", size: "3.2 MB", icon: CloudIcon },
  { title: "Managed IT Services Overview", type: "PDF", size: "1.4 MB", icon: MonitorCheckIcon },
  { title: "Digital Transformation Whitepaper", type: "PDF", size: "4.7 MB", icon: SparklesIcon },
];

const faqs = [
  {
    q: "What types of organizations does DWPL work with?",
    a: "DWPL works with organizations across 12+ industry sectors including government agencies, banks, hospitals, schools, NGOs, manufacturing companies, retailers and SMEs. We serve organizations of all sizes, from growing SMEs to large enterprises.",
  },
  {
    q: "Do you only work in Kenya?",
    a: "DWPL is headquartered in Nairobi, Kenya and primarily serves organizations in East Africa. We have delivered projects across the region and continue to expand our geographic reach.",
  },
  {
    q: "Can DWPL handle both the technology and the project management?",
    a: "Yes. DWPL provides end-to-end delivery from initial assessment and design through implementation, project management and ongoing support. We are accountable for the full lifecycle.",
  },
  {
    q: "Do you sell hardware as well as services?",
    a: "Yes. DWPL provides ICT procurement services — supplying authorized hardware, software and equipment from global technology vendors. All procurement comes with full deployment, configuration and warranty support.",
  },
  {
    q: "What is the minimum size of engagement DWPL will take on?",
    a: "We work with organizations of all sizes. For SMEs, we offer managed IT service packages that make enterprise-grade IT support accessible. For specific projects, we are happy to discuss scope regardless of size.",
  },
  {
    q: "How do I request a technology assessment?",
    a: "Use the Contact page or the Request Consultation form. A DWPL technology specialist will be in touch within one business day to understand your requirements and schedule an assessment.",
  },
];

const categories = ["All", "AI", "Cybersecurity", "Cloud", "Networking", "Managed Services", "Data", "Infrastructure"];

export default function ResourcesPage({ navigate }: Props) {
  const [activeTab, setActiveTab] = useState<"insights" | "downloads" | "faq">("insights");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featured = articles.find((a) => a.featured);
  const filtered = activeCategory === "All" ? articles.filter((a) => !a.featured) : articles.filter((a) => !a.featured && a.category === activeCategory);

  return (
    <div className="pt-[66px]">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[52vh] flex items-end">
        <img src={IMG.hero} alt="Resources background" className="absolute inset-0 img-cover" style={{ opacity: 0.22 }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl pointer-events-none anim-pulse-glow" style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-24 w-full">
          <div className="section-label anim-fade-up mb-5">Resources & Insights</div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-[color:var(--text-main)] mb-5 leading-none anim-fade-up delay-200">
            Technology Intelligence<br />
            <span className="heading-highlight">from DWPL</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed anim-fade-up delay-300" style={{ color: "var(--text-muted)" }}>
            Insights, guides and resources from our technology specialists. Stay informed on the topics that matter for your organization's technology strategy.
          </p>

          <div className="flex flex-wrap gap-2 mt-8 anim-fade-up delay-400">
            {(["insights", "downloads", "faq"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all cursor-pointer"
                style={{
                  background: activeTab === tab ? "color-mix(in srgb, var(--accent) 15%, transparent)" : "var(--surface)",
                  color: activeTab === tab ? "var(--accent)" : "var(--text-dim)",
                  border: `1px solid ${activeTab === tab ? "var(--accent)" : "color-mix(in srgb, var(--accent) 12%, transparent)"}`,
                  boxShadow: activeTab === tab ? "0 4px 16px color-mix(in srgb, var(--accent) 20%, transparent)" : "none",
                }}
              >
                {tab === "insights" ? "Insights & Articles" : tab === "faq" ? "FAQs" : "Download Center"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {activeTab === "insights" && (
          <>
            {featured && (
              <div className="card overflow-hidden mb-12 group" style={{ borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)" }}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img src={featured.img} alt={featured.title} className="img-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent 60%, var(--surface) 100%)" }} />
                    <div className="absolute top-4 left-4">
                      <span className="section-label text-xs" style={{ background: "var(--card-bg)" }}>Featured Insight</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="chip text-xs" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>{featured.category}</span>
                      <span className="text-xs" style={{ color: "var(--text-dim)" }}>{featured.date} · {featured.readTime}</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-[color:var(--text-main)] mb-4 leading-snug">{featured.title}</h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>{featured.excerpt}</p>
                    <div>
                      <button className="btn-primary">Read Full Article →</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="chip text-xs"
                  style={activeCategory === cat ? { borderColor: "var(--accent)", color: "var(--accent)", background: "color-mix(in srgb, var(--accent) 10%, transparent)" } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <div key={article.id} className="card overflow-hidden group cursor-pointer" style={{ borderColor: "color-mix(in srgb, var(--accent) 12%, transparent)" }}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={article.img} alt={article.title} className="img-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, var(--surface) 100%)" }} />
                    <span className="absolute top-3 left-3 chip text-[0.65rem] py-0.5 px-2.5" style={{ background: "var(--card-bg)", borderColor: article.color, color: article.color }}>
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs mb-2" style={{ color: "var(--text-dim)" }}>{article.date} · {article.readTime}</div>
                    <h3 className="font-display font-bold text-lg text-[color:var(--text-main)] mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors">{article.title}</h3>
                    <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--text-dim)" }}>{article.excerpt}</p>
                    <div className="arrow-link text-xs font-semibold" style={{ color: article.color }}>
                      Read Article <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "downloads" && (
          <div>
            <h2 className="font-display font-bold text-2xl text-[color:var(--text-main)] mb-2">Download Center</h2>
            <p className="text-sm mb-8" style={{ color: "var(--text-dim)" }}>Official DWPL brochures, whitepapers and solution guides.</p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {downloads.map((dl) => (
                <div key={dl.title} className="card p-6 flex items-start gap-4 cursor-pointer group hover:border-[var(--accent)]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)", border: "1px solid color-mix(in srgb, var(--accent) 18%, transparent)" }}>
                    <dl.icon size={24} color="var(--accent)" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold text-[color:var(--text-main)] text-sm mb-1 group-hover:text-[var(--accent)] transition-colors">{dl.title}</div>
                    <div className="text-xs mb-3" style={{ color: "var(--text-dim)" }}>{dl.type} · {dl.size}</div>
                    <div className="arrow-link text-xs font-semibold" style={{ color: "var(--accent)" }}>
                      Download <span className="transition-transform group-hover:translate-y-0.5 inline-block">↓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm p-4 rounded-xl" style={{ background: "var(--surface)", border: "1px solid color-mix(in srgb, var(--accent) 8%, transparent)", color: "var(--text-dim)" }}>
              Downloads are for informational purposes. For customized project proposals or enterprise capability statements, please <button onClick={() => navigate("contact")} className="underline font-medium" style={{ color: "var(--accent)" }}>contact our team</button>.
            </p>
          </div>
        )}

        {activeTab === "faq" && (
          <div>
            <h2 className="font-display font-bold text-2xl text-[color:var(--text-main)] mb-2">Frequently Asked Questions</h2>
            <p className="text-sm mb-8" style={{ color: "var(--text-dim)" }}>Common questions about working with Digital World Prodigy.</p>

            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq, i) => (
                <div key={i} className="card overflow-hidden" style={{ borderColor: openFaq === i ? "color-mix(in srgb, var(--accent) 30%, transparent)" : "color-mix(in srgb, var(--accent) 10%, transparent)" }}>
                  <button
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-display font-semibold text-[color:var(--text-main)] text-base">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-transform" style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)", color: "var(--accent)", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-sm leading-relaxed pt-2" style={{ color: "var(--text-muted)", borderTop: "1px solid color-mix(in srgb, var(--accent) 6%, transparent)" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 card max-w-3xl text-center" style={{ background: "var(--surface)" }}>
              <h3 className="font-display font-bold text-xl text-[color:var(--text-main)] mb-2">Still have questions?</h3>
              <p className="text-sm mb-6" style={{ color: "var(--text-dim)" }}>Our technology specialists are ready to answer your specific technical or commercial questions.</p>
              <button onClick={() => navigate("contact")} className="btn-primary">Speak With Our Team →</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

