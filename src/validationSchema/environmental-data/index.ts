import * as yup from 'yup';

export const environmentalDataValidationSchema = yup.object().shape({
  data_type: yup.string().required(),
  value: yup.number().integer().required(),
  date: yup.date().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  business_organization_id: yup.string().nullable().required(),
});
