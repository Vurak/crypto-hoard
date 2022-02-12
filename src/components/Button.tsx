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
      className={`bg-primary-light w-full rounded-lg border-4 border-yellow-500 p-2 font-bold text-yellow-500 duration-75 hover:bg-purple-900 ${
        props.className || ""
      }`}
    >
      {props.text || ""}
    </button>
  );
};
