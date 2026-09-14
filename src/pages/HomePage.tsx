import { useState, useEffect, useRef } from "react";
import type { Page } from "../App";
import {
  ServerIcon, NetworkIcon, ShieldIcon, CloudIcon, CodeIcon, CpuIcon,
  BarChartIcon, RefreshCwIcon, LayersIcon, LockIcon, LightbulbIcon,
  BuildingIcon, LandmarkIcon, HospitalIcon, ArrowRightIcon, CheckCircleIcon,
  SparklesIcon, ActivityIcon
} from "../components/Icons";

import {
  ClientLogoMarquee
} from "../components/ClientLogos";

interface Props { navigate: (to: Page, id?: string) => void; }

// ── Images ──────────────────────────────────────────────────────────────────
const IMG = {
  heroBg:      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&auto=format&q=90",
  serverRoom:  "https://images.unsplash.com/photo-1785682231847-93265d8e633d?w=900&h=600&fit=crop&auto=format",
  serverFans:  "https://images.unsplash.com/photo-1782094673136-5198a372980c?w=900&h=600&fit=crop&auto=format",
  circuit:     "https://images.unsplash.com/photo-1782330421256-c65e36240e05?w=900&h=600&fit=crop&auto=format",
  cyber:       "https://images.unsplash.com/photo-1762279389083-abf71f22d338?w=900&h=600&fit=crop&auto=format",
  cloud:       "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=900&h=600&fit=crop&auto=format",
  team:        "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=900&h=600&fit=crop&auto=format",
  code:        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=900&h=600&fit=crop&auto=format",
  nairobi:     "https://images.unsplash.com/photo-1741991110666-88115e724741?w=1200&h=600&fit=crop&auto=format",
  cables:      "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=900&h=600&fit=crop&auto=format",
};

// ── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: 30, suffix: "+", label: "Projects Delivered", sub: "Across East Africa" },
  { value: 20, suffix: "+", label: "Enterprise Clients", sub: "Served & Supported" },
  { value: 18, suffix: "+", label: "Solution Areas",     sub: "Full Technology Stack" },
  { value: 10, suffix: "+", label: "Years Experience",   sub: "In IT Solutions" },
];

const approach = [
  { n: "01", title: "Discover",  color: "var(--accent)", desc: "We listen and understand your organisation's unique challenges and goals." },
  { n: "02", title: "Design",    color: "var(--accent-secondary)", desc: "Architects craft the right solution — bespoke for your needs." },
  { n: "03", title: "Deploy",    color: "var(--accent-teal)", desc: "Engineers implement with precision following structured methodologies." },
  { n: "04", title: "Secure",    color: "var(--accent-amber)", desc: "Every environment hardened with security best-practices by design." },
  { n: "05", title: "Integrate", color: "var(--accent-rose)", desc: "Systems, data and platforms connected into one cohesive environment." },
  { n: "06", title: "Manage",    color: "var(--accent)", desc: "Our team keeps your technology running at peak performance, 24/7." },
  { n: "07", title: "Evolve",    color: "var(--accent-secondary)", desc: "We continuously adapt and improve as your organisation grows." },
];

const solutionPillars = [
  { id: "it-infrastructure", Icon: ServerIcon, title: "Infrastructure", tagline: "Build the foundation.", color: "var(--accent)", img: IMG.serverRoom,
    items: ["Servers & Storage","Virtualization","Data Centers","Endpoints","Backup","Monitoring"] },
  { id: "networking", Icon: NetworkIcon, title: "Connectivity", tagline: "Connect everything.", color: "var(--accent-secondary)", img: IMG.cables,
    items: ["LAN / WAN","Enterprise Wi-Fi","SD-WAN & VPN","Fiber & Cabling","Branch Networking","Internet Connectivity"] },
  { id: "cybersecurity", Icon: ShieldIcon, title: "Security", tagline: "Protect everything.", color: "var(--accent-teal)", img: IMG.cyber,
    items: ["Firewalls & Endpoint","Identity & Access","Vulnerability Mgmt","Security Monitoring","Incident Response","Cloud Security"] },
  { id: "software-dev", Icon: CodeIcon, title: "Applications", tagline: "Digitize operations.", color: "var(--accent-amber)", img: IMG.code,
    items: ["Web & Mobile Apps","ERP & CRM","Enterprise Portals","Custom Systems","Workflow Apps","SaaS Platforms"] },
  { id: "cloud", Icon: CloudIcon, title: "Cloud", tagline: "Modernize infrastructure.", color: "var(--accent-rose)", img: IMG.cloud,
    items: ["Cloud Migration","Hybrid Cloud","IaaS & SaaS","Cloud Security","Disaster Recovery","Managed Cloud"] },
  { id: "ai-automation", Icon: SparklesIcon, title: "Intelligence", tagline: "Make data useful.", color: "var(--accent)", img: IMG.circuit,
    items: ["AI & ML","Business Analytics","BI Dashboards","Process Automation","Data Platforms","Predictive Insights"] },
];

