import { object, string } from 'yup';

const updateTraderFields = {
  id: string().required(),
  name: string().trim().ensure().required('Company Name is required'),
  contactNumber: string()
    .trim()
    .ensure()
    .required('Company Contact Number is required'),
  address: string().trim().ensure().required('Address is required'),
  category: string().required('Company Category is required'),
  email: string()
    .trim()
    .ensure()
    .email('Invalid email address')
    .required('Email is required'),
  shopOpen: string().required('Shop Open Time is required'),
  shopClose: string().required('Shop Close Time is required'),
  description: string().required('Description is required'),
  addressId: string().required(),
  availabilityId: string().required(),
};

export const UpdateTraderSchema = object().shape(updateTraderFields).required();
