import type { Page } from "../App";
import { solutions, getSolutionById } from "../data/solutions";
import {
  SearchIcon,
  RulerIcon,
  CpuIcon,
  ShieldIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LayersIcon,
  SparklesIcon,
} from "../components/Icons";

interface Props {
  solutionId: string;
  navigate: (to: Page, id?: string) => void;
}

const solutionImages: Record<string, { hero: string; features: string; benefits: string; cta: string }> = {
  "it-infrastructure":   { hero: "https://images.unsplash.com/photo-1785682231847-93265d8e633d?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&auto=format" },
  "networking":          { hero: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&auto=format" },
  "cybersecurity":       { hero: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=400&fit=crop&auto=format" },
  "cloud":               { hero: "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=400&fit=crop&auto=format" },
  "data-center":         { hero: "https://images.unsplash.com/photo-1784652852605-6945598f2af3?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&auto=format" },
  "software-dev":        { hero: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop&auto=format" },
  "enterprise-systems":  { hero: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=400&fit=crop&auto=format" },
  "ai-automation":       { hero: "https://images.unsplash.com/photo-1782330300779-cd5cdb38f271?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&auto=format" },
  "data-analytics":      { hero: "https://images.unsplash.com/photo-1782330389129-fd3a236e00e5?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop&auto=format" },
  "digital-transform":   { hero: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&auto=format" },
  "systems-integration": { hero: "https://images.unsplash.com/photo-1782338938316-1251155944c9?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=400&fit=crop&auto=format" },
  "communication":       { hero: "https://images.unsplash.com/photo-1573164374577-06a65f7d7e1a?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=400&fit=crop&auto=format" },
  "business-continuity": { hero: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&auto=format" },
  "ict-procurement":     { hero: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=400&fit=crop&auto=format" },
  "managed-it":          { hero: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=400&fit=crop&auto=format" },
  "physical-security":   { hero: "https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=400&fit=crop&auto=format" },
  "iot-smart":           { hero: "https://images.unsplash.com/photo-1599104040457-fe0e8c9ae77e?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&auto=format" },
  "emerging-tech":       { hero: "https://images.unsplash.com/photo-1763771787035-99c6c28ec78e?w=1600&h=700&fit=crop&auto=format", features: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&auto=format", benefits: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop&auto=format", cta: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&auto=format" },
};

const defaultImages = {
  hero: "https://images.unsplash.com/photo-1763771787035-99c6c28ec78e?w=1600&h=700&fit=crop&auto=format",
  features: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format",
  benefits: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop&auto=format",
  cta: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&auto=format",
};

const techStacks: Record<string, string[]> = {
  "it-infrastructure":   ["Dell EMC", "HPE", "Lenovo", "VMware", "Microsoft Hyper-V", "Veeam", "Nutanix"],
  "networking":          ["Cisco", "Fortinet", "Ubiquiti", "MikroTik", "Aruba", "Juniper", "Palo Alto"],
  "cybersecurity":       ["CrowdStrike", "Fortinet", "Sophos", "Palo Alto", "Microsoft Defender", "Splunk", "KnowBe4"],
  "cloud":               ["Microsoft Azure", "AWS", "Google Cloud", "VMware Cloud", "Veeam Cloud", "Terraform"],
  "data-center":         ["APC", "Schneider Electric", "Eaton", "Panduit", "Dell EMC", "HPE", "CommScope"],
  "software-dev":        ["React", "Node.js", "Python", "TypeScript", ".NET", "PostgreSQL", "Docker"],
  "enterprise-systems":  ["SAP", "Microsoft Dynamics", "Oracle", "Odoo", "Sage", "Salesforce"],
  "ai-automation":       ["OpenAI", "Google Gemini", "TensorFlow", "PyTorch", "LangChain", "UiPath"],
  "data-analytics":      ["Power BI", "Tableau", "Apache Spark", "Snowflake", "dbt", "Looker"],
  "digital-transform":   ["Microsoft 365", "ServiceNow", "Jira", "Confluence", "Power Automate", "Zapier"],
  "systems-integration": ["MuleSoft", "Dell Boomi", "Apache Kafka", "RabbitMQ", "Azure Logic Apps"],
  "communication":       ["Microsoft Teams", "Zoom", "Cisco Webex", "3CX", "RingCentral", "Slack"],
  "business-continuity": ["Veeam", "Zerto", "Commvault", "Azure Site Recovery", "VMware SRM"],
  "ict-procurement":     ["Dell", "HP", "Lenovo", "Cisco", "Microsoft", "Adobe", "Logitech"],
  "managed-it":          ["ConnectWise", "Datto", "NinjaRMM", "SolarWinds", "PRTG", "Zabbix"],
  "physical-security":   ["Hikvision", "Dahua", "Axis", "ZKTeco", "Honeywell", "Bosch"],
  "iot-smart":           ["Arduino", "Raspberry Pi", "LoRaWAN", "Zigbee", "ThingsBoard", "Azure IoT"],
  "emerging-tech":       ["ChatGPT", "Gemini", "NVIDIA", "Meta Llama", "Edge AI", "Digital Twins"],
};

export default function SolutionDetailPage({ solutionId, navigate }: Props) {
  const solution = getSolutionById(solutionId) || solutions[0];
  const imgs = solutionImages[solution.id] || defaultImages;
  const SolutionIcon = solution.icon;
  const techs = techStacks[solution.id] || ["Enterprise Grade", "Industry Certified"];
  const related = solutions
    .filter((s) => s.id !== solution.id && s.category === solution.category)
    .slice(0, 3);
  const display =
    related.length < 3
      ? [
          ...related,
          ...solutions
            .filter((s) => s.id !== solution.id && !related.includes(s))
            .slice(0, 3 - related.length),
        ]
      : related;

  return (
    <div className="pt-[66px]">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[54vh] flex items-end">
        <img
          src={imgs.hero}
          alt={solution.title}
          className="absolute inset-0 img-cover"
          style={{ opacity: 0.60 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-24 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm flex-wrap text-[var(--text-muted)]">
            <button
              onClick={() => navigate("home")}
              className="transition-colors hover:text-[var(--text-main)]"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => navigate("solutions")}
              className="transition-colors hover:text-[var(--text-main)]"
            >
              Solutions
            </button>
            <span>/</span>
            <span className="text-[var(--text-main)] font-medium">
              {solution.title}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="p-3.5 rounded-2xl flex items-center justify-center shadow-md"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <SolutionIcon size={32} color="var(--accent)" />
                </div>
                <span className="chip text-xs font-semibold">
                  {solution.category}
                </span>
              </div>
              <h1 className="font-display font-black text-4xl md:text-5xl text-[var(--text-main)] mb-3 leading-tight">
                {solution.title}
              </h1>
              <p className="text-xl mb-6 font-display font-semibold text-[var(--accent)]">
                {solution.tagline}
              </p>
              <p className="text-base leading-relaxed mb-8 text-[var(--text-muted)]">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("contact")}
                  className="btn-primary"
                >
                  Request a Consultation <ArrowRightIcon size={16} />
                </button>
                <button
                  onClick={() => navigate("contact")}
                  className="btn-outline"
                >
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Capabilities card */}
            <div className="card p-7">
              <div className="font-display font-bold text-[var(--text-main)] text-sm mb-5 flex items-center gap-2">
                <div
                  className="w-1.5 h-5 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                Key Capabilities
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {solution.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]"
                  >
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--card-border)",
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                    </div>
                    <span className="text-xs leading-relaxed text-[var(--text-main)]">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual Feature Showcase ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--card-border)]">
            <img
              src={imgs.features}
              alt={`${solution.title} features`}
              className="img-cover h-[420px]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, var(--bg) 100%)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent)]">
                Technical Expertise
              </span>
              <h3
                className="font-display font-bold text-xl mt-1"
                style={{ color: "var(--text-main)" }}
              >
                Enterprise-Grade Capabilities
              </h3>
            </div>
          </div>

          <div>
            <span className="section-label mb-4">What We Deliver</span>
            <h2 className="font-display font-bold text-3xl text-[var(--text-main)] mb-6">
              Comprehensive{" "}
              <span className="heading-highlight">{solution.title}</span>{" "}
              Features
            </h2>
            <div className="space-y-3">
              {solution.features.map((f, i) => (
                <div key={f} className="flex items-start gap-3 group">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-mono-tech font-bold transition-transform group-hover:scale-110"
                    style={{
                      background: "var(--surface)",
                      color: "var(--accent)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm pt-1.5 leading-relaxed text-[var(--text-muted)]">
                    {f}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits & Use Cases ──────────────────────────────── */}
      <section className="band py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="section-label mb-6">Business Benefits</div>
              <h2 className="font-display font-bold text-3xl text-[var(--text-main)] mb-8">
                Why Organizations Choose{" "}
                <span className="heading-highlight">{solution.title}</span>
              </h2>
              <div className="space-y-5">
                {solution.benefits.map((b, i) => (
                  <div key={b} className="flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-mono-tech text-xs font-bold transition-transform group-hover:scale-110"
                      style={{
                        background: "var(--surface)",
                        color: "var(--accent)",
                        border: "1px solid var(--card-border)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm pt-2.5 leading-relaxed text-[var(--text-muted)]">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--card-border)]">
              <img
                src={imgs.benefits}
                alt={`${solution.title} benefits`}
                className="img-cover h-[380px]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg) 0%, transparent 50%, var(--bg) 100%)",
                  opacity: 0.6,
                }}
              />
              <div className="absolute top-6 right-6">
                <div className="card p-4 text-center">
                  <div className="font-display font-black text-2xl text-[var(--accent)]">
                    {solution.benefits.length}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Key Benefits
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Grid */}
          <div>
            <div className="section-label mb-6">Typical Use Cases</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {solution.useCases.map((uc) => (
                <div
                  key={uc}
                  className="card p-5 flex items-center gap-4 group hover:scale-[1.01] transition-all cursor-default"
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 transition-all group-hover:scale-150"
                    style={{ background: "var(--accent)" }}
                  />
                  <span className="text-sm font-medium text-[var(--text-main)]">
                    {uc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Delivery Approach ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="section-label mb-4">Our Delivery Approach</div>
          <h2 className="font-display font-bold text-3xl text-[var(--text-main)]">
            How We Deliver{" "}
            <span className="heading-highlight">{solution.title}</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              title: "Assess & Understand",
              icon: SearchIcon,
              desc: "We start by understanding your environment, requirements and goals.",
            },
            {
              title: "Design the Solution",
              icon: RulerIcon,
              desc: "We architect a solution built specifically for your organisation.",
            },
            {
              title: "Implement & Configure",
              icon: CpuIcon,
              desc: "Our engineers deploy with precision, following structured processes.",
            },
            {
              title: "Support & Manage",
              icon: ShieldIcon,
              desc: "We provide ongoing support, monitoring and optimisation.",
            },
          ].map((step, i) => {
            const StepIcon = step.icon;
            return (
              <div key={step.title} className="card p-7 text-center group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <StepIcon size={24} color="var(--accent)" />
                </div>
                <div className="font-mono-tech text-xs mb-2 text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-semibold text-[var(--text-main)] text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Technology Stack ──────────────────────────────────── */}
      <section className="band py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="section-label mb-2">Technology Stack</span>
              <h3 className="font-display font-bold text-xl text-[var(--text-main)]">
                Powered by Leading Technology
              </h3>
            </div>
            <LayersIcon size={28} color="var(--accent)" />
          </div>
          <div className="flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105 cursor-default"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-main)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Solutions ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="section-label mb-2">Related Solutions</div>
            <h2 className="font-display font-bold text-2xl text-[var(--text-main)]">
              Explore More Solutions
            </h2>
          </div>
          <button
            onClick={() => navigate("solutions")}
            className="btn-ghost text-xs"
          >
            View All <ArrowRightIcon size={14} />
          </button>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {display.map((s) => {
            const RelIcon = s.icon;
            return (
              <div
                key={s.id}
                className="card glow-border p-7 cursor-pointer group hover:scale-[1.02] transition-all"
                onClick={() => navigate("solution-detail", s.id)}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <RelIcon size={22} color="var(--accent)" />
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--text-main)] mb-1">
                  {s.title}
                </h3>
                <p className="text-sm mb-4 text-[var(--accent)]">
                  {s.tagline}
                </p>
                <div className="text-xs font-semibold text-[var(--accent)] flex items-center gap-1">
                  Explore{" "}
                  <span className="transition-transform group-hover:translate-x-1 inline-block">
                    <ArrowRightIcon size={12} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <img
          src={imgs.cta}
          alt="Get started"
          className="absolute inset-0 img-cover"
          style={{ opacity: 0.1 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center card p-12 rounded-3xl max-w-3xl mx-auto">
            <SparklesIcon size={36} color="var(--accent)" />
            <h2 className="font-display font-bold text-3xl mt-4 mb-3 text-[var(--text-main)]">
              Ready to Implement{" "}
              <span className="heading-highlight">{solution.title}</span>?
            </h2>
            <p className="text-sm max-w-xl mx-auto mb-8 text-[var(--text-muted)]">
              Let DWPL design and deliver the right {solution.title.toLowerCase()}{" "}
              solution for your organization. Start with a free assessment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("contact")}
                className="btn-primary"
              >
                Start a Conversation <ArrowRightIcon size={16} />
              </button>
              <button
                onClick={() => navigate("solutions")}
                className="btn-outline"
              >
                Explore All Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
