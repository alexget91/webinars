import React from "react";
import PropTypes from "prop-types";

const Page = (props) => {
  const {children} = props;

  return <>
    <header className="page-header">
      <a href="#" className="logo">
        <img src="pictures/logo.png"
          srcSet="pictures/logo@2x.png 2x, pictures/logo@3x.png 3x"
          className="logo__image" alt="SEMrush"/>
      </a>
    </header>
    <main className="page-main">
      {children}
    </main>
  </>;
};

Page.propTypes = {
  children: PropTypes.element,
};

export default Page;
