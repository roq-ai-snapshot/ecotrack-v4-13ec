import * as yup from 'yup';

export const environmentalGoalValidationSchema = yup.object().shape({
  goal_type: yup.string().required(),
  target_value: yup.number().integer().required(),
  current_value: yup.number().integer().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  business_organization_id: yup.string().nullable().required(),
});
