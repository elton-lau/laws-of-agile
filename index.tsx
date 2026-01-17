import './index.css';
import './i18n';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import LoadingSpinner from './components/LoadingSpinner';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Suspense>
  </React.StrictMode>
);