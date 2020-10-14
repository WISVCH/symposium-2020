import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'

import andalemoTTF from 'assets/fonts/ANDALEMO.TTF'

const theme = {
  fonts: {
    main: 'Tw Cen MT, sans-serif',
    titles: 'Andalemo, sans-serif',
    sizes: {
      'h1': 'min(9vw, 4em)',
      'h2': 'min(7vw, 3em)',
      'h3': 'min(5vw, 2em)',
      'h4': 'min(4vw, 1.5em)',
      'h5': 'min(4vw, 1.25em)',
      'h6': 'min(4vw, 1.1em)'
    }
  },
  colors: {
    text: '#ffffff',
    background: '#02577a', //'#02577a',
    primary: '#74c2e1',
    secondary: '#16255d',
    accent: '#e87511',
    success: '#4caf50',
    warning: '#ffc107',
    error: '#f44336',
  },
  opacity: {
    titles: 1,
    text: 0.8,
  },
  border: {
    width: '.25em',
    radius: '.5em',
  },
  columns: {
    count: 12,
    gap: 16,
  },
  lineHeight: 1.5,
}

injectGlobal`
  @font-face {
    font-family: Andalemo;
    src: url(${andalemoTTF}) format('truetype');

    font-weight: normal;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    padding: 0;
    margin: 0;

    font-family: ${theme.fonts.main};
    text-rendering: geometricPrecision;
  }

  input, textarea, select, button {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.titles};
    font-weight: 100;
  }
`

const Theme = (props) => (
  <ThemeProvider theme={theme} {...props} />
)

export default Theme
