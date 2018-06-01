import React from "react";
import styled, { css } from "react-emotion";
import Selector from "../Selector";
import { DataContext } from "../../../context/DataProvider";

const PARTY_MAX = 10;

class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "step1"
    };
  }

  render() {
    return (
      <DataContext.Consumer>
        {context => {
          return (
            <div>
              <Selector
                title={"Please Select a Meal Type"}
                options={Object.keys(context.state.mealTypes).map(name => {
                  return {
                    value: name,
                    label: name
                  };
                })}
                handleChange={e =>
                  context.handleChange(e, "selectedMealType", this.state.step)
                }
                selectedValue={
                  context.state.stepOptions[this.state.step]["selectedMealType"]
                }
              />
              <Selector
                title={"Enter the number of people in your party"}
                options={[...Array(PARTY_MAX)].map((count, idx) => {
                  return {
                    value: idx + 1,
                    label: idx + 1
                  };
                })}
                handleChange={e =>
                  context.handleChange(e, "selectedPartyCount", this.state.step)
                }
                selectedValue={
                  context.state.stepOptions[this.state.step][
                    "selectedPartyCount"
                  ]
                }
              />
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default FirstStep;
