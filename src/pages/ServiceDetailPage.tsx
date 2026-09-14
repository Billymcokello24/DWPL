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

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-28 w-full">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate("services")}
              className="text-xs font-mono-tech flex items-center gap-1.5 transition-colors"
              style={{ color: "var(--accent)" }}
            >
              ← All Services
            </button>
            <span style={{ color: "var(--text-dim)" }}>/</span>
            <span className="text-xs font-mono-tech" style={{ color: "var(--text-muted)" }}>
              {service.name}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: `color-mix(in srgb, ${service.color} 15%, transparent)`,
                border: `1px solid color-mix(in srgb, ${service.color} 30%, transparent)`,
              }}
            >
              <Icon size={24} color={service.color} />
            </div>
            <span className="section-label">Service Specialization</span>
          </div>

          <h1
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight max-w-4xl"
            style={{ color: "var(--text-main)" }}
          >
            {service.name}
          </h1>

          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {service.tagline}
          </p>
        </div>
      </section>

      {/* ── OVERVIEW & CAPABILITIES ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="section-label mb-3">Service Scope</span>
            <h2 className="font-display font-bold text-3xl mb-5" style={{ color: "var(--text-main)" }}>
              Precision Engineering & <span className="heading-highlight">Managed Execution</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              {service.overview}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {service.deliverables.slice(0, 4).map((d) => (
                <div key={d} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--text-main)" }}>
                  <CheckCircleIcon size={16} color="var(--accent-teal)" />
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "var(--card-border)" }}>
            <img src={service.overviewImg} alt={service.name} className="img-cover h-64 sm:h-80 md:h-96" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(7,13,24,0.9) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent)]">
                Guaranteed Excellence
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1">
                Backing your operations with SLA-driven performance.
              </h3>
            </div>
          </div>
        </div>

        {/* ── CAPABILITIES GRID ───────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="section-label mb-3">Core Offerings</span>
            <h2 className="font-display font-bold text-3xl" style={{ color: "var(--text-main)" }}>
              What We Deliver in <span className="heading-highlight">{service.name}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, i) => (
              <div key={cap.title} className="card p-8 group hover:scale-[1.01] transition-all">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-mono-tech font-bold flex-shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${service.color} 15%, transparent)`,
                      color: service.color,
                      border: `1px solid color-mix(in srgb, ${service.color} 30%, transparent)`,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text-main)" }}>
                      {cap.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── METHODOLOGY & PROCESS ────────────────────────────── */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border h-64 sm:h-80 md:h-96" style={{ borderColor: "var(--card-border)" }}>
              <img src={service.methodologyImg} alt="Methodology" className="img-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,13,24,0.8) 0%, transparent 100%)" }} />
              <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-sm">
                <span className="section-label mb-2">Our Process</span>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Proven Delivery Framework
                </h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  Every engagement follows a structured, transparent process to eliminate risk and ensure project success.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {service.methodology.map((m) => (
                <div key={m.step} className="card p-6 flex items-start gap-4">
                  <span
                    className="font-mono-tech font-bold text-lg px-3 py-1 rounded-lg flex-shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${service.color} 12%, transparent)`,
                      color: service.color,
                    }}
                  >
                    {m.step}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1" style={{ color: "var(--text-main)" }}>
                      {m.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SLA & SERVICE TIERS ─────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="section-label mb-3">Service Level Agreements</span>
            <h2 className="font-display font-bold text-3xl" style={{ color: "var(--text-main)" }}>
              Flexible <span className="heading-highlight">Engagement Tiers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.slaTiers.map((t, i) => (
              <div
                key={t.tier}
                className="card p-8 text-center flex flex-col justify-between"
                style={
                  i === 1
                    ? { borderColor: service.color, background: `color-mix(in srgb, ${service.color} 5%, var(--card-bg))` }
                    : {}
                }
              >
                <div>
                  {i === 1 && (
                    <span className="section-label text-[0.6rem] mb-4">Most Popular</span>
                  )}
                  <h3 className="font-display font-bold text-xl mb-4" style={{ color: "var(--text-main)" }}>
                    {t.tier}
                  </h3>

                  <div className="space-y-4 text-sm mb-8">
                    <div>
                      <div className="text-xs uppercase tracking-wider font-mono-tech mb-0.5" style={{ color: "var(--text-dim)" }}>
                        Response Time
                      </div>
                      <div className="font-bold text-base" style={{ color: service.color }}>
                        {t.responseTime}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-wider font-mono-tech mb-0.5" style={{ color: "var(--text-dim)" }}>
                        Support Hours
                      </div>
                      <div className="font-medium" style={{ color: "var(--text-main)" }}>
                        {t.coverage}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-wider font-mono-tech mb-0.5" style={{ color: "var(--text-dim)" }}>
                        Target Uptime
                      </div>
                      <div className="font-medium" style={{ color: "var(--text-main)" }}>
                        {t.targetUptime}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate("contact")}
                  className={i === 1 ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}
                >
                  Choose {t.tier}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQS ────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="section-label mb-2">Frequently Asked Questions</span>
            <h2 className="font-display font-bold text-2xl" style={{ color: "var(--text-main)" }}>
              Questions About <span className="heading-highlight">{service.name}</span>?
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq) => (
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
          <MonitorCheckIcon size={40} color={service.color} />
          <h2 className="font-display font-bold text-3xl mt-4 mb-3" style={{ color: "var(--text-main)" }}>
            Elevate Your Business With Our <span className="heading-highlight">{service.name}</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
            Partner with DWPL to engineer, deploy, and manage your technology infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate("contact")} className="btn-primary">
              Get Started <ArrowRightIcon size={16} />
            </button>
            <button onClick={() => navigate("services")} className="btn-outline">
              Explore All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
