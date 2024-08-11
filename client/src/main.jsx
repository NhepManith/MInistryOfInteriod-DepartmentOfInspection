import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';
import './index.css';
import ThemeProvide from './components/ThemeProvide';

const container = document.getElementById('root');
const root = createRoot(container); // Correct usage of createRoot

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvide>
        <App />
      </ThemeProvide>
    </PersistGate>
  </Provider>
);
