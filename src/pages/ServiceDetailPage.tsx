import type { Page } from "../App";
import { servicesData } from "../data/services";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  MonitorCheckIcon,
} from "../components/Icons";

interface Props {
  serviceId: string;
  navigate: (to: Page, id?: string) => void;
}

export default function ServiceDetailPage({ serviceId, navigate }: Props) {
  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];
  const Icon = service.icon;

  return (
    <div className="min-h-screen pb-20">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-end">
        <img
          src={service.heroImg}
          alt={service.name}
          className="absolute inset-0 img-cover"
          style={{ opacity: 0.60 }}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-24 sm:pt-28 w-full">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <button
              onClick={() => navigate("services")}
              className="text-xs font-mono-tech flex items-center gap-1.5 transition-colors"
              style={{ color: "var(--accent)" }}
            >
              ← All Services
            </button>
            <span style={{ color: "var(--text-dim)" }}>/</span>
            <span className="text-xs font-mono-tech truncate max-w-[180px] sm:max-w-none" style={{ color: "var(--text-muted)" }}>
              {service.name}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: `color-mix(in srgb, ${service.color} 15%, transparent)`,
                border: `1px solid color-mix(in srgb, ${service.color} 30%, transparent)`,
              }}
            >
              <Icon size={20} color={service.color} />
            </div>
            <span className="section-label">Service Specialization</span>
          </div>

          <h1
            className="font-display font-black text-2.5xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 leading-tight max-w-4xl"
            style={{ color: "var(--text-main)" }}
          >
            {service.name}
          </h1>

          <p className="text-sm sm:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {service.tagline}
          </p>
        </div>
      </section>

      {/* ── OVERVIEW & CAPABILITIES ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
          <div>
            <span className="section-label mb-2 sm:mb-3">Service Scope</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 sm:mb-5 leading-tight" style={{ color: "var(--text-main)" }}>
              Precision Engineering & <span className="heading-highlight">Managed Execution</span>
            </h2>
            <p className="text-xs sm:text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              {service.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {service.deliverables.slice(0, 4).map((d) => (
                <div key={d} className="flex items-center gap-2 text-xs sm:text-sm font-medium" style={{ color: "var(--text-main)" }}>
                  <CheckCircleIcon size={16} color="var(--accent-teal)" className="shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "var(--card-border)" }}>
            <img src={service.overviewImg} alt={service.name} className="img-cover h-52 sm:h-80 md:h-96" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(7,13,24,0.9) 100%)" }} />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <span className="text-[0.65rem] sm:text-xs font-mono-tech uppercase tracking-widest text-[var(--accent)]">
                Guaranteed Excellence
              </span>
              <h3 className="font-display font-bold text-base sm:text-xl text-white mt-1 leading-tight">
                Backing your operations with SLA-driven performance.
              </h3>
            </div>
          </div>
        </div>

        {/* ── CAPABILITIES GRID ───────────────────────────────── */}
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-label mb-2 sm:mb-3">Core Offerings</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl" style={{ color: "var(--text-main)" }}>
              What We Deliver in <span className="heading-highlight">{service.name}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {service.capabilities.map((cap, i) => (
              <div key={cap.title} className="card p-4 sm:p-8 group hover:scale-[1.01] transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-mono-tech font-bold shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${service.color} 15%, transparent)`,
                      color: service.color,
                      border: `1px solid color-mix(in srgb, ${service.color} 30%, transparent)`,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-base sm:text-xl mb-1 sm:mb-2" style={{ color: "var(--text-main)" }}>
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── METHODOLOGY & PROCESS ────────────────────────────── */}
        <div className="mb-12 sm:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border h-52 sm:h-80 md:h-96" style={{ borderColor: "var(--card-border)" }}>
              <img src={service.methodologyImg} alt="Methodology" className="img-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 20%, rgba(7,13,24,0.92) 100%)" }} />
              <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:bottom-8 max-w-sm">
                <span className="section-label mb-1 sm:mb-2">Our Process</span>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white mb-1 leading-tight">
                  Proven Delivery Framework
                </h3>
                <p className="text-[0.75rem] sm:text-xs leading-relaxed text-slate-300">
                  Every engagement follows a structured, transparent process to eliminate risk and ensure project success.
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {service.methodology.map((m) => (
                <div key={m.step} className="card p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <span
                    className="font-mono-tech font-bold text-xs sm:text-base px-2.5 sm:px-3 py-1 rounded-lg shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${service.color} 12%, transparent)`,
                      color: service.color,
                    }}
                  >
                    {m.step}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-lg mb-1" style={{ color: "var(--text-main)" }}>
                      {m.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SLA & SERVICE TIERS ─────────────────────────────── */}
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-label mb-2 sm:mb-3">Service Level Agreements</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl" style={{ color: "var(--text-main)" }}>
              Flexible <span className="heading-highlight">Engagement Tiers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {service.slaTiers.map((t, i) => (
              <div
                key={t.tier}
                className="card p-5 sm:p-7 flex flex-col justify-between transition-all duration-300"
                style={
                  i === 1
                    ? { borderColor: service.color, background: `color-mix(in srgb, ${service.color} 6%, var(--card-bg))`, boxShadow: `0 8px 30px -10px color-mix(in srgb, ${service.color} 25%, transparent)` }
                    : { borderColor: "var(--card-border)" }
                }
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="text-[0.62rem] font-mono-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      style={
                        i === 1
                          ? { background: service.color, color: "#050B14" }
                          : { background: "var(--surface)", border: "1px solid var(--card-border)", color: "var(--text-muted)" }
                      }
                    >
                      {i === 1 ? "MOST POPULAR" : `TIER 0${i + 1}`}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl mb-3" style={{ color: "var(--text-main)" }}>
                    {t.tier}
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm mb-6">
                    <div className="p-3 rounded-xl flex items-center justify-between gap-2" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                      <span className="text-[0.65rem] uppercase tracking-wider font-mono-tech" style={{ color: "var(--text-dim)" }}>
                        Response Time
                      </span>
                      <span className="font-bold text-sm sm:text-base" style={{ color: service.color }}>
                        {t.responseTime}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl flex flex-col gap-0.5 text-left" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                      <span className="text-[0.65rem] uppercase tracking-wider font-mono-tech" style={{ color: "var(--text-dim)" }}>
                        Support Hours
                      </span>
                      <span className="font-semibold text-xs sm:text-sm" style={{ color: "var(--text-main)" }}>
                        {t.coverage}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl flex items-center justify-between gap-2" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                      <span className="text-[0.65rem] uppercase tracking-wider font-mono-tech" style={{ color: "var(--text-dim)" }}>
                        Target Uptime
                      </span>
                      <span className="font-semibold text-xs sm:text-sm" style={{ color: "var(--text-main)" }}>
                        {t.targetUptime}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate("contact")}
                  className={i === 1 ? "btn-primary w-full justify-center text-xs sm:text-sm" : "btn-outline w-full justify-center text-xs sm:text-sm"}
                >
                  Select {t.tier}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQS ────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <span className="section-label mb-2">Frequently Asked Questions</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl" style={{ color: "var(--text-main)" }}>
              Questions About <span className="heading-highlight">{service.name}</span>?
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {service.faqs.map((faq) => (
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
          <div className="flex justify-center mb-3">
            <MonitorCheckIcon size={36} color={service.color} />
          </div>
          <h2 className="font-display font-bold text-xl sm:text-3xl mb-3 leading-tight" style={{ color: "var(--text-main)" }}>
            Elevate Your Business With Our <span className="heading-highlight">{service.name}</span>
          </h2>
          <p className="text-xs sm:text-sm max-w-xl mx-auto mb-6 sm:mb-8" style={{ color: "var(--text-muted)" }}>
            Partner with DWPL to engineer, deploy, and manage your technology infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mobile-stack-btn">
            <button onClick={() => navigate("contact")} className="btn-primary text-xs sm:text-sm">
              Get Started <ArrowRightIcon size={16} />
            </button>
            <button onClick={() => navigate("services")} className="btn-outline text-xs sm:text-sm">
              Explore All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
