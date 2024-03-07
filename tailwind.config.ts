import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif']
    },
    extend: {
      fontFamily: {
        dmtext: ['var(--font-dmtext)', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        dark__principal: {
          100: 'rgba(0, 0, 0, 0.87)',
          200: '#232729',
          300: '#1B1B1B',
          400: '#000000'
        },
        dark__text: {
          100: '#515151',
          200: '#B0AFAE',
          300: '#1B1B1B'
        },
        white__text: {
          100: '#E2E2E2'
        },
        white__fundo: {
          100: '#F5F5F5'
        },
        gold__principal: {
          100: '#ECD087',
          200: 'rgba(173, 144, 113, 0.38)',
          300: '#CDB091',
          400: '#A08356',
          500: '#BDA86C'
        }
      },
      textDecoration: ['hover', 'focus']
    }
  },
  plugins: []
};
export default config;
