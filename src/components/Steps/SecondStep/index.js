import React from "react";
import styled, { css } from "react-emotion";
import { DataContext } from "../../../context/DataProvider";
import Selector from "../Selector";

class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "step2"
    };
  }

  render() {
    return (
      <DataContext.Consumer>
        {context => {
          if (this.state.selectedRestaurant) {
            console.log(
              context.state.restaurants[this.state.selectedRestaurant.value][
                "menu"
              ]
            );
          }

          let stepOptions = context.state.stepOptions;
          let selectedType =
            context.state.stepOptions.step1.selectedMealType.value;

          let restaurants =
            context.state.mealTypes[selectedType]["restaurants"];

          return (
            <div>
              <Selector
                title={"Please Select a Restaurant"}
                handleChange={e =>
                  context.handleChange(e, "selectedRestaurant", this.state.step)
                }
                options={Object.keys(restaurants).map(name => {
                  return {
                    value: name,
                    label: name
                  };
                })}
                selectedValue={
                  stepOptions[this.state.step]["selectedRestaurant"]
                }
              />
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default SecondStep;
