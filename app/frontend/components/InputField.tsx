'use client';
import { InputHTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
interface Props {
  name: string;
  title?: string;
  placeholder: string;
  error: string;
  register: UseFormRegisterReturn;
  type: HTMLInputTypeAttribute;
}

export function InputField({
  name,
  title,
  placeholder,
  error,
  register,
  type,
}: Props) {
  return (
    <div className='tailInputContainer col input2'>
      {title && (
        <label className={`subject ${error ? 'error' : ''}`} htmlFor={name}>
          {title}
        </label>
      )}
      <input
        placeholder={placeholder}
        className={`fields ${error ? 'errorOutline' : ' outline'}`}
        id={name}
        {...register}
        type={type}
      ></input>
    </div>
  );
}
