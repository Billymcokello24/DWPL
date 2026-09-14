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

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <div className="section-label mb-5">Our Service Specializations</div>
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[var(--text-main)] mb-5 leading-tight">
                Enterprise Execution & <span className="heading-highlight">Managed Support</span>
              </h1>
              <p className="text-lg leading-relaxed text-[var(--text-muted)]">
                DWPL delivers SLA-backed technology services — from strategic IT consulting and network engineering to 24/7 managed cloud operations and cybersecurity.
              </p>
            </div>

            {/* Quick nav cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {servicesData.map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => navigate("service-detail", service.id)}
                    className="card p-4 text-left group transition-all hover:scale-[1.02] cursor-pointer border"
                    style={{ borderColor: "var(--card-border)" }}
                  >
                    <div
                      className="p-2.5 rounded-xl inline-block mb-2 transition-transform group-hover:scale-110"
                      style={{
                        background: `color-mix(in srgb, ${service.color} 15%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${service.color} 30%, transparent)`,
                      }}
                    >
                      <ServiceIcon size={20} color={service.color} />
                    </div>
                    <div className="font-display font-bold text-[var(--text-main)] text-xs truncate">
                      {service.name}
                    </div>
                    <div className="text-[0.65rem] font-mono-tech mt-1" style={{ color: service.color }}>
                      Explore Page →
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
          <section key={cat.id} id={cat.id} className={idx % 2 === 1 ? "band py-12 sm:py-20" : "py-12 sm:py-20"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                {/* Image side */}
                <div className={`order-1 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative rounded-2xl overflow-hidden h-56 sm:h-80 lg:h-96 shadow-2xl border" style={{ borderColor: `color-mix(in srgb, ${cat.color} 30%, transparent)` }}>
                    <img src={cat.overviewImg} alt={cat.name} className="img-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(7,13,24,0.95) 100%)" }} />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                        style={{
                          background: `color-mix(in srgb, ${cat.color} 20%, var(--card-bg))`,
                          border: `1px solid ${cat.color}`,
                        }}
                      >
                        <CategoryIcon size={22} color={cat.color} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-display font-bold text-white text-base sm:text-lg truncate">{cat.name}</div>
                        <div className="text-xs font-mono-tech text-slate-300 truncate">{cat.deliverables[0]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className={`order-2 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="section-label mb-3">
                    Service Specialization
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-main)] mb-3 sm:mb-4 leading-tight">
                    {cat.name}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                    {cat.tagline}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                    {cat.capabilities.slice(0, 4).map((cap) => (
                      <div key={cap.title} className="card p-3.5 sm:p-4 border" style={{ borderColor: "var(--card-border)" }}>
                        <div className="w-2 h-2 rounded-full mb-2" style={{ background: cat.color }} />
                        <div className="font-display font-semibold text-[var(--text-main)] text-sm mb-1">{cap.title}</div>
                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">{cap.desc}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate("service-detail", cat.id)}
                    className="btn-primary w-full sm:w-auto justify-center"
                  >
                    View Full {cat.name} Page <ArrowRightIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── MANAGED PACKAGES ──────────────────────────────────── */}
      <section className="band py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14">
            <span className="section-label mb-3">SLA-Driven Delivery</span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--text-main)] mb-3">
              Flexible <span className="heading-highlight">Engagement Tiers</span>
            </h2>
            <p className="text-xs sm:text-sm max-w-md mx-auto text-[var(--text-muted)]">
              Choose the service package that fits your operational scale. All packages include defined response SLAs and monthly executive reports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Essential Tier", target: "SMEs & Branch Offices", response: "< 4 Hours", coverage: "Business Hours (8am - 5pm)", highlight: false },
              { name: "Professional Tier", target: "Growing Organizations (50-200 users)", response: "< 1 Hour", coverage: "Extended (7am - 9pm)", highlight: true },
              { name: "Enterprise Mission-Critical", target: "Large Scale & Public Infrastructure", response: "< 15 Mins", coverage: "24/7/365 Non-Stop Dedicated", highlight: false },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="card p-6 sm:p-8 relative flex flex-col justify-between"
                style={pkg.highlight ? { border: "1px solid var(--accent)", background: "var(--card-bg)" } : {}}
              >
                {pkg.highlight && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[0.65rem] sm:text-xs font-mono-tech font-bold uppercase tracking-wider shadow-md"
                    style={{ background: "var(--accent)", color: "#050B14" }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div>
                  <div className="font-display font-black text-xl sm:text-2xl text-[var(--text-main)] mb-1 mt-1">{pkg.name}</div>
                  <div className="text-xs mb-6 text-[var(--text-muted)]">{pkg.target}</div>

                  <div className="space-y-3 sm:space-y-4 mb-8 text-sm">
                    <div className="p-3 rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                      <div className="text-[0.65rem] uppercase font-mono-tech tracking-wider text-[var(--text-muted)] mb-0.5">Response Time</div>
                      <div className="font-bold text-base text-[var(--accent)]">{pkg.response}</div>
                    </div>

                    <div className="p-3 rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                      <div className="text-[0.65rem] uppercase font-mono-tech tracking-wider text-[var(--text-muted)] mb-0.5">Coverage Hours</div>
                      <div className="font-medium text-[var(--text-main)]">{pkg.coverage}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate("contact")}
                  className={pkg.highlight ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}
                >
                  Request Service Tier <ArrowRightIcon size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-main)] mb-3">
          Need a Custom <span className="heading-highlight">Service Level Agreement?</span>
        </h2>
        <p className="text-xs sm:text-sm mb-8 max-w-md mx-auto text-[var(--text-muted)]">
          We tailor service delivery scope to your specific business requirements, staffing model, and infrastructure complexity.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mobile-stack-btn">
          <button onClick={() => navigate("contact")} className="btn-primary">
            Request Custom Consultation <ArrowRightIcon size={16} />
          </button>
          <button onClick={() => navigate("solutions")} className="btn-outline">
            Explore Tech Solutions
          </button>
        </div>
      </section>
    </div>
  );
}
