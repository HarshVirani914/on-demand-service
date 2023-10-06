'use client'
import { About } from '@/modules/about';
import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    document.title = 'Expertease - About Us';
  }, []);
  return (
    <>
      <About />
    </>
  );
}
