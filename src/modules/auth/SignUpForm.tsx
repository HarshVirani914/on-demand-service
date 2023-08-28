'use client';

import { Form } from '@/components/Form';
import React from 'react'

const SignUpForm = () => {
  return (
    <Form title='Sign Up' title2='Enter Your Details To Register.' button='Sign Up' mobileField={true} passwordField={true} cpasswordField={true} nameField={true} agreeButton={true} emailField={true} belowButton1="Already have an account ?" belowButton2='SignIn' />
  )
}

export default SignUpForm