import styled from 'styled-components';

export default styled.div`
  .productCard-item {
    padding: 1em;
    text-align: center;
    transition: linear 150ms box-shadow;
    cursor: pointer;
    position: relative;

    h2,
    p {
      text-align: left;
      font-size: 1.125rem;
    }

    h2 {
      font-weight: 300;
      margin-top: 0.5em;
    }

    p {
      font-weight: 500;
      margin-top: 0.3em;
    }

    button {
      background-color: var(--color-primary);
      padding: 0.7em;
      border-radius: 50%;
      z-index: 1;
      position: absolute;
      height: 40px;
      width: 40px;
      top: 250px;
      right: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 150ms linear, transform 150ms ease-in-out;
      opacity: 0;
      visibility: hidden;
      display: inline-block;
      border: 0;

      &:focus {
        outline: none;
      }
      &:disabled {
        cursor: not-allowed;
      }
      &:hover {
        transform: translateY(-3px);
      }
      &:hover + .stock {
        opacity: 1;
        visibility: visible;
      }

      svg {
        transform: scale(1.1);
      }

      path {
        fill: var(--color-white);
      }
    }

    .productCard-bg {
      height: 250px;
      width: 100%;
      display: block;
      background-image: ${props => `url(${props.img})`};
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    .stock {
      visibility: hidden;
      opacity: 0;
      transition: opacity 150ms linear;
      position: absolute;
      top: 300px;
      right: 2em;
    }

    .out-of-stock {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      color: var(--color-text-light);
      font-weight: 400;
      transition: opacity 150ms linear, transform 150ms ease-in-out;
    }

    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      button {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;
