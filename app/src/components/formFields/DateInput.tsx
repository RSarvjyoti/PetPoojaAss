import React from 'react';

interface DateInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const DateInput: React.FC<DateInputProps> = ({
  id,
  label,
  value,
  onChange,
  errorMessage,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    {errorMessage && <p className="error">{errorMessage}</p>}
  </div>
);

export default DateInput;