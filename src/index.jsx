/**
 * File Name: index.jsx
 * Author: Haneul Lee (Rundee)
 * Description: Application entry point with ResizeObserver error suppression
 * 
 * Copyright (c) 2025 Haneul Lee (Rundee)
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// Suppress ResizeObserver loop errors (known browser issue)
// Handles all ResizeObserver-related errors including those in React development mode

const originalError = console.error;
const originalWarn = console.warn;

const isResizeObserverError = (args) => {
  const message = args.map(arg => {
    if (!arg) return '';
    if (typeof arg === 'string') return arg;
    if (arg.toString) return arg.toString();
    return String(arg);
  }).join(' ');
  
  return message.toLowerCase().includes('resizeobserver') || 
         message.toLowerCase().includes('resize observer');
};

console.error = (...args) => {
  if (isResizeObserverError(args)) {
    return;
  }
  originalError.apply(console, args);
};

console.warn = (...args) => {
  if (isResizeObserverError(args)) {
    return;
  }
  originalWarn.apply(console, args);
};

// Window error handler - highest priority
const errorHandler = (e) => {
  const message = e.message || (e.error && e.error.message) || '';
  if (message.toLowerCase().includes('resizeobserver') || 
      message.toLowerCase().includes('resize observer')) {
    e.stopImmediatePropagation();
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
};

window.addEventListener('error', errorHandler, true);

window.addEventListener('unhandledrejection', (e) => {
  const reason = String(e.reason || '');
  if (reason.toLowerCase().includes('resizeobserver') || 
      reason.toLowerCase().includes('resize observer')) {
    e.preventDefault();
  }
});

// Bypass React's development mode error handler
if (process.env.NODE_ENV === 'development') {
  const originalOnError = window.onerror;
  window.onerror = function(message, source, lineno, colno, error) {
    if (message && (
      message.toLowerCase().includes('resizeobserver') ||
      message.toLowerCase().includes('resize observer') ||
      (error && error.message && error.message.toLowerCase().includes('resizeobserver'))
    )) {
      return true;
    }
    if (originalOnError) {
      return originalOnError.apply(this, arguments);
    }
    return false;
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

