import React from "react";
import Selector from "../components/Steps/Selector";
import renderer from "react-test-renderer";
import DataProvider from "../context/DataProvider";
const PARTY_MAX = 10;

const context = {
  handleChange: (e, selectedPartyCount, step) =>
    console.log("handleChangeFunction"),
  state: {
    stepOptions: {
      step1: {
        selectedPartyCount: 4
      }
    }
  }
};

test("Renders the <Selector /> component", () => {
  const component = renderer.create(
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
      selectedValue={context.state.stepOptions["step1"]["selectedPartyCount"]}
    />
  );
  let tree = component.toJSON();
  expect(tree);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
