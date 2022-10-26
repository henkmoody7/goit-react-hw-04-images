import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItem, Image } from './ImageGalleryItem.styled';
export class GalleryItem extends Component {
  state = { showModal: false };
  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    return (
      <>
        <ImageGalleryItem>
          <Image src={webformatURL} alt={tags} onClick={this.togleModal} />
        </ImageGalleryItem>
        {this.state.showModal && (
          <Modal onClose={this.togleModal} src={largeImageURL} alt={tags} />
        )}
      </>
    );
  }
}

GalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
