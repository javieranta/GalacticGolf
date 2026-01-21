/**
 * Entry point for Galactic Golf
 * Slingshot aiming, huge planets, fast ships from deep space
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import './styles.css';

// Check for standalone test mode: http://localhost:3000/?test=standalone
const urlParams = new URLSearchParams(window.location.search);
const testMode = urlParams.get('test');

if (testMode === 'standalone') {
  // Run minimal Three.js test to verify basic rendering works
  import('./test-standalone').then(({ runStandaloneTest }) => {
    runStandaloneTest();
  });
} else {
  // Normal app
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
