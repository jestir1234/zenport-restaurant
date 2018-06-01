import React from "react";
import styled, { css } from "react-emotion";
import { DataContext } from "../../../context/DataProvider";
import Selector from "../Selector";

class FourthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "step4"
    };
  }

  render() {
    return (
      <DataContext.Consumer>
        {context => {
          return <div>REVIEW</div>;
        }}
      </DataContext.Consumer>
    );
  }
}

export default FourthStep;
