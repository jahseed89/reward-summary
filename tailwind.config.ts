// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          // 50: '#A0AAB3',
          50: '#4E6071',
          100: '#131418',
          105: '#26242b',
          110: '#2E3130',
          115: '#292e32',
          200: '#1E1E22',
          210: '#BCBCCE',
          250: '#7A7A9D',
          300: '#181920',
          350: '#425566',
          400: '#12151A',
          405: 'rgb(18, 21, 26,.5)',
          500: '#20222C',
          600: 'rgba(0,0,0,.5)',
          700: 'rgba(0,0,0,.9)',
          800: 'rgba(19, 20, 24, .8)',
          900: 'rgba(19, 20, 24, .4)',
        },

        red: {
          100: 'rgb(255, 0, 0, .5)',
          105: '#BE123C1A',
          200: '#ff0000',
          205: '#BE123C',
          300: '#cc0000',
          305: '#ff4741',
          306: '#BE123C',
          400: '#990000',
          500: '#660000',
          600: '#330000',
          700: '#000000',
        },
        green: {
          100: '#66CB9F'
        },
        white: {
          100: '#fff',
          110: '#EEEEEE',
          115: '#EBEEEF',
          120: '#E1E3E2',
          130: '#E6F5EA',
          140: '#EBFDF3',
          200: '#f2f2f2',
          210: '#F5FBF6',
          220: '#FAFFFD',
          300: '#e6e6e6',
          400: '#A8ACAB',
          500: '#cccccc',
          600: '#bfbfbf',
          700: '#b3b3b3',
          650: '#737876',
          // 600: 'rgba(255,255,255,0.08)',
          610: 'rgba(118,118,118,.25)',
          // 700: '#2e3130',
        },
        lightgrey: {
          100: '#EDF2F7',
          200: '#F7FAFC',
          // 150: '#ccd6f6',
          // 200: '#8892b0',
          300: '#A6B2C3',
          400: "#9B9BB5"
        },
        blue: {
          10: '#E0E8FF',
          50: '#adcff9',
          100: '#4C6FFF',
          200: "#636DFF",
          250: "#A6B7D4",
          500: '#513cef',
          600: '#5452d379',
          700: '#0142e2',
          705: 'rgba(1, 65, 226, 0.4)',
          800: '#08173f',
        },
       
        purple: {
          100: '#5C6EFF',
          200: '#886BFF',
          300: '#AA67FF',
         
        },

        pink: {
          100: '#FF92AE'
        },
       
        gray: {
          100: '#425466',
        },
        custom: {
          color1: '#eaecf0',
          color2: '#667085',
          color3: '#f9fafb',
          color4: '#fef3f2',
          color5: '#b42318',
          color6: '#ecfdf3',
          color7: '#027a48',
          color8: '#fcec66',
          color9: '#837737',
          color10: '#101828',
          color11: '#1a1c1b',
          color12: '#FF5733',
          color13: '#6C757D',
          color14: '#475467',
          color15: '#4F4E4E',
          color16: '#64748B',
          color17: '#D5D5DB',
          color18: '#D5DBDB',
          color19: '#EFEFF4',
          color20: '#536066',
          color21: '#bfc8cc',
          color22: '#5B5F5E',
          color23: '#59656F',
          color24: '#FCEEE3',
          color25: '#A46A26',
          color26: '#F2F4F5',
          color27: '#767676',
          color28: '#263238',
          color29: '#6C6C6C',
          color30: '#6B797F',
          color31: '#101928',
          color32: '#d5dbdd',
          color33: '#F9F9FA',
          color34: '#E53535',
          color35: '#05A660',
          color36: ':#E5B800',
          color37: ':#008080',
          color38: '#F9F9F9',
          color39: '#A1ADB2',
          color40: '#FFFBDE',
          color41: '#E0FFF0',
          color42: '#FCFCFD',
          color43: '#444846',
          color44: '#4fa94d',
        },
      },
      boxShadow: {
        cardShadow: "0px 0px 1px 0px rgba(50, 50, 71, 0.20), 0px 1px 2px 0px rgba(50, 50, 71, 0.08)"
      }
    },

  },
  plugins: [],
}
export default config
