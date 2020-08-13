import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard'

const ImageList = (props) => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

/*Re-factored from

const ImageList = (props) => {
  const images = props.images.map(({description, id, urls}) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });

  /*Re-factored from

  const images = props.images.map((image) => {
    return <img alt={image.description} key={image.id} src={image.urls.thumb} />;
  });


  */

  return <div className="image-List"> {images} </div>;
};

export default ImageList;