const getBase64 = (file, onLoad) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    onLoad(reader.result);
  };
  reader.onerror = (error) => {
    console.error('Error: ', error);
  };
};

export {getBase64};
