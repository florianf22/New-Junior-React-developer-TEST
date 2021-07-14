import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  &:link,
  &:hover,
  &:visited,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
    outline: 0;
    cursor: auto;
    width: 100%;
  }
`;
