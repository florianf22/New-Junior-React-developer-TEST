import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  .dropdown-list {
    list-style: none;
    position: absolute;
    top: 100%;
    margin-top: 0.5em;
    width: 135%;
    padding: 0.5em 1em;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: opacity 100ms ease-in;
    opacity: ${props => (props.open ? '1' : '0')};
    visibility: ${props => (props.open ? 'visible' : 'hidden')};

    .dropdown-item {
      transition: opacity 100ms ease-in;
      &:not(:first-of-type) {
        margin-top: 0.7em;
      }
    }
  }

  .dropdown-img {
    transform: ${props =>
      props.open ? 'rotate(0) scale(1.5)' : 'rotate(-180deg) scale(1.5)'};
    margin-left: 0.5em;
    cursor: pointer;
    transition: transform 150ms ease-in;
  }
`;
