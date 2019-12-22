import React from 'react';
import './global.scss';
import Placeholder from '../components/Placeholder';

const App = props => {
  const { Component, pageProps } = props;
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <Placeholder />
    </>
  );
};

export default App;
