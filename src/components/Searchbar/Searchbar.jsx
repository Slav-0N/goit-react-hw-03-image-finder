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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
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
