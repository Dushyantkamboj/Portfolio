/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#090a0f',
          850: '#0d0e17',
          800: '#13141f',
          700: '#1b1c2e',
          600: '#25273f',
        },
        violetAccent: {
          light: '#c084fc',
          DEFAULT: '#8b5cf6',
          dark: '#6d28d9',
          glow: 'rgba(139, 92, 246, 0.35)',
        },
        cyanAccent: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.18), rgba(6, 182, 212, 0.08) 45%, transparent 70%)',
        'mesh-dark': 'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.12) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(14, 165, 233, 0.08) 0px, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'float-rev 8s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        'float-rev': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(55px)' },
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(139, 92, 246, 0.3)',
        'glow-md': '0 0 25px -2px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 45px -5px rgba(139, 92, 246, 0.5)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
