import React from "react";
import renderer from "react-test-renderer";
import CardAdd from "./card-add";

it(`Card add correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<CardAdd onSubmit={jest.fn}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
