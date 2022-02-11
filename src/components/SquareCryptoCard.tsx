type Props = {
  logo: string;
  children?: JSX.Element | string | null;
};

export const SquareCryptoCard = ({ children, ...props }: Props) => {
  return (
    <div className="my-auto rounded-2xl bg-slate-900 p-5 shadow-2xl shadow-slate-900">
      <div className="flex h-max flex-col text-center">
        <img src={props.logo} className="mx-auto w-2/5" />
        <h1 className="h-max truncate py-3 text-2xl text-white">{children}</h1>
      </div>
    </div>
  );
};
