/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: [
    {
      pattern: /^(bg|border|text)-(blue|indigo|sky|amber)-(50|100|200|300|400|500|600|700|800)$/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
