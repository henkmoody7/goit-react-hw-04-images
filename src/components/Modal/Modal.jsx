import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWrap, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, src, alt }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscClick);
    return window.removeEventListener('keydown', onEscClick);
  });

  const onEscClick = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalWrap>
        <ModalImg src={src} alt={alt} style={{ maxWidth: 900 }} />
      </ModalWrap>
    </Overlay>,
    modalRoot
  );
};
