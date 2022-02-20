import React from "react";

type Props = {
  loading: boolean;
  fallback?: React.ReactElement;
  children: JSX.Element | null;
};

export const LoadingContainer = ({ loading, fallback, children }: Props) => {
  if (loading) {
    return (
      fallback ?? <div className="m-auto h-32 w-32 text-white">Loading</div>
    );
  }
  return children;
};
