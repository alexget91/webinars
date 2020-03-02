import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Banner from "./banner";

it(`Banner correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Banner
        title={`title`}
        srcBig={`srcBig`}
        srcSmall={`srcSmall`}
        url={`url`}
        cssClass={`cssClass`}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
