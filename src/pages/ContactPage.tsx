import { useState } from "react";
import type { Page } from "../App";
import { PhoneIcon, WrenchIcon, MailIcon, MapPinIcon, BuildingIcon, MonitorCheckIcon, SparklesIcon, MessageSquareIcon, CheckCircleIcon } from "../components/Icons";

interface Props { navigate: (to: Page, id?: string) => void; }

type ContactPath = "business" | "client" | "project" | null;

const steps = ["Your Challenge", "Organisation", "Timeline", "Contact Details"];

const IMG = {
  hero: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=700&fit=crop&auto=format",
};

export default function ContactPage({ navigate }: Props) {
  const [path, setPath] = useState<ContactPath>(null);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    requirement: "", orgType: "", orgSize: "", orgName: "",
    challenge: "", timeline: "", name: "", email: "", phone: "", message: "",
  });

  const up = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="pt-[66px]">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-end">
        <img src={IMG.hero} alt="Contact background" className="absolute inset-0 img-cover" style={{ opacity: 0.60 }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none anim-pulse-glow" style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-24 w-full">
          <div className="section-label anim-fade-up mb-5">Contact Us</div>
          <h1 className="font-display font-black text-5xl md:text-6xl mb-5 leading-none anim-fade-up delay-200" style={{ color: 'var(--text-main)' }}>
            Let's Solve Your<br />
            <span className="heading-highlight">Technology Challenge.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed anim-fade-up delay-300" style={{ color: "var(--text-muted)" }}>
            Tell us about your organisation and your challenge. A DWPL technology specialist will respond within one business day.
          </p>
        </div>
      </section>

      {/* ── Contact Info Strip ────────────────────────────────── */}
      <div className="band">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: PhoneIcon, title: "Main Direct",       val: "+254 715 822 350", sub: "Mon–Fri 8am–6pm" },
            { icon: PhoneIcon, title: "Alt Line",          val: "+254 710 307 067", sub: "Client Support & Sales" },
            { icon: MailIcon, title: "Email",              val: "info@dwprodigy.co.ke", sub: "< 4 hour response" },
            { icon: MapPinIcon, title: "Nairobi Office",     val: "Nairobi, Kenya",  sub: "East Africa HQ" },
          ].map((c) => (
            <div key={c.title} className="card p-5 flex items-start gap-3">
              <span className="mt-0.5"><c.icon size={20} color="var(--accent)" /></span>
              <div>
                <div className="font-mono-tech" style={{ fontSize: "0.6rem", color: "var(--accent)", letterSpacing: "0.12em" }}>{c.title.toUpperCase()}</div>
                <div className="font-medium text-sm mt-0.5" style={{ color: "var(--text-main)" }}>{c.val}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Path Selector ─────────────────────────────────────── */}
      {!path && !submitted && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl mb-2" style={{ color: 'var(--text-main)' }}>How Can We Help You?</h2>
            <p className="text-sm" style={{ color: "var(--text-dim)" }}>Choose the path that best describes your situation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { id: "business" as ContactPath, icon: BuildingIcon, title: "I'm a Business",        subtitle: "Talk to Sales",           desc: "I want to explore DWPL's solutions and services for my organisation.", colorVar: "var(--accent)" },
              { id: "client"   as ContactPath, icon: MonitorCheckIcon, title: "I'm an Existing Client", subtitle: "Get Support",             desc: "I need technical support or assistance with an active service.", colorVar: "var(--accent-secondary)" },
              { id: "project"  as ContactPath, icon: SparklesIcon, title: "I Have a Project",       subtitle: "Request a Consultation",  desc: "I have a specific technology project or challenge I need help with.", colorVar: "var(--accent-teal)" },
            ].map((opt) => (
              <button
                key={String(opt.id)}
                onClick={() => { setPath(opt.id); setStep(0); }}
                className="card p-8 text-left group"
                style={{ borderColor: `color-mix(in srgb, ${opt.colorVar} 18%, transparent)` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `color-mix(in srgb, ${opt.colorVar} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${opt.colorVar} 25%, transparent)` }}
                >
                  <opt.icon size={28} color={opt.colorVar} />
                </div>
                <div className="font-display font-bold text-xl mb-1" style={{ color: 'var(--text-main)' }}>{opt.title}</div>
                <div className="text-sm font-medium mb-3" style={{ color: opt.colorVar }}>{opt.subtitle}</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>{opt.desc}</p>
                <div className="mt-4 h-0.5 w-8 rounded-full transition-all group-hover:w-full" style={{ background: opt.colorVar, opacity: 0.4 }} />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── Guided Project Form ───────────────────────────────── */}
      {path === "project" && !submitted && (
        <section className="max-w-3xl mx-auto px-6 py-16">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-1">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2 min-w-0">
                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all"
                  style={{ background: i <= step ? "var(--accent)" : "color-mix(in srgb, var(--accent) 10%, transparent)", color: i <= step ? "var(--bg)" : "var(--text-dim)" }}
                  onClick={() => i < step && setStep(i)}
                >
                  {i < step ? "✓" : i + 1}
                </button>
                <span className="text-xs font-medium whitespace-nowrap hidden sm:block" style={{ color: i === step ? "var(--text-main)" : "var(--text-dim)" }}>{s}</span>
                {i < steps.length - 1 && (
                  <div className="w-6 h-px flex-shrink-0" style={{ background: i < step ? "var(--accent)" : "color-mix(in srgb, var(--accent) 15%, transparent)" }} />
                )}
              </div>
            ))}
          </div>

          <div className="card p-8">
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="font-display font-bold text-2xl mb-6" style={{ color: 'var(--text-main)' }}>What are you looking for?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {["IT Infrastructure","Cybersecurity","Cloud Computing","Software Development","Managed IT Services","Enterprise Systems","AI & Automation","Data & Analytics","Digital Transformation","ICT Procurement","Physical Security","Other"].map((opt) => (
                    <button key={opt} type="button" onClick={() => up("requirement", opt)}
                      className="text-left p-3 rounded-xl text-xs transition-all"
                      style={{ border: `1px solid ${form.requirement === opt ? "var(--accent)" : "color-mix(in srgb, var(--accent) 10%, transparent)"}`, background: form.requirement === opt ? "color-mix(in srgb, var(--accent) 7%, transparent)" : "transparent", color: form.requirement === opt ? "var(--text-main)" : "var(--text-dim)" }}>
                      {opt}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Describe Your Challenge</label>
                  <textarea className="form-input" rows={3} placeholder="What challenge are you trying to solve?"
                    value={form.challenge} onChange={(e) => up("challenge", e.target.value)} />
                </div>
                <button onClick={() => setStep(1)} className="btn-primary w-full justify-center" disabled={!form.requirement}>Next Step →</button>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-display font-bold text-2xl mb-6" style={{ color: 'var(--text-main)' }}>Tell us about your organisation.</h2>
                <div className="grid grid-cols-2 gap-2.5">
                  {["Government / Public","Corporate / Private","Financial Services","Healthcare","Education","NGO / Non-Profit","SME","Other"].map((t) => (
                    <button key={t} type="button" onClick={() => up("orgType", t)}
                      className="text-left p-3 rounded-xl text-sm transition-all"
                      style={{ border: `1px solid ${form.orgType === t ? "var(--accent)" : "color-mix(in srgb, var(--accent) 10%, transparent)"}`, background: form.orgType === t ? "color-mix(in srgb, var(--accent) 7%, transparent)" : "transparent", color: form.orgType === t ? "var(--text-main)" : "var(--text-dim)" }}>
                      {t}
                    </button>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Organisation Name</label>
                    <input className="form-input" placeholder="Your organisation" value={form.orgName} onChange={(e) => up("orgName", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Number of Employees</label>
                    <select className="form-input" value={form.orgSize} onChange={(e) => up("orgSize", e.target.value)}>
                      <option value="">Select size</option>
                      {["1–10","11–50","51–200","201–500","500+"].map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(0)} className="btn-outline flex-1 justify-center">← Back</button>
                  <button onClick={() => setStep(2)} className="btn-primary flex-1 justify-center">Next →</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-display font-bold text-2xl mb-6" style={{ color: 'var(--text-main)' }}>What's your timeline?</h2>
                <div className="grid grid-cols-2 gap-2.5">
                  {["Immediately / ASAP","Within 1 month","1–3 months","3–6 months","6–12 months","Exploring / No fixed timeline"].map((t) => (
                    <button key={t} type="button" onClick={() => up("timeline", t)}
                      className="text-left p-3 rounded-xl text-sm transition-all"
                      style={{ border: `1px solid ${form.timeline === t ? "var(--accent)" : "color-mix(in srgb, var(--accent) 10%, transparent)"}`, background: form.timeline === t ? "color-mix(in srgb, var(--accent) 7%, transparent)" : "transparent", color: form.timeline === t ? "var(--text-main)" : "var(--text-dim)" }}>
                      {t}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">← Back</button>
                  <button onClick={() => setStep(3)} className="btn-primary flex-1 justify-center">Next →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <h2 className="font-display font-bold text-2xl mb-6" style={{ color: 'var(--text-main)' }}>Your contact details.</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Full Name *</label>
                    <input className="form-input" required placeholder="Your name" value={form.name} onChange={(e) => up("name", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Email *</label>
                    <input className="form-input" type="email" required placeholder="you@company.com" value={form.email} onChange={(e) => up("email", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Phone Number</label>
                  <input className="form-input" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={(e) => up("phone", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Anything else?</label>
                  <textarea className="form-input" rows={3} placeholder="Additional context..." value={form.message} onChange={(e) => up("message", e.target.value)} />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1 justify-center">← Back</button>
                  <button type="submit" className="btn-primary flex-1 justify-center">Submit Request →</button>
                </div>
              </form>
            )}
          </div>
          <button onClick={() => setPath(null)} className="btn-ghost text-xs mt-4">← Choose different path</button>
        </section>
      )}

      {/* ── Standard Contact Form ─────────────────────────────── */}
      {(path === "business" || path === "client") && !submitted && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <div className="section-label mb-4">{path === "business" ? "Sales Enquiry" : "Client Support"}</div>
              <h2 className="font-display font-bold text-3xl mb-6" style={{ color: 'var(--text-main)' }}>
                {path === "business" ? "Talk to Our Sales Team" : "Get Technical Support"}
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: PhoneIcon, label: "Main Phone",  val: "+254 715 822 350" },
                  { icon: PhoneIcon, label: "Alt Phone",   val: "+254 710 307 067" },
                  { icon: MailIcon, label: "Email",     val: path === "business" ? "sales@dwprodigy.co.ke" : "support@dwprodigy.co.ke" },
                  { icon: MessageSquareIcon, label: "WhatsApp",  val: "+254 715 822 350" },
                  { icon: MapPinIcon, label: "Location",  val: "Nairobi, Kenya" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)", border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)" }}>
                      <c.icon size={20} color="var(--accent)" />
                    </div>
                    <div>
                      <div className="font-mono-tech" style={{ color: "var(--accent)", fontSize: "0.6rem", letterSpacing: "0.12em" }}>{c.label.toUpperCase()}</div>
                      <div className="font-medium text-sm" style={{ color: 'var(--text-main)' }}>{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setPath(null)} className="btn-ghost text-xs">← Choose different path</button>
            </div>

            <div className="card p-8">
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Full Name *</label>
                    <input className="form-input" required placeholder="Your name" value={form.name} onChange={(e) => up("name", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Email *</label>
                    <input className="form-input" type="email" required placeholder="you@company.com" value={form.email} onChange={(e) => up("email", e.target.value)} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Phone</label>
                    <input className="form-input" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={(e) => up("phone", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>Organisation</label>
                    <input className="form-input" placeholder="Company name" value={form.orgName} onChange={(e) => up("orgName", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-2" style={{ color: "var(--text-muted)" }}>How can we help? *</label>
                  <textarea className="form-input" rows={5} required placeholder="Describe what you need help with..." value={form.message} onChange={(e) => up("message", e.target.value)} />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">Send Message →</button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* ── Thank You ─────────────────────────────────────────── */}
      {submitted && (
        <section className="max-w-2xl mx-auto px-6 py-32 text-center">
          <div className="card p-12">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "color-mix(in srgb, var(--accent-teal) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--accent-teal) 30%, transparent)" }}>
              <CheckCircleIcon size={40} color="var(--accent-teal)" />
            </div>
            <h2 className="font-display font-black text-4xl mb-4" style={{ color: 'var(--text-main)' }}>Thank You.</h2>
            <p className="text-base mb-2" style={{ color: "var(--text-muted)" }}>A DWPL technology specialist will review your requirements and be in touch within one business day.</p>
            <p className="text-sm mb-8" style={{ color: "var(--text-dim)" }}>In the meantime, explore our solutions below.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => navigate("solutions")} className="btn-primary">Explore Solutions →</button>
              <button onClick={() => navigate("resources")} className="btn-outline">Browse Resources</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
