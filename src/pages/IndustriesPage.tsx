import { useState } from "react";
import type { Page } from "../App";
import { industriesData } from "../data/industries";
import { SearchIcon, ArrowRightIcon } from "../components/Icons";

interface Props {
  navigate: (to: Page, id?: string) => void;
}

const HERO_IMG = "https://images.unsplash.com/photo-1741991110666-88115e724741?w=1600&h=700&fit=crop&auto=format";

export default function IndustriesPage({ navigate }: Props) {
  const [activeId, setActiveId] = useState<string>("government");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredIndustries = industriesData.filter(
    (ind) =>
      ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.overview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selected =
    industriesData.find((i) => i.id === activeId) || filteredIndustries[0] || industriesData[0];
  const SelectedIcon = selected.icon;

  return (
    <div className="pt-[66px] min-h-screen pb-20">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[44vh] flex items-center">
        <img
          src={HERO_IMG}
          alt="Industries background"
          className="absolute inset-0 img-cover opacity-65"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
          <div className="max-w-3xl">
            <div className="section-label mb-3 sm:mb-4">Industry Verticals</div>
            <h1 className="font-display font-black text-2.5xl sm:text-5xl md:text-6xl text-[var(--text-main)] mb-3 sm:mb-6 leading-tight">
              Specialized IT Solutions for <span className="heading-highlight">Every Sector</span>
            </h1>
            <p className="text-xs sm:text-lg leading-relaxed text-[var(--text-muted)]">
              DWPL engineers tailored, compliant, and scalable technology foundations across 12+ industry sectors. Select an industry below to explore dedicated solutions and case studies.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE INDUSTRY EXPLORER ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Search bar */}
        <div className="mb-6 sm:mb-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="relative w-full sm:w-80">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <SearchIcon size={18} color="var(--text-muted)" />
            </div>
            <input
              type="text"
              placeholder="Search industries (e.g. Healthcare, Banking)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-10 text-xs sm:text-sm w-full h-10 sm:h-11"
            />
          </div>

          <div className="text-xs font-mono-tech text-[var(--text-muted)]">
            Showing {filteredIndustries.length} of {industriesData.length} Sectors
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          {/* Left Industry Selector (Grid of cards on mobile/tablet, vertical stack on desktop) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2 sm:gap-2.5 max-h-none lg:max-h-[720px] lg:overflow-y-auto pr-0 lg:pr-1 no-scrollbar">
            {filteredIndustries.map((ind) => {
              const IconComp = ind.icon;
              const isSelected = selected.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className="w-full text-left p-2.5 sm:p-4 rounded-2xl transition-all cursor-pointer border flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3.5 group"
                  style={{
                    background: isSelected ? "var(--card-bg)" : "var(--surface)",
                    borderColor: isSelected ? ind.color : "var(--card-border)",
                    boxShadow: isSelected ? `0 4px 20px -5px color-mix(in srgb, ${ind.color} 25%, transparent)` : "none",
                  }}
                >
                  <div
                    className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                    style={{
                      background: `color-mix(in srgb, ${ind.color} 15%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${ind.color} 30%, transparent)`,
                    }}
                  >
                    <IconComp size={16} color={ind.color} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-xs sm:text-base text-[var(--text-main)] leading-snug break-words">
                      {ind.name}
                    </h3>
                    <p className="text-[0.65rem] sm:text-xs text-[var(--text-muted)] truncate mt-0.5 hidden sm:block">
                      {ind.tagline}
                    </p>
                  </div>

                  <ArrowRightIcon
                    size={14}
                    color={isSelected ? ind.color : "var(--text-muted)"}
                    className="hidden lg:block shrink-0"
                  />
                </button>
              );
            })}
          </div>

          {/* Right Selected Industry Showcase Card (7 Cols) */}
          <div className="lg:col-span-7">
            {selected && (
              <div
                className="card overflow-hidden border p-0 transition-all duration-300"
                style={{ borderColor: `color-mix(in srgb, ${selected.color} 30%, transparent)` }}
              >
                {/* Hero Banner for Selected Industry */}
                <div className="relative min-h-[160px] h-44 sm:h-64 overflow-hidden">
                  <img
                    src={selected.overviewImg}
                    alt={selected.name}
                    className="img-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 20%, rgba(7,13,24,0.95) 100%)" }}
                  />

                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <div
                        className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: `color-mix(in srgb, ${selected.color} 20%, var(--card-bg))`,
                          border: `1px solid ${selected.color}`,
                        }}
                      >
                        <SelectedIcon size={16} color={selected.color} />
                      </div>
                      <span className="text-[0.62rem] sm:text-xs font-mono-tech uppercase tracking-wider text-white opacity-80">
                        Sector Overview
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-lg sm:text-2xl md:text-3xl text-white leading-tight break-words">
                      {selected.name}
                    </h2>
                  </div>
                </div>

                {/* Detailed Preview Content */}
                <div className="p-4 sm:p-8">
                  <p className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6" style={{ color: "var(--text-muted)" }}>
                    {selected.overview}
                  </p>

                  {/* Sector Key Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-5 sm:mb-8">
                    {selected.stats.map((s) => (
                      <div key={s.label} className="p-2 sm:p-3 rounded-xl text-center" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                        <div className="font-display font-black text-sm sm:text-xl mb-0.5 break-words" style={{ color: selected.color }}>
                          {s.value}
                        </div>
                        <div className="text-[0.6rem] sm:text-[0.68rem] font-medium leading-tight text-[var(--text-muted)]">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Solutions Provided */}
                  <div className="mb-5 sm:mb-8">
                    <h4 className="font-display font-bold text-[0.7rem] sm:text-xs uppercase tracking-wider mb-2.5 sm:mb-4 text-[var(--text-muted)]">
                      Core Technical Capabilities
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {selected.solutionsProvided.map((sol) => {
                        const SolIcon = sol.icon;
                        return (
                          <div
                            key={sol.title}
                            className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl border text-left"
                            style={{ background: "var(--surface)", borderColor: "var(--card-border)" }}
                          >
                            <div className="p-1.5 sm:p-2 rounded-lg mt-0.5 shrink-0" style={{ background: `color-mix(in srgb, ${selected.color} 10%, transparent)` }}>
                              <SolIcon size={14} color={selected.color} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-display font-semibold text-xs sm:text-sm text-[var(--text-main)] leading-snug">
                                {sol.title}
                              </div>
                              <div className="text-[0.68rem] sm:text-xs text-[var(--text-muted)] mt-0.5 leading-normal">
                                {sol.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 pt-4 border-t mobile-stack-btn" style={{ borderColor: "var(--card-border)" }}>
                    <button
                      onClick={() => navigate("industry-detail", selected.id)}
                      className="btn-primary w-full sm:w-auto justify-center text-xs sm:text-sm"
                    >
                      Open Full Industry Page <ArrowRightIcon size={16} />
                    </button>
                    <button
                      onClick={() => navigate("contact")}
                      className="btn-outline w-full sm:w-auto justify-center text-xs sm:text-sm"
                    >
                      Consult Sector Specialist
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── ALL INDUSTRIES GRID ───────────────────────────────── */}
      <section className="band py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-label mb-2 sm:mb-3">Complete Sector Directory</span>
            <h2 className="font-display font-bold text-xl sm:text-3xl text-[var(--text-main)]">
              All 12 Sector Solutions
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
            {industriesData.map((ind) => {
              const IconComp = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => navigate("industry-detail", ind.id)}
                  className="card p-3 sm:p-5 text-center cursor-pointer group hover:scale-105 transition-all flex flex-col items-center justify-center border"
                  style={{ borderColor: "var(--card-border)" }}
                >
                  <div
                    className="mb-2 sm:mb-3 p-2 sm:p-3 rounded-xl transition-transform group-hover:scale-110 shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${ind.color} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${ind.color} 25%, transparent)`,
                    }}
                  >
                    <IconComp size={18} color={ind.color} />
                  </div>
                  <div className="text-[0.75rem] sm:text-xs font-bold text-[var(--text-main)] mb-1 leading-snug break-words">
                    {ind.name}
                  </div>
                  <div className="text-[0.62rem] font-mono-tech font-semibold mt-auto pt-1.5" style={{ color: ind.color }}>
                    Explore Page →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
