import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function Error(props) {
  let error = useSelector((state) => state.error);
  error = {
    show: true,
    errorText: "Error",
  };
  return (
    <Modal show={error.show} centered>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <span className="text-danger">{error.errorText}</span>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Error;
