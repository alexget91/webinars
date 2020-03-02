import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import LogoImg from "../../../img/logo.png";
import LogoImg2x from "../../../img/logo@2x.png";
import LogoImg3x from "../../../img/logo@3x.png";

const Page = (props) => {
  const {children} = props;

  return <>
    <header className="page-header">
      <Link to="/" className="logo">
        <img src={LogoImg}
          srcSet={`${LogoImg2x} 2x, ${LogoImg3x} 3x`}
          className="logo__image" alt="SEMrush"/>
      </Link>
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
