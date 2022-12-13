import React from "react";
import "./Alert.css";
const Alert = ({ msg }) => {
  return (
    <div className="alert-container">
      <h3>{msg} </h3>
    </div>
  );
};

export default Alert;
