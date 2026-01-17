import React, { useState, useEffect, createContext, useContext, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { Route, NavigationContextType, SupportedLocale } from './types';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './i18n';

const Home = lazy(() => import('./pages/Home'));
const Info = lazy(() => import('./pages/Info'));
const LawDetail = lazy(() => import('./pages/LawDetail'));

const isValidLocale = (lang: string): lang is SupportedLocale => {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(lang);
};

const parsePathToRoute = (pathname: string): Route => {
  const path = pathname.replace(/\/$/, '') || '/';
  const segments = path.split('/').filter(Boolean);
  
  let locale: SupportedLocale = DEFAULT_LANGUAGE;
  let restSegments = segments;
  
  if (segments.length > 0 && isValidLocale(segments[0])) {
    locale = segments[0];
    restSegments = segments.slice(1);
  }
  
  if (restSegments.length === 0) {
    return { page: 'home', locale };
  }
  
  if (restSegments[0] === 'info') {
    return { page: 'info', locale };
  }
  
  if (restSegments[0] === 'laws' && restSegments[1]) {
    return { page: 'law', lawId: restSegments[1], locale };
  }
  
  return { page: 'home', locale };
};

const routeToPath = (route: Route): string => {
  const localePrefix = route.locale === DEFAULT_LANGUAGE ? '' : `/${route.locale}`;
  
  switch (route.page) {
    case 'home':
      return localePrefix || '/';
    case 'info':
      return `${localePrefix}/info`;
    case 'law':
      return `${localePrefix}/laws/${route.lawId}`;
    default:
      return localePrefix || '/';
  }
};

export const NavigationContext = createContext<NavigationContextType>({
  currentRoute: { page: 'home', locale: DEFAULT_LANGUAGE },
  navigateTo: () => {},
  darkMode: false,
  toggleTheme: () => {},
  changeLanguage: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentRoute, setCurrentRoute] = useState<Route>(() => 
    parsePathToRoute(window.location.pathname)
  );
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (currentRoute.locale !== i18n.language) {
      i18n.changeLanguage(currentRoute.locale);
    }
  }, [currentRoute.locale, i18n]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(parsePathToRoute(window.location.pathname));
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    document.documentElement.lang = currentRoute.locale;
  }, [currentRoute.locale]);

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

  const changeLanguage = (locale: SupportedLocale) => {
    const newRoute = { ...currentRoute, locale };
    navigateTo(newRoute);
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigateTo, darkMode, toggleTheme, changeLanguage }}>
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
