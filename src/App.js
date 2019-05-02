import React from 'react';

import Header from './components/Header/index';
import Headline from './components/headline/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Headline header={'Posts'} desc='Click the button to see the posts' />
    </div>
  );
}

export default App;
