import React, { Children } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: any;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      className={ className }
      type="button"
      onClick={ onClick }
    >
      { children }
    </button>
  );
}
