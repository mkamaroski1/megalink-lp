import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenml: "#01CF02",
        header: "#FF0000",
        darkgreen: "#008402",
      },
      fontFamily: {
        telegraf: ["Telegraf", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        greenfade: "url('../images/greenfade.png')",
        greenbackground: "url('../images/bg1.png')"
      },
    },
  },
  plugins: [],
};
export default config;
