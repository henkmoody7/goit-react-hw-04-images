import { ImageGallery, ImageGalleryItem, Image } from './ImageGallery.styled';

export const Gallery = ({ images }) => {
  return (
    <ImageGallery>
      {images.map(({ webformatURL, tags, id }) => (
        <ImageGalleryItem key={id}>
          <Image src={webformatURL} alt={tags} />
        </ImageGalleryItem>
      ))}
    </ImageGallery>
  );
};
