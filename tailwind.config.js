module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height : theme => ({
        "screen-11%" : "calc(11vh)",
        "screen-78%" : "calc(78vh)",
      }),
      inset : {
        "center-section" : '16%',
      },
      boxShadow : {
        "button-shadow" : "0 25px 50px -12px rgba(0, 0, 0, 1)",
      },
      fontWeight : {
        light : 300,
        regular : 400,
        medium : 500,
        semibold : 600,
        bold : 700,
        extrabold : 800,
      },
    },
    colors: {
      transparent : 'transparent',
      current : 'currentColor',
      'white' : '#FFFFFF',
      'black' : '#000000',
      'athens-gray' : '#F4F5F8',
      'dove-gray' : '#707070',
      'school-bus-yellow' : '#FFE000',
      'prussian-blue' : '#003C55',
    },
    gridTemplateAreas : {
      'landing-layout-info' : [
        'top-section top-section top-section',
        'middle-section middle-section middle-section',
        'middle-section middle-section middle-section',
        'bottom-section bottom-section bottom-section',
      ],
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
  variants: {
    gridTemplateAreas: ['responsive']
  }
}
