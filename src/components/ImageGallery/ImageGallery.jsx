import PropTypes from 'prop-types';
import { ImageGallery } from './ImageGallery.styled';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const Gallery = ({ images }) => {
  return (
    <ImageGallery>
      {images.map(image => (
        <GalleryItem key={image.id} image={image} />
      ))}
    </ImageGallery>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
