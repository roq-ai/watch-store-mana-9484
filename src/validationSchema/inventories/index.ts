import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  watch_name: yup.string().required(),
  watch_model: yup.string().required(),
  quantity: yup.number().integer().required(),
  price: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
