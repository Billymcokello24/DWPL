import { useState, useEffect } from "react";
import type { Page, Theme } from "../App";
import {
  SunIcon, MoonIcon, ServerIcon, NetworkIcon, ShieldIcon, CloudIcon,
  DatabaseIcon, CodeIcon, CpuIcon, BarChartIcon, RefreshCwIcon, BriefcaseIcon,
  ShoppingBagIcon, LockIcon, LightbulbIcon, ArrowRightIcon
} from "./Icons";

interface NavbarProps {
  currentPage: Page;
  navigate: (to: Page, solutionId?: string) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const solutionsList = [
  { id: "it-infrastructure", label: "IT Infrastructure", Icon: ServerIcon },
  { id: "networking", label: "Enterprise Networking", Icon: NetworkIcon },
  { id: "cybersecurity", label: "Cybersecurity", Icon: ShieldIcon },
  { id: "cloud", label: "Cloud Computing", Icon: CloudIcon },
  { id: "data-center", label: "Data Center", Icon: DatabaseIcon },
  { id: "software-dev", label: "Software Development", Icon: CodeIcon },
  { id: "enterprise-systems", label: "Enterprise Systems", Icon: CpuIcon },
  { id: "ai-automation", label: "AI & Automation", Icon: SparklesIconHelper },
  { id: "data-analytics", label: "Data & Analytics", Icon: BarChartIcon },
  { id: "digital-transform", label: "Digital Transformation", Icon: RefreshCwIcon },
  { id: "systems-integration", label: "Systems Integration", Icon: CpuIcon },
  { id: "communication", label: "Communication & Collab", Icon: BriefcaseIcon },
  { id: "business-continuity", label: "Business Continuity", Icon: LockIcon },
  { id: "ict-procurement", label: "ICT Procurement", Icon: ShoppingBagIcon },
  { id: "managed-it", label: "Managed IT Services", Icon: MonitorCheckHelper },
  { id: "physical-security", label: "Physical Security Tech", Icon: ShieldIcon },
  { id: "iot-smart", label: "IoT & Smart Technology", Icon: CpuIcon },
  { id: "emerging-tech", label: "Emerging Technologies", Icon: LightbulbIcon },
];

function SparklesIconHelper(props: any) {
  return (
    <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function MonitorCheckHelper(props: any) {
  return (
    <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4M8 21h8M9 10l2 2 4-4" />
    </svg>
  );
}

const navItems: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Services", page: "services" },
  { label: "Industries", page: "industries" },
  { label: "Partners", page: "partners" },
  { label: "Projects", page: "projects" },
  { label: "Resources", page: "resources" },
  { label: "Careers", page: "careers" },
];

export default function Navbar({ currentPage, navigate, theme, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const go = (page: Page, id?: string) => {
    navigate(page, id);
    setMobileOpen(false);
    setShowSolutions(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-40 transition-all duration-300"
        style={{
          background: "var(--nav-bg)",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[66px]">
          {/* Logo */}
          <button onClick={() => go("home")} className="flex items-center gap-3 group shrink-0 cursor-pointer text-left">
            <img
              src="/logos/dwl-logo.png"
              alt="Digital World Prodigy Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              style={{ maxWidth: "120px" }}
            />
            <div className="hidden sm:block">
              <div className="font-display font-bold text-sm leading-tight tracking-tight" style={{ color: "var(--text-main)" }}>Digital World Prodigy</div>
              <div className="font-mono-tech" style={{ color: "var(--accent)", fontSize: "0.55rem", letterSpacing: "0.18em" }}>TECHNOLOGY WITHOUT LIMITS</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => go(item.page)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all relative cursor-pointer"
                style={{ color: currentPage === item.page ? "var(--accent)" : "var(--text-muted)" }}
              >
                {item.label}
                {currentPage === item.page && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                )}
              </button>
            ))}

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <button
                className="px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-all cursor-pointer"
                style={{ color: (currentPage === "solutions" || currentPage === "solution-detail") ? "var(--accent)" : "var(--text-muted)" }}
                onClick={() => go("solutions")}
              >
                Solutions
                <svg
                  width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transition: "transform 0.2s", transform: showSolutions ? "rotate(180deg)" : "none" }}
                >
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>

              {showSolutions && (
                <div
                  className="absolute top-full right-1/2 translate-x-1/2 w-[720px] rounded-b-2xl shadow-xl z-50"
                  style={{
                    padding: "1.5rem",
                    background: "var(--surface)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4 pb-2" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <span className="font-mono-tech text-xs tracking-wider" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>SOLUTION AREAS</span>
                    <span className="text-xs" style={{ color: "var(--text-dim)" }}>18 Enterprise Solutions</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 mb-4">
                    {solutionsList.map(({ id, label, Icon }) => (
                      <button
                        key={id}
                        onClick={() => go("solution-detail", id)}
                        className="flex items-center gap-2.5 text-left px-3 py-2 rounded-lg text-xs transition-all cursor-pointer hover:bg-sky-500/10"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <Icon size={16} color="var(--accent)" />
                        <span className="font-medium" style={{ color: "var(--text-main)" }}>{label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="pt-3 flex items-center justify-between" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <span className="text-xs" style={{ color: "var(--text-dim)" }}>Need custom technology consulting?</span>
                    <button onClick={() => go("solutions")} className="btn-primary text-xs py-1.5 px-4">
                      Explore All Solutions →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer border"
              style={{ background: "var(--surface)", borderColor: "var(--border-subtle)", color: "var(--text-main)" }}
              aria-label="Toggle theme"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunIcon size={17} color="var(--accent)" /> : <MoonIcon size={17} color="var(--accent)" />}
            </button>

            {/* Desktop-only action buttons */}
            <button onClick={() => go("support")} className="hidden lg:flex btn-ghost text-xs py-1.5">
              Support
            </button>
            <button onClick={() => go("contact")} className="btn-primary text-xs py-2 px-4 hidden lg:flex">
              Get Consultation
            </button>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all cursor-pointer shrink-0 border shadow-xs"
              style={{
                background: mobileOpen ? "rgba(56,189,248,0.15)" : "var(--surface)",
                borderColor: mobileOpen ? "var(--accent)" : "var(--border-subtle)",
                color: mobileOpen ? "var(--accent)" : "var(--text-main)"
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE SIDE-DRAWER MENU ──────────────────────────────── */}
      <div
        className={`lg:hidden fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity duration-300 mobile-drawer-overlay ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Sliding Drawer Container */}
        <div
          className={`relative w-[85vw] max-w-[320px] h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 transform transition-transform duration-300 ease-out mobile-drawer-content ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "var(--surface)",
            borderLeft: "1px solid var(--card-border)",
          }}
        >
          <div>
            {/* Drawer Header */}
            <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-[var(--surface)] z-10" style={{ borderColor: "var(--border-subtle)" }}>
              <div className="flex items-center gap-2.5">
                <img src="/logos/dwl-logo.png" alt="DWPL Logo" className="h-7 w-auto object-contain" />
                <div>
                  <span className="font-display font-bold text-xs block leading-none" style={{ color: "var(--text-main)" }}>Digital World Prodigy</span>
                  <span className="font-mono-tech block mt-0.5" style={{ color: "var(--accent)", fontSize: "0.5rem" }}>NAVIGATION MENU</span>
                </div>
              </div>

              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer border"
                style={{ background: "var(--bg)", borderColor: "var(--border-subtle)" }}
                aria-label="Close Menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Drawer Nav Links */}
            <div className="p-3.5 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => go(item.page)}
                  className="w-full text-left px-4 py-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer min-h-[44px]"
                  style={{
                    color: currentPage === item.page ? "var(--accent)" : "var(--text-muted)",
                    background: currentPage === item.page ? "rgba(56,189,248,0.12)" : "transparent",
                    border: currentPage === item.page ? "1px solid rgba(56,189,248,0.25)" : "1px solid transparent",
                  }}
                >
                  <span>{item.label}</span>
                  {currentPage === item.page && <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />}
                </button>
              ))}

              {/* Solutions Accordion */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileExpanded(!mobileExpanded)}
                  className="w-full text-left px-4 py-3 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer transition-colors min-h-[44px]"
                  style={{
                    color: (currentPage === "solutions" || currentPage === "solution-detail") ? "var(--accent)" : "var(--text-muted)",
                    background: (currentPage === "solutions" || currentPage === "solution-detail") ? "rgba(56,189,248,0.08)" : "transparent",
                  }}
                >
                  <span>Solutions Catalogue (18)</span>
                  <svg
                    width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round"
                    style={{ transition: "transform 0.25s", transform: mobileExpanded ? "rotate(180deg)" : "none" }}
                  >
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </button>

                {mobileExpanded && (
                  <div className="pl-3 pr-1 py-2 space-y-1 max-h-60 overflow-y-auto no-scrollbar rounded-xl my-1 border" style={{ background: "var(--bg)", borderColor: "var(--border-subtle)" }}>
                    <button
                      onClick={() => go("solutions")}
                      className="w-full flex items-center gap-2 text-left px-3 py-2 rounded-lg text-xs font-bold cursor-pointer"
                      style={{ color: "var(--accent)" }}
                    >
                      <span>Explore All 18 Solutions →</span>
                    </button>
                    {solutionsList.map(({ id, label, Icon }) => (
                      <button
                        key={id}
                        onClick={() => go("solution-detail", id)}
                        className="w-full flex items-center gap-2.5 text-left px-3 py-2 rounded-lg text-[0.75rem] cursor-pointer hover:text-[var(--accent)]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <Icon size={14} color="var(--accent)" />
                        <span className="truncate">{label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Support Link inside navigation list */}
              <button
                onClick={() => go("support")}
                className="w-full text-left px-4 py-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer min-h-[44px]"
                style={{
                  color: currentPage === "support" ? "var(--accent)" : "var(--text-muted)",
                  background: currentPage === "support" ? "rgba(56,189,248,0.12)" : "transparent",
                }}
              >
                <span>Support Center</span>
                {currentPage === "support" && <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />}
              </button>
            </div>
          </div>

          {/* Drawer Footer Actions — Get Consultation Button Prominently Placed Here */}
          <div className="p-4 border-t space-y-2.5 sticky bottom-0 bg-[var(--surface)]" style={{ borderColor: "var(--border-subtle)" }}>
            <button
              onClick={toggleTheme}
              className="w-full py-2.5 px-3.5 rounded-xl text-xs font-medium flex items-center justify-between cursor-pointer border min-h-[44px]"
              style={{ background: "var(--bg)", borderColor: "var(--border-subtle)", color: "var(--text-main)" }}
            >
              <span className="font-semibold">Appearance</span>
              <span className="text-[0.7rem] font-mono-tech font-bold uppercase flex items-center gap-1.5" style={{ color: "var(--accent)" }}>
                {theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}
              </span>
            </button>

            <button onClick={() => go("contact")} className="btn-primary w-full justify-center text-xs py-3 min-h-[44px] shadow-lg">
              Get Consultation <ArrowRightIcon size={15} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
