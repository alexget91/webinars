import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Page from "./page";

it(`Page correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Page>
        <div>test</div>
      </Page>
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
