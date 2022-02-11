import { Link, Route } from "wouter";
import { Landing, Solana } from "./views";

const Router = () => {
  return (
    <div>
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/solana" />
    </div>
  );
};

export default Router;
