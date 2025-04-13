import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'file';
  label: string;
  className?: string;
  placeholder: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', label, className = '', placeholder, icon, ...props }) => {
  return (
    <fieldset className='w-full fieldset'>
      <legend className='fieldset-legend'>{label ? label : 'Text'}</legend>
      <label className='w-full input'>
        <Icon icon={icon} />
        <input className={`w-full ${className}`} type={type} placeholder={placeholder} {...props} />
      </label>
    </fieldset>
  );
};

export default Input;
