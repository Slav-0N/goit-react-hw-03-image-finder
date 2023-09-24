import React from 'react';
import { Li } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  pictures,
  toggleModal,
  onClickModalPictureAddress,
}) => {
  if (pictures) {
    return (
      pictures.length &&
      pictures.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <Li key={id}>
            <img
              src={webformatURL}
              alt=""
              onClick={e => {
                toggleModal(largeImageURL, e);
              }}
            />
          </Li>
        );
      })
    );
  }
};
