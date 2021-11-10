import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Invalid email'),
    message: Yup.string().required("Don't forget to tell us what's wrong..."),
})