import { useState } from "react";
import type { Page } from "../App";
import { TicketIcon, FileTextIcon, LayersIcon, MonitorCheckIcon, CheckCircleIcon, SearchIcon, ArrowRightIcon } from "../components/Icons";

interface Props { navigate: (to: Page, id?: string) => void; }

const IMG = {
  hero: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&h=700&fit=crop&auto=format",
};

const knowledgeBase = [
  { category: "Networking", articles: ["How to reset your VPN connection", "Configuring Wi-Fi on Windows 11", "Troubleshooting slow network speeds", "Setting up a VPN client"] },
  { category: "Cybersecurity", articles: ["How to identify a phishing email", "Setting up two-factor authentication", "Password best practices", "Reporting a security incident"] },
  { category: "Cloud", articles: ["Accessing your Microsoft 365 account", "Setting up OneDrive sync", "Joining a Teams meeting", "Resetting your Azure password"] },
  { category: "Microsoft", articles: ["Outlook setup and configuration", "SharePoint file sharing guide", "Teams troubleshooting", "Microsoft 365 license management"] },
  { category: "Hardware", articles: ["Printer connection troubleshooting", "Setting up a new workstation", "UPS maintenance checklist", "Monitor display issues"] },
];

export default function SupportPage({ navigate }: Props) {
  const [ticketForm, setTicketForm] = useState({ name: "", email: "", company: "", issue: "", priority: "Normal", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState("");
  const [activeKB, setActiveKB] = useState("Networking");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-[66px]">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[52vh] flex items-end">
        <img src={IMG.hero} alt="Support background" className="absolute inset-0 img-cover" style={{ opacity: 0.22 }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none anim-pulse-glow" style={{ background: "var(--accent)", opacity: 0.12 }} />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-24 w-full">
          <div className="section-label anim-fade-up mb-5">DWPL Support Center</div>
          <h1 className="font-display font-black text-5xl md:text-6xl mb-5 leading-none anim-fade-up delay-200" style={{ color: 'var(--text-main)' }}>
            How Can We<br />
            <span className="heading-highlight">Help You?</span>
          </h1>
          <div className="max-w-2xl relative anim-fade-up delay-300">
            <input
              className="form-input pr-12 text-sm h-12"
              placeholder="Search the knowledge base... (e.g. 'reset VPN', 'Wi-Fi setup')"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: "var(--text-dim)" }}><SearchIcon size={20} /></div>
          </div>
        </div>
      </section>

      {/* Support options */}
      <section className="band py-16">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: TicketIcon, title: "Submit a Ticket", desc: "Log a support request and track it to resolution.", action: "Submit Ticket", color: "var(--accent)" },
            { icon: FileTextIcon, title: "Check Ticket Status", desc: "Track the progress of your existing support tickets.", action: "Check Status", color: "var(--accent-secondary)" },
            { icon: LayersIcon, title: "Knowledge Base", desc: "Browse guides, how-tos and troubleshooting articles.", action: "Browse Articles", color: "var(--accent-teal)" },
            { icon: MonitorCheckIcon, title: "Remote Support", desc: "Allow our technician to connect remotely to your computer.", action: "Start Session", color: "var(--accent-amber)" },
          ].map((opt) => (
            <div key={opt.title} className="card p-7 text-center cursor-pointer group hover:scale-[1.02] transition-all"
              style={{ borderColor: `color-mix(in srgb, ${opt.color} 25%, transparent)` }}
              onClick={() => opt.title === "Submit a Ticket" && document.getElementById("ticket-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110" style={{ background: `color-mix(in srgb, ${opt.color} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${opt.color} 25%, transparent)` }}>
                <opt.icon size={28} color={opt.color} />
              </div>
              <h3 className="font-display font-bold text-base mb-2" style={{ color: 'var(--text-main)' }}>{opt.title}</h3>
              <p className="text-xs mb-5 leading-relaxed" style={{ color: "var(--text-dim)" }}>{opt.desc}</p>
              <button className="btn-outline text-xs py-2 px-4 w-full justify-center" style={{ borderColor: opt.color, color: opt.color }}>
                {opt.action}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Ticket */}
      <section id="ticket-form" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label mb-4">Submit a Support Ticket</div>
            <h2 className="font-display font-bold text-3xl mb-6" style={{ color: 'var(--text-main)' }}>
              Log a <span className="heading-highlight">Support Request</span>
            </h2>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-dim)" }}>
              Complete this form to submit a support ticket. Our technical team will review your request and respond according to the SLA for your service tier.
            </p>

            {/* SLA info */}
            <div className="space-y-3">
              {[
                { priority: "Critical", sla: "1 hour response", color: "#ef4444" },
                { priority: "High", sla: "2 hour response", color: "var(--accent-amber)" },
                { priority: "Normal", sla: "4 hour response", color: "var(--accent)" },
                { priority: "Low", sla: "Next business day", color: "var(--accent-teal)" },
              ].map((item) => (
                <div key={item.priority} className="flex items-center justify-between p-3.5 rounded-xl text-sm"
                  style={{ border: "1px solid color-mix(in srgb, var(--accent) 10%, transparent)", background: "var(--surface)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                    <span style={{ color: "var(--text-muted)" }}>{item.priority} Priority</span>
                  </div>
                  <span className="font-mono-tech text-xs font-semibold" style={{ color: "var(--accent)" }}>{item.sla}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8" style={{ borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)" }}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "color-mix(in srgb, var(--accent-teal) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--accent-teal) 30%, transparent)" }}><CheckCircleIcon size={32} color="var(--accent-teal)" /></div>
                <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--text-main)' }}>Ticket Submitted</h3>
                <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>Your support request has been received.</p>
                <p className="text-sm mb-6" style={{ color: "var(--text-dim)" }}>A DWPL technician will respond within the SLA for your priority level. Check your email for confirmation.</p>
                <div className="px-4 py-2.5 rounded-xl inline-block font-mono-tech text-sm" style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)" }}>
                  Ticket #DWP-{Math.floor(Math.random() * 9000 + 1000)}
                </div>
                <div className="mt-8">
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-xs">Submit Another →</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>Full Name *</label>
                    <input className="form-input" required placeholder="John Doe"
                      value={ticketForm.name} onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>Email Address *</label>
                    <input className="form-input" type="email" required placeholder="john@company.com"
                      value={ticketForm.email} onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>Organization</label>
                  <input className="form-input" placeholder="Your organization name"
                    value={ticketForm.company} onChange={(e) => setTicketForm({ ...ticketForm, company: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>Issue Summary *</label>
                  <input className="form-input" required placeholder="Brief description of the issue"
                    value={ticketForm.issue} onChange={(e) => setTicketForm({ ...ticketForm, issue: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>Priority</label>
                  <select className="form-input" value={ticketForm.priority} onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}>
                    <option>Critical</option>
                    <option>High</option>
                    <option>Normal</option>
                    <option>Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>Detailed Description</label>
                  <textarea className="form-input" rows={4} placeholder="Describe the issue in detail — what happened, when it started, error messages..."
                    value={ticketForm.description} onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })} />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">Submit Support Ticket →</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="band py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-8">Knowledge Base</div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-1.5">
              {knowledgeBase.map((kb) => (
                <button
                  key={kb.category}
                  onClick={() => setActiveKB(kb.category)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                  style={{
                    background: activeKB === kb.category ? "color-mix(in srgb, var(--accent) 12%, transparent)" : "var(--surface)",
                    color: activeKB === kb.category ? "var(--accent)" : "var(--text-dim)",
                    border: `1px solid ${activeKB === kb.category ? "var(--accent)" : "color-mix(in srgb, var(--accent) 8%, transparent)"}`,
                  }}
                >
                  {kb.category}
                </button>
              ))}
            </div>
            <div className="lg:col-span-3">
              <h3 className="font-display font-bold text-xl mb-6" style={{ color: 'var(--text-main)' }}>{activeKB} Guides</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {knowledgeBase.find((kb) => kb.category === activeKB)?.articles.map((article) => (
                  <div key={article} className="card p-5 flex items-center gap-4 cursor-pointer group hover:border-[var(--accent)] transition-all">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}><FileTextIcon size={20} color="var(--accent)" /></div>
                    <span className="text-sm font-medium transition-colors group-hover:text-[var(--text-main)]" style={{ color: "var(--text-muted)" }}>{article}</span>
                    <span className="ml-auto flex items-center transition-transform group-hover:translate-x-1" style={{ color: "var(--accent)" }}><ArrowRightIcon size={16} /></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

