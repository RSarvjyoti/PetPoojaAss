import React from 'react';

interface DateInputProps {
  label: string;
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
}

const DateInput: React.FC<DateInputProps> = ({ label, selectedDate, onDateChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(new Date(e.target.value));
  };

  return (
    <div>
      <label>{label}:</label>
      <input type="date" value={selectedDate?.toISOString().split('T')[0] || ''} onChange={handleChange} />
    </div>
  );
};

export default DateInput;
