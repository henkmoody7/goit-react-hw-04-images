import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItem, Image } from './ImageGalleryItem.styled';
export const GalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const togleModal = () => {
    setShowModal(!showModal);
  };

  const { webformatURL, tags, largeImageURL } = image;
  return (
    <>
      <ImageGalleryItem>
        <Image src={webformatURL} alt={tags} onClick={togleModal} />
      </ImageGalleryItem>
      {showModal && (
        <Modal onClose={togleModal} src={largeImageURL} alt={tags} />
      )}
    </>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
