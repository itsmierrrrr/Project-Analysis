/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(91, 136, 178, 0.2), 0 24px 80px rgba(0, 0, 0, 0.45)',
        neon: '0 0 24px rgba(91, 136, 178, 0.35), 0 0 64px rgba(91, 136, 178, 0.18)',
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(rgba(251, 249, 228, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 249, 228, 0.05) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(circle at top, rgba(91, 136, 178, 0.26), transparent 34%), radial-gradient(circle at 20% 20%, rgba(251, 249, 228, 0.08), transparent 18%), linear-gradient(180deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.96))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(40px, -40px, 0) rotate(10deg)' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
        drift: 'drift 18s linear infinite alternate',
      },
    },
  },
  plugins: [],
}