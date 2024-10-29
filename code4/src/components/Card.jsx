import React from "react";

export const Card = (props) => {
  return (
    <>
      {/* <div className="card" style= width: "18rem" >  */}

      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/premium-photo/coder-engineer-working-with-his-pc_1293807-8519.jpg?uid=R168473893&ga=GA1.1.1872758581.1724841441&semt=ais_hybrid"
                className="card-img-top"
                alt="..."
              />
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
