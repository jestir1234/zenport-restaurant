import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { MEDIA_BREAKPOINTS, COLORS } from "../../constants";

const Container = styled("div")(props => ({
  display: "flex",
  justifyContent: "center",
  padding: "30px 5px 30px 5px"
}));

const NavContainer = styled("div")(props => ({
  display: "flex",
  justifyContent: "center"
}));

const NavItem = styled("div")(props => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  padding: "20px",
  margin: "0 10px 0 10px",
  border: `1px solid ${COLORS.darkAqua}`,
  borderRadius: "10%",
  [MEDIA_BREAKPOINTS.down("xs")]: {
    padding: "10px",
    margin: "0 5px 0 5px"
  },
  background: props.currentPage === props.step ? COLORS.darkAqua : COLORS.white,
  color: props.currentPage === props.step ? COLORS.white : COLORS.dark,
  fontWeight: props.currentPage === props.step ? "bold" : "300",
  boxShadow:
    props.currentPage === props.step
      ? "6px 10px 14px -4px rgba(0,0,0,0.75)"
      : "none"
}));

NavItem.propTypes = {
  currentPage: PropTypes.string
};

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

NavigationSteps.propTypes = {
  currentPage: PropTypes.string
};

export default NavigationSteps;
