import styled from 'styled-components';

export default styled.div`
  position: fixed;
  opacity: 0.5;
  height: ${(props) =>
    props.marginTop ? `calc(100vh-${props.marginTop})` : '100vh'};
  width: 100vw;
  top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '0')};
  left: 0;
  background-color: ${(props) =>
    props.color ? props.color : 'var(--color-border)'};
  z-index: 0;
`;
