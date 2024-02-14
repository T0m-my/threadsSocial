import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ColorModeScript } from '@chakra-ui/react';
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      color:mode('gray.800', 'whiteAlpha.900')(props),
      bg:mode('gray.100', '#101010')(props)
    }
  })
};

const config = {
  initialColorMode: 'Dark',
  useSystemColorMode: true
}

const colors = {
  gray: {
    ligtht: '#616161',
    dark: '#1e1e1e'
  }
}

const theme = extendTheme({colors, config, styles});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
