import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getAllPitures } from './api/api';
import { ImageGallary } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

class App extends Component {
  state = {
    pictures: null,
    searchText: '',
  };

  createSearchRequire = searchTextInput => {
    console.log(searchTextInput.inputValue);

    this.setState({ searchText: searchTextInput.inputValue });
    console.log(this.state);
  };

  componentDidUpdate(_, prevState) {
    getAllPitures(this.state.searchText).then(data => {
      console.log(data);
      if (prevState.searchText !== this.state.searchText) {
        this.setState({ pictures: data.hits });
        console.log(this.state);
      }
      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    });
  }

  render() {
    const { pictures } = this.state;
    return (
      <>
        <Searchbar createSearchRequire={this.createSearchRequire} />
        <ImageGallary>
          <ImageGalleryItem pictures={pictures} />
        </ImageGallary>
        {pictures && <Button />}
      </>
    );
  }
}
export default App;
