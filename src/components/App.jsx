import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'api';
import { Button } from './Button/Button';
import { PulseLoader } from 'react-spinners';
export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        const images = await fetchImages({
          query: query,
          page: page,
        });
        setImages(prevState => [...prevState, ...images]);
        setIsLoading(false);
      } catch (error) {
        alert('Oops, something went wrong, try again');
      }
    };
    getImages();
  }, [query, page]);

  const onfindImages = query => {
    setImages([]);
    setPage(1);
    setQuery(query);
    setIsLoading(true);
  };

  const onSearchBtnClick = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Searchbar onSubmit={onfindImages} />
      <Gallery images={images} />
      <PulseLoader loading={isLoading} color="#3f51b5" />
      {images.length > 0 && !isLoading && <Button onClick={onSearchBtnClick} />}
    </div>
  );
};
