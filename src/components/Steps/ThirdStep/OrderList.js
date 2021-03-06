import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const ListContainer = styled("div")(props => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start"
}));

const ListItem = styled("div")(props => ({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "5px"
}));

const OrderList = props => {
  return (
    <div>
      <h3>{Object.keys(props.currentOrder).length > 0 && "Orders"}</h3>
      <ListContainer>
        {Object.keys(props.currentOrder).map((dish, idx) => {
          return (
            <ListItem key={idx}>
              {dish} &mdash; {props.currentOrder[dish]}
            </ListItem>
          );
        })}
      </ListContainer>
    </div>
  );
};

OrderList.propTypes = {
  currentOrder: PropTypes.object
};

export default OrderList;