const industries = ["Government","Financial Services","Healthcare","Education","Manufacturing","Retail","Hospitality","Logistics","NGOs","Professional Services","Construction","SMEs"];

const testimonials = [
  { quote: "DWPL transformed our entire IT infrastructure within 90 days. Their team understood our unique requirements and delivered a solution that exceeded every expectation.", author: "Chief Information Officer", org: "Leading Commercial Bank", sector: "Financial Services" },
  { quote: "The cybersecurity assessment and subsequent hardening gave our leadership complete confidence in our security posture — for the first time in the company's history.", author: "Head of IT Security", org: "National Government Agency", sector: "Government" },
  { quote: "Moving to a managed services model with DWPL reduced our IT incidents by 70% and freed our internal team to focus exclusively on strategic initiatives.", author: "Technology Director", org: "East Africa Logistics Group", sector: "Logistics" },
];

function useCounter(target: number, duration = 1600, trigger = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const steps = 50;
    const step = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setVal(target); clearInterval(t); }
      else setVal(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(t);
  }, [target, duration, trigger]);
  return val;
}

export default function HomePage({ navigate }: Props) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const c0 = useCounter(stats[0].value, 1600, statsVisible);
  const c1 = useCounter(stats[1].value, 1600, statsVisible);
  const c2 = useCounter(stats[2].value, 1400, statsVisible);
  const c3 = useCounter(stats[3].value, 1200, statsVisible);
  const counters = [c0, c1, c2, c3];

  return (
    <div className="pt-[66px]">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.heroBg} alt="Enterprise technology background" className="img-cover" style={{ opacity: 0.90 }} />
          {/* Strong dark overlay — always dark so text is always white */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(4,6,15,0.93) 0%, rgba(4,6,15,0.80) 50%, rgba(4,6,15,0.55) 100%)" }} />
        </div>

        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl backdrop-blur-[3px] p-8 rounded-2xl" style={{ background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="section-label anim-fade-up mb-6">Digital World Prodigy Limited — Kenya</div>

            <h1
              className="font-display font-black leading-tight mb-6 anim-fade-up delay-200"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#ffffff", letterSpacing: "-0.02em" }}
            >
              Enterprise Technology <br />
              <span className="heading-highlight">Without Limits.</span>
            </h1>

            <p className="text-lg leading-relaxed mb-4 max-w-2xl anim-fade-up delay-300 font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
              We design, deploy, secure and manage the technology that powers modern organisations across East Africa.
            </p>

            <div className="font-mono-tech text-xs tracking-widest mb-10 anim-fade-up delay-400 font-semibold" style={{ color: "rgba(255,255,255,0.50)" }}>
              INFRASTRUCTURE · CLOUD · CYBERSECURITY · SOFTWARE · AI · DIGITAL TRANSFORMATION
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14 anim-fade-up delay-400">
              <button onClick={() => navigate("solutions")} className="btn-primary w-full sm:w-auto justify-center" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                Explore Solutions →
              </button>
              <button onClick={() => navigate("contact")} className="btn-outline w-full sm:w-auto justify-center" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                Start a Project
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 anim-fade-up delay-400">
              {["Enterprise Technology", "Secure by Design", "End-to-End Delivery", "24/7 Support"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <CheckCircleIcon size={16} color="var(--accent)" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────── */}
      <div ref={statsRef} className="band py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="card p-6 text-center">
              <div className="font-display font-black text-4xl md:text-5xl mb-2" style={{ color: "var(--accent)" }}>
                {counters[i]}{s.suffix}
              </div>
              <div className="font-display font-bold text-sm mb-1" style={{ color: "var(--text-main)" }}>{s.label}</div>
              <div className="text-xs" style={{ color: "var(--text-dim)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trusted Client & Partner Logos Showcase Ribbon ───────────── */}
      <section className="py-8" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between">
          <div>
            <span className="section-label mb-1">Enterprise Client & Partner Network</span>
            <h3 className="font-display font-bold text-xl" style={{ color: "var(--text-main)" }}>
              Trusted by Premier Institutions & Businesses in Kenya
            </h3>
          </div>
          <button onClick={() => navigate("partners")} className="btn-outline text-xs py-1.5 px-3">
            View Case Studies →
          </button>
        </div>
        <ClientLogoMarquee />
      </section>

      {/* ── One Partner — Full Stack ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-5">Why DWPL</div>
            <h2 className="font-display font-black text-3xl md:text-4xl mb-6 leading-tight" style={{ color: "var(--text-main)" }}>
              One Partner. <br />
              <span className="heading-highlight">The Entire Technology Stack.</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              From the cable in the server room to the intelligence in your executive dashboard — Digital World Prodigy connects every layer of the technology that keeps your organisation moving.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Full-stack technology capability under one roof",
                "Single point of accountability for all IT",
                "Security engineered into every solution",
                "Local expertise meeting global standards",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-main)" }}>
                  <CheckCircleIcon size={18} color="var(--accent)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate("about")} className="btn-primary">
              Why Choose DWPL →
            </button>
          </div>

          <div className="card p-8">
            <div className="font-mono-tech text-xs mb-4 uppercase tracking-wider" style={{ color: "var(--accent)" }}>Technology Stack Layers</div>
            <div className="space-y-3">
              {[
                { label: "AI & Analytics", color: "var(--accent)" },
                { label: "Data & BI Dashboards", color: "var(--accent-secondary)" },
                { label: "Applications & Enterprise Software", color: "var(--accent-teal)" },
                { label: "Cloud Infrastructure & Platforms", color: "var(--accent-amber)" },
                { label: "Cybersecurity & Governance", color: "var(--accent-rose)" },
                { label: "Enterprise Networking & Wi-Fi", color: "var(--accent)" },
                { label: "Physical & Virtual IT Infrastructure", color: "var(--accent-secondary)" },
              ].map((layer) => (
                <div key={layer.label} className="p-3.5 rounded-xl border flex items-center justify-between" style={{ background: "var(--surface)", borderColor: "var(--border-subtle)" }}>
                  <span className="text-sm font-semibold" style={{ color: "var(--text-main)" }}>{layer.label}</span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: layer.color }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach (7 Steps) ──────────────────────────────────── */}
      <section className="band py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-4">Our Methodology</div>
            <h2 className="font-display font-black text-3xl md:text-4xl mb-4" style={{ color: "var(--text-main)" }}>
              Structured Delivery for <span className="heading-highlight">Complex IT</span>
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
              Seven proven steps that take you from initial challenge to a fully managed, evolving technology environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {approach.slice(0, 4).map((s) => (
              <div key={s.n} className="card p-6">
                <div className="font-mono-tech font-bold text-xs mb-3" style={{ color: s.color }}>{s.n}</div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text-main)" }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {approach.slice(4).map((s) => (
              <div key={s.n} className="card p-6">
                <div className="font-mono-tech font-bold text-xs mb-3" style={{ color: s.color }}>{s.n}</div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text-main)" }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution Pillars ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-4">Solution Portfolio</div>
            <h2 className="font-display font-black text-3xl md:text-4xl leading-tight" style={{ color: "var(--text-main)" }}>
              Everything Your Digital <span className="heading-highlight">Environment Needs</span>
            </h2>
          </div>
          <button onClick={() => navigate("solutions")} className="btn-outline flex-shrink-0">
            View All 19+ Solutions →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionPillars.map(({ id, Icon, title, tagline, color, img, items }) => (
            <div
              key={id}
              className="card cursor-pointer group overflow-hidden"
              onClick={() => navigate("solution-detail", id)}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={img} alt={title} className="img-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 20%, var(--surface) 100%)" }} />
                <div className="absolute top-4 left-4 p-2.5 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--card-border)" }}>
                  <Icon size={22} color={color} />
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="font-display font-bold text-xl" style={{ color: "var(--text-main)" }}>{title}</div>
                  <div className="text-xs font-medium" style={{ color: color }}>{tagline}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="text-xs font-semibold flex items-center gap-1" style={{ color: color }}>
                  <span>Explore {title}</span>
                  <ArrowRightIcon size={14} color={color} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Industries ──────────────────────────────────────────── */}
      <section className="band py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-label mb-4">Industries We Serve</div>
              <h2 className="font-display font-black text-3xl md:text-4xl" style={{ color: "var(--text-main)" }}>
                Technology for <span className="heading-highlight">Every Sector</span>
              </h2>
            </div>
            <button onClick={() => navigate("industries")} className="btn-outline flex-shrink-0">All Industries →</button>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {industries.map((ind) => (
              <button key={ind} onClick={() => navigate("industries")} className="chip">{ind}</button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: "government", title: "Government & Public Sector", desc: "Secure digital transformation for public institutions — from critical infrastructure to citizen-facing digital services.", Icon: LandmarkIcon, color: "var(--accent)", img: IMG.nairobi },
              { id: "financial", title: "Financial Services", desc: "Mission-critical IT for banks, insurers and financial institutions. Security-first, always-on, fully compliant.", Icon: BuildingIcon, color: "var(--accent-secondary)", img: IMG.team },
              { id: "healthcare", title: "Healthcare", desc: "Reliable technology for hospitals and health providers — patient data security, clinical systems and seamless connectivity.", Icon: HospitalIcon, color: "var(--accent-teal)", img: IMG.cloud },
            ].map(({ id, title, desc, Icon, color, img }) => (
              <div key={title} className="card cursor-pointer group overflow-hidden" onClick={() => navigate("industry-detail", id)}>
                <div className="relative h-44 overflow-hidden">
                  <img src={img} alt={title} className="img-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 20%, var(--surface) 100%)" }} />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--card-border)" }}>
                    <Icon size={22} color={color} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--text-main)" }}>{title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{desc}</p>
                  <div className="text-xs font-semibold flex items-center gap-1" style={{ color: color }}>
                    <span>Explore Solutions</span>
                    <ArrowRightIcon size={14} color={color} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="section-label mb-4">Client Experiences</div>
          <h2 className="font-display font-black text-3xl md:text-4xl" style={{ color: "var(--text-main)" }}>
            Demonstrated <span className="heading-highlight">Results</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card p-10 text-center"
              style={{
                display: i === activeTestimonial ? "block" : "none",
                animation: "fadeIn 0.5s ease",
              }}
            >
              <p className="text-lg leading-relaxed mb-8 font-display font-medium" style={{ color: "var(--text-main)" }}>"{t.quote}"</p>
              <div className="font-semibold text-sm mb-1" style={{ color: "var(--text-main)" }}>{t.author}</div>
              <div className="text-xs mb-3" style={{ color: "var(--text-dim)" }}>{t.org}</div>
              <span className="chip text-xs">{t.sector}</span>
            </div>
          ))}

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: i === activeTestimonial ? "28px" : "8px",
                  height: "8px",
                  background: i === activeTestimonial ? "var(--accent)" : "var(--border-subtle)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────── */}
      <section className="band py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="section-label mb-6">Start Today</div>
          <h2 className="font-display font-black mb-5 leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-main)" }}>
            Let's Solve Your <br />
            <span className="heading-highlight">Technology Challenge.</span>
          </h2>
          <p className="text-base mb-10 max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Talk to a DWPL technology specialist. We'll listen, assess your environment, and propose the right solution — no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate("contact")} className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.9rem 2.2rem" }}>
              Request a Free Consultation →
            </button>
            <button onClick={() => navigate("projects")} className="btn-outline" style={{ fontSize: "0.95rem", padding: "0.9rem 2.2rem" }}>
              View Projects
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
