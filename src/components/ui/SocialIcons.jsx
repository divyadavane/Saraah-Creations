import React from 'react';

export const Youtube = ({ size = 18, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.1C2.5 7.1 2.3 5.3 3 4.6 3.8 3.7 4.9 3.7 5.4 3.6 8.3 3.4 12 3.4 12 3.4s3.7 0 6.6.2c.5.1 1.6.1 2.4.9.7.7.9 2.5.9 2.5s.2 2 .2 4v1.8c0 2-.2 4-.2 4s-.2 1.8-.9 2.5c-.8.8-1.9.8-2.4.9-2.9.2-6.6.2-6.6.2s-3.7 0-6.6-.2c-.5-.1-1.6-.1-2.4-.9-.7-.7-.9-2.5-.9-2.5s-.2-2-.2-4V9.1c0-2 .2-4 .2-4z"/>
    <path d="M9.8 14.8l6.1-3.4-6.1-3.4v6.8z"/>
  </svg>
);

export const Linkedin = ({ size = 18, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
