export const surveyInitialInfo = {
  business: {
    address: 'Address',
    city: 'Santiago',
    country: 'Chile',
    logo: 'https://thumbs.dreamstime.com/b/avatar-del-trabajo-en-equipo-restaurante-129376801.jpg',
    name: 'Restaurant Name',
  },
  survey: {
    disclaimer: 'Esto es un disclaimer',
    id: '1',
    language: 'es',
    mode: 'SinglePage',
    section: [
      {
        description: 'description',
        disclaimer: 'Esta seccion demora 1 min',
        id: 1,
        page_number: 1,
        postition: 1,
        question: [
          {
            data: '',
            data_type: 'numeric',
            id: 1,
            max_value: 10,
            min_value: 1,
            pattern: '',
            position: 1,
            question: 'Por favor, califique nuestro servicio',
            required: true,
            type: 'Rate',
          },
          {
            id: 5,
            type: 'Input',
            data_type: 'text',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 200,
            question: 'Nombre',
            data: '',
            pattern: '',
          },
          {
            id: 4,
            type: 'TextArea',
            data_type: 'text',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 600,
            question: 'Deje sus comentarios',
            data: '',
            pattern: '',
          },
          {
            id: 2,
            type: 'Rate-Small',
            data_type: 'numeric',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 4,
            question: '¿Cómo evalúa nuestros productos?',
            data: '',
            pattern: '',
          },
        ],
        required: true,
        show_disclaimer: true,
        show_sub_title: true,
        sub_title: 'Sub titulo',
        title: '¿Recomendaría a nuestro establecimiento?',
        type: 'Recommendation',
      },

      {
        description: 'description',
        disclaimer: 'Esta seccion demora 1 min',
        id: 2,
        page_number: 1,
        postition: 2,
        question: [
          {
            id: 2,
            type: 'Rate-Small',
            data_type: 'numeric',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 4,
            question: '¿Cómo evalúa nuestros productos?',
            data: '',
            pattern: '',
          },
          {
            id: 3,
            type: 'Rate-Small',
            data_type: 'numeric',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 4,
            question: '¿Cómo evalúa nuestros bebestibles?',
            data: '',
            pattern: '',
          },
          {
            id: 5,
            type: 'Input',
            data_type: 'text',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 200,
            question: 'Nombre',
            data: '',
            pattern: '',
          },
          {
            id: 4,
            type: 'TextArea',
            data_type: 'text',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 600,
            question: 'Deje sus comentarios',
            data: '',
            pattern: '',
          },
        ],
        required: true,
        show_disclaimer: true,
        show_sub_title: true,
        sub_title: 'Sub titulo',
        title: 'Por favor evalúe nuestros servicios:',
        type: 'Normal',
      },

      {
        description: 'description',
        disclaimer: 'Esta seccion demora 1 min',
        id: 3,
        page_number: 1,
        postition: 3,
        question: [
          {
            id: 4,
            type: 'TextArea',
            data_type: 'text',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 600,
            question: 'Deje sus comentarios',
            data: '',
            pattern: '',
          },
          {
            id: 5,
            type: 'Input',
            data_type: 'text',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 200,
            question: 'Nombre',
            data: '',
            pattern: '',
          },
          {
            id: 6,
            type: 'Input',
            data_type: 'numeric',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 50,
            question: 'Teléfono',
            data: '',
            pattern: '',
          },
          {
            id: 7,
            type: 'Email',
            data_type: 'text',
            position: 1,
            required: true,
            min_value: 1,
            max_valu: 500,
            question: 'Email',
            data: '',
            pattern: '',
          },
          {
            id: 8,
            type: 'SingleCheckbox',
            data_type: 'boolean',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 5,
            question: '¿Acepta ser contactado?',
            data: '',
            pattern: '',
          },
          {
            data: '',
            data_type: 'numeric',
            id: 1,
            max_value: 10,
            min_value: 1,
            pattern: '',
            position: 1,
            question: 'Por favor, califique nuestro servicio',
            required: true,
            type: 'Rate',
          },
          {
            id: 3,
            type: 'Rate-Small',
            data_type: 'numeric',
            position: 1,
            required: true,
            min_value: 1,
            max_value: 4,
            question: '¿Cómo evalúa nuestros bebestibles?',
            data: '',
            pattern: '',
          },
        ],
        required: true,
        show_disclaimer: true,
        show_sub_title: true,
        sub_title: 'Sub titulo',
        title: 'Libro de Sugerencias',
        type: 'Normal',
      },
    ],
    show_disclaimer: true,
    template: false,
    type: 'Restaurant',
    uuid: '88b6e7de-183e-11ed-861d-0242ac120002',
  },
};

