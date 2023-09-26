import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';

export const ImageGallary = ({ pictures, toggleModal }) => {
  return (
    <Ul>
      {pictures.map(pictureItem => (
        <ImageGalleryItem
          key={pictureItem.id}
          pictureItem={pictureItem}
          toggleModal={toggleModal}
        />
      ))}
    </Ul>
  );
};
