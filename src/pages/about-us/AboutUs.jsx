import React from "react";
import aboutustile from "../../assets/images/aboutustile.jpg";
import { AboutDClutter } from "./AboutDClutter";

export const AboutUs = () => {
  return (
    <section>
      <img
        src={aboutustile}
        alt="aboutus"
        className="w-100"
        // style={{ maxHeight: "400px" }}
      />
      <div className="container">
        <AboutDClutter />
      </div>
    </section>
  );
};
