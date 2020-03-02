import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Catalog from "./catalog";

describe(`Catalog correctly renders after relaunch`, () => {
  it(`Without page parameter`, () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Catalog
          cards={[
            {
              id: 1,
              title: `title1`,
              description: `description1`,
              imageSrc: `imageSrc1`,
            },
            {
              id: 2,
              title: `title2`,
              description: `description2`,
              imageSrc: `imageSrc2`,
            }
          ]}
        />
      </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With page parameter`, () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Catalog
          cards={[
            {
              id: 1,
              title: ``,
              description: ``,
              imageSrc: ``,
            },
            {
              id: 2,
              title: ``,
              description: ``,
              imageSrc: ``,
            },
            {
              id: 3,
              title: ``,
              description: ``,
              imageSrc: ``,
            },
            {
              id: 4,
              title: ``,
              description: ``,
              imageSrc: ``,
            },
            {
              id: 5,
              title: ``,
              description: ``,
              imageSrc: ``,
            },
            {
              id: 6,
              title: ``,
              description: ``,
              imageSrc: ``,
            },
            {
              id: 7,
              title: ``,
              description: ``,
              imageSrc: ``,
            },
            {
              id: 8,
              title: ``,
              description: ``,
              imageSrc: ``,
            },
            {
              id: 9,
              title: ``,
              description: ``,
              imageSrc: ``,
            },
          ]}
          currentPage={2}
        />
      </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With banner only`, () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Catalog
          cards={[
            {
              title: `banner`,
              srcBig: `srcBig`,
              srcSmall: `srcSmall`,
            },
          ]}
        />
      </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
