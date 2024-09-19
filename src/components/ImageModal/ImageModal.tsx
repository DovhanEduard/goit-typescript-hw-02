import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { Image } from '../ImageGallery/ImageGallery.types';



type Props = {
  image: Image;
  isOpen: boolean;
  closeModal: () => void;
  onAfterClose: () => void;
  
};

function ImageModal({ image, isOpen, closeModal, onAfterClose }: Props) {
  Modal.setAppElement('#modal');

  return (
    <Modal
      className={css.modal}
      overlayClassName={css.backdrop}
      isOpen={isOpen}
      onRequestClose={closeModal}
      onAfterClose={onAfterClose}
      shouldCloseOnOverlayClick={true}
    >
      <img
        className={css.modalImg}
        src={image.urls.regular}
        alt={image.description}
      />
    </Modal>
  );
}

export default ImageModal;
