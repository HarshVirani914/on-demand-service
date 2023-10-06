'use client'
import { Blog } from '@/modules/blog';
import React, { useEffect } from 'react';

type Props = {};

const Page = (props: Props) => {
  useEffect(() => {
    document.title = 'Expertease - Blog';
  }, []);

  return (
    <Blog />
  );
};

export default Page;
