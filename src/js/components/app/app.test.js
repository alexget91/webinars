import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {App} from "./app";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <App
        cards={[{
          id: 1,
          title: `title`,
          description: `description`,
          imageSrc: `imageSrc`,
        }]}
        onCardAddSubmit={jest.fn()}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
