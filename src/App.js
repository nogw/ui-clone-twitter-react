import React from 'react';
import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyle'
import Store from './Store'

function App() {
  return (
    <>
      <Store>
        <Layout/>
        <GlobalStyle />
      </Store>
    </>
  );
}

export default App;
