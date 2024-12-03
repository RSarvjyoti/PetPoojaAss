import React, { useState } from 'react';
import DateInput from './DateInput';

interface CustomDateRangeProps {
  onDateSelect: (range: { startDate: Date | null; endDate: Date | null }) => void;
}

const CustomDateRange: React.FC<CustomDateRangeProps> = ({ onDateSelect }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
    if (endDate && date > endDate) {
      setEndDate(date);
    }
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  const handleApplyRange = () => {
    if (startDate && endDate && startDate <= endDate) {
      onDateSelect({ startDate, endDate });
    }
  };

  return (
    <div>
      <DateInput label="From" selectedDate={startDate} onDateChange={handleStartDateChange} />
      <DateInput label="To" selectedDate={endDate} onDateChange={handleEndDateChange} />
      <button onClick={handleApplyRange}>Apply Range</button>
    </div>
  );
};

export default CustomDateRange;
