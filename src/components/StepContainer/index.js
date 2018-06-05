import React from "react";
import styled from "react-emotion";

const Container = styled("div")(props => ({
  display: "flex",
  justifyContent: "center",
  padding: "30px 10px 30px 10px",
  flex: 1.5,
  minHeight: "350px"
}));

const StepContainer = props => {
  return <Container>{props.render()}</Container>;
};

export default StepContainer;
