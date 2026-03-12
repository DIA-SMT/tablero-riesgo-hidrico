/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0066FF',
        'brand-celeste': '#2EB1FF',
        'brand-yellow': '#F4DC00',
        'brand-gray': '#333333',
        'surface': {
          900: '#0A0E17',
          800: '#111827',
          700: '#1A2332',
          600: '#1F2D3D',
          500: '#2A3A4E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
