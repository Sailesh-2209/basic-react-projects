import React from 'react';

function Menu({ itemList }) {
    return (
        <div className="menu">
            {
                itemList.map((item) => {

                    const { id, title, category, price, img, desc } = item;

                    return(
                        <div className="container" key={id} >
                            <img src={img} alt={title} />
                            <h3>{title}</h3>
                            <span>{price}</span>
                            <p>{desc}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Menu;