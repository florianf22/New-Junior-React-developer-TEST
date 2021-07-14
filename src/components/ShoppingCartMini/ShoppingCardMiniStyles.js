import styled from 'styled-components';

export default styled.div`
  margin-left: 1em;
  position: relative;

  & img {
    transform: scale(1.05);
    cursor: pointer;
  }

  &::after {
    content: '${(props) => props.itemsQuantity}';
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: var(--color-text);
    color: var(--color-white);
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    position: absolute;
    top: -30%;
    right: -75%;
    display: grid;
    place-items: center;
  }

  ul {
    max-width: 300px;
    list-style: none;
    position: absolute;
    top: calc(100% + 2em);
    padding: 0.7em;
    right: -1em;
    z-index: 1;
    visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.open ? '1' : '0')};
    background-color: var(--color-white);

    h6 {
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: capitalize;
    }

    span {
      font-weight: 400;
      font-size: 0.8rem;
    }

    aside {
      width: 100%;
      display: inline-flex;

      a:first-of-type {
        margin-right: 1em;
      }
    }
  }
`;
