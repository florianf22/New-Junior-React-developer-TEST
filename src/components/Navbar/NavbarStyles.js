import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  margin: 0 auto;
  padding: 2em 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  background-color: var(--color-white);

  .header-list {
    display: flex;
    gap: 1em;
    align-items: center;
    list-style: none;
  }
`;

export const LinkStyled = styled(Link)`
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
