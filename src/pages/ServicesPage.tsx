import type { Page } from "../App";
import { servicesData } from "../data/services";
import { ArrowRightIcon } from "../components/Icons";

interface Props {
  navigate: (to: Page, id?: string) => void;
}

const HERO_IMG = "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?w=1600&h=700&fit=crop&auto=format";

export default function ServicesPage({ navigate }: Props) {
  return (
    <div className="pt-[66px] min-h-screen pb-20">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[48vh] flex items-center">
        <img src={HERO_IMG} alt="Services" className="absolute inset-0 img-cover opacity-65" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-end">
            <div>
              <div className="section-label mb-3 sm:mb-5">Our Service Specializations</div>
              <h1 className="font-display font-black text-2.5xl sm:text-5xl md:text-6xl text-[var(--text-main)] mb-3 sm:mb-5 leading-tight">
                Enterprise Execution & <span className="heading-highlight">Managed Support</span>
              </h1>
              <p className="text-xs sm:text-lg leading-relaxed text-[var(--text-muted)]">
                DWPL delivers SLA-backed technology services — from strategic IT consulting and network engineering to 24/7 managed cloud operations and cybersecurity.
              </p>
            </div>

            {/* Quick nav cards - fully visible text on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {servicesData.map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => navigate("service-detail", service.id)}
                    className="card p-3 sm:p-4 text-left group transition-all hover:scale-[1.02] cursor-pointer border flex items-center gap-3 sm:flex-col sm:items-start sm:gap-0"
                    style={{ borderColor: "var(--card-border)" }}
                  >
                    <div
                      className="p-2 sm:p-2.5 rounded-xl inline-block sm:mb-2 transition-transform group-hover:scale-110 shrink-0"
                      style={{
                        background: `color-mix(in srgb, ${service.color} 15%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${service.color} 30%, transparent)`,
                      }}
                    >
                      <ServiceIcon size={18} color={service.color} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-display font-bold text-[var(--text-main)] text-xs sm:text-sm leading-snug break-words">
                        {service.name}
                      </div>
                      <div className="text-[0.65rem] font-mono-tech mt-0.5 sm:mt-1 font-semibold" style={{ color: service.color }}>
                        Explore Specialization →
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ──────────────────────────────────── */}
      {servicesData.map((cat, idx) => {
        const CategoryIcon = cat.icon;
        return (
          <section key={cat.id} id={cat.id} className={idx % 2 === 1 ? "band py-10 sm:py-20" : "py-10 sm:py-20"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-14 items-center">
                {/* Image side */}
                <div className={`order-1 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative rounded-2xl overflow-hidden min-h-[200px] h-52 sm:h-80 lg:h-96 shadow-2xl border" style={{ borderColor: `color-mix(in srgb, ${cat.color} 30%, transparent)` }}>
                    <img src={cat.overviewImg} alt={cat.name} className="img-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(7,13,24,0.95) 100%)" }} />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg shrink-0"
                        style={{
                          background: `color-mix(in srgb, ${cat.color} 20%, var(--card-bg))`,
                          border: `1px solid ${cat.color}`,
                        }}
                      >
                        <CategoryIcon size={20} color={cat.color} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-display font-bold text-white text-sm sm:text-lg leading-tight break-words">{cat.name}</div>
                        <div className="text-[0.68rem] sm:text-xs font-mono-tech text-slate-300 leading-tight break-words mt-0.5">{cat.deliverables[0]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className={`order-2 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="section-label mb-2 sm:mb-3">
                    Service Specialization
                  </div>
                  <h2 className="font-display font-bold text-xl sm:text-3xl text-[var(--text-main)] mb-2 sm:mb-4 leading-tight">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-base leading-relaxed mb-4 sm:mb-6 text-[var(--text-muted)]">
                    {cat.tagline}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-8">
                    {cat.capabilities.slice(0, 4).map((cap) => (
                      <div key={cap.title} className="card p-3 sm:p-4 border" style={{ borderColor: "var(--card-border)" }}>
                        <div className="w-2 h-2 rounded-full mb-1.5" style={{ background: cat.color }} />
                        <div className="font-display font-semibold text-[var(--text-main)] text-xs sm:text-sm mb-1 leading-snug">{cap.title}</div>
                        <p className="text-[0.75rem] sm:text-xs leading-relaxed text-[var(--text-muted)]">{cap.desc}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate("service-detail", cat.id)}
                    className="btn-primary w-full sm:w-auto justify-center text-xs sm:text-sm"
                  >
                    View Details & Capabilities <ArrowRightIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── MANAGED PACKAGES ──────────────────────────────────── */}
      <section className="band py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-14">
            <span className="section-label mb-2 sm:mb-3">SLA-Driven Delivery</span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--text-main)] mb-2 sm:mb-3">
              Flexible <span className="heading-highlight">Engagement Tiers</span>
            </h2>
            <p className="text-xs sm:text-sm max-w-md mx-auto text-[var(--text-muted)]">
              Choose the service package that fits your operational scale. All packages include defined response SLAs and monthly executive reports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto items-stretch">
            {[
              { name: "Essential Tier", target: "SMEs & Branch Offices", response: "< 4 Hours", coverage: "Business Hours (8am - 5pm)", highlight: false, badge: "STANDARD SLA" },
              { name: "Professional Tier", target: "Growing Organizations (50-200 users)", response: "< 1 Hour", coverage: "Extended (7am - 9pm)", highlight: true, badge: "MOST POPULAR" },
              { name: "Enterprise Critical", target: "Large Scale & Public Infrastructure", response: "< 15 Mins", coverage: "24/7/365 Dedicated Support", highlight: false, badge: "MISSION CRITICAL" },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="card p-5 sm:p-7 relative flex flex-col justify-between transition-all duration-300 hover:border-[var(--accent)]"
                style={
                  pkg.highlight
                    ? { border: "1px solid var(--accent)", background: "color-mix(in srgb, var(--accent) 5%, var(--card-bg))", boxShadow: "0 8px 30px -10px rgba(22,184,255,0.2)" }
                    : { border: "1px solid var(--card-border)" }
                }
              >
                <div>
                  {/* Top pill badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="text-[0.62rem] font-mono-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      style={
                        pkg.highlight
                          ? { background: "var(--accent)", color: "#050B14" }
                          : { background: "var(--surface)", border: "1px solid var(--card-border)", color: "var(--text-muted)" }
                      }
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-[var(--text-main)] mb-1 leading-tight">{pkg.name}</h3>
                  <p className="text-xs mb-5 text-[var(--text-muted)]">{pkg.target}</p>

                  <div className="space-y-2.5 mb-6 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl flex items-center justify-between gap-2" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                      <span className="text-[0.65rem] uppercase font-mono-tech tracking-wider text-[var(--text-muted)] shrink-0">Response Time</span>
                      <span className="font-bold text-sm sm:text-base text-[var(--accent)]">{pkg.response}</span>
                    </div>

                    <div className="p-3 rounded-xl flex flex-col gap-0.5 text-left" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                      <span className="text-[0.65rem] uppercase font-mono-tech tracking-wider text-[var(--text-muted)]">Coverage Hours</span>
                      <span className="font-semibold text-xs sm:text-sm text-[var(--text-main)]">{pkg.coverage}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate("contact")}
                  className={pkg.highlight ? "btn-primary w-full justify-center text-xs sm:text-sm" : "btn-outline w-full justify-center text-xs sm:text-sm"}
                >
                  Request Service Tier <ArrowRightIcon size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h2 className="font-display font-bold text-xl sm:text-3xl text-[var(--text-main)] mb-3">
          Need a Custom <span className="heading-highlight">Service Level Agreement?</span>
        </h2>
        <p className="text-xs sm:text-sm mb-6 sm:mb-8 max-w-md mx-auto text-[var(--text-muted)]">
          We tailor service delivery scope to your specific business requirements, staffing model, and infrastructure complexity.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mobile-stack-btn">
          <button onClick={() => navigate("contact")} className="btn-primary text-xs sm:text-sm">
            Request Custom Consultation <ArrowRightIcon size={16} />
          </button>
          <button onClick={() => navigate("solutions")} className="btn-outline text-xs sm:text-sm">
            Explore Tech Solutions
          </button>
        </div>
      </section>
    </div>
  );
}
