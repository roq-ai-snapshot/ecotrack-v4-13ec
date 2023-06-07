import * as yup from 'yup';
import { environmentalDataValidationSchema } from 'validationSchema/environmental-data';
import { environmentalGoalValidationSchema } from 'validationSchema/environmental-goals';
import { suggestionValidationSchema } from 'validationSchema/suggestions';

export const businessOrganizationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  environmental_data: yup.array().of(environmentalDataValidationSchema),
  environmental_goal: yup.array().of(environmentalGoalValidationSchema),
  suggestion: yup.array().of(suggestionValidationSchema),
});
