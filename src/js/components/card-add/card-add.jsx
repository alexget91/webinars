import React from "react";
import PropTypes from "prop-types";
import ImageUpload from "../image-upload/image-upload";
import {getBase64} from "../../common/utils";

class CardAdd extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      title: ``,
      description: ``,
      isSubmitEnabled: false,
    };

    this._checkSubmitPossibility = this._checkSubmitPossibility.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleFormChange = this._handleFormChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return <div className="card-add">
      <form className="form" onSubmit={this._handleSubmit}>
        <ImageUpload
          onImageUpload={this._handleImageChange}
          cssClass="card-add__image-upload"
        />
        <div className="form__field">
          <label htmlFor="card-add-title" className="form__label">Title</label>
          <input type="text" id="card-add-title" className="form__text-input" name="title"
            placeholder="Enter title" onChange={this._handleFormChange}/>
        </div>
        <div className="form__field">
          <label htmlFor="card-add-description" className="form__label">Description</label>
          <textarea id="card-add-description" className="form__text-input card-add__description" name="description"
            placeholder="Enter description" onChange={this._handleFormChange}/>
        </div>
        <div className="card-add__buttons">
          <input type="submit" className="btn btn--green card-add__submit" value="Save" disabled={!this.state.isSubmitEnabled}/>
        </div>
      </form>
    </div>;
  }

  _handleImageChange(images) {
    if (images && images.length) {
      getBase64(images[0], (base64) => {
        this.setState({image: base64}, this._checkSubmitPossibility);
      });

    } else {
      this.setState({image: null}, this._checkSubmitPossibility);
    }
  }

  _handleFormChange(evt) {
    this.setState(Object.assign({}, this.state, {
      [evt.target.name]: evt.target.value
    }), this._checkSubmitPossibility);
  }

  _checkSubmitPossibility() {
    const {title, description, image} = this.state;

    this.setState({
      isSubmitEnabled: Boolean(title.length && description.length && image)
    });
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmit} = this.props;
    const {title, description, image} = this.state;

    onSubmit({title, description, image});
  }
}

CardAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CardAdd;
