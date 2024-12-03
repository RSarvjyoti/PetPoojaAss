import React from 'react';

interface SelectProps {
  id: string;
  label: string;
  value: string;
  options: { label: string; value: any }[];
  onChange: (value: string) => void;
  errorMessage?: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  options,
  onChange,
  errorMessage,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {errorMessage && <p className="error">{errorMessage}</p>}
  </div>
);

export default Select;
