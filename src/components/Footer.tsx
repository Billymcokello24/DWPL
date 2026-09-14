import type { Page } from "../App";
import { PhoneIcon, MailIcon, MapPinIcon, MessageSquareIcon } from "./Icons";

interface FooterProps { navigate: (to: Page, id?: string) => void; }

export default function Footer({ navigate }: FooterProps) {
  const go = (p: Page) => navigate(p);

  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border-subtle)" }}>

      {/* ── CTA Band ──────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-16" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
        <img src="https://images.unsplash.com/photo-1785682231847-93265d8e633d?w=1600&h=400&fit=crop&auto=format" alt="Footer CTA" className="absolute inset-0 img-cover" style={{ opacity: 0.12 }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="section-label mb-3">Ready to Start?</div>
            <h2 className="font-display font-black text-3xl md:text-4xl" style={{ color: "var(--text-main)" }}>
              Transform Your Technology <span className="heading-highlight">Today.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <button onClick={() => go("contact")} className="btn-primary">Request Consultation →</button>
            <button onClick={() => go("solutions")} className="btn-outline">Explore Solutions</button>
          </div>
        </div>
      </div>

      {/* ── Main Footer ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">

          {/* Brand block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <button onClick={() => go("home")} className="flex items-center gap-3 mb-5 group cursor-pointer text-left">
              <img
                src="/logos/dwl-logo.png"
                alt="Digital World Prodigy Limited"
                className="h-10 w-auto transition-transform group-hover:scale-105"
                style={{ objectFit: "contain" }}
              />
              <div>
                <div className="font-display font-bold text-sm" style={{ color: "var(--text-main)" }}>Digital World Prodigy</div>
                <div className="font-mono-tech" style={{ color: "var(--accent)", fontSize: "0.55rem", letterSpacing: "0.16em" }}>LIMITED</div>
              </div>
            </button>

            <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--text-muted)", maxWidth: "280px" }}>
              We design, deploy, secure and manage the technology that powers modern organisations across East Africa. End to end.
            </p>

            <div className="font-display font-bold text-sm mb-5" style={{ color: "var(--accent)" }}>Technology Without Limits.</div>

            {/* Social links */}
            <div className="flex gap-2.5">
              {[
                { label: "LI", name: "LinkedIn" },
                { label: "TW", name: "Twitter" },
                { label: "YT", name: "YouTube" },
              ].map((s) => (
                <button
                  key={s.name}
                  title={s.name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-mono-tech text-xs transition-all cursor-pointer"
                  style={{ background: "var(--border-subtle)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest mb-5" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>Solutions</h4>
            <div className="space-y-2.5">
              {["IT Infrastructure","Cybersecurity","Cloud Computing","Software Dev","AI & Automation","Data & Analytics","Digital Transformation","Enterprise Systems"].map((item) => (
                <button key={item} onClick={() => go("solutions")} className="block text-xs transition-colors w-full text-left cursor-pointer hover:underline"
                  style={{ color: "var(--text-muted)" }}
                >{item}</button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest mb-5" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>Company</h4>
            <div className="space-y-2.5">
              {[
                { label: "About Us",    p: "about"    as Page },
                { label: "Leadership",  p: "about"    as Page },
                { label: "Our Values",  p: "about"    as Page },
                { label: "Careers",     p: "careers"  as Page },
                { label: "Partners",    p: "partners" as Page },
                { label: "Projects",    p: "projects" as Page },
                { label: "Industries",  p: "industries" as Page },
              ].map((item) => (
                <button key={item.label} onClick={() => go(item.p)} className="block text-xs transition-colors w-full text-left cursor-pointer hover:underline"
                  style={{ color: "var(--text-muted)" }}
                >{item.label}</button>
              ))}
            </div>
          </div>

          {/* Resources + Support */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest mb-5" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>Resources</h4>
            <div className="space-y-2.5 mb-6">
              {[
                { label: "Insights & Articles", p: "resources" as Page },
                { label: "Case Studies",     p: "projects"  as Page },
                { label: "Downloads",        p: "resources" as Page },
                { label: "FAQs",             p: "resources" as Page },
              ].map((item) => (
                <button key={item.label} onClick={() => go(item.p)} className="block text-xs transition-colors w-full text-left cursor-pointer hover:underline"
                  style={{ color: "var(--text-muted)" }}
                >{item.label}</button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest mb-5" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>Contact</h4>
            <div className="space-y-3">
              {[
                { Icon: PhoneIcon, label: "MAIN PHONE", val: "+254 715 822 350" },
                { Icon: PhoneIcon, label: "ALT PHONE", val: "+254 710 307 067" },
                { Icon: MailIcon, label: "EMAIL", val: "info@dwprodigy.co.ke" },
                { Icon: MessageSquareIcon, label: "WHATSAPP", val: "+254 715 822 350" },
                { Icon: MapPinIcon, label: "LOCATION", val: "Nairobi, Kenya" },
              ].map(({ Icon, label, val }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={14} color="var(--accent)" />
                  <div>
                    <div className="text-[0.65rem] font-mono-tech" style={{ color: "var(--text-dim)" }}>{label}</div>
                    <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => go("contact")} className="btn-outline text-xs py-2 px-4 mt-5 w-full justify-center">
              Get in Touch →
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10" style={{ borderTop: "1px solid var(--border-subtle)" }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--text-dim)" }}>
          <p>
            © {new Date().getFullYear()} Digital World Prodigy Limited. All rights reserved. Nairobi, Kenya.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <span key={item} className="cursor-pointer hover:underline">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
