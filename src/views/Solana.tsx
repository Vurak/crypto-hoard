import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useCallback, useEffect } from "react";
import { Button } from "../components";

const Solana = () => {
  const { connection } = useConnection();
  const { publicKey, wallet } = useWallet();

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
    if (!wallet?.adapter.connected) return;
  }, [wallet]);

  const handleClick = () => {
    wallet?.adapter.connect();
  };

  return (
    <div className="m-auto w-full content-center">
      <div className="mx-auto my-5 flex flex-col gap-2 rounded-lg p-4 md:w-1/3">
        {/* {/* <Button text="RECEIVE" onClick={getAirdrop} /> */}
        <Button text="SEND" onClick={handleClick} />
        <div className="flex flex-row gap-2">
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
          <WalletDisconnectButton>DISCONNECT WALLET</WalletDisconnectButton>
        </div>
      </div>
    </div>
  );
};

export default Solana;
