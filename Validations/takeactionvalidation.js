import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    manager: yup.string().required('A manager name is required'),
    department: yup.string().required('Please select the department you wish to make an offer for'),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });