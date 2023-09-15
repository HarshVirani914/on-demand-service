'use client';

import { FormFieldLayout } from '@/components/forms';
import { Button, Card, Typography } from '@material-tailwind/react';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Select, Option } from '@material-tailwind/react';

interface IWizardProps {
  children: React.ReactNode;
  initialValues: any;
  onSubmit: (_values: any, bag: any) => void;
}

interface IWizardStepProps {
  children: React.ReactNode;
  onSubmit: (values: any, bag: any) => void;
  validationSchema: any;
}

const sleep = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const Wizard: React.FC<IWizardProps> = ({
  children,
  initialValues,
  onSubmit,
}) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children) as React.ReactElement[];
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values: any) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values: any) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (
    values: any,
    bag: { setTouched: (_arg0: {}) => void }
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form className="mb-2 w-80 max-w-screen-lg sm:w-[26rem]">
          <Typography>
            Step {stepNumber + 1} of {totalSteps}
          </Typography>
          {step}
          <div>
            <div>
              <Button
                disabled={formik.isSubmitting}
                className="mt-4"
                fullWidth
                type="submit"
              >
                {isLastStep ? 'Submit' : 'Next'}
              </Button>
            </div>
            {stepNumber > 0 && (
              <Button
                className="mt-4"
                fullWidth
                onClick={() => previous(formik.values)}
                type="button"
              >
                Back
              </Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

const WizardStep = ({ children }: IWizardStepProps) => children;

const initalValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .equals([Yup.ref('password')], 'Passwords must match'),
});

const App = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Card color="transparent" shadow={false} className="m-6">
      <Wizard
        initialValues={initalValues}
        onSubmit={async (values: any) =>
          sleep(300).then(() => console.log('Wizard submit', values))
        }
      >
        <WizardStep
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={SignupSchema}
        >
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="my-1 font-normal">
            Enter details to create an account
          </Typography>
          <div className="mb-4 flex flex-col gap-4">
            <FormFieldLayout label="Name" name="name" />
            <FormFieldLayout label="Email" name="email" />
            <FormFieldLayout type="password" label="Password" name="password" />
            <FormFieldLayout
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
          </div>
        </WizardStep>
        <WizardStep
          onSubmit={() => console.log('Step2 onSubmit')}
          validationSchema={Yup.object({
            companyName: Yup.string().required('Required'),
            contactNumber: Yup.string().required('Required'),
            address1: Yup.string().required('Required'),
            address2: Yup.string().required('Required'),
          })}
        >
          <Typography variant="h4" color="blue-gray">
            Company Details
          </Typography>
          <Typography color="gray" className="my-1 font-normal">
            Enter company details to continue
          </Typography>
          <div className="mb-4 flex flex-col gap-4">
            <FormFieldLayout label="Company Name" name="companyName" />
            <FormFieldLayout label="Contact Number" name="contactNumber" />
            <FormFieldLayout label="Address 1" name="address1" />
            <FormFieldLayout label="Address 2" name="address2" />
          </div>
        </WizardStep>
        <WizardStep
          onSubmit={() => console.log('Step3 onSubmit')}
          validationSchema={Yup.object({
            SelectCategory: Yup.string().required('Required'),
            ShopOpen: Yup.string().required('Required'),
            ShopClose: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
          })}
        >
          <Typography variant="h4" color="blue-gray">
            Company Details
          </Typography>
          <Typography color="gray" className="my-1 font-normal">
            Enter company details to continue
          </Typography>
          <div className="mb-4 flex flex-col gap-4">
            <Select label="Select Category" name="SelectCategory">
              <Option>Car Services</Option>
              <Option>Ac Services</Option>
              <Option>Home Cleaning Services</Option>
              <Option>Plumber Services</Option>
            </Select>
            <div className="flex flex-row gap-2 ">
              <Select label="Shop Open" name="ShopOpen" className="">
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5</Option>
                <Option>6</Option>
                <Option>7</Option>
                <Option>8</Option>
                <Option>9</Option>
                <Option>10</Option>
                <Option>11</Option>
                <Option>12</Option>
              </Select>
              <Select label="AM/PM" name="AM/PM/1">
                <Option>AM</Option>
                <Option>PM</Option>
              </Select>
            </div>
            <div className="flex flex-row gap-2 ">
              <Select label="Shop Close" name="ShopClose">
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5</Option>
                <Option>6</Option>
                <Option>7</Option>
                <Option>8</Option>
                <Option>9</Option>
                <Option>10</Option>
                <Option>11</Option>
                <Option>12</Option>
              </Select>
              <Select label="AM/PM" name="AM/PM/2">
                <Option>AM</Option>
                <Option>PM</Option>
              </Select>
            </div>
            <FormFieldLayout label="Description" name="description" />
          </div>
        </WizardStep>
      </Wizard>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{' '}
        <Link
          href="/auth/SignIn"
          className="font-medium text-blue-500 transition-colors hover:text-blue-700 underline"
        >
          Sign In
        </Link>
      </Typography>
    </Card>
  </div>
);

export default App;
