import React, { useState, useEffect } from 'react';
import './App.css';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [ tours, setTours ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);

  async function fetchTours() {
    setLoading(false);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch {
      setLoading(true);
      console.log('Error fetching tour data.');
    }
  }
   
  useEffect(() => {
    fetchTours();
  }, []);

  if (!isLoading) {
    return(
      <Tours tours={tours} />
    );
  }
  else {
    return(
      <Loading />
    );
    
  }
};

export default App;
