// Author: Senior Frontend Engineer
// OS support: Mac/Linux/Windows
// Description: Main App component with Routing and Theme context

import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Info from './pages/Info';
import LawDetail from './pages/LawDetail';
import Icon from './components/Icon';
import { Route, NavigationContextType } from './types';

// Simple Router Context
export const NavigationContext = createContext<NavigationContextType>({
  currentRoute: { page: 'home' },
  navigateTo: () => {},
  darkMode: false,
  toggleTheme: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>({ page: 'home' });
  const [darkMode, setDarkMode] = useState(false);

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
    window.scrollTo(0, 0);
    setCurrentRoute(route);
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigateTo, darkMode, toggleTheme }}>
      <Navbar />
      
      <main className="flex-grow w-full">
        {currentRoute.page === 'home' && <Home />}
        {currentRoute.page === 'info' && <Info />}
        {currentRoute.page === 'law' && currentRoute.lawId && <LawDetail lawId={currentRoute.lawId} />}
      </main>

      <Footer />
    </NavigationContext.Provider>
  );
};

export default App;
// --- End of App.tsx ---