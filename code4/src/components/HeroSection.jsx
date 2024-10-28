import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
              alt=""
              className="img-fluid rounded-4"
            />
          </div>

          <div className="col">
            <div className="text">
              <h1>Lorem ipsum .</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ullamcorper, ligula non congue fermentum, velit nunc
                pellentesque sapien, at tristique neque eros ac metus.
              </p>
              <button className="btn btn-danger">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
