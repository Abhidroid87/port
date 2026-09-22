import { useState } from 'react';

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

  return (
    <div className="relative">
      <div className="space-y-0">
        {projects.map((proj, i) => {
          const isActive = hoveredIndex === i;
          return (
            <div
              key={proj.num}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={onProjectClick}
              className="group relative border-t border-white/10 last:border-b py-8 md:py-10 cursor-pointer overflow-hidden"
            >
              {/* Background image — hidden by default, slides in on hover */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateX(0) scale(1)' : 'translateX(80px) scale(1.1)',
                  transition:
                    'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                  pointerEvents: 'none',
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-full w-full object-cover"
                  style={{
                    transform: isActive ? 'scale(1)' : 'scale(1.15)',
                    transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-[#0a0a0a]/70" />
              </div>

              {/* Slide-in accent bar */}
              <div
                className="absolute left-0 top-0 h-full w-1 bg-[#c8ff00] origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
                }}
              />

              <div
                className="relative flex items-center justify-between gap-4 px-2 md:px-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: isActive ? 'translateX(24px)' : 'translateX(0px)',
                }}
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span
                    className="text-xs md:text-sm font-mono transition-colors duration-300"
                    style={{
                      color: isActive ? '#c8ff00' : 'rgba(255,255,255,0.3)',
                    }}
                  >
                    {proj.num}
                  </span>
                  <h3
                    className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-500"
                    style={{
                      color: isActive ? '#ffffff' : 'rgba(255,255,255,0.85)',
                      textShadow: isActive ? '0 2px 20px rgba(0,0,0,0.5)' : 'none',
                    }}
                  >
                    {proj.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                  <span
                    className="hidden md:block text-sm transition-all duration-500"
                    style={{
                      color: isActive ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
                      transform: isActive ? 'translateX(-8px)' : 'translateX(0)',
                    }}
                  >
                    {proj.category}
                  </span>
                  <svg
                    className="transition-transform duration-500"
                    style={{
                      transform: isActive ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      color: isActive ? '#c8ff00' : 'rgba(255,255,255,0.3)',
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
          );
        })}
      </div>
    </div>
  );
}
