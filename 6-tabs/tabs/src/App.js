import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import './App.css';

const url = 'https://course-api.com/react-tabs-project';

function App() {

  const [ data, setData ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);
  const [ value, setValue ] = useState(0);
  const [ jobs, setJobs ] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const items = await response.json();
    setData(items);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return(
      <Loading />
    );
  }

  const { id, order, title, dates, duties, company } = data[value];
  console.log(company);
  return(
    <>
      <div className="job-btns">
        {
          data.map((item, index) => {
            return <button onClick={() => setValue(index)} key={index} >{item.company}</button>;
          })
        }
      </div>
      <div className="info">
        <h1>{title}</h1>
        <h3>{company}</h3>
        <p>{dates}</p>
        {
          duties.map((duty, index) => {
            return(
              <div className="duty" key={index} ><AiOutlineDoubleRight /> {duty}</div>
            );
          })
        }
      </div>
    </>
  );
}

export default App;
