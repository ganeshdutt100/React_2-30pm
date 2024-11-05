import React, { useState } from "react";

const Example3 = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Something.."
      />
      <p>Input Text : {text}</p>
    </div>
  );
};

export default Example3;
