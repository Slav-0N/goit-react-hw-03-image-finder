import React from 'react';
import { Li } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ pictureItem, toggleModal }) => {
  const { webformatURL, largeImageURL, tags } = pictureItem;
  return (
    <Li>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => toggleModal(largeImageURL)}
      />
    </Li>
  );
};
