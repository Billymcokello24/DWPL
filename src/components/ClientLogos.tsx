// Real Client & Partner Logo Images loaded from public/logos/

export function MasenoUniversityLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
      <img
        src="/logos/Maseno_University_logo.jpg"
        alt="Maseno University Logo"
        className={`${className} max-h-12 object-contain`}
      />
    </div>
  );
}

export function TomMboyaUniversityLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
      <img
        src="/logos/tmu-logo.png"
        alt="Tom Mboya University Logo"
        className={`${className} max-h-12 object-contain`}
      />
    </div>
  );
}

export function HomelandItoyaLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
      <img
        src="/logos/homeland.png"
        alt="Homeland Itoya Events Logo"
        className={`${className} max-h-12 object-contain`}
      />
    </div>
  );
}

export function ElleGardensLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
      <img
        src="/logos/elle.jpg"
        alt="Elle Gardens Logo"
        className={`${className} max-h-12 object-contain rounded-lg`}
      />
    </div>
  );
}


export function ProdigyConstructionsLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
      <img
        src="/logos/Prodigy.png"
        alt="Prodigy Constructions Logo"
        className={`${className} max-h-12 object-contain`}
      />
    </div>
  );
}

export function LalaCabsLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
      <img
        src="/logos/Lalacabs.jpeg"
        alt="Lala Cabs Logo"
        className={`${className} max-h-12 object-contain rounded-lg`}
      />
    </div>
  );
}

export function EllenSpearLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
      <img
        src="/logos/ellen-spear-logo.png"
        alt="Ellen Spear Group Logo"
        className={`${className} max-h-12 object-contain`}
      />
    </div>
  );
}

export function RockwellLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
      <img
        src="/logos/Rockwell.jpeg"
        alt="Rockwell Logo"
        className={`${className} max-h-12 object-contain rounded-lg`}
      />
    </div>
  );
}

export function ClientLogoMarquee() {
  const logos = [
    { Component: MasenoUniversityLogo, name: "Maseno University" },
    { Component: TomMboyaUniversityLogo, name: "Tom Mboya University" },
    { Component: HomelandItoyaLogo, name: "Homeland Itoya Events" },
    { Component: ElleGardensLogo, name: "Elle Gardens" },
    { Component: ProdigyConstructionsLogo, name: "Prodigy Constructions" },
    { Component: LalaCabsLogo, name: "Lala Cabs" },
    { Component: EllenSpearLogo, name: "Ellen Spear Group" },
    { Component: RockwellLogo, name: "Rockwell" },
  ];

  // Repeat for continuous marquee loop
  const marqueeItems = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-4 border-y relative" style={{ background: "var(--surface)", borderColor: "var(--border-subtle)" }}>
      {/* Gradient Fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--surface)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--surface)] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-slow flex items-center gap-8">
        {marqueeItems.map((item, idx) => {
          const LogoComp = item.Component;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl border shrink-0 transition-transform hover:scale-105"
              style={{ background: "var(--card-bg)", borderColor: "var(--border-subtle)" }}
            >
              <LogoComp className="h-9 w-auto" />
              <span className="font-display font-semibold text-xs whitespace-nowrap" style={{ color: "var(--text-main)" }}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
