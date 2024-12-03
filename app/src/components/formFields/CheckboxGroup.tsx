import React from 'react';

interface CheckboxGroupProps {
  id: string;
  label: string;
  value: string[];
  options: { label: string; value: any }[];
  onChange: (value: string[]) => void;
  errorMessage?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  id,
  label,
  value,
  options,
  onChange,
  errorMessage,
}) => {
  const handleChange = (optionValue: any) => {
    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  return (
    <div>
      <label>{label}</label>
      {options.map((opt) => (
        <div key={opt.value}>
          <input
            type="checkbox"
            id={`${id}-${opt.value}`}
            checked={value.includes(opt.value)}
            onChange={() => handleChange(opt.value)}
          />
          <label htmlFor={`${id}-${opt.value}`}>{opt.label}</label>
        </div>
      ))}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default CheckboxGroup;
