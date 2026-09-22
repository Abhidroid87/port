import { useEffect, useRef, useState } from 'react';

export type Project = {
  slug?: string;
  title: string;
  category: string;
  num: string;
  image: string;
  video?: string;
  year?: string;
  description?: string;
  services?: string[];
};

type ProjectListProps = {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
};

export default function ProjectList({ projects, onProjectClick }: ProjectListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="space-y-0">
        {projects.map((proj, i) => {
          const isActive = hoveredIndex === i;
          const projectUrl = proj.slug ? `/work/${proj.slug}` : undefined;

          return (
            <div
              key={proj.num}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onProjectClick?.(proj)}
              className="group relative cursor-pointer overflow-hidden border-t border-white/10 py-8 last:border-b md:py-10"
            >
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
                {proj.video ? (
                  <HoverVideo src={proj.video} poster={proj.image} active={isActive} />
                ) : (
                  <img src={proj.image} alt={proj.title} className="h-full w-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-[#0a0a0a]/70" />
              </div>

              <div
                className="absolute left-0 top-0 h-full w-1 origin-left bg-[#c8ff00] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: isActive ? 'scaleY(1)' : 'scaleY(0)' }}
              />

              <div
                className="relative flex items-center justify-between gap-4 px-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-6"
                style={{ transform: isActive ? 'translateX(24px)' : 'translateX(0px)' }}
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span
                    className="font-mono text-xs transition-colors duration-300 md:text-sm"
                    style={{ color: isActive ? '#c8ff00' : 'rgba(255,255,255,0.3)' }}
                  >
                    {proj.num}
                  </span>
                  <h3
                    className="font-display text-3xl font-bold tracking-tight transition-all duration-500 md:text-5xl lg:text-6xl"
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
                    className="hidden text-sm transition-all duration-500 md:block"
                    style={{
                      color: isActive ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
                      transform: isActive ? 'translateX(-8px)' : 'translateX(0)',
                    }}
                  >
                    {proj.category}
                  </span>
                  <button
                    type="button"
                    aria-label={`Open ${proj.title} project`}
                    onClick={(event) => {
                      event.stopPropagation();
                      if (projectUrl) window.history.pushState({}, '', projectUrl);
                      onProjectClick?.(proj);
                    }}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-all duration-500 hover:border-[#c8ff00]"
                    style={{
                      transform: isActive ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      color: isActive ? '#c8ff00' : 'rgba(255,255,255,0.3)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-lg md:hidden">
                <img src={proj.image} alt={proj.title} className="h-48 w-full object-cover" loading="lazy" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HoverVideo({ src, poster, active }: { src: string; poster: string; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [active]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className="h-full w-full object-cover"
    />
  );
}
