import styled from 'styled-components';

export default styled.button`
  border: none;
  padding: 1em 2em;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.9rem')};
  font-family: inherit;
  background-color: ${(props) =>
    props.ghost ? 'transparent' : 'var(--color-primary)'};
  color: ${(props) =>
    props.ghost ? 'var(--color-text)' : 'var(--color-white)'};
  outline: ${(props) => (props.ghost ? '1px solid var(--color-text)' : 'none')};
  outline-offset: -1px;
  text-transform: uppercase;
  font-family: inherit;
  margin: 1.5em 0;
  width: ${(props) => props.width};
  cursor: pointer;
  transition: opacity linear 150ms;

  &:disabled {
    border: 2px solid var(--color-border);
    background-color: transparent;
    color: var(--color-text);
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;
