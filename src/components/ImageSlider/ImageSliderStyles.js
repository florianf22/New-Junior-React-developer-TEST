import styled from 'styled-components';

export const SectionStyled = styled.section`
  border-bottom: 1px solid var(--color-border);

  svg:first-of-type,
  svg:last-child {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transform: scale(1.3);
    cursor: pointer;
    path {
      stroke: var(--color-text);
    }
  }

  svg:first-of-type {
    left: 0.3em;
  }

  svg:last-of-type {
    right: 0.3em;
  }
`;

export const ImgStyled = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* object-fit: ${(props) => (props.cover ? 'cover' : 'contain')}; */
  object-fit: contain;
  transform: ${(props) => `translateX(${props.position}00%)`};
  transition: transform 250ms ease-in-out;
`;
