import axios from 'axios';

export const getImagesByValue = async (
  page: number,
  searchValue: string
): Promise<Response> => {
  const { data } = await axios.get<Response>(
    `https://api.unsplash.com/search/photos?client_id=OENp_TSYFm3eWIima9PMumghXbRwh14LV4MW7SQ5VnY&query=${searchValue}&page=${page}`
  );

  return data;
};
