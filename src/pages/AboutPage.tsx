import type { Page } from "../App";
import { TargetIcon, AwardIcon, LockIcon, ZapIcon, UsersIcon, RulerIcon } from "../components/Icons";

interface Props { navigate: (to: Page, id?: string) => void; }

const IMG = {
  team:     "https://images.unsplash.com/photo-1573164574511-73c773193279?w=1200&h=600&fit=crop&auto=format",
  meeting:  "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=900&h=500&fit=crop&auto=format",
  tech:     "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?w=900&h=500&fit=crop&auto=format",
  server:   "https://images.unsplash.com/photo-1785682231847-93265d8e633d?w=900&h=600&fit=crop&auto=format",
  nairobi:  "https://images.unsplash.com/photo-1741991110666-88115e724741?w=1200&h=500&fit=crop&auto=format",
  building: "https://images.unsplash.com/photo-1781504841876-0718e1aeb9de?w=900&h=600&fit=crop&auto=format",
};

const values = [
  { icon: TargetIcon, title: "Client First",  desc: "Every decision starts with what is best for the client. Their success is our success.", color: "var(--accent)" },
  { icon: AwardIcon, title: "Excellence",    desc: "We hold ourselves to the highest technical and professional standards in everything we deliver.", color: "var(--accent-secondary)" },
  { icon: LockIcon, title: "Integrity",     desc: "We operate with transparency, honesty and ethical conduct in all our engagements.", color: "var(--accent-teal)" },
  { icon: ZapIcon, title: "Innovation",    desc: "We continuously explore and adopt emerging technologies to keep our clients ahead.", color: "var(--accent-amber)" },
  { icon: UsersIcon, title: "Partnership",   desc: "We build long-term relationships, not transactional engagements. We grow with our clients.", color: "var(--accent-rose)" },
  { icon: RulerIcon, title: "Precision",     desc: "Detail matters. We plan carefully, execute precisely and document everything.", color: "var(--accent)" },
];

const team = [
  {
    id: "david-wesonga",
    name: "Engineer David Wesonga",
    role: "Founder & Managing Director",
    image: "/team/David.jpeg",
    bio: "Visionary engineering leader driving enterprise technology strategy, infrastructure growth, and client relationships across East Africa.",
    initials: "DW",
    color: "var(--accent)"
  },
  {
    id: "milton-mata",
    name: "Milton Mata",
    role: "Senior Manager",
    image: "/team/milton.jpg",
    bio: "Experienced operations and project leader managing strategic delivery, enterprise engagements, and partner relations.",
    initials: "MM",
    color: "var(--accent-secondary)"
  },
  {
    id: "billy-ochieng",
    name: "Eng. Billy Ochieng",
    role: "Senior Software Engineer",
    image: "/team/bill.png",
    bio: "Full-stack technology specialist architecting cloud software systems, custom enterprise applications, and automated platforms.",
    initials: "BO",
    color: "var(--accent-teal)"
  }
];

const milestones = [
  { year: "2014", event: "Founded in Nairobi, Kenya as an enterprise IT solutions provider.", color: "var(--accent)" },
  { year: "2016", event: "Expanded into enterprise networking and cybersecurity services.", color: "var(--accent-secondary)" },
  { year: "2018", event: "Achieved initial 20+ enterprise client milestone with government and corporate contracts.", color: "var(--accent-teal)" },
  { year: "2020", event: "Launched cloud computing and managed IT services practice.", color: "var(--accent-amber)" },
  { year: "2022", event: "Introduced AI and data analytics solution portfolio.", color: "var(--accent-rose)" },
  { year: "2024", event: "Reached 30+ completed major infrastructure projects across Kenya.", color: "var(--accent)" },
];

