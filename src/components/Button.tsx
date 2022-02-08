import * as React from "react";

interface ButtonProps {
  text: string;
  classNames?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`flex rounded-lg border-2 border-cyan-400 p-2 font-bold text-pink-500 duration-200 hover:bg-zinc-700 ${props.classNames}`}
    >
      {props.text}
    </button>
  );
};