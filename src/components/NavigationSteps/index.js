import React from "react";
import styled, { css } from "react-emotion";

const Container = styled("div")(props => ({
  display: "flex",
  justifyContent: "center",
  padding: "30px 0 30px"
}));

const NavContainer = styled("div")(props => ({
  display: "flex",
  justifyContent: "center"
}));

const NavItems = styled("div")(props => ({
  padding: "20px",
  margin: "0 10px 0 10px",
  border: "1px solid #00b6b2",
  borderRadius: "10%",
  cursor: "pointer",
  "&:hover": {
    background: "#b4fffd"
  }
}));

const NavigationSteps = () => {
  return (
    <Container>
      <NavContainer>
        <NavItems>Step 1</NavItems>
        <NavItems>Step 2</NavItems>
        <NavItems>Step 3</NavItems>
        <NavItems>Step 4</NavItems>
      </NavContainer>
    </Container>
  );
};

export default NavigationSteps;