const newJson = {
  session_id: '10012',
  uuid: '88b6e7de-183e-11ed-861d-0242ac120002',
  language: 'es',
  type: 'Restaurant',
  mode: 'SinglePage',
  template: true,
  disclaimer: 'Esta encuesta te tomara 5 minutos',
  show_disclaimer: true,
  section: [
    {
      id: '1',
      description: 'Recomendation',
      language: 'es',
      type: 'Recommendation',
      postition: '1',
      title: '¿Recomendaría a nuestro establecimiento?',
      sub_title: 'Subtitle',
      show_sub_title: true,
      disclaimer: 'Disclaimer',
      show_disclaimer: true,
      page_number: '1',
      required: true,
      question: [
        {
          id: '1',
          language: 'es',
          type: 'Rate',
          data_type: 'numeric',
          position: '1',
          required: true,
          min_value: '1',
          max_value: '10',
          question: 'Por favor, califique nuestro servicio',
          data: '',
          pattern: '',
        },
      ],
    },
    {
      id: '2',
      description: 'Normal',
      language: 'es',
      type: 'Normal',
      postition: '2',
      title: 'Por favor evalúe nuestros servicios:',
      sub_title: 'Subtitle',
      show_sub_title: true,
      disclaimer: 'Disclaimer',
      show_disclaimer: true,
      page_number: '1',
      required: true,
      question: [
        {
          id: '2',
          language: 'es',
          type: 'Rate-Small',
          data_type: 'numeric',
          position: '1',
          required: true,
          min_value: '1',
          max_value: '4',
          question: '¿Cómo evalúa nuestros productos?',
          data: '',
          pattern: '',
        },
        {
          id: '3',
          language: 'es',
          type: 'Rate-Small',
          data_type: 'numeric',
          position: '1',
          required: true,
          min_value: '1',
          max_value: '4',
          question: '¿Cómo evalúa nuestros bebestibles?',
          data: '',
          pattern: '',
        },
      ],
    },
    {
      id: '3',
      description: 'Normal',
      language: 'es',
      type: 'DigitalBook',
      postition: '3',
      title: 'Libro de Sugerencias:',
      sub_title: 'Subtitle',
      show_sub_title: true,
      disclaimer: 'Disclaimer',
      show_disclaimer: true,
      page_number: '1',
      required: true,
      question: [
        {
          id: '4',
          language: 'es',
          type: 'TextArea',
          data_type: 'text',
          position: '1',
          required: true,
          min_value: '1',
          max_value: '600',
          question: 'Deje sus comentarios',
          data: '',
          pattern: '',
        },
        {
          id: '5',
          language: 'es',
          type: 'Input',
          data_type: 'text',
          position: '2',
          required: true,
          min_value: '1',
          max_value: '200',
          question: 'Nombre',
          data: '',
          pattern: '',
        },
        {
          id: '6',
          language: 'es',
          type: 'Input',
          data_type: 'numeric',
          position: '3',
          required: true,
          min_value: '1',
          max_value: '50',
          question: 'Teléfono',
          data: '',
          pattern: '',
        },
        {
          id: '7',
          language: 'es',
          type: 'Email',
          data_type: 'text',
          position: '4',
          required: true,
          min_value: '1',
          max_value: '50',
          question: 'Email',
          data: '',
          pattern: '',
        },
        {
          id: '8',
          language: 'es',
          type: 'SingleCheckbox',
          data_type: 'boolean',
          position: '5',
          required: true,
          min_value: '1',
          max_value: '50',
          question: '¿Acepta ser contactado?',
          data: '',
          pattern: '',
        },
      ],
    },
  ],
};
