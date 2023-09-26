import React, { Component } from 'react';
import { Header } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    const { value } = event.target;

    this.setState({ inputValue: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.createSearchRequire(this.state);
    // this.setState({
    //   inputValue: '',
    // });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="button" />

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </form>
      </Header>
    );
  }
}

export default Searchbar;
