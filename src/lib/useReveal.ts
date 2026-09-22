import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  animation: string = 'fade-up',
  delay: number = 0,
  threshold: number = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('reveal');
    el.style.animationDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animation);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return ref;
}
