import "./App.css";
import { Home } from "./views/Home";
import Landing from "./views/Landing";
import { Wallet } from "./Wallet";
function App() {
  return (
    <Wallet>
      <div className="flex content-center w-screen h-screen font-mono font-bold bg-zinc-900">
        <Landing />
      </div>
    </Wallet>
  );
}

export default App;
