import { useReveal } from '@/lib/useReveal';
import Marquee from '@/components/Marquee';
import ServiceList, { type Service } from '@/components/ServiceList';

const aboutBg =
  'https://images.pexels.com/photos/7827892/pexels-photo-7827892.jpeg?auto=compress&cs=tinysrgb&w=1920';
const portraitImage =
  'https://images.pexels.com/photos/19330260/pexels-photo-19330260.jpeg?auto=compress&cs=tinysrgb&w=800';

const services: Service[] = [
  {
    num: '01',
    title: 'MOTION',
    desc: 'Motion design is not just about movement — it is storytelling through rhythm, texture, and visual energy.',
    tags: ['UI Animation', '3D Motion', 'Video Editing', 'Sound Design'],
    image: 'https://images.pexels.com/photos/8817542/pexels-photo-8817542.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '02',
    title: 'BRANDING',
    desc: 'We craft brands that breathe. From identity systems to tone of voice, we shape every detail to create a brand that feels alive and intentional.',
    tags: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Guidelines'],
    image: 'https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '03',
    title: 'GRAPHIC',
    desc: 'We turn ideas into striking visual systems that give every campaign, screen, and story a distinct point of view.',
    tags: ['Art Direction', 'Editorial Design', 'Campaigns', 'Typography'],
    image: 'https://images.pexels.com/photos/36991335/pexels-photo-36991335.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '04',
    title: 'UI / UX',
    desc: 'We design interfaces that feel natural. Intuitive navigation, thoughtful interactions, and pixel-perfect layouts that users love.',
    tags: ['Wireframing', 'Prototyping', 'Design Systems', 'User Testing'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const clientLogos = ['MOVIT', 'NEXUS', 'PRISMA', 'ZENITH', 'ORBIT', 'CRAFT'];

export default function About() {
  const heroRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);
  const testimonialRef = useReveal<HTMLDivElement>('fade-up', 0, 0.15);
  const servicesRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);
  const logoRef = useReveal<HTMLDivElement>('fade-in', 0, 0.1);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 to-[#0a0a0a]" />

        <div ref={heroRef} className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 w-full pt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-[#c8ff00]" />
            <span className="text-sm text-white/60 tracking-widest uppercase">Design st '25</span>
          </div>
          <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter text-white leading-none">
            Who We Are
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            {['DYNAMIC', 'QUALITY', 'CREATIVE'].map((tag, i) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/60 tracking-wide"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Intro */}
      <section className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div ref={testimonialRef} className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs text-white/30 font-mono">01</span>
              <span className="text-sm text-white/40 tracking-widest uppercase">About</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              As a tight-knit team of experts, we create{' '}
              <span className="text-white/40">memorable and emotional</span> websites, digital
              experiences, and native apps.
            </h2>
          </div>
          <div className="md:col-span-5">
            <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/5]">
              <img src={portraitImage} alt="Adam Levine" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="font-display text-lg font-bold text-white">Adam Levine</p>
                <p className="text-sm text-white/40">CEO of Movit</p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#c8ff00]">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos marquee */}
      <div className="border-y border-white/10 py-8 overflow-hidden" ref={logoRef}>
        <Marquee
          items={clientLogos}
          speed={20}
          className="text-3xl md:text-5xl font-display font-bold text-white/30"
        />
      </div>

      {/* Services */}
      <section className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div ref={servicesRef}>
          <ServiceList services={services} />
        </div>
      </section>
    </div>
  );
}
