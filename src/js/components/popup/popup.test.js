import React from "react";
import renderer from "react-test-renderer";
import Popup from "./popup";

it(`Popup correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Popup title={`title`} onCloseClick={jest.fn()}>
      <div>test</div>
    </Popup>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
