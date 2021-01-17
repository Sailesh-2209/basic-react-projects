import React from 'react';

function Categories({ categories, filterItems }) {
    return (
        <div className="category-btns">
            {
                categories.map((category, index) => {
                    return(
                        <button onClick={() => filterItems(category)} className="btn" key={index} >{category}</button>
                    );
                })
            }
        </div>
    );
};

export default Categories;