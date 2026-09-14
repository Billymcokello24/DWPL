import type { Page } from "../App";
import { industriesData } from "../data/industries";
import {
  CheckCircleIcon,
  ShieldIcon,
  ArrowRightIcon,
} from "../components/Icons";

interface Props {
  industryId: string;
  navigate: (to: Page, id?: string) => void;
}

export default function IndustryDetailPage({ industryId, navigate }: Props) {
  const industry = industriesData.find((i) => i.id === industryId) || industriesData[0];
  const Icon = industry.icon;

  return (
    <div className="min-h-screen pb-20">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-end">
        <img
          src={industry.heroImg}
          alt={industry.name}
          className="absolute inset-0 img-cover"
          style={{ opacity: 0.60 }}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-28 w-full">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate("industries")}
              className="text-xs font-mono-tech flex items-center gap-1.5 transition-colors"
              style={{ color: "var(--accent)" }}
            >
              ← All Industries
            </button>
            <span style={{ color: "var(--text-dim)" }}>/</span>
            <span className="text-xs font-mono-tech" style={{ color: "var(--text-muted)" }}>
              {industry.name}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: `color-mix(in srgb, ${industry.color} 15%, transparent)`,
                border: `1px solid color-mix(in srgb, ${industry.color} 30%, transparent)`,
              }}
            >
              <Icon size={24} color={industry.color} />
            </div>
            <span className="section-label">Sector Expertise</span>
          </div>

          <h1
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight max-w-4xl"
            style={{ color: "var(--text-main)" }}
          >
            {industry.name} <span className="heading-highlight">Solutions</span>
          </h1>

          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {industry.tagline}
          </p>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <div className="band">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {industry.stats.map((s) => (
            <div key={s.label} className="card p-5 text-center">
              <div
                className="font-display font-black text-3xl md:text-4xl mb-1"
                style={{ color: industry.color }}
              >
                {s.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW & CHALLENGES ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="section-label mb-3">Industry Landscape</span>
            <h2 className="font-display font-bold text-3xl mb-5" style={{ color: "var(--text-main)" }}>
              Transforming <span className="heading-highlight">{industry.name}</span> Through Technology
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              {industry.overview}
            </p>
            <div className="space-y-3">
              {industry.compliance.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <CheckCircleIcon size={18} color="var(--accent-teal)" />
                  <span className="text-sm font-medium" style={{ color: "var(--text-main)" }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "var(--card-border)" }}>
            <img src={industry.overviewImg} alt={industry.name} className="img-cover h-96" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(7,13,24,0.9) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent)]">
                Tailored Engineering
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1">
                Built for strict compliance & maximum uptime.
              </h3>
            </div>
          </div>
        </div>

        {/* ── SECTOR CHALLENGES ───────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="section-label mb-3">Key Challenges Solved</span>
            <h2 className="font-display font-bold text-3xl" style={{ color: "var(--text-main)" }}>
              Overcoming <span className="heading-highlight">Operational Friction</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industry.challenges.map((c, i) => (
              <div key={c.title} className="card p-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-mono-tech font-bold mb-4"
                  style={{
                    background: `color-mix(in srgb, ${industry.color} 15%, transparent)`,
                    color: industry.color,
                    border: `1px solid color-mix(in srgb, ${industry.color} 30%, transparent)`,
                  }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--text-main)" }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SOLUTIONS TAILORED FOR THIS INDUSTRY ─────────────── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="section-label mb-3">Targeted Solutions</span>
            <h2 className="font-display font-bold text-3xl" style={{ color: "var(--text-main)" }}>
              What DWPL Brings to <span className="heading-highlight">{industry.name}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industry.solutionsProvided.map((sol) => {
              const SolIcon = sol.icon;
              return (
                <div key={sol.title} className="card p-7 group hover:scale-[1.02] transition-all">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{
                      background: `color-mix(in srgb, ${industry.color} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${industry.color} 25%, transparent)`,
                    }}
                  >
                    <SolIcon size={24} color={industry.color} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--text-main)" }}>
                    {sol.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {sol.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CASE STUDY HIGHLIGHT ─────────────────────────────── */}
        <div className="card overflow-hidden p-8 md:p-12 mb-20" style={{ borderColor: `color-mix(in srgb, ${industry.color} 30%, transparent)` }}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label mb-3">Featured Success Story</span>
              <div className="text-xs font-mono-tech mb-2" style={{ color: industry.color }}>
                {industry.caseStudy.client}
              </div>
              <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "var(--text-main)" }}>
                The Transformation Journey
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                    The Challenge:
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {industry.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                    The Solution:
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {industry.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                  Verified Results:
                </div>
                {industry.caseStudy.results.map((res) => (
                  <div key={res} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--text-main)" }}>
                    <CheckCircleIcon size={16} color="var(--accent-teal)" />
                    {res}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden h-80">
              <img src={industry.caseStudyImg} alt="Case Study" className="img-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(7,13,24,0.95) 100%)" }} />
              <div className="absolute bottom-6 left-6">
                <ShieldIcon size={28} color="var(--accent)" />
                <div className="text-sm font-bold text-white mt-1">Verified Client Impact</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQS ────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="section-label mb-2">Frequently Asked Questions</span>
            <h2 className="font-display font-bold text-2xl" style={{ color: "var(--text-main)" }}>
              Got Questions About <span className="heading-highlight">{industry.name}</span>?
            </h2>
          </div>

          <div className="space-y-4">
            {industry.faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <h4 className="font-display font-bold text-base mb-2" style={{ color: "var(--text-main)" }}>
                  {faq.q}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA ──────────────────────────────────────── */}
        <div className="text-center card p-12 rounded-3xl" style={{ background: "var(--card-bg)" }}>
          <h2 className="font-display font-bold text-3xl mb-3" style={{ color: "var(--text-main)" }}>
            Ready to Modernize Your <span className="heading-highlight">{industry.name}</span> Infrastructure?
          </h2>
          <p className="text-sm max-w-xl mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
            Speak with DWPL's industry experts to design a resilient, compliant, and scalable technology foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate("contact")} className="btn-primary">
              Schedule Industry Consultation <ArrowRightIcon size={16} />
            </button>
            <button onClick={() => navigate("solutions")} className="btn-outline">
              Explore Tech Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
