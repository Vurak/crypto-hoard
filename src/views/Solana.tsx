import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useCallback } from "react";
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
    console.log(accounts);
  }, [publicKey, connection]);

  return (
    <div className="m-auto content-center">
      {/* <Button
      text="< BACK"
      onClick={() => setExpandButton(false)}
      className="absolute top-0 left-0 m-4"
    /> */}
      <div className="mx-auto my-5 flex flex-col gap-2 rounded-lg border-2 border-cyan-400 p-4">
        <p className="m-auto p-2 text-center align-middle text-lg text-pink-500">
          Welcome to the Internet Merchant
        </p>
        <Button text="RECEIVE" onClick={getAirdrop} />
        <Button text="SEND" onClick={sendRandom} />
        <WalletMultiButton />
        <WalletDisconnectButton />
      </div>
    </div>
  );
};

export default Solana;
