import React from "react";
import styled, { css, keyframes } from "react-emotion";

const Container = styled("div")(props => ({
  display: "flex",
  justifyContent: "center",
  padding: "30px 0 30px",
  border: "1px solid red",
  height: "400px"
}));

const StepContainer = props => {
  return <Container>{props.render()}</Container>;
};

export default StepContainer;
