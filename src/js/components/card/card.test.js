import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Card from "./card";
import {CardLabel} from "../../common/constants";

it(`Card correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <Card
        id={0}
        title={`Title`}
        description={`description`}
        imageSrc={`imageSrc`}
        label={CardLabel.ADVANCED}
        url={`url`}
        cssClass={`cssClass`}
      />
    </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
