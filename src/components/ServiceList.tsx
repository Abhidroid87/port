import { useState } from 'react';

export type Service = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
};

type ServiceListProps = {
  services: Service[];
};

export default function ServiceList({ services }: ServiceListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-[520px] overflow-hidden py-10 md:py-16">
      {/* Background image layer — slides in on hover, hidden by default */}
      <div className="absolute inset-y-0 right-0 z-0 w-full md:w-[42%] lg:w-[38%] md:[mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)]">
        {services.map((service, index) => {
          const isActive = hoveredIndex === index;
          return (
            <div
              key={service.num}
              className="absolute inset-0 overflow-hidden"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateX(0) scale(1)' : 'translateX(60px) scale(1.1)',
                transition:
                  'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                pointerEvents: 'none',
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
                style={{
                  transform: isActive ? 'scale(1)' : 'scale(1.15)',
                  transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/85 via-[#0a0a0a]/50 to-[#0a0a0a]/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />
            </div>
          );
        })}
      </div>

      {/* Top labels */}
      <div className="relative z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/50 md:text-xs">
        <span>[Over 30+ Skillset]</span>
        <span>[Crafted with passion]</span>
      </div>

      {/* Services badge */}
      <div className="relative z-10 mx-auto mt-2 flex w-fit items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
        <span>Services</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]">
          02
        </span>
      </div>

      {/* Service titles */}
      <div
        className="relative z-10 mx-auto mt-16 flex max-w-3xl flex-col items-center gap-1 md:mt-20 md:gap-0"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {services.map((service, index) => {
          const isActive = hoveredIndex === index;
          const isDimmed = hoveredIndex !== null && !isActive;

          return (
            <div
              key={service.num}
              onMouseEnter={() => setHoveredIndex(index)}
              className="group relative flex w-full items-center justify-center py-1 text-center md:py-0"
            >
              <span
                className="absolute -left-1 hidden font-mono text-sm text-[#ff4b2b] transition-all duration-500 md:block lg:-left-10"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateX(0)' : 'translateX(-12px)',
                }}
              >
                {service.num}
              </span>
              <span
                className="font-display text-[17vw] font-bold uppercase leading-[0.82] tracking-[-0.08em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[8.7rem]"
                style={{
                  filter: isDimmed || hoveredIndex === null ? 'blur(7px)' : 'blur(0px)',
                  opacity: isDimmed ? 0.38 : 1,
                  color: isActive ? '#f5f5f5' : 'rgba(245,245,245,0.72)',
                  transform: isActive ? 'translateX(8px)' : 'translateX(0px)',
                }}
              >
                {service.title}
              </span>

              {/* Description + tags — slide in on hover */}
              <div
                className="absolute -right-48 top-1/2 hidden max-w-[210px] -translate-y-1/2 text-left md:block lg:-right-60 lg:max-w-xs"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? 'translateX(0) translateY(-50%)'
                    : 'translateX(40px) translateY(-50%)',
                  transition:
                    'opacity 0.5s ease 0.15s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s',
                }}
              >
                <p className="text-sm text-white/70 leading-relaxed">{service.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] text-white/50 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="relative z-10 mt-12 text-center text-[10px] uppercase tracking-[0.18em] text-white/30 md:text-xs">
        Hover to preview
      </p>
    </div>
  );
}
