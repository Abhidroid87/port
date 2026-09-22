type MarqueeProps = {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  separator?: string;
};

export default function Marquee({
  items,
  direction = 'left',
  speed = 30,
  className = '',
  separator = '✦',
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="px-6">{item}</span>
            <span className="text-[#c8ff00] opacity-50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
