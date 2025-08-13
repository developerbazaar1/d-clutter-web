import React from "react";
import { Row } from "react-bootstrap";
import aboutusstock from "../../assets/images/aboutusstock.png";

export const AboutDClutter = () => {
  return (
    <Row className="mt-5 py-md-5 justify-content-center justify-content-lg-between">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
        <div
          className="text-24-600"
          style={{
            fontSize: "48px",
          }}
        >
          About D’CLUTTER
        </div>
        <div className="text-18-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque. Sit turpis pretium
          eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
        </div>
        <div className="text-18-400 mt-2">
          Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.
          Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est
          sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu
          aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum
          cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla
          pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris
          cras molestie velit. Maecenas eget adipiscing quisque viverra lectus
          arcu, tincidunt ultrices pellentesque.
        </div>
      </div>
      <div className="col-10 col-md-4 d-flex justify-content-center">
        <img src={aboutusstock} className="w-100 h-max-content mt-3 mt-md-0 rounded-1" alt="aboutusstock" />
      </div>
    </Row>
  );
};
