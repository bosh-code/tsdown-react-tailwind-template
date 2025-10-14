import React from 'react';

type ButtonType = 'primary' | 'secondary' | 'outline' | 'error' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

export interface MyButtonProps {
  type?: ButtonType;

  size?: ButtonSize;
}

const buttonTypes = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  error: 'btn-error',
  ghost: 'btn-ghost'
} as const;

const buttonSizes = {
  small: 'btn-sm',
  medium: 'btn-md',
  large: 'btn-lg'
} as const;

export const MyButton: React.FC<MyButtonProps> = ({ type, size }) => {
  const buttonType = type && buttonTypes[type] ? buttonTypes[type] : '';
  const buttonSize = size && buttonSizes[size] ? buttonSizes[size] : '';

  return <button className={`btn ${buttonType} ${buttonSize}`.trim()}>my button: type {type}</button>;
};
