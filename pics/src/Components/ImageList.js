import React from 'react';

const ImageList = (props) => {
  const images = props.images.map(({description, id, urls}) => {
    return <img alt={description} key={id} src={urls.thumb} />;
  });

  /*Re-factored from

  const images = props.images.map((image) => {
    return <img alt={image.description} key={image.id} src={image.urls.thumb} />;
  });


  */

  return <div> {images} </div>;
};

export default ImageList;