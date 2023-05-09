import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import {store} from './redux'

export const theme = extendTheme({
  colors: {
    purple: '#B2A4FF',
    yellow: '#FFC984',
    pink: '#FFA1A1',
    green: '#A4FFCE',
    black: '#454545',
    whitePurple: '#F7F6FF',
    white: '#FFFFFF',
  },
  fonts: {
    heading: `'gothic-a1', sans-serif`,
    body: `'gothic-a1', sans-serif`,
  },
});

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
);

