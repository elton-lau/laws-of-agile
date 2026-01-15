import React, { useState, useEffect, createContext, useContext, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { Route, NavigationContextType } from './types';

// Lazy load pages for better initial performance
const Home = lazy(() => import('./pages/Home'));
const Info = lazy(() => import('./pages/Info'));
const LawDetail = lazy(() => import('./pages/LawDetail'));

const parsePathToRoute = (pathname: string): Route => {
  const path = pathname.replace(/\/$/, '') || '/';
  
  if (path === '/' || path === '') {
    return { page: 'home' };
  }
  if (path === '/info') {
    return { page: 'info' };
  }
  if (path.startsWith('/laws/')) {
    const lawId = path.replace('/laws/', '');
    if (lawId) {
      return { page: 'law', lawId };
    }
  }
  return { page: 'home' };
};

const routeToPath = (route: Route): string => {
  switch (route.page) {
    case 'home':
      return '/';
    case 'info':
      return '/info';
    case 'law':
      return `/laws/${route.lawId}`;
    default:
      return '/';
  }
};

// Simple Router Context
export const NavigationContext = createContext<NavigationContextType>({
  currentRoute: { page: 'home' },
  navigateTo: () => {},
  darkMode: false,
  toggleTheme: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>(() => 
    parsePathToRoute(window.location.pathname)
  );
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(parsePathToRoute(window.location.pathname));
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Check system preference or default to false
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navigateTo = (route: Route) => {
    const newPath = routeToPath(route);
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigateTo, darkMode, toggleTheme }}>
      <Navbar />
      
      <main className="flex-grow w-full">
        <Suspense fallback={<LoadingSpinner />}>
          {currentRoute.page === 'home' && <Home />}
          {currentRoute.page === 'info' && <Info />}
          {currentRoute.page === 'law' && currentRoute.lawId && <LawDetail lawId={currentRoute.lawId} />}
        </Suspense>
      </main>

      <Footer />
    </NavigationContext.Provider>
  );
};

export default App;
