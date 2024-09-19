import axios from 'axios';
import { Image } from '../ImageGallery/ImageGallery.types';

type ResponseData = {
  results: Image[];
  total_pages: number;
};

export const getImagesByValue = async (
  page: number,
  searchValue: string
): Promise<ResponseData> => {
  const { data } = await axios.get<ResponseData>(
    `https://api.unsplash.com/search/photos?client_id=OENp_TSYFm3eWIima9PMumghXbRwh14LV4MW7SQ5VnY&query=${searchValue}&page=${page}`
  );

  return data;
};
