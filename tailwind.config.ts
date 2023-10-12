import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'bgd': 'var(--bgd)',
      'todo-box': 'var(--todo-box)',
      'active-todo': 'var(--active-todo)',
      'inactive-todo': 'var(--inactive-todo)',
      'check-mark': 'var(--check-mark)',
      'filter-active': 'var(--filter-active)',
      'logo': 'var(--logo)',
      'create-todo': 'var(--create-todo)',
      'completed': 'var(--completed-gradient)',
    }
  },
  plugins: [],
}
export default config
