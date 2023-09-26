import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getAllPitures } from './api/api';
import { ImageGallary } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Section } from './App.styled';
import Modal from './Modal/Modal';
import { Spinner } from './Loader/Loader';

class App extends Component {
  state = {
    pictures: [],
    searchText: '',
    page: 1,
    modalPicture: null,
    isLoading: false,
    totalImages: 0,
  };

  componentDidUpdate(_, prevState) {
    const { page, searchText } = this.state;

    if (prevState.page !== page || prevState.searchText !== searchText) {
      this.setState({
        isLoading: true,
      });

      getAllPitures(searchText, page)
        .then(data => {
          if (!data.hits.length) {
            alert('no pictures');
            return;
          }

          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...data.hits],
            totalImages: data.totalHits,
          }));
        })
        .catch(error => {
          console.log(error.message);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  toggleModal = (img = null) => {
    this.setState({
      modalPicture: img,
    });
  };

  createSearchRequire = searchTextInput => {
    this.setState({
      searchText: searchTextInput.inputValue,
      page: 1,
      pictures: [],
      totalImages: 0,
    });
  };

  createLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { pictures, modalPicture, isLoading, totalImages } = this.state;
    return (
      <Section>
        {modalPicture && (
          <Modal imgAddr={modalPicture} onClose={this.toggleModal} />
        )}
        <Searchbar createSearchRequire={this.createSearchRequire} />

        {pictures.length > 0 && (
          <ImageGallary pictures={pictures} toggleModal={this.toggleModal} />
        )}
        {isLoading ? <Spinner /> : ''}
        {pictures.length !== totalImages && !isLoading && (
          <Button createLoadMore={this.createLoadMore} />
        )}
      </Section>
    );
  }
}
export default App;
