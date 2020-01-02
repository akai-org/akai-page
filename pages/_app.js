import React from 'react';
import '../styles/global.scss';
import Placeholder from '../components/Placeholder';
import MainLayout from '../components/Layouts/MainLayout';

const App = props => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default App;
