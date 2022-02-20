import React from "react";
import { Link } from "wouter";

type Props = {
  path: string;
  logo: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

export const SquareCryptoCard = ({ children, ...props }: Props) => {
  return (
    <Link href={props.path}>
      <div
        className={` ${
          props.disabled
            ? "from-gray-800"
            : "from-primary-light hover:bg-primary-accent cursor-pointer"
        } flex h-full rounded-2xl bg-gradient-to-tr p-5 align-middle duration-150`}
      >
        <div className="my-auto flex h-max w-full flex-col text-center">
          <img src={props.logo} className="mx-auto w-2/5" />
          <h1 className="h-max truncate pt-3 text-2xl text-white">
            {children}
          </h1>
        </div>
      </div>
    </Link>
  );
};
