import React, { useState } from "react";
import { Form, Modal, Row } from "react-bootstrap";
import providerlogin from "../assets/images/providerlogin.png";
import dclutterlogo from "../assets/svg/dclutterlogo.svg";
import CustomModal from "../components/CustomModal";
import modalCheck from "../assets/svg/modalCheck.svg";

export const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  return (
    <section className="d-flex" style={{ height: "89vh", overflow: "hidden" }}>
      <div className="d-flex justify-content-around w-100">
        <div className="col-7 d-flex align-items-center">
          <img
            src={providerlogin}
            className="w-100 h-max-content object-fit-none"
            alt="login"
          />
        </div>
        <div className="col-4 d-flex flex-column justify-content-center">
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <img src={dclutterlogo} alt="dclutterlogo" />
            <span className="text-18-600">D’clutter</span>
          </div>
          <Form className="col-8 mt-5 mx-auto">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <button className="btn-primary w-100">Login</button>
            <div className="d-flex justify-content-end mt-2">
              <span
                className="text-muted cursor-pointer"
                onClick={() => setOpenModal(true)}
              >
                Forgot Password?
              </span>
            </div>
            <div className="d-flex justify-content-start mt-4 gap-1">
              <span className="text-16-400">New here ?</span>
              <span
                className="text-16-400"
                style={{ color: "#15BBC1", textDecoration: "underline" }}
              >
                {" "}
                Sign Up
              </span>
            </div>
          </Form>
        </div>
      </div>
      <CustomModal
        show={openModal}
        onHide={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        secondaryBtnText={"Back To Login"}
        btnText="Submit"
        onSubmit={() => {
          setOpenModal(false);
          setEmailSent(true);
        }}
      >
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <img src={dclutterlogo} alt="dclutterlogo" />
          <span className="text-18-600">D’clutter</span>
        </div>
        <div className="text-32-600 mt-2 fw-bold text-center">
          Forgot Password?
        </div>
        <div className="text-16-400 text-grey text-center">
          Enter your email to get a reset link.
        </div>
        <Form className="mt-4">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form>
      </CustomModal>
      <CustomModal
        show={emailSent}
        onHide={() => setEmailSent(false)}
        secondaryBtnText={"Back To Login"}
        btnText="Resend Link"
        onCancel={() => setEmailSent(false)}
        onSubmit={() => {
          setEmailSent(false);
        }}
      >
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <img src={dclutterlogo} alt="dclutterlogo" />
          <span className="text-18-600">D’clutter</span>
        </div>
        <div className="text-32-600 mt-2 fw-bold text-center">
          Password Reset Email Sent !
        </div>
        <div className="text-16-400 text-grey text-center">
          Check you Email for the password reset link.
        </div>
        <div className="d-flex my-3 justify-content-center">
          <img src={modalCheck} alt="modalCheck" className="mt-4" />
        </div>
      </CustomModal>
    </section>
  );
};
