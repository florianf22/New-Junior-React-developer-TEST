import styled from 'styled-components';

export default styled.div`
  li {
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

    div {
      background-color: var(--color-primary);
      padding: 0.7em;
      border-radius: 50%;
      z-index: 1;
      position: absolute;
      height: 40px;
      width: 40px;
      top: calc(250px);
      right: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 150ms linear, transform 150ms ease-in-out;
      opacity: 0;
      visibility: hidden;

      svg {
        transform: scale(1.1);
      }

      path {
        fill: var(--color-white);
      }

      &:hover {
        transform: translateY(-3px);
      }
    }

    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      div {
        opacity: 1;
        visibility: visible;
      }
    }

    span {
      height: 250px;
      width: 100%;
      display: block;
      background-image: ${(props) => `url(${props.img})`};
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
`;
