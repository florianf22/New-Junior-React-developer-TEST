import styled from 'styled-components';

export default styled.div`
  h2 {
    font-size: 2.625rem;
    transform: translateX(10%);
    margin-top: 2em;
  }

  h3 {
    transform: translateX(10%);
    margin-top: 0.5em;
    margin-bottom: 4em;

    span {
      font-weight: 300;
    }

    small {
      font-weight: 700;
      color: var(--color-primary);
      cursor: pointer;
    }
  }
`;
