import { useEffect, useState } from 'react';
import { useRouter } from '@/lib/router';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Works', path: '/work' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { path, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const handleNav = (to: string) => {
    navigate(to);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <button
            onClick={() => handleNav('/')}
            className="font-display text-xl font-bold tracking-tight text-white"
          >
            AGENCIA
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`link-underline text-sm font-medium tracking-wide transition-colors ${
                  path === link.path ? 'text-[#c8ff00]' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => handleNav('/contact')}
              className="group flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-[#c8ff00] hover:text-[#c8ff00]"
            >
              Chat With Us
              <span className="inline-block h-2 w-2 rounded-full bg-[#c8ff00] transition-transform group-hover:scale-150" />
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              className={`font-display text-4xl font-bold transition-colors ${
                path === link.path ? 'text-[#c8ff00]' : 'text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('/contact')}
            className="mt-4 rounded-full border border-[#c8ff00] px-8 py-3 text-sm font-medium text-[#c8ff00]"
          >
            Chat With Us
          </button>
        </div>
      </div>
    </>
  );
}
