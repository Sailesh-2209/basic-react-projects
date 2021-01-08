import React, { useState } from 'react';
import List from './List';
import data from './data';
import './App.css';

function App() {

  const [ people, setPeople ] = useState(data);

  return (
    <div className='container'>
      <div className='heading'>Birthday Reminder</div>
      <div className='birthdays'>
        <p className='title'>{people.length} birthdays today</p>
        <List people={people} />
        <button className='button' onClick={() => setPeople([])}>Clear All</button>
      </div>
    </div>
  );
};

export default App;
