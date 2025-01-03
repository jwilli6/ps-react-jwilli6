import React from "react";
import PropTypes from "prop-types";

/** A super lame component that says Hello with a custom message. */
function HelloWorld({message = "World"}) {
  return <div>Hello--{message}</div>;
}

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

export default HelloWorld;