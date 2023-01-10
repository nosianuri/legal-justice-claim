/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0F274F",
          secondary: "#2d9760",
          accent: "#2da5ff",
          neutral: "#333",
          "base-100": "#ffffff",
          "--gird-width": "30px",
  "--gird-height": "30px",
  "--line-color": "#999",
  "--dot-color": "#ccc",
  "--dot-size": "2px",
  "--point-gap-width": "calc(var(--gird-width) * 4)",
  "--point-gap-height": "calc(var(--gird-height) * 4)",
        },
      },
      
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
