import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// if (process.env.NODE_ENV === "development") {
//   import("./mocks/brower").then(({ worker }) => {
//     worker.start();
//   });
// }


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance 측정 (원하는 경우 사용)
reportWebVitals();
