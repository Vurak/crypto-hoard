import { useState } from "react";
import { Button, Input } from "../components";

const Landing = () => {
  const [expandButton, setExpandButton] = useState(false);

  const handleUnlockClick = () => {
    setExpandButton(true);
  };

  return (
    <div className="m-auto content-center">
      <Button
        text="< BACK"
        onClick={() => setExpandButton(false)}
        className="absolute top-0 left-0 m-4"
      />
      {expandButton ? (
        <div className="mx-auto my-5 flex flex-col gap-2 rounded-lg border-2 border-cyan-400 p-4">
          <p className="m-auto p-2 text-center align-middle text-lg text-pink-500">
            Welcome to the Internet Merchant
          </p>
          <Input placeholder="username" onChange={() => {}} />
          <Input placeholder="password" onChange={() => {}} />
          <Button text="Submit" onClick={() => {}} />
        </div>
      ) : (
        <Button onClick={handleUnlockClick} text="UNLOCK" />
      )}
    </div>
  );
};

export default Landing;
