'use client';
import { Layout } from '@/components/layout';
import { useCurrentUserQuery } from '@/generated/graphql';
import { HomePage } from '@/modules/Home';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const { data } = useCurrentUserQuery();

  if (data?.currentUser?.isAdmin) {
    router.replace('/dashboard/admin/home');
  }

  useEffect(() => {
    document.title = 'Expertease - Home';
  }, []);
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
