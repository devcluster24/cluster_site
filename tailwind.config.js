/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(248, 226, 246, 0) 1.56%, #f8e2f6 35.94%, rgba(248, 226, 246, 0.61) 66.15%, #e2f6ff 100%)",
        "custom-gradient1":
          "linear-gradient(80deg, rgba(248, 226, 246, 0) 1.56%, #f8e2f6 35.94%, rgba(248, 226, 246, 0.61) 66.15%, #e2f6ff 100%)",
        "gradient-animation1":
          "linear-gradient(45deg, #ff6347, #ff9966, #ffcc99, #ffffcc)",
        "gradient-animation2":
          "linear-gradient(45deg, #0099cc, #006699, #003366, #000033)",
        "gradient-animation3":
          "linear-gradient(45deg, #ff4500, #ffcc00, #ffff00, #ffffff)",
        "gradient-animation4":
          "linear-gradient(45deg, #66ff66, #66ffcc, #cc99ff, #99ccff)",
        "gradient-animation5":
          "linear-gradient(45deg, #7b00ff, #3300ff, #7b00ff, #3300ff)",
        "gradient-animation6":
          "linear-gradient(45deg, #ff66cc, #cc0066, #660033, #330033)",
        "gradient-animation7":
          "linear-gradient(45deg, #aaffaa, #ccffcc, #ffffff, #e0ffff)",
        "gradient-animation8":
          "linear-gradient(45deg, #00cccc, #ffcc00, #ff0077, #ff6633)",
        "gradient-animation9":
          "linear-gradient(45deg, #ff99ff, #ff33ff, #ff0099, #99004d)",
        "gradient-animation10":
          "linear-gradient(45deg, #80dedb, #40c9c6, #ffff00, #f2a5d6)",
        "gradient-animation11":
          "linear-gradient(45deg, #e07585, #c4f0c2, #ffe0e1, #ff99aa)",
        "gradient-animation12":
          "linear-gradient(45deg, #00bfff, #ff0066, #ff3300, #ff9966)",

        "gradient-animation13":
          "linear-gradient(45deg, #8050d0, #ff99cc, #ffccdd, #ffffcc)",
        "gradient-animation14":
          "linear-gradient(45deg, #0066ff, #ff0033, #0066ff, #ff0033)",
        "gradient-animation15":
          "linear-gradient(45deg, #8a2be2, #4682b4, #404080, #0d0d0d)",
        "gradient-animation16":
          "linear-gradient(45deg, #ffd1a3, #e0a060, #f7e0b9, #fff5e6)",
        "gradient-animation17":
          "linear-gradient(45deg, #ff99bb, #ffcc99, #00ccff, #99d6ea)",
        "gradient-animation18":
          "linear-gradient(45deg, #e64a78, #0d2671, #ff99bb, #ffcc99)",
        "gradient-animation19":
          "linear-gradient(45deg, #ff507c, #ff70b3, #ff66a3, #b03064)",
        "gradient-animation20":
          "linear-gradient(45deg, #762c82, #5da19f, #762c82, #5da19f)",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#fffff",
      gray: "#f3f4f6",
      border: "#e3f2fd",
      orange100: "#ffd000",
      black: "#000",
      transparent: "transparent",
      text: "#333333",
      background: "#ffffff",
      primary: "#ff5400",
      secondary: "#15e0c1",
      accent: "#0f99f6",
      blue500: "#3b82f6",
      blue300: "#60a5fa",
      green500: "#10b981",
      green300: "#6ee7b7",
      red500: "#ef4444",
      red300: "#f87171",
      yellow500: "#eab308",
      yellow300: "#fcd34d",
      purple500: "#a855f7",
      purple300: "#c084fc",
    },
  },
  plugins: [],
};
