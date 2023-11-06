'use client'
import React, { useEffect, useState } from 'react';
import cookie from 'cookiejs';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userLoggedIn = Boolean(cookie.get('sessionToken'));

    if (!userLoggedIn) {
      router.push('/login');
    } else {
      setIsUserLoggedIn(userLoggedIn);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      }, 2000);
    }
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl">
     
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center">
  <div className="text-center text-4xl text-primary">
    {isUserLoggedIn ? '' : 'Redirecting you to Log In page, just a moment...'}
  </div>
</div>

  );
};

export default Home;
