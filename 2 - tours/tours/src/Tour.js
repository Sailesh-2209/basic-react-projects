import React from 'react';

function Tour({ id, name, info, image, price }) {
    return(
        <div className='tour'>
            <div className="image">
                <img src={image} alt={name}/>
            </div>
            <div className="info">
                <div className="dishHeading">{name}</div>
                <p className="dishInfo">{info}</p>
                <span className="price">{price}</span>
            </div>
        </div>
    );
};

export default Tour;