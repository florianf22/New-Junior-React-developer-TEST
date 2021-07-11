import styled from 'styled-components';

export default styled.span`
  width: ${(props) => (props.width ? props.width : '35px')};
  height: ${(props) => (props.height ? props.height : '35px')};
  border-radius: ${(props) => (props.width && props.height ? '0' : '50%')};
  font-size: 0.8rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.color || (props.isSelected ? 'var(--color-text)' : '')};
  color: ${(props) => (props.isSelected ? 'var(--color-white)' : '')};
  transition: transform 150ms ease;
  transform: ${(props) =>
    props.color && props.isSelected ? 'translateY(-3px)' : ''};

  &:not(:last-of-type) {
    margin-right: 0.5em;
  }
`;
