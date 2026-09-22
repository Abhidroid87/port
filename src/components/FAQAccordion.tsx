import { useState } from 'react';
import { Plus } from 'lucide-react';

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: 'What Agencia is?',
    a: 'Agencia is a creative agency built to help brands grow smarter, faster, and bolder. We specialize in blending strategy, design, and technology to craft digital experiences that stand out.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Agencia collaborates with clients across the globe, bringing diverse perspectives together to create impactful digital experiences that resonate universally.',
  },
  {
    q: 'How involved will I be in the process?',
    a: 'We believe in collaboration — your input shapes every stage of the project, ensuring the final outcome reflects your brand\u2019s vision and goals.',
  },
  {
    q: 'How long does it take to complete a project?',
    a: 'Timelines vary by project scope, but we focus on efficiency and quality, delivering standout results within clear, well-structured deadlines.',
  },
  {
    q: 'Do you offer customized solutions?',
    a: 'Every brand is unique — we tailor our strategy, design, and technology solutions to meet your specific goals and challenges.',
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
            open === i ? 'border-[#c8ff00]/40 bg-[#c8ff00]/5' : 'border-white/10 bg-white/[0.02]'
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/30 font-mono">
                [{String(i + 1).padStart(2, '0')}]
              </span>
              <h4 className="text-lg md:text-xl font-medium text-white">{faq.q}</h4>
            </div>
            <Plus
              className={`flex-shrink-0 text-[#c8ff00] transition-transform duration-500 ${
                open === i ? 'rotate-45' : ''
              }`}
              size={22}
            />
          </button>
          <div
            className={`grid transition-all duration-500 ${
              open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 pl-16 text-white/60 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
