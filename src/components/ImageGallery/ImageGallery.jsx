import { Div } from './ImageGallery.styled';

export const ImageGallary = ({ children }) => {
  return (
    <Div>
      <div className="gallery">{children}</div>
    </Div>
  );
};
