import React, { useState } from 'react';

function Tour({ id, name, info, image, price, removeTours }) {
    const [ more, toggleMore ] = useState(true)
    return(
        <div className='tour'>
            <div className="image">
                <img src={image} alt={name}/>
            </div>
            <div className="info">
                <div className="dishHeading">{name}</div>
                <p className="dishInfo">
                    {more ? `${info.substring(0, 200)}` : info}
                    <button className='more' onClick={() => toggleMore(!more)} >
                        {more ? `...read more`: `   show less`}
                    </button>
                </p>
                <span className="price">${price}</span>
                <button onClick={() => removeTours(id)} className="remove">Not interested</button>
            </div>
        </div>
    );
};

export default Tour;