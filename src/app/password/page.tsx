"use client";
import { useState } from 'react';
import { setCookie } from 'nookies';
import Link from 'next/link';

const PasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'bloomstar') {
      setCookie(null, 'authenticated', 'true', {
        maxAge: 30 * 60,
        path: '/',
        
      });
      window.location.href = '/mentor';
      
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md" onSubmit={handlePasswordSubmit}>
        <label className="block mb-4 text-black">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordPage;
