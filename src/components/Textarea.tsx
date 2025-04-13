import clsx from 'clsx';
import React from 'react';

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
  placeholder: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, className = '', placeholder, ...props }) => {
  return (
    <fieldset className='w-full fieldset'>
      <legend className='fieldset-legend'>{label ? label : 'Text'}</legend>
      <label className='w-full textarea'>
        <textarea className={clsx('w-full', className)} placeholder={placeholder} {...props}></textarea>
      </label>
    </fieldset>
  );
};

export default Textarea;
