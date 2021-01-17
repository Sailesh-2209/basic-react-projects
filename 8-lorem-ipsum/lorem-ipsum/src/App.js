import React, { useEffect, useState } from 'react';
import './App.css';
import Text from './Text';
import Selection from './Selection';
import Loading from './Loading';

const url = 'https://hipsum.co/api/?type=hipster-centric&sentences=1000';

function App() {

  const [ paragraphs, setParagraphs ] = useState(0);
  const [ info, setInfo ] = useState('');
  const [ display, setDisplay ] = useState(false);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);
  }

  useEffect(() => fetchData(), []);

  return (
    <>
      <h2 className='heading'>Hipster Ipsum - Dummy Text Generator</h2>
      <div className="underline"></div>
      <Selection 
        paragraphs={paragraphs} 
        setParagraphs={setParagraphs}
        setDisplay={setDisplay}
      />
      { display ? <Text info={info} paragraphs={paragraphs} /> : <Loading /> }
    </>
  );
}

export default App;