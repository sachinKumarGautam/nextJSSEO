/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss'
import {
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple'
// import green from '@material-ui/core/colors/green'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#80c241'
    },
    secondary: {
      main: '#fff'
    },
    customGrey: {
      grey50: '#f5f5f5',
      grey100: '#dadada',
      grey200: '#9b9b9b',
      grey250: '#979797',
      grey300: '#bbbbbb',
      grey350: '#535665',
      grey400: '#7e808c',
      grey450: '#75787b',
      grey500: '#4a4a4a',
      grey600: '#3a3a3a',
      grey700: '#393939',
      grey800: '#dfe3e8',
      grey900: '#E0E0E0'
    },
    customYellow: {
      yellow400: '#f5a623'
    },
    customGreen: {
      green100: 'rgba(128, 194, 65, 0.08)',
      green200: '#F3FDE8',
      green300: '#78b437',
      green400: '#389e48'
    },
    customRed: {
      red200: '#e83f6f'
    },
    customBlack: {
      black1000: '#000000'
    }
  },
  overrides: {
    MuiInput: {
      root: {
        fontSize: '16px'
      },
      underline: {
        caretColor: '#80c241',
        '&:after': {
          borderBottom: '2px solid #80c241'
        }
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0 0 6px 0 rgba(224, 224, 224, 0.72)'
      }
    },
    MuiButton: {
      root: {
        borderRadius: 32
      },
      outlined: {
        border: '1px solid #80c241',
        '&$disabled': {
          border: '1px solid #dadada'
        }
      },
      label: {
        // color: '#fff',
        textTransform: 'none'
      },
      containedPrimary: {
        color: '#ffffff'
      },
      raisedPrimary: {
        color: '#ffffff'
      }
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: 16,
    fontWeightBold: 600,
    body3: {
      fontSize: '0.75rem',
      fontFamily: ['Lato', 'sans-serif']
    },
    body4: {
      fontSize: '0.625rem',
      fontFamily: ['Lato', 'sans-serif']
    }
  },
  spacing: {
    percentageUnit: '12%'
  },
  breakpoints: {
    values: {
      lg: 1366
    }
  },
  zIndex: {
    topProgressBar: 1600
  }
})

function createPageContext () {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  }
}

export default function getPageContext () {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
