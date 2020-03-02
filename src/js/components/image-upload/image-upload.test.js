import React from "react";
import renderer from "react-test-renderer";
import ImageUpload from "./image-upload";

it(`Image upload correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ImageUpload
      onImageUpload={jest.fn()}
      cssClass={`cssClass`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
