import React from "react";

const NewCard = ({ newPara }) => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col">
            <img
              src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?uid=R168473893&ga=GA1.1.1872758581.1724841441&semt=ais_hybrid"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col">
            <p>{newPara}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;

// function fun(a, b) {
//   return a + b;
// }

// console.log(fun(5, 10)); // Outputs: 15
