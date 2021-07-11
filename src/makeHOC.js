import React from 'react';

const makeHOC = (useHook, name, convertProps = (props) => [props]) => {
  return (Component) => {
    const HOC = (props) => {
      const hookData = useHook(...convertProps(props));
      const hookProps = { [name]: hookData };
      return <Component {...props} {...hookProps} />;
    };

    HOC.displayName = `${name}HOC`;
    return HOC;
  };
};

export default makeHOC;
