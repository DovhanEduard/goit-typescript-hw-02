export type Image = {
  description: string;
  urls: {
    small: string;
    regular: string;
  };
};

export type ImageGalleryProps = {
  images: Image[] | null;
  onSmallImgClick: (value: Image) => void;
  onClick: () => void;
};