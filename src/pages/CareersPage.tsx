import { useState } from "react";
import { GraduationCapIcon, GlobeIcon, SparklesIcon, UsersIcon, BarChartIcon, LightbulbIcon, CheckCircleIcon } from "../components/Icons";
import type { Page } from "../App";

interface Props { navigate: (to: Page, id?: string) => void; }

const IMG = {
  hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=700&fit=crop&auto=format",
  culture: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=500&fit=crop&auto=format",
};

const perks = [
  { icon: GraduationCapIcon, title: "Continuous Learning", desc: "Vendor certifications, technical training and professional development funded by DWPL.", color: "var(--accent)" },
  { icon: GlobeIcon, title: "Regional Impact", desc: "Work on technology projects that transform organizations across East Africa.", color: "var(--accent-secondary)" },
  { icon: SparklesIcon, title: "Cutting-Edge Technology", desc: "Hands-on experience with the latest technologies from global vendors.", color: "var(--accent-teal)" },
  { icon: UsersIcon, title: "Collaborative Culture", desc: "A team that shares knowledge, supports each other and celebrates wins together.", color: "var(--accent-amber)" },
  { icon: BarChartIcon, title: "Career Growth", desc: "Clear career paths with performance-based progression and leadership opportunities.", color: "var(--accent-rose)" },
  { icon: LightbulbIcon, title: "Innovation Space", desc: "Access to DWPL Lab for exploring and experimenting with emerging technologies.", color: "var(--accent)" },
];

