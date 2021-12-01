const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Use Raleway as Display and Inter as Body
      fontFamily: {
        'display': ['Poppins', ...defaultTheme.fontFamily.sans],
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },

      // Transition property extension
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  variants: {
    extend: {}
  },

  daisyui:  {
    styled: true,
    themes: false,
    rtl: false,
    // themes: [
    //   {
    //     'fanzru': {
    //       'primary' : '#2C59A7',           /* Primary color */
    //       'primary-focus' : '#164396',     /* Primary color - focused */
    //       'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */
    //
    //       'secondary' : '#DE3B6E',         /* Secondary color */
    //       'secondary-focus' : '#D22258',   /* Secondary color - focused */
    //       'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */
    //
    //       'accent' : '#1DBECB',            /* Accent color */
    //       'accent-focus' : '#189CA1',      /* Accent color - focused */
    //       'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */
    //
    //       'neutral' : '#3D454B',           /* Neutral color */
    //       'neutral-focus' : '#2A2F34',     /* Neutral color - focused */
    //       'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */
    //
    //       'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
    //       'base-200' : '#f9fafb',          /* Base color, a little darker */
    //       'base-300' : '#d1d5db',          /* Base color, even more darker */
    //       'base-content' : '#17191C',      /* Foreground content color to use on base color */
    //
    //       'info' : '#1DBECB',              /* Info */
    //       'success' : '#93A72B',           /* Success */
    //       'warning' : '#ff9900',           /* Warning */
    //       'error' : '#ff5724',             /* Error */
    //     },
    //     'navbarmenu': {
    //       'base-content' : '#2C59A7',
    //     },
    //
    //   }
    // ]
  }
}