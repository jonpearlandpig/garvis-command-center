import React, { useState, useEffect } from 'react';

export default function GroqKeyInput() {
  const [key, setKey] = useState('');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('garvis-adapter-key-groq') ?? '' : '';
    setKey(stored);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('garvis-adapter-key-groq', e.target.value);
    }
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="groq-key">Groq API Key:</label>
      <input
        id="groq-key"
        type="text"
        value={key}
        onChange={handleChange}
        style={{ marginLeft: '0.5rem', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
        placeholder="Enter Groq API Key"
      />
    </div>
  );
}
