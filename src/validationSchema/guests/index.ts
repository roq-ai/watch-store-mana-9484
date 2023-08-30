import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  visit_date: yup.date().required(),
  visit_duration: yup.number().integer().required(),
  interest_level: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
