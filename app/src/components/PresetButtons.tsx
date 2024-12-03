import React from 'react';

interface PresetButtonsProps {
  selectedPreset: string;
  onSelect: (preset: string) => void;
}

const PresetButtons: React.FC<PresetButtonsProps> = ({ selectedPreset, onSelect }) => {
  const presets = ['Today', 'Yesterday', 'This Month', 'Last Month', 'Custom Range'];

  return (
    <div>
      {presets.map((preset) => (
        <button
          key={preset}
          style={{
            backgroundColor: selectedPreset === preset ? '#007BFF' : '#F0F0F0',
            color: selectedPreset === preset ? 'white' : 'black',
            margin: '5px',
            padding: '10px',
          }}
          onClick={() => onSelect(preset)}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;

