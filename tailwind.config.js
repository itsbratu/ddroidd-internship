module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height : theme => ({
        "screen-10%" : "calc(10vh)",
        "screen-80%" : "calc(80vh)",
        "form" : "calc(125vh)",
      }),
      screens: {
        'screen-phones' : {'min' : '320px' , 'max' : '520px'},
        'screen-tablets' : {'min' : '720px' , 'max' : '1000px'},
        'screen-s' : {'min' : '1000px' , 'max' : '1400px'},
        'screen-m' : {'min' : '1400px' , 'max' : '2000px'},
        'screen-l' : {'min' : '2000px' , 'max' : '2600px'},
        'screen-xl' : {'min' : '2600px' , 'max' : '3400px'},
        'screen-2xl' : {'min' : '3400px' , 'max' : '4000px'},
      },
      fontSize : {
        'nav-button-tablets' : ['9px' , '12px'],
        'nav-button-phones' : ['6px' , '10px'],
        'nav-title-tablets' : ['28px' , '32px'],
        'nav-title-phones' : ['12.5px' , '16px'],
        'info-section-button' : ['10px' , '14px'],
      },
      inset : {
        "center-section" : '16%',
      },
      boxShadow : {
        "button-shadow" : "0 25px 40px -16px rgba(0, 0, 0, 1)",
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
      'green' : '	#008000',
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
