import React, { useState, useEffect } from 'react';
import PresetButtons from './PresetButtons';
import CustomDateRange from './CustomDateRange';

type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

interface DatePickerContainerProps {
  onDateSelect: (dateRange: DateRange) => void;
  fontSize?: string;
  fontColor?: string;
  backgroundColor?: string;
}

const DatePickerContainer: React.FC<DatePickerContainerProps> = ({
  onDateSelect,
  fontSize = '16px',
  fontColor = 'black',
  backgroundColor = 'white',
}) => {
  const [selectedPreset, setSelectedPreset] = useState<string>('Today');
  const [dateRange, setDateRange] = useState<DateRange>({ startDate: null, endDate: null });

  useEffect(() => {
    handlePresetSelection(selectedPreset);
  }, [selectedPreset]);

  const handlePresetSelection = (preset: string) => {
    let startDate: Date | null = null;
    let endDate: Date | null = null;

    switch (preset) {
      case 'Today':
        startDate = new Date();
        endDate = new Date();
        break;
      case 'Yesterday':
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        endDate = startDate;
        break;
      case 'This Month':
        startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        break;
      case 'Last Month':
        startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
        endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
        break;
      default:
        setDateRange({ startDate: null, endDate: null });
        return;
    }
    setDateRange({ startDate, endDate });
    onDateSelect({ startDate, endDate });
  };

  const handleCustomDateRange = (range: DateRange) => {
    setDateRange(range);
    onDateSelect(range);
  };

  return (
    <div style={{ fontSize, color: fontColor, backgroundColor }}>
      <PresetButtons selectedPreset={selectedPreset} onSelect={setSelectedPreset} />
      {selectedPreset === 'Custom Range' ? (
        <CustomDateRange onDateSelect={handleCustomDateRange} />
      ) : (
        <div>
          <p>Selected Date: {dateRange.startDate?.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default DatePickerContainer;
