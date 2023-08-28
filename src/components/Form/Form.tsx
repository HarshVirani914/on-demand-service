import { FormikErrors, useFormik } from 'formik';
import Link from 'next/link';

import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from '@material-tailwind/react';

interface IForm {
  title: string;
  title2: string;
  button: string;
  nameField?: boolean;
  mobileField?: boolean;
  emailField?: boolean;
  passwordField?: boolean;
  cpasswordField?: boolean;
  agreeButton?: boolean;
  showPassword?: boolean;
  belowButton1?: string;
  belowButton2?: string;
}

interface Ivalues {
  name: string;
  email: string;
  mobile: string;
  password: string;
  cpassword: string;
}

const initialValues = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  cpassword: '',
};

const onSubmit = (values: typeof initialValues) => {
  console.log('Form Values:', values);
};

const validate = (values: Ivalues): FormikErrors<Ivalues> => {
  const errors: FormikErrors<Ivalues> = {};

  if (!values.name) {
    errors.name = 'Required';
    return errors;
  }

  if (!values.mobile) {
    errors.mobile = 'Required';
    return errors;
  }

  if (!values.email) {
    errors.email = 'Required';
    return errors;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
    return errors;
  }

  if (!values.password) {
    errors.password = 'Required';
    return errors;
  }

  if(!values.cpassword){
    errors.cpassword = 'Required'
    return errors;
  }else if(values.cpassword !== values.password){
    errors.cpassword = 'Please Match Password & Confirm Password';
    return errors;
  }

  return errors;
};

const Form: React.FC<IForm> = ({
  title,
  title2,
  button,
  nameField,
  mobileField,
  agreeButton,
  emailField,
  passwordField,
  cpasswordField,
  belowButton1,
  belowButton2,
}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="flex justify-center mt-[5%]">
      <Card color="transparent" shadow={false}>
        <Typography className="text-center" variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center  ">
          {title2}
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            {nameField ? (
              <div>
                <Input
                  size="lg"
                  label="Name"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.errors.name ? <div className='flex text-xs mx-1 mt-1 text-red-300'>{formik.errors.name}</div> : null}{' '}
              </div>
            ) : null}
            {mobileField ? (
              <div>
                <Input
                  size="lg"
                  type="text"
                  label="Mobile Number"
                  id="mobile"
                  name="mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
                {formik.errors.mobile ? <div className='flex text-xs mx-1 mt-1 text-red-300'>{formik.errors.mobile}</div> : null}
              </div>
            ) : null}
            {emailField ? (
              <div>
                <Input
                size="lg"
                label="Email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email ? <div className='flex text-xs mx-1 mt-1 text-red-300'>{formik.errors.email}</div> : null}
              </div>
            ) : null}
            {passwordField ? (
              <div>
                <Input
                type="password"
                size="lg"
                label="Password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password ? <div className='flex text-xs mx-1 mt-1 text-red-300'>{formik.errors.password}</div> : null}
              </div>
            ) : null}
            {cpasswordField ? (
              <div>
                <Input
                type="password"
                size="lg"
                label="Confirm Password"
                id="cpassword"
                name="cpassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cpassword}
              />
              {formik.errors.cpassword ? <div className='flex text-xs mx-1 mt-1 text-red-300'>{formik.errors.cpassword}</div> : null}
              </div>
            ) : null}
          </div>
          {agreeButton ? (
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
          ) : null}
          {/* {showPassword ? <Checkbox
            label={
              
            }
          /> : null} */}
          <Button type="submit" className="mt-6" fullWidth>
            {button}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            {belowButton1}{' '}
            <Link
              href={`/auth/${belowButton2}`}
              className="font-medium text-gray-900"
            >
              {belowButton2}
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};
export default Form;
