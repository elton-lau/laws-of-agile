export interface Law {
  id: string;
  name: string;
  icon: string;
  summary: string;
  category: string;
  description: string;
  origin: {
    author: string;
    context: string;
    quote: string;
  };
  takeaways: {
    title: string;
    content: string;
  }[];
  relatedLaws: string[]; // IDs of related laws
  resources?: Resource[];
}

export interface Resource {
  title: string;
  subtitle: string;
  type: string;
  url: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  anchor: string;
}

export type PageType = 'home' | 'info' | 'law';

export interface Route {
  page: PageType;
  lawId?: string;
}

export interface NavigationContextType {
  currentRoute: Route;
  navigateTo: (route: Route) => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

export interface Way {
  title: string;
  description: string;
  highlight?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Contributor {
  name: string;
  initials: string;
  socials: SocialLink[];
}
