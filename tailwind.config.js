module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height : theme => ({
        "screen-15%" : "calc(15vh)",
      }),

    },
    fontFamily : {
      'general-font' : ['Open Sans']
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
    }
  },
  plugins: [],
}
