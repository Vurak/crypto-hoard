import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="bg-purple-1200 min-h-screen w-screen font-mono font-bold">
      <div className="bg-purple-1000 sticky z-50 flex h-16 w-full items-center md:fixed">
      </div>
      <div className="relative flex min-h-screen w-full">
        <Router />
      </div>
    </div>
  );
}

export default App;
