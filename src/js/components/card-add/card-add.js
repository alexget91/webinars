import React from "react";

const CardAdd = () => <div className="card-add">
  <form className="form">
    <div className="card-add__file-upload">
      <input type="file"/>
    </div>
    <div className="form__field">
      <label htmlFor="card-add-title" className="form__label">Title</label>
      <input type="text" id="card-add-title" className="form__text-input" placeholder="Enter title"/>
    </div>
    <div className="form__field">
      <label htmlFor="card-add-description" className="form__label">Description</label>
      <textarea id="card-add-description" className="form__text-input card-add__description" placeholder="Enter description"/>
    </div>
    <div className="card-add__buttons">
      <input type="submit" className="btn btn--green card-add__submit" value="Save"/>
    </div>
  </form>
</div>;

export default CardAdd;
