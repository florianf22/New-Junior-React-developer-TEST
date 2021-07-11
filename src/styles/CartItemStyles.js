import styled from 'styled-components';

export const ListItemStyled = styled.li`
  /* border-top: 1px solid var(--color-border); */
  padding: 1em 0;
  display: flex;
  gap: 2em;
  max-height: 200px;

  section:first-of-type {
    h3 {
      font-weight: 600;
      font-size: 1.5rem;
      margin-bottom: 0.2em;
    }
    h4 {
      font-weight: 400;
      font-size: 1.5rem;
      margin-bottom: 0.5em;
    }

    small {
      font-weight: 700;
      display: inline-block;
      margin-bottom: 0.5em;
    }
  }

  section:nth-of-type(2) {
    margin-left: auto;
    display: flex;
    flex-direction: column;

    button {
      font-size: 1.2rem;
      height: 35px;
      width: 35px;
      background: none;
      border: 1px solid var(--color-text-light);
      font-weight: 300;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }

    small {
      font-weight: 500;
      font-size: 1.2rem;
      margin: auto;
    }
  }

  section:last-of-type {
    /* max-width: 150px; */
    position: relative;
    overflow: hidden;

    height: 150px;
    width: 125px;
  }
`;

export const ListItemStyledMini = styled.li`
  display: flex;
  gap: 1em;
  max-height: 150px;
  margin: 1.5em 0;

  section:first-of-type {
    h3 {
      font-weight: 300;
      font-size: 1rem;
      margin-bottom: 0.2em;
    }
    h4 {
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 0.3em;
    }

    small {
      font-weight: 300;
      display: inline-block;
      margin-bottom: 0.5em;
    }
  }

  section:nth-of-type(2) {
    margin-left: auto;
    display: flex;
    flex-direction: column;

    button {
      font-size: 0.8rem;
      height: 20px;
      width: 20px;
      background: none;
      border: 1px solid var(--color-text-light);
      font-weight: 300;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }

    small {
      font-weight: 500;
      font-size: 0.8rem;
      margin: auto;
    }
  }

  section:last-of-type {
    /* max-width: 150px; */
    position: relative;
    overflow: hidden;

    height: 100px;
    width: 75px;
  }
`;
