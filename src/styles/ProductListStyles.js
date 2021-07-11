import styled from 'styled-components';

export default styled.ul`
  width: 80%;
  margin: 0 auto 7em auto;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4em;
`;
