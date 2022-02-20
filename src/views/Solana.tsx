import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, LoadingContainer, NFTCard } from "../components";
import Masonry from "react-masonry-css";

const Solana = () => {
  const { connection } = useConnection();
  const { publicKey, wallet } = useWallet();

  const walletRef = useRef<HTMLDivElement>(null);
  const [loadingMints, setLoadingMints] = useState(true);
  const [NFTMints, setNFTMints] = useState<string[] | null>(null);
  const [showAssets, setShowAssets] = useState<boolean>(false);

  const retrieveWalletTokens = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    let key = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
    let accounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      programId: key,
    });
    const nftMints = accounts.value
      .filter((a) => {
        const tokenAmount = a.account.data.parsed.info.tokenAmount;
        return tokenAmount.decimals === 0 && tokenAmount.amount == "1";
      })
      .map((a) => a.account.data.parsed.info.mint);

    setNFTMints(nftMints);
    setLoadingMints(false);
  }, [publicKey, connection]);

  useEffect(() => {
    if (wallet?.adapter.connected) {
      walletRef.current?.classList.replace("md:-translate-y-1/2", "md:top-0");
      retrieveWalletTokens();
      walletRef.current?.classList.remove("md:top-1/2");
    } else {
      walletRef.current?.classList.replace("md:top-0", "md:-translate-y-1/2");
      walletRef.current?.classList.add("md:top-1/2");
    }

    setTimeout(() => {
      setShowAssets(Boolean(wallet?.adapter.connected));
    }, 200);
  }, [wallet?.adapter.connected]);

  return (
    <div className="flex w-full flex-col content-center">
      <div
        ref={walletRef}
        className={`z-30 flex w-full flex-col gap-2 rounded-lg p-2 transition-all duration-200 md:absolute md:left-1/2 md:top-1/2 md:w-2/3 md:-translate-x-1/2 md:-translate-y-1/2`}
      >
        <div className="flex w-full flex-col gap-2 md:flex-row">
          <WalletMultiButton />
          {wallet?.adapter.connected ? <WalletDisconnectButton /> : null}
        </div>
      </div>
      {wallet?.adapter.connected ? (
        <LoadingContainer loading={loadingMints}>
          <Masonry
            breakpointCols={{
              default: 5,
              1400: 4,
              1100: 3,
              700: 2,
              500: 1,
            }}
            className={`m-3 flex gap-4 transition-opacity duration-200 md:mt-16 ${
              wallet?.adapter.connected ? "" : "opacity-0"
            }`}
          >
            {NFTMints?.length ? (
              NFTMints.map((mint) => <NFTCard key={mint} mint={mint} />)
            ) : (
              <div className="bg-primary-light mb-4 rounded-lg text-white">
                Couldn't find any NFTs in your account
              </div>
            )}
          </Masonry>
        </LoadingContainer>
      ) : null}
    </div>
  );
};

export default Solana;
