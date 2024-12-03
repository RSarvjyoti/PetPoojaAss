import React from 'react';

interface RadioGroupProps {
  id: string;
  label: string;
  value: string;
  options: { label: string; value: any }[];
  onChange: (value: string) => void;
  errorMessage?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  id,
  label,
  value,
  options,
  onChange,
  errorMessage,
}) => (
  <div>
    <label>{label}</label>
    {options.map((opt) => (
      <div key={opt.value}>
        <input
          type="radio"
          id={`${id}-${opt.value}`}
          checked={value === opt.value}
          onChange={() => onChange(opt.value)}
        />
        <label htmlFor={`${id}-${opt.value}`}>{opt.label}</label>
      </div>
    ))}
    {errorMessage && <p className="error">{errorMessage}</p>}
  </div>
);

export default RadioGroup;
