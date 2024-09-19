import { Image } from '../ImageGallery/ImageGallery.types';
import css from './ImageCard.module.css';

type Props = {
  image: Image;
  onSmallImgClick: (value: Image) => void;
  onClick: () => void;
};

function ImageCard({ image, onSmallImgClick, onClick }: Props) {
  const handleClick = (): void => {
    onSmallImgClick(image);
    onClick();
  };

  return (
    <div onClick={handleClick}>
      <img
        className={css.galleryImage}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
}

export default ImageCard;
