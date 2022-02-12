import { Link } from "wouter";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="bg-primary-dark min-h-screen w-screen font-mono font-bold">
      <div className="bg-primary-light sticky z-50 flex h-16 w-full items-center md:fixed">
        <Link href="/">
          <div className="border-gold-50 mr-auto ml-2 h-12 w-12 cursor-pointer rounded-full border-4 bg-purple-900">
            {"<"}
          </div>
        </Link>
        <h1 className="text-gold-50 font-display text-3xl">My Crypto Hoard</h1>
        <div className="ml-auto mr-2 h-12 w-12 rounded-full bg-purple-900"></div>
      </div>
      <div className="relative flex min-h-screen w-full">
        <Router />
      </div>
    </div>
  );
}

export default App;
