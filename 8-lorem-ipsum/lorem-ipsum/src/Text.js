import React from 'react';

function Text({ info, paragraphs }) {

    const infoArray = info[0].split('.');
    const newArr = [];
    for (let i = 0; i < paragraphs; i++) {
        newArr.push(infoArray.slice(i * paragraphs, i * paragraphs + 10).join('. '));
    }

    return(
        <div className="container">
            {
                newArr.map((item, index) => {
                    return(
                        <p className='para' key={index} >{item}</p>
                    );
                })
            }
        </div>
    );
}

export default Text;