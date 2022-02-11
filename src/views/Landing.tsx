import { Link } from "wouter";
import { SquareCryptoCard } from "../components";

import sol_svg from "../assets/blockchain-logos/sol.svg";
import eth_svg from "../assets/blockchain-logos/eth.svg";
import bnb_svg from "../assets/blockchain-logos/bnb.svg";

const Landing = () => {
  return (
    <div className="m-auto grid h-full w-2/3 gap-10 py-10 md:w-2/3 md:grid-flow-col md:grid-cols-3">
      <SquareCryptoCard path="/ethereum" logo={eth_svg}>
        SOLANAsss
      </SquareCryptoCard>
      <SquareCryptoCard path="/solana" logo={sol_svg}>
        SOLANA
      </SquareCryptoCard>
      <SquareCryptoCard path="/bsc" logo={bnb_svg}>
        test
      </SquareCryptoCard>
    </div>
  );
};

export default Landing;
