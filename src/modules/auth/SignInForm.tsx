'use client';

import { Form } from '@/components/Form';
import React from 'react'
import Head from 'next/head';

const SignInForm = () => {

  return (
    <>
    <Head>
      <title></title>
    </Head>
    <Form  title='Sign In' title2='Enter Your Credential To Sign In.' button='Sign In' mobileField={true} passwordField={true} belowButton1="Don't have an account ?" belowButton2='SignUp'/>
    </> 
  )
}

export default SignInForm