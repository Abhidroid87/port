import { useEffect, useRef, useState } from 'react';

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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (hoveredIndex === null) return;

    const onMove = (e: globalThis.MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [hoveredIndex]);

  return (
    <div className="relative">
      {/* Floating preview image — follows cursor on desktop */}
      <div
        className="hidden md:block pointer-events-none fixed z-30"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(40px, -50%)',
          opacity: hoveredIndex !== null ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        {services.map((svc, i) => (
          <div
            key={svc.num}
            className="absolute rounded-xl overflow-hidden shadow-2xl"
            style={{
              width: 280,
              height: 360,
              opacity: hoveredIndex === i ? 1 : 0,
              transform:
                hoveredIndex === i
                  ? 'scale(1) rotate(-3deg)'
                  : 'scale(0.85) rotate(0deg)',
              transition:
                'opacity 0.35s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <img
              src={svc.image}
              alt={svc.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <p className="text-[#c8ff00] text-xs font-mono">{svc.num}</p>
              <p className="text-white text-sm font-display font-bold">{svc.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Service rows */}
      <div className="space-y-0">
        {services.map((svc, i) => {
          const isHovered = hoveredIndex === i;
          const isDimmed = hoveredIndex !== null && hoveredIndex !== i;

          return (
            <div
              key={svc.num}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group grid md:grid-cols-12 gap-6 py-12 border-t border-white/10 last:border-b cursor-pointer transition-all duration-500"
              style={{
                filter: isDimmed ? 'blur(4px)' : 'blur(0px)',
                opacity: isDimmed ? 0.4 : 1,
                background: isHovered ? 'rgba(200, 255, 0, 0.03)' : 'transparent',
              }}
            >
              <div className="md:col-span-2">
                <span
                  className="text-sm font-mono transition-colors duration-300"
                  style={{ color: isHovered ? '#c8ff00' : 'rgba(255,255,255,0.3)' }}
                >
                  {svc.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3
                  className="font-display text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-300"
                  style={{ color: isHovered ? '#c8ff00' : '#ffffff' }}
                >
                  {svc.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-white/60 leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full border border-white/10 px-3 py-1 text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-1 flex items-start justify-end">
                <svg
                  className="transition-transform duration-300"
                  style={{
                    transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
                    color: isHovered ? '#c8ff00' : 'rgba(255,255,255,0.3)',
                  }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
