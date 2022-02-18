import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../components";

const Solana = () => {
  const { connection } = useConnection();
  const { publicKey, wallet } = useWallet();
  const [assets, setAssets] = useState([]);
  const walletRef = useRef<HTMLDivElement>(null);

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

  const sendRandom = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    // let all_accounts = await connection.getAccountInfo(publicKey)
    // // This is my SAMO public account balance and address (https://solscan.io/address/ChvvafF1aLeGzBPGr6VKbtcw6fFE1iUYdSoZr6R4oUyD)
    // let samo_balance = await connection.getTokenAccountBalance(new PublicKey("ChvvafF1aLeGzBPGr6VKbtcw6fFE1iUYdSoZr6R4oUyD"))
    // This uses my public SOL address and the SAMO mint account address (https://explorer.solana.com/address/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU)
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
    );

    console.log(details);
  }, [publicKey, connection]);

  useEffect(() => {
    if (wallet?.adapter.connected) {
      walletRef.current?.classList.replace("-translate-y-1/2", "top-0");
      walletRef.current?.classList.remove("top-1/2");
    } else {
      walletRef.current?.classList.replace("top-0", "-translate-y-1/2");
      walletRef.current?.classList.add("top-1/2");
    }
  }, [wallet?.adapter.connected]);

  return (
    <div className="flex w-full flex-col content-center">
      <div
        ref={walletRef}
        className={`absolute left-1/2 top-1/2 z-30 flex w-4/5 -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-lg p-2 transition-all duration-200 md:w-1/3`}
      >
        <div className="flex flex-col gap-2 md:flex-row">
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
      {/* {wallet?.adapter.connected && <div className="h-96"></div>} */}
    </div>
  );
};

export default Solana;
