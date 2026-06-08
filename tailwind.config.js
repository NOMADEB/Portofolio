export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        glow: '0 0 40px -8px rgba(56, 189, 248, 0.45)'
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(59,130,246,0.14), transparent 45%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        'pulse-ring': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(0.96)' },
          '50%': { opacity: '0.2', transform: 'scale(1.05)' }
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse-ring 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite'
      }
    }
  },
  plugins: []
}
