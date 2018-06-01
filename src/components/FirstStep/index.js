import React from "react";
import styled, { css } from "react-emotion";
import MealTypeSelector from "./MealTypeSelector";
import PartySelector from "./PartySelector";
import { DataContext } from "../../context/DataProvider";

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
              <MealTypeSelector
                mealTypes={Object.keys(context.state.mealTypes)}
                handleChange={e =>
                  context.handleChange(e, "selectedMealType", "step1")
                }
                selectedMealType={
                  context.state.stepOptions[this.state.step]["selectedMealType"]
                }
              />
              <PartySelector
                handleChange={e =>
                  context.handleChange(e, "selectedPartyCount", "step1")
                }
                selectedPartyCount={
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
