import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        dispersion: {
          // ディスパージョン色（虹色グラデーション）
          red: '#ff0000',
          orange: '#ff7f00',
          yellow: '#ffff00',
          green: '#00ff00',
          blue: '#0000ff',
          indigo: '#4b0082',
          violet: '#9400d3',
        },
      },
      aspectRatio: {
        'w-16': '16',
        'h-12': '12',
      },
    },
  },
  plugins: [],
}

export default config