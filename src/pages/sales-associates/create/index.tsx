import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createSalesAssociate } from 'apiSdk/sales-associates';
import { salesAssociateValidationSchema } from 'validationSchema/sales-associates';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { SalesAssociateInterface } from 'interfaces/sales-associate';

function SalesAssociateCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: SalesAssociateInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createSalesAssociate(values);
      resetForm();
      router.push('/sales-associates');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<SalesAssociateInterface>({
    initialValues: {
      sales_target: 0,
      sales_achieved: 0,
      commission_rate: 0,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: salesAssociateValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Sales Associates',
              link: '/sales-associates',
            },
            {
              label: 'Create Sales Associate',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Sales Associate
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Sales Target"
            formControlProps={{
              id: 'sales_target',
              isInvalid: !!formik.errors?.sales_target,
            }}
            name="sales_target"
            error={formik.errors?.sales_target}
            value={formik.values?.sales_target}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('sales_target', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Sales Achieved"
            formControlProps={{
              id: 'sales_achieved',
              isInvalid: !!formik.errors?.sales_achieved,
            }}
            name="sales_achieved"
            error={formik.errors?.sales_achieved}
            value={formik.values?.sales_achieved}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('sales_achieved', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Commission Rate"
            formControlProps={{
              id: 'commission_rate',
              isInvalid: !!formik.errors?.commission_rate,
            }}
            name="commission_rate"
            error={formik.errors?.commission_rate}
            value={formik.values?.commission_rate}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('commission_rate', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/sales-associates')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'sales_associate',
    operation: AccessOperationEnum.CREATE,
  }),
)(SalesAssociateCreatePage);
