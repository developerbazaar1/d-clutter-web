import React from "react";

export const MainPage = () => {
  return (
    <section
      className="landing-main-section position-relative"
      style={{ height: "74vh", overflow: "hidden" }}
    >
      <div
        className="position-relative"
        style={{
          paddingTop: "74px",
        }}
      >
        <video
          autoPlay
          loop
          muted
          className="landing-video w-100"
          style={{
            objectFit: "cover",
            width: "100vw", // Ensures video takes full width of the screen
            height: "100vh", // Ensures video takes full height of the screen
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src="/src/assets/video/junkvideo.mp4" type="video/mp4" />
        </video>
        <div className="">
          <div className="text-64-600">Effortless Junk Removal</div>
          <div
            className="text-18-400 mt-2 text-center"
            style={{
              color: "#F2F2F2",
            }}
          >
            Manage Your Waste Pickups, Drivers & Products From Anywhere.
          </div>
        </div>
      </div>
    </section>
  );
};
