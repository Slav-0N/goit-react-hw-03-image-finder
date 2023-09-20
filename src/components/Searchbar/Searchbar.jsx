import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    const { value } = event.target;
    console.log(value);
    this.setState({ inputValue: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.createSearchRequire(this.state);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
