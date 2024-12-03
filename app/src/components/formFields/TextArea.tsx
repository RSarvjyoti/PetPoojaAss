import React from 'react';

interface TextAreaProps {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  errorMessage,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
    {errorMessage && <p className="error">{errorMessage}</p>}
  </div>
);

export default TextArea;
