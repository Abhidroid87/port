import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useRouter } from '@/lib/router';
import type { Project } from '@/components/ProjectList';

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { navigate } = useRouter();

  return (
    <div className="bg-[#0a0a0a]">
      <section className="mx-auto max-w-[1600px] px-6 pb-24 pt-32 md:px-10 md:pb-36 md:pt-40">
        <div className="mb-12 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/40 md:mb-20">
          <button
            type="button"
            onClick={() => navigate('/work')}
            className="group flex items-center gap-3 transition-colors hover:text-[#c8ff00]"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to projects
          </button>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-2xl shadow-black/40">
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full object-cover"
            />
          ) : (
            <img src={project.image} alt={project.title} className="aspect-video w-full object-cover" />
          )}
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="mb-6 font-mono text-sm text-[#c8ff00]">[{project.num}]</p>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-8xl">
              {project.title}
            </h1>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="mb-10 text-xs uppercase tracking-[0.18em] text-white/35">About this project</p>
            <p className="text-lg leading-relaxed text-white/65">{project.description}</p>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/35">Services</p>
              <div className="flex flex-wrap gap-2">
                {project.services?.map((service) => (
                  <span key={service} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/60">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/contact')}
          className="group mt-20 flex items-center gap-3 border-b border-white/20 pb-3 text-sm uppercase tracking-[0.16em] text-white transition-colors hover:border-[#c8ff00] hover:text-[#c8ff00]"
        >
          Start a similar project
          <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
        </button>
      </section>
    </div>
  );
}
