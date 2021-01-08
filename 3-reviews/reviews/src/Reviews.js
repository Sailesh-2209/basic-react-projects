import React, { useState } from 'react';
import data from './data';

function Reviews() {
    const [ index, setIndex ] = useState(0);
    const { id, name, job, image, text } = data[index];

    return(
        <>
            <div className="heading">Our Reviews</div>
            <div className="underline"></div>
            <div className="card">
                <div className="photo">
                    <img src={image} alt={name}/>
                </div>
                <div className="review">
                    <p>{text}</p>
                </div>
                <div className="buttons">
                    <span className="left-right-btn">
                        <button className="left-btn">l</button>
                        <button className="right-btn">r</button>
                    </span>
                    <button className="random">Surprise Me</button>
                </div>
            </div>
        </>
    );
};

export default Reviews;