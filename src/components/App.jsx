import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'api';
import { Button } from './Button/Button';
import { PulseLoader } from 'react-spinners';
export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
  };
  async componentDidUpdate(_, prevState) {
    if (!this.state.isLoading) return;
    try {
      const images = await fetchImages({
        query: this.state.query,
        page: this.state.page,
      });
      if (
        prevState.query !== this.state.query ||
        prevState.page !== this.state.page
      ) {
        this.setState({
          images: [...this.state.images, ...images],
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({ error: 'Oops, something went wrong, try again' });
    }
  }

  onfindImages = query => {
    this.setState({ images: [], page: 1, query, isLoading: true });
  };

  onSearchBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <Searchbar onSubmit={this.onfindImages} />
        <Gallery images={images} />
        <PulseLoader loading={isLoading} color="#3f51b5" />
        {images.length > 0 && !isLoading && (
          <Button onClick={this.onSearchBtnClick} />
        )}
      </div>
    );
  }
}
