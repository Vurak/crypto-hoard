import { Link } from "wouter";

type Props = {
  path: string;
  logo: string;
  children?: JSX.Element | string | null;
};

export const SquareCryptoCard = ({ children, ...props }: Props) => {
  return (
    <Link href={props.path}>
      <div className="from-purple-1000 flex h-full cursor-pointer rounded-2xl bg-gradient-to-tr p-5 align-middle duration-150 hover:bg-purple-900 ">
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
