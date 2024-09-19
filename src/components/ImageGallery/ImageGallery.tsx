import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image, ImageGalleryProps } from './ImageGallery.types';

const ImageGallery = ({
  images,
  onSmallImgClick,
  onClick,
}: ImageGalleryProps) => {
  return (
    <ul className={css.galleryList}>
      {images?.map((image, index) => {
        return (
          <li className={css.galleryItem} key={index}>
            <ImageCard
              onSmallImgClick={onSmallImgClick}
              image={image}
              onClick={onClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
