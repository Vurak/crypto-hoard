import { Link } from "wouter";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="bg-primary-dark min-h-screen w-full font-mono font-bold">
      <div className="fixed z-30 hidden h-0 w-full items-center md:block md:h-16">
        <div
          onClick={() => window.history.back()}
          className="from-primary-accent absolute top-0 left-0 m-2 flex h-12 cursor-pointer rounded-xl bg-gradient-to-tr text-white"
        >
          <div className="m-auto mx-3 mr-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-6 w-6"
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
            BACK
          </div>
        </div>
        {/* <h1 className="font-mono text-3xl text-white ">My Crypto Gallery</h1> */}
        {/* <div className="from-primary-accent absolute top-0 right-0 m-2 h-12 w-12 cursor-pointer rounded-full bg-gradient-to-tr"></div> */}
      </div>
      <div className="relative flex min-h-screen w-full">
        <Router />
      </div>
    </div>
  );
}

export default App;
