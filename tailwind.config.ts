import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        parisM: '#0C0466',
        blueRibbon: '#0072FF',
        azureRadiance: '#007AFF',
        blue: '#0070F3',
        zumthor: '#E5F0FF',
        aliceBlue: '#F2F8FF',
        lynch: '#616f8a',
        regentGray: '#8891A3',
        iron: 'rgb(43 44 48 / 16%)',
        gallery: 'rgba(174, 174, 174, .1)',
        mystic: '#E2E6ED',
        athensGray: '#EBEEF2',
        white: '#FFFFFF',
        oceanGreen: '#36B37E',
        tuna: '#363A42',
        redOrange: '#FF2E2E',
        chestnut: '#B44747',
        cornflowerBlue: '#eaeaea',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
