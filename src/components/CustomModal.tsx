import React from "react";
import type { ReactNode } from "react";
import { Modal } from "react-bootstrap";

interface CustomModalProps {
  show?: boolean;
  onHide?: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  onCancel?: () => void;
  onSubmit?: () => void;
  btnText?: string;
  secondaryBtnText?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  show = false,
  onHide = () => {},
  title = "",
  description = "",
  children,
  btnText = "Save",
  onSubmit,
  onCancel,
  secondaryBtnText = "Cancel",
}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="border-0 flex-column-reverse gap-2">
        <Modal.Title className="text-20-600 text-center w-100">
          {title}
          <div
            className="text-14-400 mt-2"
            style={{
              color: "#606060",
            }}
          >
            {description}
          </div>
        </Modal.Title>
      </Modal.Header>
      {children && <Modal.Body className="py-2">{children}</Modal.Body>}
      {onCancel && onSubmit && (
        <Modal.Footer className="justify-content-center border-0">
          <div className="btn-secondary" onClick={onCancel}>
            {secondaryBtnText || "Cancel"}
          </div>
          <div className="btn-primary" onClick={onSubmit}>
            {btnText || "Submit"}
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CustomModal;
