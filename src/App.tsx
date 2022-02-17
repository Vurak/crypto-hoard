import { Link } from "wouter";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="bg-primary-dark min-h-screen w-screen font-mono font-bold">
      <div className="sticky z-50 flex h-16 w-full items-center md:fixed">
        <Link href="/" className="my-auto">
          <div className="from-primary-accent mr-auto ml-2 flex h-12 w-12 cursor-pointer rounded-xl bg-gradient-to-tr text-white">
            <div className="m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </div>
          </div>
        </Link>
        {/* <h1 className="font-mono text-3xl text-white ">My Crypto Gallery</h1> */}
        <div className="bg-primary-accent ml-auto mr-2 h-12 w-12 rounded-full"></div>
      </div>
      <div className="relative flex min-h-screen w-full">
        <Router />
      </div>
    </div>
  );
}

export default App;
