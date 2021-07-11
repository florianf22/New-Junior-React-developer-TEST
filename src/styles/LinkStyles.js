import styled from 'styled-components';

export default styled.a`
  font-family: inherit;
  text-decoration: none;
  color: ${(props) =>
    props.active ? 'var(--color-primary)' : 'var(--color-text)'};
  font-weight: 600;
  transition: color 150ms linear;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: calc(100% + 1em);
    left: 0;
    width: ${(props) => (props.active ? '100%' : '0')};
    height: 2px;
    background-color: var(--color-primary);
    transition: width 150ms ease-in;
  }

  &:hover {
    color: var(--color-primary);
  }
`;
