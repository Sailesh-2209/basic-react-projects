import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import './App.css';
import Text from './Text';
import Selection from './Selection';
import Loading from './Loading';

const url = 'https://hipsum.co/api/?type=hipster-centric&sentences=';

function App() {

  const [ senetences, setSentences ] = useState(0);
  const [ paragraphs, setParagraphs ] = useState(0);
  const [ loading, setLoading ] = useState(true);

  return (
    <>
      <h2>Hipster Ipsum - Dummy Text Generator</h2>
      <div className="underline"></div>
      <Selection />
      {loading && <Loading />}
      {!loading && <Text />}
    </>
  );
}

export default App;