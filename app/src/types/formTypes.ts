export interface FormConfig {
  title: string;
  fields: FieldConfig[];
  onSubmit: (formData: Record<string, any>) => void;
  onReset?: () => void;
}

export interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'switch' | 'date';
  placeholder?: string;
  defaultValue?: string | boolean | string[];
  options?: { label: string; value: any }[];
  validation?: string[];
}
