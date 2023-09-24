import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getAllPitures } from './api/api';
import { ImageGallary } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Section } from './App.styled';
import Modal from './Modal/Modal';
import { Spinner } from './Loader/Loader';
// import { Vortex } from 'react-loader-spinner';

class App extends Component {
  state = {
    pictures: null,
    searchText: '',
    page: 1,
    loadMore: null,
    showModal: false,
    modalPicture: '',
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (this.state.page > 1) {
      if (this.state.page !== prevState.page) {
        this.setState({
          isLoading: true,
        });
      }
      const { searchText, page } = this.state;
      getAllPitures(searchText, page).then(data => {
        console.log(searchText, page);
        console.log(data);

        if (prevState.page !== this.state.page) {
          console.log(prevState.pictures, data.hits);
          const newArr = [...prevState.pictures, ...data.hits];

          this.setState({
            pictures: newArr,
            isLoading: false,
          });
        }
      });
    } else {
      // if (prevState.pictures === ) {
      //   this.setState({
      //     isLoading: true,
      //   });
      // }

      // console.log(this.state.pictures);
      // console.log(prevState.pictures);
      // console.log(this.state.page);
      getAllPitures(this.state.searchText, this.state.page).then(data => {
        if (prevState.searchText !== this.state.searchText) {
          this.setState({
            pictures: data.hits,
            isLoading: false,
          });
        }
      });

      console.log(this.state.page);
    }
  }

  toggleModal = (img, e) => {
    // e.preventDefault();
    this.setState(state => ({
      showModal: !state.showModal,
      modalPicture: img,
    }));
    console.log(e);
    console.log(img);
  };

  createSearchRequire = searchTextInput => {
    this.setState({
      searchText: searchTextInput.inputValue,
      loadMore: searchTextInput.inputValue,
    });
  };

  createLoadMore = () => {
    const plusPage = this.state.page + 1;

    this.setState({
      page: plusPage,
    });
  };

  render() {
    const { pictures, showModal, modalPicture, isLoading } = this.state;
    return (
      <Section>
        {showModal && (
          <Modal imgAddr={modalPicture} onClose={this.toggleModal} />
        )}
        <Searchbar createSearchRequire={this.createSearchRequire} />
        {isLoading ? <p>Loading .......</p> : ''}
        <ImageGallary>
          {/* {isLoading ? <p>Loading .......</p> : ''} */}

          <ImageGalleryItem
            pictures={pictures}
            toggleModal={this.toggleModal}
          />
        </ImageGallary>
        {isLoading ? <Spinner /> : ''}
        {pictures && <Button createLoadMore={this.createLoadMore} />}
      </Section>
    );
  }
}
export default App;
