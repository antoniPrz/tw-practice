import { useFormik } from 'formik';
import * as Yup from 'yup';

const infoToFill = {
  survey: {
    id: '1',
    uuid: '88b6e7de-183e-11ed-861d-0242ac120002',
    answer: [
      {
        question_id: 1,
        question_type: 'Rate',
        question_data_type: 'numeric',
        question_text: '¿Recomendaría a nuestro establecimiento?',
        answer_value: 0,
      },
      {
        question_id: 2,
        question_type: 'Rate-Small',
        question_data_type: 'numeric',
        question_text: '¿Cómo evalúa nuestros productos?',
        answer_value: 0,
      },
      {
        question_id: 3,
        question_type: 'Rate-Small',
        question_data_type: 'numeric',
        question: '¿Cómo evalúa nuestros bebestibles?',
        answer_value: 0,
      },
      {
        question_id: 4,
        question_type: 'Text',
        question_data_type: 'text',
        question: 'Deje sus comentarios',
        answer_value: '',
      },
      {
        question_id: 5,
        question_type: 'input',
        question_data_type: 'text',
        question: 'Nombre',
        answer_value: 'Juan Virtual González',
      },
      {
        question_id: 6,
        question_type: 'input',
        question_data_type: 'numeric',
        question: 'Teléfono',
        answer_value: '',
      },
      {
        question_id: 7,
        question_type: 'input',
        question_data_type: 'text',
        question: 'Email',
        answer_value: '',
      },
      {
        question_id: 8,
        question_type: 'SingleCheckbox',
        question_data_type: 'boolean',
        question: '¿Acepta ser contactado?',
        answer_value: 'true',
      },
    ],
  },
};

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  //values.name values.email values.channel
  //error.name error.email error.channel
  //error.name = "Este campo es requerido"
  let errors = {};

  if (!values.name) {
    errors.name = 'El campo nombre es requerido';
  }

  if (!values.email) {
    errors.email = 'El email es requerido';
  }

  if (!values.channel) {
    errors.channel = 'El canal es requerido';
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido yup'),
  email: Yup.string().required('El email es requerido yup'),
  channel: Yup.string().required('El canal es requerido yup'),
});

export const OldYoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });

  console.log(formik.errors);

  return (
    <>
      <div className='flex flex-col'>
        <form onSubmit={formik.handleSubmit} className=' flex flex-col gap-4'>
          <label className='' htmlFor='name'>
            Name
          </label>
          <input
            className=''
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='text-red-600'>{formik.errors.name} </div>
          ) : null}

          <label className='' htmlFor='email'>
            E-mail
          </label>
          <input
            className=''
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='text-red-600'>{formik.errors.email} </div>
          ) : null}

          <label className='' htmlFor='channel'>
            Channel
          </label>
          <input
            className=''
            type='text'
            id='channel'
            name='channel'
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className='text-red-600'>{formik.errors.channel} </div>
          ) : null}

          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};
