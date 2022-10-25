import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWrap, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick);
  }
  onEscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { src, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.onBackdropClick}>
        <ModalWrap>
          <ModalImg src={src} alt={alt} style={{ maxWidth: 900 }} />
        </ModalWrap>
      </Overlay>,
      modalRoot
    );
  }
}
