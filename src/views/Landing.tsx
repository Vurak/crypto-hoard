import { Link } from "wouter";
import { SquareCryptoCard } from "../components";

const Landing = () => {
  return (
    <div className="m-auto grid h-full w-2/3 gap-10 py-10 md:w-2/3 md:grid-flow-col md:grid-cols-3">
      <Link href="/solana">
        <SquareCryptoCard logo="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/sol.svg">
          SOLANA
        </SquareCryptoCard>
      </Link>
      <SquareCryptoCard logo="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/sol.svg">
        SOLANAsss
      </SquareCryptoCard>
      <SquareCryptoCard logo="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/sol.svg">
        test
      </SquareCryptoCard>
    </div>
  );
};

export default Landing;
