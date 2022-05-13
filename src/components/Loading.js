import React from "react";
import { useSelector } from "react-redux";

function Loading(props) {
  const show = useSelector((state) => state.loading);
  console.log({ show });
  return show.showLoading && <div className="loading">Loading...</div>;
}

export default Loading;
