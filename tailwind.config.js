/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blueblack': '#0B0221',
        'violet': '#140A29',
        'black-opaq': '#0B081C80',
        'white': '#ECECEC'
      },
      backgroundImage: {
        'hero': "url('./assets/heroBanner.jpg')",
      },
      borderColor: {
        'gray': '#FFFFFF4D',
        'white': '#ECECEC'
      },
      borderRadius: {
        '20': '20px',
        '25': '25px',
        '50': '50px',
        '60': '60px',
        '61.91': '61.91px'
      },
      colors: {
        'gray': '#939393',
        'other-gray': '#ECECECA6',
        'white-cream': '#ECECEC',
        'black': '#0B081C',
        "white-opa": '#FFFFFFCC',
        'other-white': '#F2F4F8'
      },
      dropShadow: {
        'custom': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'graphik': ['Graphik'],
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '80': '80px'
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'white-variant': '#ECECEC',
        'white-opaque': '#ECECEC00'
      }),
      height: {
        '58': '58px',
        '160': '160px',
        '372': '372px',
        '440': '440px'
      },
      letterSpacing: {
        'one': '-0.01em',
        'o': '-0.02em',
        't': '-0.03em',
      },
      lineHeight: {
        '19.5': '19.5px',
        '21': '21px',
        '21.94': '21.94px',
        '24': '24px',
        '26': '26px',
        '28.8': '28.8px',
        '41.6': '41.6px',
        '57.6': '57.6px',
        '80': '80px'
      },
      margin: {
        '26': '26px',
        '34': '34px',
        '40': '40px',
        '60': '60px',
        '80': '80px',
        '210': '210px',
        '300': '300px'
      },
      padding: {
        '9.91': '9.91px',
        '12': '12px',
        '16': '16px',
        '19.81': '19.81px',
        '24': '24px'
      },
      width: {
        '417.62': '417.62px',
        '462': '462px',
        '470': '470px',
        '578': '578px',
        '600': '600px',
        '960': '960px',
        '1180': '1180px',
        '1200': '1200px'
      },
    },
  },
  plugins: [],
}

