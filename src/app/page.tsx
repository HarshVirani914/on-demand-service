'use client'
import { HomePage } from '@/modules/Home';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Expertease - Home';
  }, []);
  return (
    <>
      <HomePage />
    </>
  );
}
