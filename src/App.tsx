import { RouterProvider, useRouter } from '@/lib/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Work from '@/pages/Work';
import Contact from '@/pages/Contact';
import ProjectDetail from '@/pages/ProjectDetail';
import { projects } from '@/lib/projects';

function Pages() {
  const { path } = useRouter();

  const renderPage = () => {
    if (path.startsWith('/work/')) {
      const slug = path.slice('/work/'.length);
      const project = projects.find((item) => item.slug === slug);
      return project ? <ProjectDetail project={project} /> : <Work />;
    }

    switch (path) {
      case '/about':
        return <About />;
      case '/work':
        return <Work />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="noise-overlay" />
      <Navbar />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Pages />
    </RouterProvider>
  );
}
