import React from 'react';

interface TextInputProps {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  errorMessage,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
    {errorMessage && <p className="error">{errorMessage}</p>}
  </div>
);

export default TextInput;
