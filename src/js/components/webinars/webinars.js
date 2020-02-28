import React from "react";
import Catalog from "../catalog/catalog";
import Popup from "../popup/popup";
import CardAdd from "../card-add/card-add";

const Webinars = () => <>
  <section className="main-header">
    <h1 className="main-header__title">Webinars</h1>
    <p className="main-header__text">Here you can register and take part in educational webinars conducted by the best digital marketing experts.</p>
    <button className="btn">Add new</button>
  </section>
  <Catalog/>
  <Popup title="Add new">
    <CardAdd/>
  </Popup>
</>;

export default Webinars;
