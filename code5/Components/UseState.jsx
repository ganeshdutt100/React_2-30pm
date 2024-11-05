import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  //   const addFun = () => {
  //     setCount(count + 1);
  //   };

  const subFun = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={subFun}>Sub</button>

      {count}
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>
  );
};

export default UseState;
