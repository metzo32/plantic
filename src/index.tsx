import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// // MSW 브라우저 서비스 워커 등록
// if (process.env.NODE_ENV === 'development') {
//   (async () => {
//     const { worker } = await import('./mock/browsers'); // 동적 import
//     worker.start(); // 워커 시작
//   })();
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
