import { useState } from "react";
import type { Page } from "../App";
import { solutions } from "../data/solutions";
import { SearchIcon } from "../components/Icons";

interface Props { navigate: (to: Page, id?: string) => void; }

const IMG = {
  hero: "https://images.unsplash.com/photo-1782330421256-c65e36240e05?w=1600&h=700&fit=crop&auto=format",
};

const categories = ["All","Foundation","Connectivity","Security","Cloud","Applications","Intelligence","Strategy","Integration","Collaboration","Resilience","Procurement","Managed Services","Emerging"];

const catColors: Record<string, string> = {
  Foundation: "#16B8FF", Connectivity: "#635BFF", Security: "#06d6a0", Cloud: "#f59e0b",
  Applications: "#ec4899", Intelligence: "#16B8FF", Strategy: "#635BFF", Integration: "#06d6a0",
  Collaboration: "#f59e0b", Resilience: "#ec4899", Procurement: "#16B8FF", "Managed Services": "#635BFF", Emerging: "#06d6a0",
};

export default function SolutionsPage({ navigate }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = solutions.filter((s) => {
    const matchCat = activeCategory === "All" || s.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || s.title.toLowerCase().includes(q) || s.tagline.toLowerCase().includes(q) || s.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-[66px]">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[46vh] flex items-center">
        <img src={IMG.hero} alt="Solutions" className="absolute inset-0 img-cover opacity-65" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="section-label mb-3 sm:mb-5">Solution Portfolio</div>
              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[var(--text-main)] leading-none mb-4 sm:mb-6">
                19+ Technology <span className="text-[var(--accent)]">Solution Areas</span>
              </h1>
              <p className="text-sm sm:text-lg max-w-xl leading-relaxed text-[var(--text-muted)]">
                Whatever technology challenge your organisation faces — DWPL has the expertise to assess it, design the solution, implement it, secure it, manage it and support it.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { label: "Foundation",    count: solutions.filter(s=>s.category==="Foundation").length },
                { label: "Security",      count: solutions.filter(s=>s.category==="Security").length },
                { label: "Cloud",         count: solutions.filter(s=>s.category==="Cloud").length },
                { label: "Applications",  count: solutions.filter(s=>s.category==="Applications").length },
                { label: "Intelligence",  count: solutions.filter(s=>s.category==="Intelligence").length },
                { label: "Services",      count: solutions.filter(s=>s.category==="Managed Services").length },
              ].map((c) => (
                <button
                  key={c.label}
                  onClick={() => setActiveCategory(c.label === "Services" ? "Managed Services" : c.label)}
                  className="card p-3 sm:p-4 text-center cursor-pointer transition-all hover:border-[var(--accent)]"
                >
                  <div className="font-display font-black text-xl sm:text-2xl mb-0.5 sm:mb-1 text-[var(--accent)]">{c.count}</div>
                  <div className="text-[0.7rem] sm:text-xs text-[var(--text-muted)]">{c.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky filter bar ─────────────────────────────────── */}
      <div className="sticky z-30" style={{ top: "66px", background: "var(--card-bg)", borderBottom: "1px solid var(--card-border)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-shrink-0 w-full sm:w-auto">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon size={16} color="var(--text-muted)" />
              </div>
              <input
                className="form-input pl-9 text-xs sm:text-sm w-full sm:w-[220px]"
                style={{ height: "36px", padding: "0 0.75rem 0 2.25rem" }}
                placeholder="Search solutions…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Category tabs — scrollable */}
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="chip flex-shrink-0 text-xs"
                  style={activeCategory === cat ? { borderColor: "var(--accent)", color: "var(--text-main)", background: "rgba(22,184,255,0.15)" } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="ml-auto text-xs flex-shrink-0 hidden sm:block text-[var(--text-muted)]">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-16 sm:py-24 flex flex-col items-center">
            <div className="p-4 rounded-full mb-4" style={{ background: "var(--surface)" }}>
              <SearchIcon size={36} color="var(--text-muted)" />
            </div>
            <p className="text-base sm:text-lg font-display text-[var(--text-main)] mb-2">No solutions found</p>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">Try a different keyword or clear the filter.</p>
            <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="btn-outline mt-6 text-xs sm:text-sm">Clear filters</button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filtered.map((sol) => {
              const IconComponent = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="card glow-border cursor-pointer group"
                  onMouseEnter={() => setHoveredId(sol.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => navigate("solution-detail", sol.id)}
                >
                  {/* Top bar */}
                  <div
                    className="h-1 w-full rounded-t-[1rem] transition-all duration-500"
                    style={{
                      background: "var(--accent)",
                      opacity: hoveredId === sol.id ? 1 : 0.3,
                    }}
                  />

                  <div className="p-4 sm:p-7">
                    <div className="flex items-start justify-between mb-4 sm:mb-5">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                        style={{ background: "rgba(22,184,255,0.1)", border: "1px solid var(--card-border)" }}
                      >
                        <IconComponent size={20} color="var(--accent)" />
                      </div>
                      <span
                        className="text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg font-mono-tech font-semibold"
                        style={{ background: "var(--surface)", border: "1px solid var(--card-border)", color: "var(--accent)", fontSize: "0.62rem", letterSpacing: "0.08em" }}
                      >
                        {sol.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--text-main)] mb-1">{sol.title}</h3>
                    <p className="text-xs sm:text-sm mb-3 sm:mb-4 font-medium text-[var(--accent)]">{sol.tagline}</p>
                    <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 text-[var(--text-muted)]">
                      {sol.description.slice(0, 110)}…
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                      {sol.features.slice(0, 4).map((f) => (
                        <span key={f} className="text-[0.68rem] sm:text-xs px-2 py-0.5 rounded" style={{ background: "var(--surface)", border: "1px solid var(--card-border)", color: "var(--text-muted)" }}>
                          {f}
                        </span>
                      ))}
                      {sol.features.length > 4 && (
                        <span className="text-[0.68rem] sm:text-xs px-2 py-0.5 rounded" style={{ background: "var(--surface)", border: "1px solid var(--card-border)", color: "var(--text-muted)" }}>
                          +{sol.features.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="arrow-link text-xs font-semibold text-[var(--accent)] flex items-center gap-1">
                      Explore Solution <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── CTA Band ──────────────────────────────────────────── */}
      <section className="band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <h2 className="font-display font-bold text-xl sm:text-3xl text-[var(--text-main)] mb-3 sm:mb-4">
            Not sure which solution fits?<br />
            <span className="text-[var(--accent)]">Talk to our team.</span>
          </h2>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 max-w-md mx-auto text-[var(--text-muted)]">
            Our technology specialists will assess your environment and recommend the right solution.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mobile-stack-btn">
            <button onClick={() => navigate("contact")} className="btn-primary text-xs sm:text-sm">Request a Free Assessment →</button>
            <button onClick={() => navigate("services")} className="btn-outline text-xs sm:text-sm">View Our Services</button>
          </div>
        </div>
      </section>
    </div>
  );
}

