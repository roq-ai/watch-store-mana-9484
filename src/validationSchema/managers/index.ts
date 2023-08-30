import * as yup from 'yup';

export const managerValidationSchema = yup.object().shape({
  department: yup.string().required(),
  employees_managed: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
