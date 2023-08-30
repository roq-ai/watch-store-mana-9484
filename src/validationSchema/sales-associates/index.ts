import * as yup from 'yup';

export const salesAssociateValidationSchema = yup.object().shape({
  sales_target: yup.number().integer().required(),
  sales_achieved: yup.number().integer().required(),
  commission_rate: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
