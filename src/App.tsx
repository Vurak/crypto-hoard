import { Link } from "wouter";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="bg-primary-dark min-h-screen w-screen font-mono font-bold">
      <div className="bg-primary-light sticky z-50 flex h-16 w-full items-center md:fixed">
        <Link href="/">
          <div className="mr-auto ml-2 h-12 w-12 cursor-pointer rounded-full bg-purple-900">
            {"<"}
          </div>
        </Link>
        <div className="ml-auto mr-2 h-12 w-12 rounded-full bg-purple-900"></div>
      </div>
      <div className="relative flex min-h-screen w-full">
        <Router />
      </div>
    </div>
  );
}

export default App;
