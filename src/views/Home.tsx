interface PropTypes {
  message: string;
}

export const Home = (props: PropTypes) => {
  return <div>{props.message}</div>;
};
