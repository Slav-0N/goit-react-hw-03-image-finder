import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getAllPitures } from './api/api';
import { ImageGallry } from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    pictures: null,
    searchText: '',
  };

  createSearchRequire = bola => {
    console.log(bola.inputValue);

    this.setState({ searchText: bola.inputValue });
    console.log(this.state);
  };

  componentDidUpdate(_, prevState) {
    getAllPitures(this.state.searchText).then(data => {
      console.log(data);
      if (prevState.searchText !== this.state.searchText) {
        this.setState({ pictures: data.hits });
        console.log(this.state);
      }
    });
  }

  render() {
    const { pictures } = this.state;
    return (
      <>
        <Searchbar createSearchRequire={this.createSearchRequire} />
        <ImageGallry>
          {pictures &&
            pictures.map(({ id, webformatURL }) => {
              return (
                <li key={id}>
                  <img src={webformatURL} alt="" />
                </li>
              );
            })}
        </ImageGallry>
      </>
    );
  }
}
export default App;
