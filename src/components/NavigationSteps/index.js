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

const NavItem = styled("div")(props => ({
  padding: "20px",
  margin: "0 10px 0 10px",
  border: "1px solid #00b6b2",
  borderRadius: "10%",
  background: props.currentPage === props.step ? "#00b6b2" : "white"
}));

const STEPS = 4;

const NavigationSteps = props => {
  return (
    <Container>
      <NavContainer>
        {[...Array(STEPS)].map((step, idx) => (
          <NavItem
            currentPage={props.currentPage}
            key={idx}
            step={`step${idx + 1}`}
          >
            Step {idx + 1}
          </NavItem>
        ))}
      </NavContainer>
    </Container>
  );
};

export default NavigationSteps;
