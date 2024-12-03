import React from 'react'
import { FormConfig } from '../types/formTypes';
import FormContainer from '../components/FormContainer';

const formConfig: FormConfig = {
    title: 'Custom Form',
    fields: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name',
        validation: ['required', 'minLength'],
      },
      {
        id: 'email',
        label: 'Email',
        type: 'text',
        placeholder: 'Enter your email',
        validation: ['required', 'email'],
      },
      {
        id: 'bio',
        label: 'Bio',
        type: 'textarea',
        placeholder: 'Tell us about yourself',
        validation: ['minLength'],
      },
      {
        id: 'newsletter',
        label: 'Subscribe to Newsletter',
        type: 'checkbox',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
      },
      {
        id: 'gender',
        label: 'Gender',
        type: 'radio',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ],
      },
      {
        id: 'birthdate',
        label: 'Date of Birth',
        type: 'date',
      },
      {
        id: 'terms',
        label: 'Agree to Terms and Conditions',
        type: 'switch',
      },
    ],
    onSubmit: (formData) => {
      console.log('Form Data:', formData);
    },
    onReset: () => {
      console.log('Form Reset');
    },
  };

const CustomForm:React.FC = () => {
  return (
    <div className='form-container'>
        <h1>{formConfig.title}</h1>
        <FormContainer config={formConfig} />
    </div>
  )
}

export default CustomForm