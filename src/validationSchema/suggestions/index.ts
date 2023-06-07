import * as yup from 'yup';

export const suggestionValidationSchema = yup.object().shape({
  suggestion_type: yup.string().required(),
  description: yup.string().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  business_organization_id: yup.string().nullable().required(),
});
