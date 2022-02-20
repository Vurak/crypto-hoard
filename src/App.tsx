import { useLocation } from "wouter";
import "./App.css";
import Wouter from "./Wouter";

function App() {
  const [location, setLocation] = useLocation();
  return (
    <div className="bg-primary-dark font-primary min-h-screen w-full font-bold">
      <div className="fixed z-30 hidden h-0 w-full items-center md:block md:h-16">
        <div
          onClick={() => setLocation("/")}
          className="from-primary-accent absolute top-0 left-0 m-2 flex h-12 cursor-pointer rounded-xl bg-gradient-to-tr text-white"
        >
          <div className="m-auto mx-3 flex">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
        </div>
        {/* <h1 className="font-primary text-3xl text-white ">My Crypto Gallery</h1> */}
        {/* <div className="from-primary-accent absolute top-0 right-0 m-2 h-12 w-12 cursor-pointer rounded-full bg-gradient-to-tr"></div> */}
      </div>
      <div className="relative flex min-h-screen w-full">
        <Wouter />
      </div>
    </div>
  );
}

export default App;
