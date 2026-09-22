import { useEffect, useState } from 'react';
import { useRouter } from '@/lib/router';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { navigate } = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

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

          <div className="relative mx-auto mt-20 h-[510px] w-full max-w-[980px] overflow-hidden" aria-hidden="true">
            <div
              className="absolute left-1/2 top-0 h-44 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#f3c66d] to-[#f3c66d] transition-all duration-700"
              style={{ opacity: 0.45 + scrollProgress * 0.55, boxShadow: `0 0 ${8 + scrollProgress * 18}px rgba(243,198,109,${0.2 + scrollProgress * 0.5})` }}
            />
            <div
              className="absolute left-1/2 top-[168px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#f3c66d] transition-all duration-700"
              style={{ boxShadow: `0 0 ${14 + scrollProgress * 20}px ${5 + scrollProgress * 8}px rgba(243,198,109,${0.25 + scrollProgress * 0.5})` }}
            />

            <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 0 1px, transparent 1px)', backgroundSize: '122px 84px', backgroundPosition: '15px 12px', animation: 'fade-in 2s ease both' }} />
            <div className="absolute inset-0 opacity-35" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.45) 0 1px, transparent 1px)', backgroundSize: '71px 113px', backgroundPosition: '42px 56px', animation: 'fade-in 2s ease 0.4s both' }} />

            <div className="absolute left-1/2 top-44 h-[310px] w-[310px] -translate-x-1/2 rounded-full md:h-[440px] md:w-[440px]" style={{ filter: `brightness(${0.75 + scrollProgress * 0.45})`, transition: 'filter 700ms ease' }}>
              <div className="absolute -inset-5 rounded-full border border-white/[0.035] shadow-[0_0_0_11px_rgba(255,255,255,0.025),0_0_0_24px_rgba(255,255,255,0.02)]" />
              <div className="absolute inset-0 overflow-hidden rounded-full border border-[#f3c66d]/70 bg-[radial-gradient(circle_at_38%_22%,rgba(255,246,193,0.55),rgba(232,159,71,0.22)_28%,rgba(12,12,12,0.98)_73%)] shadow-[inset_-35px_-30px_70px_rgba(0,0,0,0.9),0_0_22px_rgba(245,181,87,0.35)]">
                <div className="absolute inset-[-8%] animate-spin" style={{ animationDuration: '48s' }}>
                  <svg className="h-full w-full" viewBox="0 0 500 500" fill="none">
                    <defs>
                      <pattern id="earth-dots" width="5" height="5" patternUnits="userSpaceOnUse">
                        <circle cx="1.5" cy="1.5" r="1.15" fill="#d38a4e" />
                      </pattern>
                      <pattern id="earth-dots-light" width="4" height="4" patternUnits="userSpaceOnUse">
                        <circle cx="1.2" cy="1.2" r="1" fill="#ffe18d" />
                      </pattern>
                    </defs>
                    <g opacity="0.88">
                      <path d="M105 114c28-28 59-42 97-47l24 13 7 21-15 13-22-3-10 18-32 4-12 24-27-9-20-22Zm116-37 32-7 26 11 30 1 22 16-12 14-26-4-16 14-31-7-12-17-20-3 7-18Zm89 52 35-6 24 12 18 23-13 15-28-4-19-14-23 1-12-15 18-12Zm-170 56 30-6 21 16 22 3 18 20-5 25-22 9-18-14-17 4-14-23-26-9 11-25Zm90 42 24-14 27 9 11 21-13 23-25 2-17-17-19-5 12-19Zm39 44 24-13 29 11 8 25-11 26-27 6-22-18 6-37Zm-19 47 18-11 21 17-2 25-22 15-18-13-8-20 11-13Z" fill="url(#earth-dots)" />
                      <path d="M322 330l28-3 26 16 12 27-12 16-30-3-20-17-14-23 10-13Zm-137-24 25 10 11 24-7 26-21 8-20-18-4-28 16-22Z" fill="url(#earth-dots-light)" />
                    </g>
                    <g stroke="#f3c66d" strokeOpacity="0.22">
                      <ellipse cx="250" cy="250" rx="228" ry="74" />
                      <ellipse cx="250" cy="250" rx="228" ry="145" />
                      <ellipse cx="250" cy="250" rx="228" ry="205" />
                    </g>
                    <path d="M38 251h424M65 184h370M65 316h370" stroke="#f3c66d" strokeOpacity="0.12" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_72%,rgba(0,0,0,0.94),transparent_56%)]" />
                <div className="absolute inset-x-0 top-[42%] h-px bg-gradient-to-r from-transparent via-[#f3c66d]/50 to-transparent animate-pulse" />
              </div>
            </div>

            <div className="absolute left-1/2 top-[63%] h-[335px] w-[335px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[465px] md:w-[465px]" style={{ transform: 'translate(-50%, -50%) rotate(18deg) skewY(-5deg)', animation: 'spin 34s linear infinite' }} />

            {[
              ['moneyfarm', 'right-[8%] top-[25%]'],
              ['opennode', 'left-[8%] top-[45%]'],
              ['Triple-A', 'left-1/2 top-[52%]'],
              ['Thndr', 'right-[17%] top-[43%]'],
              ['Anecdot', 'left-1/2 top-[66%]'],
              ['Interledger', 'right-[7%] top-[66%]'],
              ['OKTO.PAYMENTS', 'left-[12%] top-[69%]'],
              ['The Better Money Company', 'right-[26%] top-[81%]'],
            ].map(([label, position], index) => (
              <span
                key={label}
                className={`absolute ${position} -translate-x-1/2 rounded-lg border border-white/10 bg-[#171717]/90 px-3 py-2 text-[10px] font-medium text-white/90 shadow-xl backdrop-blur-sm md:text-sm`}
                style={{ animation: `fade-up 0.8s ease ${0.7 + index * 0.08}s both, float 5s ease-in-out ${index * 0.35}s infinite` }}
              >
                {label}
              </span>
            ))}
          </div>
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
