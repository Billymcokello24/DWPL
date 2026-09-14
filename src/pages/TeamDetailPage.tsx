import { useEffect } from "react";
import type { Page } from "../App";
import { getTeamMemberById } from "../data/team";
import { CheckCircleIcon, SparklesIcon, GraduationCapIcon, AwardIcon, ExternalLinkIcon } from "../components/Icons";

interface Props {
  id?: string;
  navigate: (to: Page, id?: string) => void;
}

export default function TeamDetailPage({ id, navigate }: Props) {
  const member = getTeamMemberById(id || "david-wesonga");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!member) {
    return (
      <div className="pt-28 pb-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-3xl mb-4" style={{ color: "var(--text-main)" }}>
          Team Profile Not Found
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          The requested leadership profile could not be located.
        </p>
        <button onClick={() => navigate("about")} className="btn-primary">
          ← Back to About Us
        </button>
      </div>
    );
  }

  const initials = member.name.split(" ").map(n => n[0]).join("");

  return (
    <div className="pt-[66px] min-h-screen pb-24">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center band border-b" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
          <button
            onClick={() => navigate("about")}
            className="inline-flex items-center gap-2 text-xs font-mono-tech mb-8 px-3.5 py-1.5 rounded-lg border transition-colors hover:border-[var(--accent)] cursor-pointer"
            style={{ background: "var(--surface)", borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
          >
            ← Back to Leadership Team
          </button>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Profile Photo Container */}
            <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
              <div
                className="w-60 h-60 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-2 relative group"
                style={{ borderColor: `color-mix(in srgb, ${member.color} 40%, transparent)` }}
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center font-display font-black text-4xl"
                    style={{ background: `color-mix(in srgb, ${member.color} 20%, transparent)`, color: "var(--text-main)" }}
                  >
                    {initials}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Profile Bio Header */}
            <div className="md:col-span-8 lg:col-span-9">
              <span
                className="text-xs px-3.5 py-1.5 rounded-full font-mono-tech font-bold uppercase tracking-wider mb-3 inline-block"
                style={{ background: "var(--surface)", border: `1px solid ${member.color}`, color: member.color }}
              >
                {member.role}
              </span>

              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-3" style={{ color: "var(--text-main)" }}>
                {member.name}
              </h1>

              <p className="text-base sm:text-lg leading-relaxed font-semibold mb-6 max-w-3xl" style={{ color: member.color }}>
                {member.tagline}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <button onClick={() => navigate("contact")} className="btn-primary text-xs py-3 px-5 w-full sm:w-auto justify-center">
                  Get in Touch →
                </button>
                {member.personalWebsite && (
                  <a
                    href={member.personalWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-3 px-5 inline-flex items-center gap-1.5 w-full sm:w-auto justify-center"
                    style={{ borderColor: member.color, color: member.color }}
                  >
                    <ExternalLinkIcon size={14} color={member.color} />
                    Personal Portfolio Website
                  </a>
                )}
                <button onClick={() => navigate("about")} className="btn-outline text-xs py-3 px-5 w-full sm:w-auto justify-center">
                  View Leadership Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILED PROFILE CONTENT ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Story (2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <span className="section-label mb-3">Executive Profile</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl mb-4" style={{ color: "var(--text-main)" }}>
                Professional Overview
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {member.bio}
              </p>
            </div>

            <div className="card p-8 border" style={{ borderColor: "var(--card-border)" }}>
              <span className="section-label mb-3">Key Responsibilities</span>
              <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--text-main)" }}>
                Strategic Leadership & Scope
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {member.responsibility}
              </p>
            </div>

            {/* Core Skills & Technical Competencies */}
            {member.skills && member.skills.length > 0 && (
              <div>
                <span className="section-label mb-3">Technical Expertise</span>
                <h3 className="font-display font-bold text-2xl mb-6" style={{ color: "var(--text-main)" }}>
                  Core Competencies & Engineering Focus
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {member.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="card p-4 flex items-center gap-3 border"
                      style={{ background: "var(--surface)", borderColor: `color-mix(in srgb, ${member.color} 20%, transparent)` }}
                    >
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: member.color }} />
                      <span className="text-xs font-semibold leading-relaxed" style={{ color: "var(--text-main)" }}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Achievements */}
            <div>
              <span className="section-label mb-3">Track Record & Milestones</span>
              <h3 className="font-display font-bold text-2xl mb-6" style={{ color: "var(--text-main)" }}>
                Major Impact & Achievements
              </h3>
              <div className="space-y-4">
                {member.keyAchievements.map((ach, i) => (
                  <div
                    key={i}
                    className="card p-5 flex items-start gap-4 border"
                    style={{ borderColor: `color-mix(in srgb, ${member.color} 20%, transparent)` }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `color-mix(in srgb, ${member.color} 15%, transparent)` }}>
                      <AwardIcon size={20} color={member.color} />
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--text-main)" }}>
                        {ach}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Quote */}
            <div className="card p-8 relative border" style={{ background: "var(--surface)", borderColor: `color-mix(in srgb, ${member.color} 30%, transparent)` }}>
              <div className="text-4xl font-serif mb-2" style={{ color: member.color }}>"</div>
              <p className="text-lg italic leading-relaxed mb-4 font-medium" style={{ color: "var(--text-main)" }}>
                {member.quote}
              </p>
              <div className="font-mono-tech text-xs font-bold" style={{ color: member.color }}>
                — {member.name}, {member.role}
              </div>
            </div>

            {/* ── Project Portfolio ─────────────────────────────── */}
            {member.projects && member.projects.length > 0 && (
              <div>
                <span className="section-label mb-3">Live Portfolio</span>
                <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "var(--text-main)" }}>
                  Platforms & Projects Built
                </h3>
                <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
                  A selection of live digital platforms engineered and delivered by {member.name}.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {member.projects.map((proj, i) => (
                    <div
                      key={i}
                      className="card p-5 border group flex flex-col justify-between transition-all hover:scale-[1.02]"
                      style={{ borderColor: `color-mix(in srgb, ${member.color} 20%, transparent)` }}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-display font-bold text-sm leading-snug" style={{ color: "var(--text-main)" }}>
                            {proj.name}
                          </h4>
                          <span
                            className="text-[0.6rem] font-mono-tech font-bold px-2 py-0.5 rounded-full whitespace-nowrap shrink-0"
                            style={{
                              background: `color-mix(in srgb, ${member.color} 12%, transparent)`,
                              color: member.color,
                              border: `1px solid color-mix(in srgb, ${member.color} 25%, transparent)`
                            }}
                          >
                            {proj.category}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                          {proj.description}
                        </p>
                      </div>
                      {proj.url !== "#" ? (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono-tech transition-opacity hover:opacity-70"
                          style={{ color: member.color }}
                        >
                          <ExternalLinkIcon size={13} color={member.color} />
                          {proj.url.replace(/^https?:\/\//, "")}
                        </a>
                      ) : (
                        <span className="text-xs font-mono-tech" style={{ color: "var(--text-dim)" }}>
                          Platform — internal deployment
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Education & Certifications (1 col) */}
          <div className="space-y-8">
            <div className="card p-7 border" style={{ borderColor: "var(--card-border)" }}>
              <div className="flex items-center gap-2 font-mono-tech text-xs font-bold uppercase tracking-wider mb-5" style={{ color: member.color }}>
                <GraduationCapIcon size={18} color={member.color} />
                <span>Qualifications & Certifications</span>
              </div>
              <div className="space-y-3 mb-6">
                {member.educationCertifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm p-3 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border-subtle)" }}>
                    <CheckCircleIcon size={18} color={member.color} className="shrink-0 mt-0.5" />
                    <span className="font-medium text-xs leading-relaxed" style={{ color: "var(--text-main)" }}>{cert}</span>
                  </div>
                ))}
              </div>

              {member.personalWebsite && (
                <a
                  href={member.personalWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-outline justify-center text-xs py-2.5 inline-flex items-center gap-2 font-mono-tech"
                  style={{ borderColor: `color-mix(in srgb, ${member.color} 40%, transparent)`, color: member.color }}
                >
                  <ExternalLinkIcon size={14} color={member.color} />
                  Visit billyochieng.vercel.app →
                </a>
              )}
            </div>

            {/* CTA Card */}
            <div className="card p-7 text-center border" style={{ borderColor: "var(--card-border)" }}>
              <SparklesIcon size={32} color="var(--accent)" className="mx-auto mb-3" />
              <h4 className="font-display font-bold text-lg mb-2" style={{ color: "var(--text-main)" }}>
                Connect with DWPL Leadership
              </h4>
              <p className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
                Discuss high-level technology strategy, enterprise partnerships, or project execution with our executive team.
              </p>
              <button
                onClick={() => navigate("contact")}
                className="btn-primary w-full justify-center text-xs py-3"
              >
                Schedule Executive Meeting →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
