import React, { Component } from 'react';
import { Div } from './Modal.styled';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlekeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlekeyDown);
  }

  handlekeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Div>
        <div onClick={this.handleBackdropClick}>
          <img src={this.props.imgAddr} alt="" target="_self" />
        </div>
      </Div>
    );
  }
}
