import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  className?: string;
};

export default function Button({
  label,
  onClick,
  className
}: ButtonProps) {
  return (
    <button
      className={ className }
      type="button"
      onClick={ onClick }
    >
      { label }
    </button>
  );
}
