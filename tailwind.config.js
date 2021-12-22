module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height : theme => ({
        "screen-10%" : "calc(10vh)",
        "screen-80%" : "calc(80vh)",
      }),
      screens: {
        'form-readjust' : {'max' : '1700px'},
      },
      inset : {
        "center-section" : '16%',
      },
      boxShadow : {
        "button-shadow" : "0 25px 50px -12px rgba(0, 0, 0, 1)",
        "input-shadow" : "0 20px 10px -6px rgba(0, 0, 0, 0.65)"
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
      'red' : '#FF0000',
    },
    gridTemplateAreas : {
      'landing-layout-info' : [
        'top-section top-section top-section',
        'middle-section middle-section middle-section',
        'middle-section middle-section middle-section',
        'bottom-section bottom-section bottom-section',
      ],
      'form-layout' : [
        'name name name name',
        'address address address address',
        'address address address address',
        'address address address address',
        'address address address address',
        'contact contact contact contact',
        'contact contact contact contact',
        'submit submit submit submit',
        'submit submit submit submit',
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
