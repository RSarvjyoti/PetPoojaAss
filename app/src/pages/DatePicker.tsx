import React from 'react'
import DatePickerContainer from '../components/DatePickerContainer'

const DatePicker : React.FC = () => {
    const handleDateSelection = (range: { startDate: Date | null; endDate: Date | null }) => {
        console.log('Selected Date Range:', range);
    };

  return (
    <div className='date-picker'>
        <h1>Custom Date Picker</h1>
        <DatePickerContainer onDateSelect={handleDateSelection} />
    </div>
  )
}

export default DatePicker