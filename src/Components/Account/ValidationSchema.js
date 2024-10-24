import * as Yup from 'yup';

export const RegisterValidation = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    companyname: Yup.string().required('Company Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    passwordagain: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
    streetaddress1: Yup.string().required('Street Address 1 is required'),
    streetaddress2: Yup.string().required('Street Address 2 is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip is required'),
});

export const LoginValidation= Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
})

