import React from 'react';

interface SwitchProps {
  id: string;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ id, label, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="checkbox"
      checked={value}
      onChange={() => onChange(!value)}
    />
  </div>
);

export default Switch;
