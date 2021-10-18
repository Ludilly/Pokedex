import React from 'react';

type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  placeholder?: string;
  // onChange: () => string | Promise<string>;
};

export default function Input({ label, placeholder, onChange }: DefaultInputProps) {
  return (
    <input
      type="text"
      placeholder={ placeholder }
      onChange={ onChange }
    >
      { label }
    </input>
  );
}
