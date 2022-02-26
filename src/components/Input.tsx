import * as React from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | '';
  placeholder?: string;
  className?: string;
}

export const Input = (props: Props) => {
  return (
    <input
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      className={`rounded-lg border-2 border-primary-accent bg-zinc-800 p-2 font-bold text-white ${props.className}`}
    />
  );
};
