import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import './styles/typography.css';
import './styles/utilities.css';
import './styles/accessibility.css';
import './styles/isolation.css';
// Development environment check
if (import.meta.env.DEV) {
    console.log('🚀 Development mode enabled with hot reload');
    console.log('📱 HMR (Hot Module Replacement) active');
    console.log('🔧 Fast Refresh enabled for React components');
}
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
//# sourceMappingURL=main.js.map