"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { parseCookies } from 'nookies'; 

const HomePage: React.FC = () => {
  useEffect(() => {
    const { authenticated } = parseCookies(); 
    if (!authenticated || authenticated !== 'true') {
      alert('Please enter the password first.');
      window.location.href = '/password';
    } else {
      window.location.href = '/mentor';
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div>
        <Link href="/password">
        
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
