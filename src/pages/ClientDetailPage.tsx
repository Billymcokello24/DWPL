import { useState, useEffect } from "react";
import type { Page } from "../App";
import { getClientById } from "../data/clients";
import {
  ArrowRightIcon, CheckCircleIcon, BuildingIcon,
  ShieldIcon, NetworkIcon, ServerIcon, SparklesIcon
} from "../components/Icons";

interface Props {
  id?: string;
  navigate: (to: Page, id?: string) => void;
}

export default function ClientDetailPage({ id, navigate }: Props) {
  const client = getClientById(id || "tom-mboya-university");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!client) {
    return (
      <div className="pt-28 pb-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-3xl mb-4" style={{ color: "var(--text-main)" }}>
          Client Profile Not Found
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          The requested client case study could not be located.
        </p>
        <button onClick={() => navigate("partners")} className="btn-primary">
          ← Back to Partners & Clients
        </button>
      </div>
    );
  }

  const LogoComponent = client.LogoComponent;

  return (
    <div className="pt-[66px] min-h-screen pb-24">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-end">
        <img
          src={client.heroImg}
          alt={client.name}
          className="absolute inset-0 img-cover"
          style={{ opacity: 0.60 }}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-24 w-full">
          <button
            onClick={() => navigate("partners")}
            className="inline-flex items-center gap-2 text-xs font-mono-tech mb-6 px-3 py-1.5 rounded-lg border transition-colors hover:border-[var(--accent)]"
            style={{ background: "var(--surface)", borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
          >
            ← Back to Partners & Clients
          </button>

          <div className="max-w-4xl backdrop-blur-[2px] p-6 rounded-2xl" style={{ background: "rgba(var(--bg), 0.25)" }}>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-md">
                <LogoComponent className="h-12 w-auto" />
              </div>
              <div>
                <span
                  className="text-xs px-3 py-1 rounded-full font-mono-tech font-bold"
                  style={{ background: "var(--surface)", border: `1px solid ${client.color}`, color: client.color }}
                >
                  {client.tag}
                </span>
                <div className="text-xs font-mono-tech mt-1" style={{ color: "var(--text-muted)" }}>
                  📍 {client.location}
                </div>
              </div>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight" style={{ color: "var(--text-main)" }}>
              {client.name}
            </h1>
            <p className="text-lg leading-relaxed font-medium max-w-3xl" style={{ color: "var(--text-muted)" }}>
              {client.headline}
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY RESULTS / METRICS ──────────────────────────────── */}
      <section className="band py-10 border-y" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {client.keyResults.map((res, i) => (
            <div key={i} className="card p-6 text-center border" style={{ borderColor: `color-mix(in srgb, ${client.color} 25%, transparent)` }}>
              <div className="font-display font-black text-3xl sm:text-4xl mb-1" style={{ color: client.color }}>
                {res.metric}
              </div>
              <div className="text-xs font-mono-tech" style={{ color: "var(--text-main)" }}>
                {res.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY CONTENT ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Story (2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <span className="section-label mb-3">Client Overview</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl mb-4" style={{ color: "var(--text-main)" }}>
                About the Partnership
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {client.desc}
              </p>
            </div>

            <div className="card p-8 border" style={{ borderColor: "var(--card-border)" }}>
              <span className="section-label mb-3">Case Study & Technical Execution</span>
              <h3 className="font-display font-bold text-xl mb-4" style={{ color: "var(--text-main)" }}>
                How DWPL Delivered Value
              </h3>
              <p className="text-base leading-relaxed space-y-4" style={{ color: "var(--text-muted)" }}>
                {client.fullStory}
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className="card p-8 relative border" style={{ background: "var(--surface)", borderColor: `color-mix(in srgb, ${client.color} 30%, transparent)` }}>
              <div className="text-4xl font-serif text-dim mb-2" style={{ color: client.color }}>“</div>
              <p className="text-lg italic leading-relaxed mb-4 font-medium" style={{ color: "var(--text-main)" }}>
                {client.testimonial.quote}
              </p>
              <div className="font-mono-tech text-xs font-bold" style={{ color: client.color }}>
                — {client.testimonial.author}
              </div>
            </div>
          </div>

          {/* Sidebar Solutions (1 col) */}
          <div className="space-y-8">
            <div className="card p-7 border" style={{ borderColor: "var(--card-border)" }}>
              <div className="font-mono-tech text-xs font-bold uppercase tracking-wider mb-4" style={{ color: client.color }}>
                Technologies & Solutions Deployed
              </div>
              <div className="space-y-3">
                {client.solutionsDeployed.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm p-2.5 rounded-lg" style={{ background: "var(--surface)" }}>
                    <CheckCircleIcon size={18} color={client.color} />
                    <span className="font-medium" style={{ color: "var(--text-main)" }}>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="card p-7 text-center border" style={{ borderColor: "var(--card-border)" }}>
              <SparklesIcon size={32} color="var(--accent)" className="mx-auto mb-3" />
              <h4 className="font-display font-bold text-lg mb-2" style={{ color: "var(--text-main)" }}>
                Need Similar Technology Solutions?
              </h4>
              <p className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
                Talk to our enterprise solution architects to discuss your infrastructure, cloud, or security requirements.
              </p>
              <button
                onClick={() => navigate("contact")}
                className="btn-primary w-full justify-center text-xs py-3"
              >
                Schedule Technical Consultation →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
