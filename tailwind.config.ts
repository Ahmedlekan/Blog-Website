import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  disyui: {
    themes: []
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "wh-10": "#F4F4F4",
        "wh-50": "#FBFBFB",
        "wh-100": "#C9C9C9",
        "wh-300": "#939393",
        "wh-500": "#595959",
        "wh-900": "#0F0F0F",
        "accent-red": "#EA9648",
        "accent-orange": "#F6CF68",
        "accent-green": "#C2E9B4",
        "dark": '#232A3C',
        "medium": '#293245'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "gradint-gradual": "linear-gradient(180deg, rgba(116, 116, 116, 0) 66.15%, #000000 100%)",
      },
      screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    },
  },
  plugins: [require("daisyui")],
}
export default config
