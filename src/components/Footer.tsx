import { useRouter } from '@/lib/router';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* CTA */}
        <div className="text-center mb-20">
          <p className="text-sm text-white/40 tracking-widest uppercase mb-6">
            We bring you our Greatest Work
          </p>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-none">
            Let's Get
          </h2>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter gradient-text leading-none">
            Started
          </h2>
          <button
            onClick={() => navigate('/contact')}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#c8ff00] px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105"
          >
            Contact Us
            <ArrowUpRight className="transition-transform group-hover:rotate-45" size={18} />
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
