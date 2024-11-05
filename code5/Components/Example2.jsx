import { useState } from "react";

const Example2 = () => {
  const [isOn, setIson] = useState(true);

  const handleClick = () => {
    setIson(!isOn);
  };
  return (
    <div>
      <p> The button is : {isOn ? "off" : "on"}</p>
      <button onClick={handleClick}>{isOn ? "on" : "off"}</button>
    </div>
  );
};

export default Example2;
