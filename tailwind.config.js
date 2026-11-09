/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: {
          DEFAULT: 'var(--surface)',
          raised: 'var(--surface-raised)',
          subtle: 'var(--surface-subtle)',
          float: 'var(--surface-float)',
        },
        content: {
          DEFAULT: 'var(--content)',
          secondary: 'var(--content-secondary)',
          muted: 'var(--content-muted)',
          subtle: 'var(--content-subtle)',
          inverted: 'var(--content-inverted)',
        },
        border: {
          line: 'var(--border-line)',
          strong: 'var(--border-strong)',
        },
        brand: 'var(--brand)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
