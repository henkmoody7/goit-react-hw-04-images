import { ImageGallery } from './ImageGallery.styled';
import { GalleryItem } from 'ImageGalleryItem/ImageGalleryItem';
export const Gallery = ({ images }) => {
  return (
    <ImageGallery>
      {images.map(image => (
        <GalleryItem key={image.id} image={image} />
      ))}
    </ImageGallery>
  );
};
