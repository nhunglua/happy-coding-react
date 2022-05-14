import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function Error(props) {
  let error = useSelector((state) => state.error);
  const { show, errorText } = error;

  return show && <span className="text-danger">{errorText} </span>;
}

export default Error;