export default function AboutPage({ navigate }: Props) {
  return (
    <div className="pt-[66px]">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <img src={IMG.team} alt="DWPL Team" className="absolute inset-0 img-cover" style={{ opacity: 0.60 }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl anim-pulse-glow" style={{ background: "color-mix(in srgb, var(--accent-secondary) 10%, transparent)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="section-label anim-fade-up mb-5">About Digital World Prodigy</div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-[var(--text-main)] mt-2 mb-6 leading-none anim-fade-up delay-200">
            Built on Technology.<br />
            <span className="heading-highlight">Driven by Purpose.</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed anim-fade-up delay-300" style={{ color: "var(--text-muted)" }}>
            Digital World Prodigy Limited is an East African enterprise technology company. We are not a hardware reseller or generic IT support firm — we are a full-spectrum technology solutions partner.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────── */}
      <section className="band">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
          {[
            { label: "Our Mission", color: "var(--accent)",
              statement: "To deliver integrated technology solutions that enable organisations to operate efficiently, securely and competitively in a digital-first world.",
              detail: "We do this by bringing together deep technical capability, experienced professionals, global technology partnerships and a genuine understanding of how organisations work." },
            { label: "Our Vision", color: "var(--accent-secondary)",
              statement: "To be the most trusted technology partner for organisations across Africa — the company organisations call first for their most critical technology challenges.",
              detail: "We envision an Africa where every organisation — regardless of size or sector — has access to world-class technology capabilities and support." },
          ].map((item) => (
            <div key={item.label} className="card p-8" style={{ borderColor: `color-mix(in srgb, ${item.color} 25%, transparent)` }}>
              <div className="w-1 h-10 rounded-full mb-6" style={{ background: item.color }} />
              <div className="section-label mb-4" style={{ borderColor: `color-mix(in srgb, ${item.color} 30%, transparent)`, color: item.color, background: `color-mix(in srgb, ${item.color} 8%, transparent)` }}>{item.label}</div>
              <p className="font-display font-bold text-xl text-[var(--text-main)] leading-snug mb-4">{item.statement}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label mb-5">Our Story</div>
            <h2 className="font-display font-bold text-4xl text-[var(--text-main)] mb-6 leading-tight">
              From Startup to<br />
              <span className="heading-highlight">Enterprise Technology Partner</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-dim)" }}>
              Digital World Prodigy Limited was founded with a clear conviction: that organisations in East Africa deserved access to the same calibre of enterprise technology solutions available to large corporations in developed markets.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-dim)" }}>
              Over the years we have grown from a small IT consultancy into a comprehensive technology solutions company, serving government agencies, financial institutions, healthcare providers, educational institutions and commercial enterprises across the region.
            </p>

            {/* Story image */}
            <div className="img-card rounded-2xl h-52 overflow-hidden">
              <img src={IMG.building} alt="Nairobi" className="img-cover" />
              <div className="absolute inset-0 img-overlay-bottom" />
              <div className="absolute bottom-4 left-4 font-mono-tech text-xs" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>NAIROBI, KENYA — EAST AFRICA HQ</div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="font-mono-tech text-xs mb-6" style={{ color: "var(--text-dim)", letterSpacing: "0.15em" }}>COMPANY MILESTONES</div>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex items-center justify-center font-mono-tech font-bold text-xs rounded-lg w-14 h-8 flex-shrink-0"
                      style={{ background: `color-mix(in srgb, ${m.color} 15%, transparent)`, color: m.color, border: `1px solid color-mix(in srgb, ${m.color} 30%, transparent)` }}
                    >
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 my-2" style={{ background: `color-mix(in srgb, ${m.color} 20%, transparent)`, minHeight: "24px" }} />
                    )}
                  </div>
                  <p className="text-sm leading-relaxed py-1 pb-4" style={{ color: "var(--text-muted)" }}>{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className="band">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Our Values</div>
            <h2 className="font-display font-black text-4xl text-[var(--text-main)]">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card p-7 group" style={{ borderColor: `color-mix(in srgb, ${v.color} 15%, transparent)` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `color-mix(in srgb, ${v.color} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${v.color} 25%, transparent)` }}>
                  <v.icon size={24} color={v.color} />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--text-main)] mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>{v.desc}</p>
                <div className="mt-5 h-0.5 w-8 rounded-full transition-all group-hover:w-full" style={{ background: v.color, opacity: 0.4 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DWPL ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="img-card rounded-2xl h-48 col-span-2">
                <img src={IMG.meeting} alt="Team meeting" className="img-cover" />
              </div>
              <div className="img-card rounded-2xl h-36">
                <img src={IMG.tech} alt="Tech team" className="img-cover" />
              </div>
              <div className="img-card rounded-2xl h-36" style={{ background: "color-mix(in srgb, var(--accent) 5%, transparent)", border: "1px solid color-mix(in srgb, var(--accent) 12%, transparent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="text-center p-4">
                  <div className="font-display font-black text-4xl heading-highlight">15+</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="section-label mb-5">Why Digital World Prodigy</div>
            <h2 className="font-display font-bold text-4xl text-[var(--text-main)] mb-8 leading-tight">
              What Makes Us<br />
              <span className="heading-highlight">Different</span>
            </h2>
            <div className="space-y-5">
              {[
                { title: "Full-Stack Technology Capability", desc: "We cover the entire technology stack — from physical infrastructure to cloud, software and AI. You don't need multiple vendors." },
                { title: "End-to-End Delivery Model", desc: "We consult, design, deploy, integrate, secure and manage. You get one partner accountable for the full lifecycle." },
                { title: "Security Built In", desc: "Security is not an add-on. It is engineered into every solution we design and every system we deploy." },
                { title: "Local Expertise, Global Standards", desc: "We understand the East African technology landscape while delivering to international best-practice standards." },
                { title: "Long-Term Relationships", desc: "We do not disappear after implementation. We stay engaged, monitor, manage and evolve your environment." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover:bg-blue-500/20"
                    style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)", border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)" }}>
                    <span className="font-mono-tech text-xs" style={{ color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-[var(--text-main)] text-sm mb-1">{item.title}</div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────── */}
      <section className="band">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Leadership Team</div>
            <h2 className="font-display font-black text-4xl text-[var(--text-main)]">
              The People Behind<br />
              <span className="heading-highlight">Digital World Prodigy</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                onClick={() => navigate("team-detail", m.id)}
                className="card p-7 group cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between border"
                style={{ borderColor: `color-mix(in srgb, ${m.color} 25%, transparent)` }}
              >
                <div>
                  {/* Profile Photo */}
                  <div
                    className="w-28 h-28 rounded-2xl overflow-hidden mb-5 border-2 relative transition-transform group-hover:scale-105"
                    style={{ borderColor: `color-mix(in srgb, ${m.color} 40%, transparent)` }}
                  >
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center font-display font-black text-xl text-[var(--text-main)]"
                        style={{ background: `color-mix(in srgb, ${m.color} 20%, transparent)` }}
                      >
                        {m.initials}
                      </div>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-[var(--text-main)] mb-1">{m.name}</h3>
                  <div className="font-mono-tech text-xs mb-4 font-bold uppercase tracking-wider" style={{ color: m.color }}>
                    {m.role}
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-dim)" }}>{m.bio}</p>
                </div>

                <div className="pt-4 border-t flex items-center justify-between text-xs font-mono-tech" style={{ borderColor: "var(--border-subtle)", color: m.color }}>
                  <span>View Full Profile</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats + CTA ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
          {[
            { num: "30+", label: "Projects" },
            { num: "20+", label: "Clients" },
            { num: "18+", label: "Solutions" },
            { num: "10+", label: "Years" },
            { num: "25+", label: "Experts" },
            { num: "12+", label: "Industries" },
          ].map((s) => (
            <div key={s.label} className="card p-5 text-center">
              <div className="font-display font-black text-2xl heading-highlight mb-1">{s.num}</div>
              <div className="text-xs" style={{ color: "var(--text-dim)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="font-display font-bold text-3xl text-[var(--text-main)] mb-4">
            Ready to Work With <span className="heading-highlight">DWPL?</span>
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--text-dim)" }}>
            Talk to us about your technology challenge and let us show you what we can do for your organisation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate("contact")} className="btn-primary">Request Consultation →</button>
            <button onClick={() => navigate("solutions")} className="btn-outline">View Our Solutions</button>
          </div>
        </div>
      </section>
    </div>
  );
}
