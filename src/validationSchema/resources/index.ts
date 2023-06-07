import * as yup from 'yup';

export const resourceValidationSchema = yup.object().shape({
  title: yup.string().required(),
  url: yup.string().required(),
  resource_type: yup.string().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
});
