import React, { useState } from 'react';
import data from './data';

function Reviews() {
    const [ curIndex, setIndex ] = useState(0);
    const { id, name, job, image, text } = data[curIndex];

    const limitIndex = (index) => {
        if (index > data.length - 1) return 0;
        else if (index < 0) return data.length - 1;
        else return index;
    };

    const setNext = () => {
        setIndex((curIndex) => {
            let newIndex = curIndex + 1;
            return limitIndex(newIndex);
        });
    };

    const setPrevious = () => {
        setIndex((curIndex) => {
            let newIndex = curIndex - 1;
            return limitIndex(newIndex);
        });
    };

    const setRandom = () => {
        setIndex((curIndex) => {
            let newIndex = Math.floor(Math.random() * data.length);
            if (newIndex == curIndex)  {
                return limitIndex(newIndex + 1);
            }
            else {
                return limitIndex(newIndex);
            }
        });
    };

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
                        <button onClick={setNext} className="left-btn">l</button>
                        <button onClick={setPrevious} className="right-btn">r</button>
                    </span>
                    <button onClick={setRandom} className="random">Surprise Me</button>
                </div>
            </div>
        </>
    );
};

export default Reviews;