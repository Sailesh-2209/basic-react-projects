import React, { useState, useEffect } from 'react';
import './App.css';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [ tours, setTours ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);
  const [ remove, setRemove ] = useState(0);

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
  };

  function removeTours(id) {
    let newTours = tours.filter((tour) => {
      if (id == tour.id) return false;
      else return true;
    });
    setTours(newTours);
  }
   
  useEffect(() => {
    fetchTours();
  }, []);

  if (!isLoading) {
    return(
      <Tours tours={tours} removeTours={removeTours} />
    );
  }
  else {
    return(
      <Loading />
    );
    
  }
};

export default App;
