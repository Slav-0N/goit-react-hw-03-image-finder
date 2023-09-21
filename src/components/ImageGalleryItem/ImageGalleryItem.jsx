import React from 'react';
import { Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ pictures }) => {
  // console.log(pictures.length);
  if (pictures) {
    return (
      pictures.length &&
      pictures.map(({ id, webformatURL }) => {
        return (
          <a key={id} href={webformatURL}>
            <Img src={webformatURL} alt="" />
          </a>
        );
      })
    );
  }
};
