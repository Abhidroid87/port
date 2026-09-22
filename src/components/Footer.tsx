import { useRouter } from '@/lib/router';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* CTA */}
        <div
          className="group/cta relative text-center mb-20"
          style={{ animation: 'fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both' }}
        >
          <p
            className="mb-6 text-sm uppercase tracking-[0.22em] text-white/40 transition-colors duration-500 group-hover/cta:text-white/70"
            style={{ animation: 'fade-in 0.8s ease both', animationDelay: '0.15s' }}
          >
            We bring you our Greatest Work
          </p>
          <h2
            className="font-display text-6xl font-bold leading-none tracking-tighter text-white transition-transform duration-700 ease-out group-hover/cta:-translate-y-1 md:text-8xl lg:text-9xl"
            style={{ animation: 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both', animationDelay: '0.25s' }}
          >
            Let&apos;s Get
          </h2>
          <h2
            className="font-display text-6xl font-bold leading-none tracking-tighter gradient-text transition-transform duration-700 ease-out group-hover/cta:translate-y-1 md:text-8xl lg:text-9xl"
            style={{ animation: 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both', animationDelay: '0.35s' }}
          >
            Started
          </h2>
          <button
            onClick={() => navigate('/contact')}
            className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#c8ff00] px-8 py-4 text-sm font-bold text-black shadow-[0_0_0_rgba(200,255,0,0)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_36px_rgba(200,255,0,0.28)]"
            style={{ animation: 'scale-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both', animationDelay: '0.5s' }}
          >
            <span className="relative z-10">Contact Us</span>
            <ArrowUpRight className="relative z-10 transition-transform duration-300 group-hover:rotate-45" size={18} />
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
          </button>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-white/10 pt-12">
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Menu</p>
            <div className="flex flex-col gap-2">
              {['Home', 'About', 'Works', 'Contact'].map((item, i) => (
                <button
                  key={item}
                  onClick={() => navigate(['/', '/about', '/work', '/contact'][i])}
                  className="link-underline text-white/70 hover:text-white text-sm text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">More Pages</p>
            <div className="flex flex-col gap-2">
              <span className="text-white/40 text-sm cursor-default">Privacy Policies</span>
              <span className="text-white/40 text-sm cursor-default">404</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Contact</p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a href="tel:3232380614" className="link-underline">(323) 238-0614</a>
              <span>909-1/2 E 49th St</span>
              <span>Los Angeles, CA 90011</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Follow</p>
            <div className="flex flex-col gap-2">
              {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="link-underline text-white/70 hover:text-white text-sm"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant logo */}
        <div className="overflow-hidden">
          <h2 className="font-display text-[20vw] font-bold tracking-tighter text-white/5 leading-none text-center select-none">
            AGENCIA
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-xs text-white/30">© 2025 Agencia. All rights reserved.</p>
          <p className="text-xs text-white/30">Design st '25</p>
        </div>
      </div>
    </footer>
  );
}
