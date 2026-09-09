/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Monochrome palette
        'bg-dark': '#0f0f0f',
        'bg-light': '#f9f9f9',
        'surface-dark': '#1a1a1a',
        'surface-light': '#ffffff',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'border-subtle': '#2a2a2a',
        'accent': '#3b82f6', // Muted blue
      },
      spacing: {
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
}
