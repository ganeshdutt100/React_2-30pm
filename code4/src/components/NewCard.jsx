import React from "react";

const NewCard = ({ newPara, heading }) => {
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
            <h1>{heading}</h1>
            <p>{newPara}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewCard.defaultProps = {
  heading: "Default Heading",
  newPara: "Default Paragraph",
};
export default NewCard;

// function fun(a, b) {
//   return a + b;
// }

// console.log(fun(5, 10)); // Outputs: 15
