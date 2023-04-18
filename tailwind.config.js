module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        bluegray_900: "#3d2e2e",
        gray_400: "#c8c8c8",
        indigo_A700_7f: "#0028ff7f",
        black_900: "#000000",
        bluegray_100_84: "#d9d9d984",
        bluegray_100_7f: "#d9d9d97f",
        bluegray_900_4c: "#3d2e2e4c",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        red_A700_7f: "#ff00007f",
      },
      boxShadow: { bs: "1px 11px  29px 0px #3d2e2e4c" },
      fontFamily: {
        roboto: "Roboto",
        comfortaa: "Comfortaa",
        koulen: "Koulen",
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
