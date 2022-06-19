import React from "react";


const Subscription = () => {
  return (
    <div className="my-28 flex flex-col gap-7 justify-center items-center text-center mb-28">
      <p className=" font-poppins "> Our Subscribe</p>
      <div>
        <span className="step-title-blue"> Subscribe To Get Our </span>
        <span className="step-title-red">Latest </span>
        <span className="step-title-blue">News</span>
      </div>
      <div>
        <p className="hiw-sub  " style={{ maxWidth: "600px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet
        </p>
      </div>
      <div className="sub-form">
        <input placeholder="Enter your email address" className="sub-input" />
        <button type="submit" className="sub-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Subscription;
