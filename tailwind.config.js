/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "background-light": "#FFFFFF",
        "background-dark": "#0F172A",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        'lg': '8px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.600'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            h1: { fontFamily: 'Inter, sans-serif', fontWeight: '900', color: theme('colors.slate.900') },
            h2: { fontFamily: 'Inter, sans-serif', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: theme('colors.slate.900') },
            h3: { fontFamily: 'Inter, sans-serif', fontWeight: '700', color: theme('colors.slate.900') },
            'strong': { color: theme('colors.slate.900') },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.400'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            'strong': { color: theme('colors.white') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
