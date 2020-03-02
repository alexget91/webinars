import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Pagination from "./pagination";

it(`Pagination correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Pagination
        elementsCount={2}
        elementsPerPage={1}
        currentPage={1}
        cssClass={`cssClass`}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
