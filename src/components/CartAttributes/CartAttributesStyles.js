import styled from 'styled-components';

export const MainDivStyled = styled.div`
  display: flex;
  gap: ${props => (props.compressed ? '1em' : '0.3em')};
  margin-top: ${props => (props.compressed ? '0' : '1em')};
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
  margin-top: ${props => (props.compressed ? '0' : '0.3em')};

  /* 
  .attributes--heading {
    text-transform: capitalize;
    font-size: ${props => (props.compressed ? '0.8rem' : '1rem')};
    font-weight: 400;
    width: 65px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } */
`;

export const SpanStyled = styled.span`
  width: ${props => (props.width ? props.width : '35px')};
  height: ${props => (props.height ? props.height : '35px')};
  border-radius: ${props => (props.width && props.height ? '0' : '50%')};
  font-size: 0.8rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.color || (props.isSelected ? 'var(--color-text)' : '')};
  color: ${props => (props.isSelected ? 'var(--color-white)' : '')};
  outline: ${props =>
    props.isSelected && props.color && !props.width ? '1px solid black' : ''};
  outline-offset: 1px;
  /* transition: transform 150ms ease; */
  /* transform: ${props =>
    props.color && props.isSelected ? 'translateY(-4px)' : ''}; */
`;
