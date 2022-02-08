import { useState } from "react";
import { Button } from "../components";

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
        classNames="absolute top-0 left-0 m-4"
      />
      {expandButton ? (
        <div className="mx-auto my-5 flex flex-col rounded-lg border-2 border-cyan-400 p-1">
          <p className="m-auto p-2 text-center align-middle text-lg text-pink-500">
            Welcome to the Internet Merchant
          </p>
          <input placeholder="test" />
        </div>
      ) : (
        <Button onClick={handleUnlockClick} text="UNLOCK" />
      )}
    </div>
  );
};

export default Landing;
