/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        'primary': '#0E221A',
        'secondry': '#F98110',
        'third': '#061811'
      },
      gridTemplateColumns: {
        'custom': 'repeat(auto-fill, minmax(200px, 1fr))',
        // Add more custom column configurations as needed
      },
      gridTemplateRows: {
        'custom': 'repeat(auto-fill, minmax(100px, 1fr))',
        // Add more custom row configurations as needed
      },
    },
  },
  plugins: [],
}
