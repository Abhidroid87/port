import { useReveal } from '@/lib/useReveal';
import { useRouter } from '@/lib/router';
import Marquee from '@/components/Marquee';
import ProjectList from '@/components/ProjectList';
import { projects } from '@/lib/projects';
import { assetPath } from '@/lib/assets';

const workBg = assetPath('assets/work-hero-bg.jpg');

export default function Work() {
  const { navigate } = useRouter();
  const heroRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);
  const listRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${workBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 to-[#0a0a0a]" />

        <div ref={heroRef} className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 w-full pt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-[#c8ff00]" />
            <span className="text-sm text-white/60 tracking-widest uppercase">Design st '25</span>
          </div>
          <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter text-white leading-none">
            Our Works
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            {['CLARITY', 'CRAFT', 'MODERN'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/60 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project list with hover preview */}
      <section className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto" ref={listRef}>
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/30 font-mono">01</span>
            <span className="text-sm text-white/40 tracking-widest uppercase">Projects</span>
          </div>
          <span className="text-sm text-white/30">[Over 30+ Creations]</span>
        </div>

        <ProjectList projects={projects} onProjectClick={(project) => navigate(`/work/${project.slug}`)} />
      </section>

      {/* Marquee */}
      <div className="border-y border-white/10 py-6">
        <Marquee
          items={['CRAFTED WITH PASSION', 'DESIGN EXCELLENCE', 'CREATIVE INNOVATION']}
          speed={25}
          className="text-3xl md:text-5xl font-display font-bold text-white/40"
        />
      </div>
    </div>
  );
}
