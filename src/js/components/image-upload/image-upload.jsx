import React, {useEffect, useMemo, useState} from "react";
import {useDropzone} from "react-dropzone";
import PropTypes from "prop-types";

const ImageUpload = (props) => {
  const {onImageUpload, cssClass} = props;
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: `image/jpeg, image/png`,
    maxSize: 5000000,
    multiple: false,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      onImageUpload(acceptedFiles);
    },
  });

  const dragStateName = useMemo(() => isDragActive ? `active` : ``, [isDragActive]);

  const thumbs = files.map(file => (
    <div className="image-upload__thumb" key={file.name}>
      <img className="image-upload__image" src={file.preview} alt={file.name}/>
    </div>
  ));

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFiles = (evt) => {
    evt.preventDefault();
    setFiles([]);
    onImageUpload(null);
  };

  return (
    <section className={`image-upload ${cssClass} ${dragStateName}`}>
      <aside className="image-upload__preview-container">
        {thumbs}
        <button className="image-upload__clear" onClick={removeFiles} title="Clear"/>
      </aside>
      <div {...getRootProps({className: `image-upload__drop-zone`})}>
        <input {...getInputProps()}/>
        <div className="image-upload__text-container">
          <p className="image-upload__text">select an image file to upload or drag it here</p>
        </div>
      </div>
    </section>
  );
};

ImageUpload.propTypes = {
  onImageUpload: PropTypes.func,
  cssClass: PropTypes.string,
};

export default ImageUpload;
