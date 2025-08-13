import React from "react";
import { NonAuthHeader } from "../../components/NonAuthHeader";
import { MainPage } from "./MainPage";
import { HowItWorks } from "./HowItWorks";
import { FeatureOfApp } from "./FeatureOfApp";

export const LandingPage = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "74px",
        }}
      >
        <NonAuthHeader />
      </div>
      <MainPage />
      <HowItWorks />
      <FeatureOfApp />
    </>
  );
};
