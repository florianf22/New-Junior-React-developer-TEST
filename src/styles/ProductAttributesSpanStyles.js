import styled from 'styled-components';

export default styled.span`
  width: 65px;
  height: 45px;
  /* border: 1px solid red; */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.color || (props.isSelected ? 'var(--color-text)' : '')};
  color: ${(props) => (props.isSelected ? 'var(--color-white)' : '')};
  outline: ${(props) =>
    props.color && props.isSelected ? '2px solid var(--color-text)' : ''};
  outline-offset: 1px;

  &:not(:last-of-type) {
    margin-right: 0.5em;
  }
`;
