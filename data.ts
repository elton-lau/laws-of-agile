import { Category, Law, Way, Contributor } from './types';
import { lawsContent } from './content/laws';
import { parseLaw } from './utils/markdown';

export const categories: Category[] = [
  {
    id: 'first-way',
    title: 'The First Way: Flow',
    subtitle: 'System Thinking',
    anchor: 'first-way'
  },
  {
    id: 'second-way',
    title: 'The Second Way: Feedback',
    subtitle: 'Amplify Feedback Loops',
    anchor: 'second-way'
  },
  {
    id: 'third-way',
    title: 'The Third Way: Learning',
    subtitle: 'Experimentation & Mastery',
    anchor: 'third-way'
  }
];

// Parse the content collection
export const laws: Law[] = lawsContent.map(markdown => parseLaw(markdown));

export const ways: Way[] = [
  {
    title: "The First Way: Flow",
    description: "Optimizing the speed of value delivery from idea to customer. Understanding constraints, reducing batch sizes, and visualizing work.",
    highlight: true
  },
  {
    title: "The Second Way: Feedback",
    description: "Creating fast loops of information from right to left. Amplifying feedback signals to fix problems when they are cheap and small.",
    highlight: false
  },
  {
    title: "The Third Way: Learning",
    description: "Fostering a culture of high-trust, experimentation, and continuous mastery. Learning from failures rather than punishing them.",
    highlight: false
  }
];

export const contributors: Contributor[] = [
  {
    name: "Elton Lau",
    initials: "EL",
    socials: [
      { label: "GitHub", url: "https://github.com/elton-lau" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/elton-lau/" }
    ]
  },
  {
    name: "Terry Ng",
    initials: "TN",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/terrynch/" }
    ]
  }
];