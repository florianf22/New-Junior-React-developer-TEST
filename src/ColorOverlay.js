import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DivStyled from './styles/ColorOverlayStyles';

class ColorOverlay extends Component {
  render() {
    return ReactDOM.createPortal(
      <DivStyled
        onClick={this.props.onClick}
        color={this.props.color}
        marginTop={this.props?.marginTop}
      ></DivStyled>,
      document.querySelector('#overlay')
    );
  }
}

export default ColorOverlay;
