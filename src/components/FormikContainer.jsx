import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Requerido'),
  });
  const onSubmit = (values) => console.log('Form data', values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='Correo'
              name='email'
            />
            <button type='submit'>Enviar aa</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;
