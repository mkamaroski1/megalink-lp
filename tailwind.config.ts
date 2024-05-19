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
        primarybg: "url('../images/primarybg.png')",
        secondbg: "url('../images/bg1.png')",
        thirdbg: "url('../images/thirdbg.png')",
        fourthbg: "url('../images/fourthbg.png')",
        greenfadefifth: "url('../images/greenfadefifth.png')",
        greenfadefifth1: "url('../images/greenfadefifth1.png')",
        sixthbg: "url('../images/sixthbg.png')",
        seventhbg: "url('../images/seventhbg.png')"
      },
    },
  },
  plugins: [],
};
export default config;
