import React from "react";
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
          let stepOptions = context.state.stepOptions;
          let selectedOption = context.state.stepOptions.step1.selectedMealType;
          let selectedType;
          let restaurants = {};
          if (selectedOption) {
            selectedType =
              context.state.stepOptions.step1.selectedMealType.value;
            restaurants = context.state.mealTypes[selectedType]["restaurants"];
          }

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
