import React from "react";
import howitworks from "../../assets/images/howitworks.png";
import howitworkmobile from "../../assets/images/howitworkmobile.png";

export const HowItWorks = () => {
  return (
    <section className="mt-5">
      <div>
        <div
          className="text-18-600 text-center"
          style={{
            color: "#5E6282",
          }}
        >
          Be A Part Of The Smart Waste Revolution
        </div>
        <div className="text-50-600 mt-2">How It’s Work</div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <img src={howitworkmobile} alt="howitworks" className="d-lg-none" />
        <img src={howitworks} alt="howitworks" className="d-none d-lg-block" />
      </div>
      <div
      className="text-24-600 text-center mt-5 py-3 text-uppercase text-white"
        style={{
          background: "#15BBC1",
        }}
      >
        No illegal dumping Guarantee
      </div>
    </section>
  );
};
