import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/workspaces/**/*.{js,ts,jsx,tsx,mdx}',
    './src/design-system/**/*.{js,ts,jsx,tsx,mdx}',
    './src/platform/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0057FF',
          'blue-hover': '#0047DD',
          'blue-muted': '#0057FF1A',
          electric: '#00AAFF',
          'electric-hover': '#008EDD',
        },
        surface: {
          DEFAULT: '#0D1B2A',
          raised: '#112236',
          overlay: '#152840',
          border: '#1E3A52',
          'border-subtle': '#162C42',
        },
        ink: {
          DEFAULT: '#F8F9FA',
          muted: '#ADB5BD',
          subtle: '#6C757D',
          disabled: '#495057',
        },
        base: '#0A0A0F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      spacing: {
        'nav-width': '240px',
        'topbar-height': '56px',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-in-left': 'slideInLeft 0.35s ease-out',
        'slide-in-up': 'slideInUp 0.25s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        surface: '0 1px 3px 0 rgba(0,0,0,0.4), 0 1px 2px -1px rgba(0,0,0,0.4)',
        'surface-lg': '0 4px 24px 0 rgba(0,0,0,0.5)',
        'glow-blue': '0 0 20px rgba(0,87,255,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
