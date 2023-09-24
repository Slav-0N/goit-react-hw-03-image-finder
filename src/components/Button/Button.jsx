import React, { Component } from 'react';
import { Btn } from './Button.styled';
export class Button extends Component {
  state = {
    page: 1,
  };

  render() {
    return (
      <Btn onClick={this.props.createLoadMore} type="button">
        <span className="button-label">Load more</span>
      </Btn>
    );
  }
}
