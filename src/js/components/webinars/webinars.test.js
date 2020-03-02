import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Webinars from "./webinars";

it(`Webinars correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Webinars
        cards={[{
          id: 1,
          title: `title`,
          description: `description`,
          imageSrc: `imageSrc`,
        }]}
        currentPage={1}
        onCardAddSubmit={jest.fn()}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
