import React from 'react';
import '../styles/global.scss';
import Placeholder from '../components/Placeholder';
import MainLayout from '../components/Layouts/MainLayout';

const App = props => {
  const { Component, pageProps } = props;
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;
