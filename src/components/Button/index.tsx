import React from 'react';

export type ButtonSize = 'small' | 'medium' | 'large' | 'extralarge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export default function Button({
  label,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={ onClick }
    >
      { label }
    </button>
  );
}
