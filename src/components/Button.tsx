import * as React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`from-primary-light hover:bg-primary-accent w-full rounded-lg bg-gradient-to-tr p-2 font-bold text-white duration-150 ${
        props.className || ""
      }`}
    >
      {children || null}
    </button>
  );
};
