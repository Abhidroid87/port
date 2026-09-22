import { useState } from 'react';
import { useReveal } from '@/lib/useReveal';
import { useRouter } from '@/lib/router';
import FAQAccordion from '@/components/FAQAccordion';
import { Send, MapPin, Phone, Check, ArrowUpRight } from 'lucide-react';

const contactBg =
  'https://images.pexels.com/photos/355904/pexels-photo-355904.jpeg?auto=compress&cs=tinysrgb&w=1920';
const locationImage =
  'https://images.pexels.com/photos/9594093/pexels-photo-9594093.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Contact() {
  const { navigate } = useRouter();
  const heroRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);
  const formRef = useReveal<HTMLDivElement>('slide-left', 0, 0.15);
  const faqRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);
  const locRef = useReveal<HTMLDivElement>('fade-up', 0, 0.1);

  const [form, setForm] = useState({ email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${contactBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 to-[#0a0a0a]" />

        <div ref={heroRef} className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 w-full pt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-[#c8ff00]" />
            <span className="text-sm text-white/60 tracking-widest uppercase">Get in Touch</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-none">
            CONTACT FORM
          </h1>
        </div>
      </section>

      {/* Form + side */}
      <section className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div ref={formRef} className="md:col-span-7">
            <p className="text-xl text-white/60 mb-12 max-w-md">
              Drop us a line, we'll respond to you in 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/15 pb-3 text-lg text-white placeholder-white/20 focus:border-[#c8ff00] focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div className="group">
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-3">
                  Your Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-white/15 pb-3 text-lg text-white placeholder-white/20 focus:border-[#c8ff00] focus:outline-none transition-colors"
                  placeholder="+1 (000) 000-0000"
                />
              </div>

              <div className="group">
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-3">
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/15 pb-3 text-lg text-white placeholder-white/20 focus:border-[#c8ff00] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`group flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold transition-all ${
                  sent
                    ? 'bg-[#c8ff00]/20 text-[#c8ff00]'
                    : 'bg-[#c8ff00] text-black hover:scale-105'
                }`}
              >
                {sent ? (
                  <>
                    <Check size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Request
                    <Send className="transition-transform group-hover:translate-x-1" size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="md:col-span-5 flex flex-col gap-8">
            <button
              onClick={() => navigate('/work')}
              className="group img-zoom relative rounded-2xl overflow-hidden aspect-[4/3] w-full"
            >
              <img
                src="https://images.pexels.com/photos/35052791/pexels-photo-35052791.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="View Our Works"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm text-white/60 mb-1">See what we've done</p>
                <p className="font-display text-2xl font-bold text-white flex items-center gap-2">
                  View Our Works
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
                </p>
              </div>
            </button>

            <div className="rounded-2xl border border-white/10 p-8 space-y-6 bg-white/[0.02]">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:hello@agencia.com" className="text-white link-underline">
                  hello@agencia.com
                </a>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Phone</p>
                <a href="tel:3232380614" className="text-white link-underline">
                  (323) 238-0614
                </a>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Address</p>
                <p className="text-white/70">909-1/2 E 49th St<br />Los Angeles, CA 90011</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto" ref={faqRef}>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-white/30 font-mono">05</span>
              <span className="text-sm text-white/40 tracking-widest uppercase">FAQs</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              Answers Hub
            </h2>
          </div>
          <div className="md:col-span-8">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto" ref={locRef}>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs text-white/30 font-mono">11</span>
          <span className="text-sm text-white/40 tracking-widest uppercase">Location</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight mb-12">
          Location
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={locationImage} alt="Location" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="text-[#c8ff00] mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:3232380614" className="text-white text-lg link-underline">
                  (323) 238-0614
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-[#c8ff00] mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Address</p>
                <p className="text-white text-lg">909-1/2 E 49th St<br />Los Angeles, California (CA), 90011</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


