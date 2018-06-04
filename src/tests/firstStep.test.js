import React from "react";
import FirstStep from "../components/Steps/FirstStep";
import renderer from "react-test-renderer";
import DataProvider from "../context/DataProvider";

test("Renders the <FirstStep /> component", () => {
  const component = renderer.create(
    <DataProvider>
      <FirstStep />
    </DataProvider>
  );
  let tree = component.toJSON();
  expect(tree);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
