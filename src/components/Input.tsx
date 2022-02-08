import * as React from "react";

interface Props {
  placeholder?: string;
  className?: string;
  onChange: () => void;
}

export const Input = (props: Props) => {
  return (
    <input
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={`rounded-lg border-2 border-pink-500 bg-zinc-800 p-2 font-bold text-cyan-400 ${props.className}`}
    />
  );
};
