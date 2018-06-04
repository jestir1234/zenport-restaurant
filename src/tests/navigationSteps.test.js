import React from "react";
import NavigationSteps from "../components/NavigationSteps";
import renderer from "react-test-renderer";
import DataProvider from "../context/DataProvider";

const currentPage = {
  next: "step2",
  page: "step1",
  prev: "step1"
};

test("Renders the <NavigationSteps /> component", () => {
  const component = renderer.create(
    <DataProvider>
      <NavigationSteps currentPage={currentPage.page} />
    </DataProvider>
  );
  let tree = component.toJSON();
  expect(tree);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
