/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#e0e0e0",
          400: "#c4c4c4",
          600: "#828282",
          800: "#4f4f4f",
          "800_33": "#4f4f4f33",
        },
        green: {
          600: "#3ca53b",
          900: "#195a00",
          "900_4c": "#195a004c",
          "900_d8": "#195a00d8",
        },
        blue_gray: {
          900: "#333333",
          "900_90": "#33333390",
          "100_3f": "#cdcdcd3f",
        },
        black: { 900: "#000000", "900_19": "#00000019" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 0px  80px 0px #cdcdcd3f",
        bs1: "0px 4px  40px 0px #00000019",
      },
      fontFamily: {
        inter: "Inter",
        helvetica: "Helvetica",
        greatvibes: "Great Vibes",
        miniver: "Miniver",
        microsoftyibaiti: "Microsoft Yi Baiti",
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   mode: "jit",
//   content: [
//     "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
//   ],
//   darkMode: "class",
//   theme: {
//     screens: { md: { max: "1050px" }, sm: { max: "550px" } },
//     extend: {
//       colors: {
//         gray: {
//           300: "#e0e0e0",
//           400: "#c4c4c4",
//           600: "#828282",
//           800: "#4f4f4f",
//           "800_33": "#4f4f4f33",
//         },
//         green: {
//           600: "#3ca53b",
//           900: "#195a00",
//           "900_4c": "#195a004c",
//           "900_d8": "#195a00d8",
//         },
//         blue_gray: {
//           900: "#333333",
//           "900_90": "#33333390",
//           "100_3f": "#cdcdcd3f",
//         },
//         black: { 900: "#000000", "900_19": "#00000019" },
//         white: { A700: "#ffffff" },
//       },
//       boxShadow: {
//         bs: "0px 0px  80px 0px #cdcdcd3f",
//         bs1: "0px 4px  40px 0px #00000019",
//       },
//       fontFamily: {
//         inter: "Inter",
//         helvetica: "Helvetica",
//         greatvibes: "Great Vibes",
//         miniver: "Miniver",
//         microsoftyibaiti: "Microsoft Yi Baiti",
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/forms")],
// };
