import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( //Usamos uma única em toda a aplicação.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