export default function CareersPage({ navigate }: Props) {
  const [appForm, setAppForm] = useState({ name: "", email: "", field: "Engineering & Technical", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-[66px] min-h-screen pb-20">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-end">
        <img src={IMG.hero} alt="Careers background" className="absolute inset-0 img-cover" style={{ opacity: 0.60 }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-24 w-full">
          <div className="max-w-3xl backdrop-blur-[2px] p-6 rounded-2xl" style={{ background: "rgba(var(--bg), 0.25)" }}>
            <div className="section-label anim-fade-up mb-5">Careers at DWPL</div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl mb-5 leading-none anim-fade-up delay-200" style={{ color: 'var(--text-main)' }}>
              Join Our <span className="heading-highlight">Talent Network.</span>
            </h1>
            <p className="text-lg leading-relaxed anim-fade-up delay-300 font-medium" style={{ color: "var(--text-muted)" }}>
              We are constantly building relationships with forward-thinking engineers, cybersecurity specialists, software developers, and cloud architects across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ── NO OPEN OPPORTUNITIES BANNER ────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="card p-8 sm:p-10 border text-center relative overflow-hidden" style={{ background: "var(--surface)", borderColor: "var(--accent-amber)" }}>
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider font-bold px-3.5 py-1.5 rounded-full mb-4" style={{ background: "rgba(245, 158, 11, 0.15)", color: "var(--accent-amber)", border: "1px solid var(--accent-amber)" }}>
            ℹ️ Current Recruitment Status
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl mb-4" style={{ color: "var(--text-main)" }}>
            Currently No Open Positions
          </h2>

          <p className="text-base max-w-2xl mx-auto leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            Thank you for your interest in joining Digital World Prodigy Limited. We currently do not have active job vacancies, but we are always eager to connect with top-tier talent for upcoming projects and expansion roles.
          </p>

          <a href="#talent-form" className="btn-primary inline-flex text-xs py-3 px-6">
            Submit Your CV to Our Talent Database →
          </a>
        </div>
      </section>

      {/* ── WHY WORK WITH US ──────────────────────────────────── */}
      <section className="band py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Life at DWPL</div>
            <h2 className="font-display font-black text-3xl sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              Why Engineers & Tech Leaders <span className="heading-highlight">Thrive Here</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {perks.map((p) => (
              <div key={p.title} className="card p-7 group hover:scale-[1.02] transition-all border" style={{ borderColor: `color-mix(in srgb, ${p.color} 20%, transparent)` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: `color-mix(in srgb, ${p.color} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${p.color} 25%, transparent)` }}>
                  <p.icon size={24} color={p.color} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-main)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Culture Banner Image */}
          <div className="card overflow-hidden relative min-h-[220px] sm:h-64 rounded-2xl border flex items-center" style={{ borderColor: "var(--border-subtle)" }}>
            <img src={IMG.culture} alt="DWPL Culture" className="img-cover absolute inset-0" />
            <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
            <div className="relative p-6 sm:p-8 max-w-lg z-10">
              <span className="section-label text-xs mb-3 inline-block">Team Culture</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 text-white">Build Your Technology Career</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We foster an environment of technical rigor, continuous learning, and client delivery excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TALENT COMMUNITY REGISTRATION FORM ────────────────── */}
      <section id="talent-form" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <span className="section-label mb-3">Talent Network</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3" style={{ color: 'var(--text-main)' }}>
            Join the DWPL <span className="heading-highlight">Talent Pool</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto text-[var(--text-muted)]">
            Submit your credentials below. When a position matching your expertise opens up, our HR talent team will contact you directly.
          </p>
        </div>

        {submitted ? (
          <div className="card p-10 text-center border" style={{ borderColor: "color-mix(in srgb, var(--accent-teal) 30%, transparent)" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "color-mix(in srgb, var(--accent-teal) 10%, transparent)" }}>
              <CheckCircleIcon size={32} color="var(--accent-teal)" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--text-main)' }}>Profile Registered!</h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              Thank you for registering with the Digital World Prodigy talent network. We have logged your submission and will reach out as soon as a relevant opportunity arises.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-outline text-xs py-2 px-4">Submit Another Entry →</button>
          </div>
        ) : (
          <form onSubmit={handleApply} className="card p-8 sm:p-10 space-y-5 border" style={{ borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)" }}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono-tech mb-1.5" style={{ color: "var(--text-muted)" }}>Full Name *</label>
                <input className="form-input" required placeholder="John Doe"
                  value={appForm.name} onChange={(e) => setAppForm({ ...appForm, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-mono-tech mb-1.5" style={{ color: "var(--text-muted)" }}>Email Address *</label>
                <input className="form-input" type="email" required placeholder="john@example.com"
                  value={appForm.email} onChange={(e) => setAppForm({ ...appForm, email: e.target.value })} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-tech mb-1.5" style={{ color: "var(--text-muted)" }}>Area of Expertise / Primary Domain *</label>
              <select
                className="form-input"
                value={appForm.field}
                onChange={(e) => setAppForm({ ...appForm, field: e.target.value })}
              >
                <option value="Network Infrastructure & Fiber">Network Infrastructure & Fiber</option>
                <option value="Cybersecurity & Threat Ops">Cybersecurity & Threat Ops</option>
                <option value="Cloud Architecture & DevOps">Cloud Architecture & DevOps</option>
                <option value="Software Development & AI">Software Development & AI</option>
                <option value="Data Analytics & BI">Data Analytics & BI</option>
                <option value="IT Managed Support & Technical Helpdesk">IT Managed Support & Technical Helpdesk</option>
                <option value="Project Management & Business Dev">Project Management & Business Dev</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono-tech mb-1.5" style={{ color: "var(--text-muted)" }}>Professional Summary & Qualifications</label>
              <textarea className="form-input" rows={4} placeholder="Briefly describe your technical background, certifications (e.g. CCNA, Fortinet, AWS, Azure, CISSP), and years of experience..."
                value={appForm.message} onChange={(e) => setAppForm({ ...appForm, message: e.target.value })} />
            </div>

            <div className="p-4 rounded-xl text-xs flex items-center justify-between gap-4 border" style={{ background: "var(--surface)", borderColor: "var(--border-subtle)" }}>
              <span style={{ color: "var(--text-muted)" }}>
                You can also email your updated CV/Resume directly to:
              </span>
              <a href="mailto:careers@dwprodigy.co.ke" className="font-mono-tech font-bold text-xs" style={{ color: "var(--accent)" }}>
                careers@dwprodigy.co.ke
              </a>
            </div>

            <button type="submit" className="btn-primary w-full justify-center text-sm py-3.5">
              Register Profile in Talent Network →
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
