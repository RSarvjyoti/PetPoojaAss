import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit';
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, label, onClick }) => (
  <button type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
