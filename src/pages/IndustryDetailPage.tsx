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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-24 sm:pt-28 w-full">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <button
              onClick={() => navigate("industries")}
              className="text-xs font-mono-tech flex items-center gap-1.5 transition-colors"
              style={{ color: "var(--accent)" }}
            >
              ← All Industries
            </button>
            <span style={{ color: "var(--text-dim)" }}>/</span>
            <span className="text-xs font-mono-tech truncate max-w-[180px] sm:max-w-none" style={{ color: "var(--text-muted)" }}>
              {industry.name}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: `color-mix(in srgb, ${industry.color} 15%, transparent)`,
                border: `1px solid color-mix(in srgb, ${industry.color} 30%, transparent)`,
              }}
            >
              <Icon size={20} color={industry.color} />
            </div>
            <span className="section-label">Sector Expertise</span>
          </div>

          <h1
            className="font-display font-black text-2.5xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 leading-tight max-w-4xl"
            style={{ color: "var(--text-main)" }}
          >
            {industry.name} <span className="heading-highlight">Solutions</span>
          </h1>

          <p className="text-sm sm:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {industry.tagline}
          </p>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <div className="band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {industry.stats.map((s) => (
            <div key={s.label} className="card p-3.5 sm:p-5 text-center">
              <div
                className="font-display font-black text-xl sm:text-3xl md:text-4xl mb-0.5 sm:mb-1"
                style={{ color: industry.color }}
              >
                {s.value}
              </div>
              <div className="text-[0.65rem] sm:text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW & CHALLENGES ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
          <div>
            <span className="section-label mb-2 sm:mb-3">Industry Landscape</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 sm:mb-5 leading-tight" style={{ color: "var(--text-main)" }}>
              Transforming <span className="heading-highlight">{industry.name}</span> Through Technology
            </h2>
            <p className="text-xs sm:text-base leading-relaxed mb-5 sm:mb-6" style={{ color: "var(--text-muted)" }}>
              {industry.overview}
            </p>
            <div className="space-y-2.5 sm:space-y-3">
              {industry.compliance.map((c) => (
                <div key={c} className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircleIcon size={16} color="var(--accent-teal)" className="shrink-0" />
                  <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--text-main)" }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "var(--card-border)" }}>
            <img src={industry.overviewImg} alt={industry.name} className="img-cover h-52 sm:h-80 md:h-96" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(7,13,24,0.9) 100%)" }} />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <span className="text-[0.65rem] sm:text-xs font-mono-tech uppercase tracking-widest text-[var(--accent)]">
                Tailored Engineering
              </span>
              <h3 className="font-display font-bold text-base sm:text-xl text-white mt-1 leading-tight">
                Built for strict compliance & maximum uptime.
              </h3>
            </div>
          </div>
        </div>

        {/* ── SECTOR CHALLENGES ───────────────────────────────── */}
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-label mb-2 sm:mb-3">Key Challenges Solved</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl" style={{ color: "var(--text-main)" }}>
              Overcoming <span className="heading-highlight">Operational Friction</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {industry.challenges.map((c, i) => (
              <div key={c.title} className="card p-4 sm:p-7">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-mono-tech font-bold mb-3 sm:mb-4"
                  style={{
                    background: `color-mix(in srgb, ${industry.color} 15%, transparent)`,
                    color: industry.color,
                    border: `1px solid color-mix(in srgb, ${industry.color} 30%, transparent)`,
                  }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg mb-1.5 sm:mb-2" style={{ color: "var(--text-main)" }}>
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SOLUTIONS TAILORED FOR THIS INDUSTRY ─────────────── */}
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-label mb-2 sm:mb-3">Targeted Solutions</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl" style={{ color: "var(--text-main)" }}>
              What DWPL Brings to <span className="heading-highlight">{industry.name}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {industry.solutionsProvided.map((sol) => {
              const SolIcon = sol.icon;
              return (
                <div key={sol.title} className="card p-4 sm:p-7 group hover:scale-[1.02] transition-all">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform"
                    style={{
                      background: `color-mix(in srgb, ${industry.color} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${industry.color} 25%, transparent)`,
                    }}
                  >
                    <SolIcon size={20} color={industry.color} />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg mb-1.5 sm:mb-2" style={{ color: "var(--text-main)" }}>
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {sol.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CASE STUDY HIGHLIGHT ─────────────────────────────── */}
        <div className="card overflow-hidden p-4 sm:p-8 md:p-12 mb-12 sm:mb-20" style={{ borderColor: `color-mix(in srgb, ${industry.color} 30%, transparent)` }}>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div>
              <span className="section-label mb-2 sm:mb-3">Featured Success Story</span>
              <div className="text-xs font-mono-tech mb-2" style={{ color: industry.color }}>
                {industry.caseStudy.client}
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-4" style={{ color: "var(--text-main)" }}>
                The Transformation Journey
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[0.65rem] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                    The Challenge:
                  </div>
                  <p className="leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {industry.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <div className="text-[0.65rem] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                    The Solution:
                  </div>
                  <p className="leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {industry.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="text-[0.65rem] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                  Verified Results:
                </div>
                {industry.caseStudy.results.map((res) => (
                  <div key={res} className="flex items-center gap-2 font-medium" style={{ color: "var(--text-main)" }}>
                    <CheckCircleIcon size={16} color="var(--accent-teal)" className="shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden h-52 sm:h-80">
              <img src={industry.caseStudyImg} alt="Case Study" className="img-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(7,13,24,0.95) 100%)" }} />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <ShieldIcon size={24} color="var(--accent)" />
                <div className="text-xs sm:text-sm font-bold text-white mt-1">Verified Client Impact</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQS ────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <span className="section-label mb-2">Frequently Asked Questions</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl" style={{ color: "var(--text-main)" }}>
              Got Questions About <span className="heading-highlight">{industry.name}</span>?
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {industry.faqs.map((faq) => (
              <div key={faq.q} className="card p-4 sm:p-6">
                <h4 className="font-display font-bold text-sm sm:text-base mb-1.5 sm:mb-2" style={{ color: "var(--text-main)" }}>
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA ──────────────────────────────────────── */}
        <div className="text-center card p-5 sm:p-12 rounded-2xl sm:rounded-3xl" style={{ background: "var(--card-bg)" }}>
          <h2 className="font-display font-bold text-xl sm:text-3xl mb-3 leading-tight" style={{ color: "var(--text-main)" }}>
            Ready to Modernize Your <span className="heading-highlight">{industry.name}</span> Infrastructure?
          </h2>
          <p className="text-xs sm:text-sm max-w-xl mx-auto mb-6 sm:mb-8" style={{ color: "var(--text-muted)" }}>
            Speak with DWPL's industry experts to design a resilient, compliant, and scalable technology foundation.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mobile-stack-btn">
            <button onClick={() => navigate("contact")} className="btn-primary text-xs sm:text-sm">
              Schedule Industry Consultation <ArrowRightIcon size={16} />
            </button>
            <button onClick={() => navigate("solutions")} className="btn-outline text-xs sm:text-sm">
              Explore Tech Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
