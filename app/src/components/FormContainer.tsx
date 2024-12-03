import React, { useReducer } from 'react';
import { FormConfig } from '../types/formTypes';
import { validateField } from '../utils/validation';
import TextInput from './formFields/TextInput';
import TextArea from './formFields/TextArea';
import Select from './formFields/Select';
import CheckboxGroup from './formFields/CheckboxGroup';
import RadioGroup from './formFields/RadioGroup';
import Switch from './formFields/Switch';
import DateInput from './formFields/DateInput';
import Button from './Button';

interface FormContainerProps {
  config: FormConfig;
}

const FormContainer: React.FC<FormContainerProps> = ({ config }) => {
  const initialState = config.fields.reduce((state, field) => {
    state[field.id] = field.defaultValue || '';
    return state;
  }, {} as Record<string, any>);

  const [formState, setFormState] = useReducer(
    (state: Record<string, any>, newState: Partial<Record<string, any>>) => ({
      ...state,
      ...newState,
    }),
    initialState
  );

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    config.fields.forEach((field) => {
      const error = validateField(formState[field.id], field.validation);
      if (error) newErrors[field.id] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) config.onSubmit(formState);
  };

  const handleReset = () => {
    setFormState(initialState);
    setErrors({});
    config.onReset?.();
  };

  const renderField = (field: typeof config.fields[number]) => {
    switch (field.type) {
      case 'text':
        return (
          <TextInput
            key={field.id}
            id={field.id}
            label={field.label}
            value={formState[field.id]}
            placeholder={field.placeholder}
            onChange={(value) => setFormState({ [field.id]: value })}
            errorMessage={errors[field.id]}
          />
        );
      case 'textarea':
        return (
          <TextArea
            key={field.id}
            id={field.id}
            label={field.label}
            value={formState[field.id]}
            placeholder={field.placeholder}
            onChange={(value) => setFormState({ [field.id]: value })}
            errorMessage={errors[field.id]}
          />
        );
      case 'select':
        return (
          <Select
            key={field.id}
            id={field.id}
            label={field.label}
            value={formState[field.id]}
            options={field.options || []}
            onChange={(value) => setFormState({ [field.id]: value })}
            errorMessage={errors[field.id]}
          />
        );
      case 'checkbox':
        return (
          <CheckboxGroup
            key={field.id}
            id={field.id}
            label={field.label}
            value={formState[field.id]}
            options={field.options || []}
            onChange={(value) => setFormState({ [field.id]: value })}
            errorMessage={errors[field.id]}
          />
        );
      case 'radio':
        return (
          <RadioGroup
            key={field.id}
            id={field.id}
            label={field.label}
            value={formState[field.id]}
            options={field.options || []}
            onChange={(value) => setFormState({ [field.id]: value })}
            errorMessage={errors[field.id]}
          />
        );
      case 'switch':
        return (
          <Switch
            key={field.id}
            id={field.id}
            label={field.label}
            value={formState[field.id]}
            onChange={(value) => setFormState({ [field.id]: value })}
          />
        );
      case 'date':
        return (
          <DateInput
            key={field.id}
            id={field.id}
            label={field.label}
            value={formState[field.id]}
            onChange={(value) => setFormState({ [field.id]: value })}
            errorMessage={errors[field.id]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.fields.map(renderField)}
      <Button type="submit" label="Submit" />
      <Button type="button" label="Reset" onClick={handleReset} />
    </form>
  );
};

export default FormContainer;
