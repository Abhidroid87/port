import { useEffect, useRef, useState, MouseEvent } from 'react';

export type Project = {
  title: string;
  category: string;
  num: string;
  image: string;
};

type ProjectListProps = {
  projects: Project[];
  onProjectClick?: () => void;
};

export default function ProjectList({ projects, onProjectClick }: ProjectListProps) {
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

  const handleRowEnter = (i: number) => {
    setHoveredIndex(i);
  };

  const handleRowLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="relative">
      {/* Floating preview image — follows cursor on desktop */}
      <div
        className="hidden md:block pointer-events-none fixed z-30"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(30px, -50%)',
          opacity: hoveredIndex !== null ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      >
        {projects.map((proj, i) => (
          <div
            key={proj.num}
            className="absolute rounded-xl overflow-hidden shadow-2xl"
            style={{
              width: 300,
              height: 380,
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
              src={proj.image}
              alt={proj.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <p className="text-[#c8ff00] text-xs font-mono">{proj.num}</p>
              <p className="text-white text-sm font-display font-bold">{proj.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Project list rows */}
      <div className="space-y-0">
        {projects.map((proj, i) => (
          <div
            key={proj.num}
            onMouseEnter={() => handleRowEnter(i)}
            onMouseLeave={handleRowLeave}
            onClick={onProjectClick}
            className="group relative border-t border-white/10 last:border-b py-8 md:py-10 cursor-pointer overflow-hidden"
          >
            {/* Slide-in background accent */}
            <div
              className="absolute inset-0 bg-[#c8ff00] origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: hoveredIndex === i ? 'scaleX(0.04)' : 'scaleX(0)',
              }}
            />

            <div
              className="relative flex items-center justify-between gap-4 px-2 md:px-6 transition-transform duration-300 ease-out"
              style={{
                transform: hoveredIndex === i ? 'translateX(24px)' : 'translateX(0px)',
              }}
            >
              <div className="flex items-center gap-4 md:gap-8">
                <span
                  className="text-xs md:text-sm font-mono transition-colors duration-300"
                  style={{
                    color: hoveredIndex === i ? '#0a0a0a' : 'rgba(255,255,255,0.3)',
                  }}
                >
                  {proj.num}
                </span>
                <h3
                  className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-colors duration-300"
                  style={{
                    color: hoveredIndex === i ? '#0a0a0a' : '#ffffff',
                  }}
                >
                  {proj.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 md:gap-8">
                <span
                  className="hidden md:block text-sm transition-colors duration-300"
                  style={{
                    color: hoveredIndex === i ? '#0a0a0a' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {proj.category}
                </span>
                <svg
                  className="transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    color: hoveredIndex === i ? '#0a0a0a' : 'rgba(255,255,255,0.3)',
                  }}
                  width="28"
                  height="28"
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

            {/* Mobile thumbnail */}
            <div className="md:hidden mt-4 rounded-lg overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
