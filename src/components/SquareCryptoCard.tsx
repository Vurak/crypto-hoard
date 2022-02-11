import { Link } from "wouter";

type Props = {
  path: string;
  logo: string;
  children?: JSX.Element | string | null;
};

export const SquareCryptoCard = ({ children, ...props }: Props) => {
  return (
    <Link href={props.path}>
      <div className="flex h-full rounded-2xl bg-slate-900 p-5 align-middle shadow-2xl shadow-slate-900">
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
