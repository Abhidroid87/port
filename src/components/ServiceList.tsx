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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const activeIndex = hoveredIndex ?? selectedIndex;

  useEffect(() => {
    if (activeIndex === null) return;

    const onMove = (event: globalThis.MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex]);

  const handleSelect = (index: number) => {
    setSelectedIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="relative min-h-[520px] overflow-visible py-10 md:py-16">
      <div
        className="pointer-events-none fixed z-30 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          opacity: activeIndex === null ? 0 : 1,
          transform: 'translate(42px, -50%)',
          transition: 'opacity 0.35s ease',
        }}
      >
        {services.map((service, index) => (
          <div
            key={service.num}
            className="absolute h-[330px] w-[250px] overflow-hidden rounded-sm shadow-2xl"
            style={{
              opacity: activeIndex === index ? 1 : 0,
              transform:
                activeIndex === index
                  ? 'rotate(3deg) scale(1)'
                  : 'rotate(0deg) scale(0.8)',
              transition:
                'opacity 0.35s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-mono text-xs text-[#ff4b2b]">{service.num}</p>
              <p className="font-display text-lg font-bold text-white">{service.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 right-0 top-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/50 md:text-xs">
        <span>[Over 30+ Skillset]</span>
        <span>[Crafted with passion]</span>
      </div>

      <div className="mx-auto flex w-fit items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
        <span>Services</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]">
          02
        </span>
      </div>

      <div
        className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-1 md:mt-20 md:gap-0"
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedIndex(null);
        }}
      >
        {services.map((service, index) => {
          const isActive = activeIndex === index;
          const isDimmed = activeIndex !== null && !isActive;
          const isLocked = selectedIndex === index;

          return (
            <button
              key={service.num}
              type="button"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleSelect(index)}
              className="group relative flex w-full items-center justify-center py-1 text-center outline-none md:py-0"
              aria-pressed={isLocked}
              aria-label={`${isLocked ? 'Unselect' : 'Select'} ${service.title}`}
            >
              <span
                className="absolute -left-1 hidden font-mono text-sm text-[#ff4b2b] transition-opacity duration-300 md:block lg:-left-10"
                style={{ opacity: isActive ? 1 : 0 }}
              >
                {service.num}
              </span>
              <span
                className="font-display text-[17vw] font-bold uppercase leading-[0.82] tracking-[-0.08em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[8.7rem]"
                style={{
                  filter: isDimmed || activeIndex === null ? 'blur(7px)' : 'blur(0px)',
                  opacity: isDimmed ? 0.38 : 1,
                  color: isActive ? '#f5f5f5' : 'rgba(245,245,245,0.72)',
                  transform: isActive ? 'translateX(8px)' : 'translateX(0px)',
                }}
              >
                {service.title}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-12 text-center text-[10px] uppercase tracking-[0.18em] text-white/30 md:text-xs">
        Hover to preview · Click to hold
      </p>
    </div>
  );
}
