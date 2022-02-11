import { lazy, Suspense } from "react";
import { Link, Route } from "wouter";
import { Landing } from "./views";
const Solana = lazy(() => import("./views/Solana"));
const SolanaWallet = lazy(() => import("./components/solana/Wallet"));

const Router = () => {
  return (
    <Suspense fallback="Loading...">
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/solana">
        <SolanaWallet>
          <Solana />
        </SolanaWallet>
      </Route>
    </Suspense>
  );
};

export default Router;
