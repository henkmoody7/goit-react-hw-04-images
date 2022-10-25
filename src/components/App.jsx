import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Gallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'api';
import { Button } from './Button/Button';
export class App extends Component {
  state = {
    showModal: false,
    images: [],
    query: '',
    page: 1,
  };
  async componentDidUpdate(_, prevState) {
    try {
      const images = await fetchImages({
        query: this.state.query,
        page: this.state.page,
      });
      if (
        prevState.query !== this.state.query ||
        prevState.page !== this.state.page
      ) {
        this.setState({ images: [...this.state.images, ...images] });
      }
    } catch (error) {}
  }

  findImages = query => {
    this.setState({ page: 1, query });
  };

  onSearchBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { showModal, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.findImages} />
        <Gallery images={images} />
        {images.length > 0 && <Button onClick={this.onSearchBtnClick} />}
        {showModal && <Modal />}
      </>
    );
  }
}
