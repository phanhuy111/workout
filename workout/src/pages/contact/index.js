import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { styles } from "./styles";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1>{"CONTACT SCREEN"}</h1>
    </div>
  );
};

export default connect(null, null)(Contact);
