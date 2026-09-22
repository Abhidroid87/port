import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type RouterContextType = {
  path: string;
  navigate: (to: string) => void;
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

function getRoutePath() {
  const pathname = window.location.pathname;
  return pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(getRoutePath);

  useEffect(() => {
    const onPop = () => setPath(getRoutePath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string) => {
    if (to === path) return;
    window.history.pushState({}, '', `${basePath}${to === '/' ? '' : to}`);
    setPath(to);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
