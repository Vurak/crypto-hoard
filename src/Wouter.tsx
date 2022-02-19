import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import { Landing } from "./views";
const Solana = lazy(() => import("./views/Solana"));
const SolanaWallet = lazy(() => import("./components/solana/Wallet"));

const Wouter = () => {
  return (
    <Suspense fallback="Loading...">
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/solana">
          <SolanaWallet>
            <Solana />
          </SolanaWallet>
        </Route>
        <Route>404</Route>
      </Switch>
    </Suspense>
  );
};

export default Wouter;
