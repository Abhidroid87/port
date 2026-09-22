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

          <div className="relative mx-auto mt-20 h-[360px] w-full max-w-[720px] overflow-hidden" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-36 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c8ff00]/60 to-[#c8ff00]" />
            <div className="absolute left-1/2 top-32 h-3 w-3 -translate-x-1/2 rounded-full bg-[#c8ff00] shadow-[0_0_26px_10px_rgba(200,255,0,0.28)]" />

            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.55) 0 1px, transparent 1px)',
                backgroundSize: '118px 92px',
                backgroundPosition: '12px 20px',
              }}
            />

            <div className="absolute left-1/2 top-36 h-[290px] w-[290px] -translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_34%,rgba(0,0,0,0.92)_72%)] shadow-[0_0_0_12px_rgba(255,255,255,0.025),0_0_0_26px_rgba(255,255,255,0.02),0_-18px_42px_rgba(255,210,90,0.08)] md:h-[390px] md:w-[390px]">
              <div className="absolute inset-[3%] overflow-hidden rounded-full border border-white/10">
                <div
                  className="absolute inset-[-20%] animate-spin"
                  style={{ animationDuration: '34s' }}
                >
                  <svg className="h-full w-full opacity-45" viewBox="0 0 500 500" fill="none">
                    <path
                      d="M95 150c18-28 42-45 70-52l24 18-12 25-25 7-12 27-30 9-15-16Zm73 74 24-29 36 7 19 27-11 30-35 11-14 46-27-17 8-40-20-22Zm88-153 35-9 25 14-5 24-28 8-19-14-8-23Zm37 100 30-23 37 10 18 29-27 17-29-8-24 20-18-19 13-26Zm48 64 27-12 35 17 10 28-21 23-34-8-23-24 6-24Zm-6 74 31-6 22 23-10 26-33 4-22-21 12-26Z"
                      fill="currentColor"
                      className="text-white/70"
                    />
                    <path
                      d="M93 112c62-55 159-76 242-46 79 28 132 96 138 173-12-65-51-118-112-145-84-38-182-19-268 18Zm42 247c68 47 155 58 230 25 56-25 96-66 112-117-14 76-66 139-140 169-77 31-161 15-218-26Z"
                      fill="currentColor"
                      className="text-white/20"
                    />
                    <ellipse cx="250" cy="250" rx="208" ry="84" stroke="currentColor" className="text-white/20" />
                    <ellipse cx="250" cy="250" rx="208" ry="150" stroke="currentColor" className="text-white/10" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.95),transparent_56%)]" />
              </div>
            </div>

            <div
              className="absolute left-1/2 top-[57%] h-[318px] w-[318px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[418px] md:w-[418px]"
              style={{ transform: 'translate(-50%, -50%) rotate(18deg) skewY(-5deg)' }}
            />
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
