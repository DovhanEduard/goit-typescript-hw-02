import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import { getImagesByValue } from './services/api';
import { string } from 'prop-types';
import { Image } from './ImageGallery/ImageGallery.types';


function App() {
  const [images, setImages] = useState<Image[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const fetchImages = (page: number, searchValue: string) => {
    const fetchPhotos = async () => {
      try {
        setCurrentPage(page);
        setIsLoading(true);
        setError(null);

        const data = await getImagesByValue(page, searchValue);
        const isFirstPage = page === 1;

        if (isFirstPage) {
          setImages(data.results);
        } else {
          if (images === null) return;
          setImages([...images, ...data.results]);
        }

        setTotalPages(data.total_pages);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  };

  const onSearch =( searchValue: string) => {
    setSearchedValue(searchValue);

    fetchImages(1, searchValue);
  };

  const onPageChange = () => {
    const nextPage = currentPage + 1;

    setCurrentPage(nextPage);
    fetchImages(nextPage, searchedValue);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onAfterClose = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  const isImages = Boolean(images?.length);
  const isPagesToLoad = currentPage !== totalPages;

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {isImages && (
        <>
          <ImageGallery
            onSmallImgClick={setSelectedImage}
            onClick={openModal}
            images={images}
          />
          {isPagesToLoad && <LoadMoreBtn onLoadMore={onPageChange} />}
        </>
      )}

      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          onAfterClose={onAfterClose}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;
