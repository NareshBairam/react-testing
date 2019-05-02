import React from 'react';

import Header from './components/Header/index';
import Headline from './components/headline/index';


const tempArr = [{
  name: 'Jeo',
  age: 26,
  online: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <Headline header={'Posts'} desc='Click the button to see the posts' tempArr={tempArr} />
    </div>
  );
}

export default App;
