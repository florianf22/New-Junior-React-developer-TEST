import styled from 'styled-components';

export default styled.main`
  width: 80%;
  margin: 5em auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.5em;

  .product-aside {
    display: flex;
    flex-direction: column;
    gap: 1em;
    img {
      width: 50%;
      cursor: pointer;
      object-fit: contain;
    }
  }

  section:first-of-type {
    grid-column: 2 / span 2;
    img {
      width: 100%;
      height: 50vh;
      object-fit: contain;
    }
  }

  section:last-of-type {
    grid-column: 4 / -1;

    .product-heading {
      font-weight: 600;
      font-size: 1.875rem;
    }

    .product-subheading {
      font-weight: 400;
      font-size: 1.875rem;
    }

    h4 {
      font-size: 0.9rem;
      font-weight: 700;
      font-family: 'Roboto Condensed', sans-serif;
      text-transform: uppercase;
      margin-top: 1.5em;
    }

    small {
      font-weight: 700;
      font-size: 1.2rem;
      margin-top: 0.2em;
      display: block;
    }

    p {
      margin-top: 0.2em;
      font-weight: 700;
    }

    div {
      margin-top: 1.5em;
      line-height: 1.3;
      font-family: 'Roboto';
      font-weight: 400;

      p {
        font-weight: 400;
      }
    }

    .error {
      color: red;
      font-weight: 700;
      font-size: 1.2rem;
      margin-top: 1em;
    }
  }

  /* TODO */
  /* Page not responsive */
`;
