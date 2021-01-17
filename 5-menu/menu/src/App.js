import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categoryList = ['all', ...new Set(items.map((item) => item.category))];

function App() {

  const [ itemList, setItemList ] = useState(items);
  const [ categories, setCategories ] = useState(categoryList);

  const filterItems = (category) => {
    const filteredList = items.filter((item) => item.category === category);
    console.log(filteredList);
    setItemList(filteredList);
  }

  return (
    <>
      <div className='heading'>Our Menu</div>
      <div className='underline'></div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu itemList={itemList} />
    </>
  );
}

export default App;
