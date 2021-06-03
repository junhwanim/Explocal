import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataProvider } from './components/DataContext';


ReactDOM.render(
  <DataProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DataProvider>,
  document.getElementById('root')
);


