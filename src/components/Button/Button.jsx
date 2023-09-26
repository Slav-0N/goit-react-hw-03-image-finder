import React, { Component } from 'react';
import { Btn } from './Button.styled';
export class Button extends Component {
  render() {
    return (
      <Btn onClick={this.props.createLoadMore} type="button">
        <span>Load more</span>
      </Btn>
    );
  }
}
