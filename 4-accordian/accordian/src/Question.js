import React, { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';

function Question({ item }) {
    const [ toggle, setToggle ] = useState(false);
    return(
        <>
            <button onClick={() => setToggle(!toggle)} className="toggle">
                { toggle? <AiFillMinusCircle className="button" /> : <BsFillPlusCircleFill className="button" /> }
            </button>
            {
                toggle && <p className="info">{item.info}</p>
            }
        </>
    );
};

export default Question;