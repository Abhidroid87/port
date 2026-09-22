import type { Project } from '@/components/ProjectList';
import { assetPath } from '@/lib/assets';

export const projects: Project[] = [
  {
    slug: 'levi-colwill',
    title: 'LEVI COLWILL',
    category: 'MODELLING 3D GRAPHIC',
    num: '01',
    image: assetPath('assets/work-levi.jpg'),
    video: assetPath('assets/project-01.mp4'),
    year: '2025',
    description:
      'A moving visual study built around form, rhythm, and bold 3D composition. This project brings together modelling, animation, and graphic direction into one focused experience.',
    services: ['3D Modelling', 'Motion Design', 'Art Direction'],
  },
  {
    slug: 'the-news',
    title: 'THE NEWS',
    category: 'MOBILE APP UI',
    num: '02',
    image: assetPath('assets/work-news.jpg'),
    year: '2025',
    description:
      'A clear and focused mobile reading experience designed to make daily news feel calm, quick, and easy to navigate.',
    services: ['Product Design', 'UX Strategy', 'Prototyping'],
  },
  {
    slug: 'theo-agency',
    title: 'THEO AGENCY',
    category: 'REBRAND PROJECT',
    num: '03',
    image: assetPath('assets/work-theo.jpg'),
    year: '2025',
    description:
      'A complete rebrand for a growing creative agency, from the visual identity and typography to the digital direction and launch system.',
    services: ['Brand Strategy', 'Visual Identity', 'Web Design'],
  },
  {
    slug: 'horizon',
    title: 'HORIZON',
    category: 'LAB FLOW',
    num: '04',
    image: assetPath('assets/work-horizon.jpg'),
    year: '2024',
    description:
      'An experimental visual language exploring light, scale, and movement through a modular digital system.',
    services: ['Creative Direction', 'Digital Design', 'Motion'],
  },
  {
    slug: 'aura',
    title: 'AURA',
    category: 'WEB DESIGN',
    num: '05',
    image: assetPath('assets/work-aura.jpg'),
    year: '2024',
    description:
      'A refined web experience shaped around atmosphere, generous space, and a confident editorial rhythm.',
    services: ['Web Design', 'Art Direction', 'Development'],
  },
  {
    slug: 'echo',
    title: 'ECHO',
    category: 'BRAND IDENTITY',
    num: '06',
    image: assetPath('assets/work-echo.jpg'),
    year: '2024',
    description:
      'A flexible identity system created to help a modern brand stay recognizable across every touchpoint.',
    services: ['Identity Design', 'Campaign Design', 'Guidelines'],
  },
];
