import React, { useState } from 'react';
import './App.css';
import data from './data';
import Question from './Question';

function App() {

  const [ show, setShow ] = useState(false);

  return (
    <div className="container">
      {
        data.map((item) => {
          return(
            <div key={item.id} className="element">
              <p className="question">{item.title}</p>
              <Question item={item} />
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
