import * as React from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`bg-primary-light border-gold-50 text-gold-50 w-full rounded-lg border-4 p-2 font-bold duration-150 hover:bg-purple-900 ${
        props.className || ""
      }`}
    >
      {props.text || ""}
    </button>
  );
};
