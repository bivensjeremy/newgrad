import * as yup from 'yup';

export const newGradSchema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required'),
	email: yup.string().email().required('Email is required'),
	phone: yup.string().min(7).required('Please enter a valid phone number'),
	// school: yup.string().required(),
	// graduationYear: yup.string().required(),
	// program: yup.string().required(),
	department: yup.array().required('At least one department is required'),
	createdOn: yup.date().default(function () {
		return new Date();
	}),
});