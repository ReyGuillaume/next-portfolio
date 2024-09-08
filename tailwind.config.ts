import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "linear-gradient(to bottom, transparent, transparent, white), url('../../public/guigui-1.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
