// src/components/SimpleCookieBanner.tsx
import { useState, useEffect } from 'react';

export default function SimpleCookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'white',
      padding: '1rem',
      borderTop: '1px solid #e5e7eb',
      boxShadow: '0 -4px 6px -1px rgba(0,0,0,0.1)',
      zIndex: 50
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem', color: '#374151' }}>
          We use cookies to improve your experience.{' '}
          <a href="/legal/cookie" style={{ color: '#9333ea' }}>Learn more</a>
        </p>
        <button 
          onClick={accept}
          style={{
            background: '#9333ea',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer'
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
