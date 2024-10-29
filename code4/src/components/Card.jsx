import React from "react";

export const Card = (props) => {
  return (
    <>
      {/* <div className="card" style= width: "18rem" >  */}

      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={props.CardImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
