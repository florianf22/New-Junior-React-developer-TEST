import React, { PureComponent } from 'react';

import { ImgStyled, SectionStyled } from './ImageSliderStyles';

class ImageSlider extends PureComponent {
  state = { position: 0 };

  renderGallery = () => {
    return this.props.gallery.map((picture, idx) => {
      return (
        <ImgStyled
          key={idx}
          src={picture}
          position={idx - this.state.position}
        />
      );
    });
  };

  onrRightArrowClick = () => {
    const galleryLength = this.props.gallery.length;

    if (this.state.position < galleryLength - 1) {
      let pos = this.state.position;
      this.setState({ position: ++pos });
    } else {
      this.setState({ position: 0 });
    }
  };

  onLeftArrowClick = () => {
    const galleryLength = this.props.gallery.length;

    if (this.state.position > 0) {
      let pos = this.state.position;
      this.setState({ position: --pos });
    } else {
      this.setState({ position: galleryLength - 1 });
    }
  };

  render() {
    const { gallery } = this.props;

    if (gallery.length === 1 || this.props.firstPicOnly) {
      return (
        <SectionStyled>
          <ImgStyled src={gallery[0]} />
        </SectionStyled>
      );
    }

    return (
      <SectionStyled>
        {this.renderGallery()}

        <svg
          onClick={this.onLeftArrowClick}
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 7L7 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          onClick={this.onrRightArrowClick}
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SectionStyled>
    );
  }
}

export default ImageSlider;
