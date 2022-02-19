import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../components";
import Masonry from "react-masonry-css";

interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  tokenAuthority: string;
  supply: string | number;
  type: "nft";
}
interface TokenAccount {
  lamports: number;
  ownerProgram: string;
  type: "token_account";
  rentEpoch: number;
  account: string;
  tokenInfo: TokenInfo;
  metadata?: any;
  onchainMetadata?: any;
}

const Solana = () => {
  const { connection } = useConnection();
  const { publicKey, wallet } = useWallet();

  const walletRef = useRef<HTMLDivElement>(null);

  const [assets, setAssets] = useState<TokenAccount[]>([]);
  const [showAssets, setShowAssets] = useState<boolean>(false);

  const getAirdrop = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    try {
      var airdropSignature = await connection.requestAirdrop(
        publicKey,
        LAMPORTS_PER_SOL
      );
      await connection.confirmTransaction(airdropSignature);
    } catch (error) {
      console.log({ title: "Airdrop failed", description: error });
    }
  }, []);

  const retrieveWalletTokens = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    let key = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
    let accounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      programId: key,
    });
    // new PublicKey(account.data.parsed.info.mint)
    const details = await Promise.all(
      accounts.value.map((value) =>
        fetch(
          `https://public-api.solscan.io/account/${value.account.data.parsed.info.mint}`
        ).then((res) => res.json())
      )
    ).then((tokens: TokenAccount[]) => {
      setAssets(
        tokens.filter((token: TokenAccount) => token.tokenInfo.type == "nft")
      );
    });

    console.log(details);
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
          <WalletMultiButton>
            {publicKey
              ? `${publicKey.toBase58().substring(0, 4)}...${publicKey
                  .toBase58()
                  .substring(
                    publicKey.toBase58().length - 4,
                    publicKey.toBase58().length
                  )}`
              : "CONNECT WALLET"}
          </WalletMultiButton>
          {wallet?.adapter.connected ? (
            <WalletDisconnectButton>DISCONNECT WALLET</WalletDisconnectButton>
          ) : null}
        </div>
      </div>
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
        {assets.length ? (
          assets.map((asset) => (
            <div
              className="bg-primary-light mb-4 rounded-lg text-white"
              key={asset.account}
            >
              <img
                src={asset.metadata.data.image}
                className="w-full rounded-t-lg"
              ></img>
              <div className="p-2">{asset.metadata.data.name}</div>
            </div>
          ))
        ) : (
          <div className="bg-primary-light mb-4 rounded-lg text-white">
            Couldn't find any NFTs in your account
          </div>
        )}
      </Masonry>
    </div>
  );
};

export default Solana;
