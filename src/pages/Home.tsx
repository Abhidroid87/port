import { useEffect, useState } from 'react';
import { useRouter } from '@/lib/router';
import { useReveal } from '@/lib/useReveal';
import Marquee from '@/components/Marquee';
import Magnetic from '@/components/Magnetic';
import ProjectList, { type Project } from '@/components/ProjectList';
import ServiceList, { type Service } from '@/components/ServiceList';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const heroBg = '/assets/hero-bg.jpg';

const services: Service[] = [
  {
    num: '01',
    title: 'MOTION',
    desc: 'Motion design is not just about movement — it is storytelling through rhythm, texture, and visual energy.',
    tags: ['UI Animation', '3D Motion', 'Video Editing', 'Sound Design'],
    image: '/assets/service-motion.jpg',
  },
  {
    num: '02',
    title: 'BRANDING',
    desc: 'We build brands from the ground up — identity, voice, strategy, and visual language that resonate and endure.',
    tags: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Guidelines'],
    image: '/assets/service-branding.jpg',
  },
  {
    num: '03',
    title: 'GRAPHIC',
    desc: 'We turn ideas into striking visual systems that give every campaign, screen, and story a distinct point of view.',
    tags: ['Art Direction', 'Editorial Design', 'Campaigns', 'Typography'],
    image: '/assets/service-graphic.jpg',
  },
];

const featuredWorks: Project[] = [
  {
    title: 'LEVI COLWILL',
    category: 'MODELLING 3D GRAPHIC',
    num: '01',
    image: '/assets/work-levi.jpg',
  },
  {
    title: 'THE NEWS',
    category: 'MOBILE APP UI',
    num: '02',
    image: '/assets/work-news.jpg',
  },
  {
    title: 'THEO AGENCY',
    category: 'REBRAND PROJECT',
    num: '03',
    image: '/assets/work-theo.jpg',
  },
  {
    title: 'HORIZON',
    category: 'LAB FLOW',
    num: '04',
    image: '/assets/work-horizon.jpg',
  },
];

export default function Home() {
  const { navigate } = useRouter();
  const heroRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);
  const aboutRef = useReveal<HTMLDivElement>('fade-up', 0, 0.15);
  const servicesSectionRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);
  const workRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/70 to-[#0a0a0a]" />

        <div ref={heroRef} className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-[#c8ff00]" />
            <span className="text-sm text-white/60 tracking-widest uppercase">Design st '25</span>
          </div>

          <h1 className="font-display text-[18vw] md:text-[14vw] lg:text-[12rem] font-bold tracking-tighter leading-[0.85] text-white">
            AGENCIA
          </h1>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <p className="text-lg md:text-xl text-white/60 max-w-md">
              A creative agency crafting bold digital experiences through branding, art direction, and motion.
            </p>
            <Magnetic>
              <button
                onClick={() => navigate('/work')}
                className="group flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#c8ff00] hover:text-[#c8ff00]"
              >
                View Our Works
                <ArrowUpRight className="transition-transform group-hover:rotate-45" size={16} />
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="animate-bounce" size={16} />
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-white/10 py-6 bg-[#0a0a0a]">
        <Marquee
          items={['BRANDING', 'ART DIRECTION', 'MOTION', 'UI DESIGN', 'CREATIVE STRATEGY', '3D DESIGN']}
          speed={25}
          className="text-4xl md:text-6xl font-display font-bold text-white/80"
        />
      </div>

      {/* About / Intro */}
      <section className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div ref={aboutRef} className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/30 font-mono">01</span>
              <span className="text-sm text-white/40 tracking-widest uppercase">About</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              As a tight-knit team of experts, we create{' '}
              <span className="text-white/40">memorable and emotional</span> websites, digital
              experiences, and native apps.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {['DYNAMIC', 'QUALITY', 'CREATIVE'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/60 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div ref={servicesSectionRef}>
          <ServiceList services={services} />
        </div>
      </section>

      {/* Featured Work — hover list with floating image preview */}
      <section className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div ref={workRef} className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/30 font-mono">03</span>
            <span className="text-sm text-white/40 tracking-widest uppercase">Selected Work</span>
          </div>
          <button
            onClick={() => navigate('/work')}
            className="group flex items-center gap-2 text-sm text-white/60 hover:text-[#c8ff00] transition-colors"
          >
            View All
            <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={16} />
          </button>
        </div>

        <ProjectList projects={featuredWorks} onProjectClick={() => navigate('/work')} />
      </section>

      {/* Stats marquee */}
      <div className="border-y border-white/10 py-6 bg-[#0a0a0a]">
        <Marquee
          items={['© 2025', "LET'S", 'BEGIN', 'AGENCIA', 'DESIGN ST']}
          direction="right"
          speed={35}
          className="text-3xl md:text-5xl font-display font-bold text-white/40"
          separator="—"
        />
      </div>
    </div>
  );
}
