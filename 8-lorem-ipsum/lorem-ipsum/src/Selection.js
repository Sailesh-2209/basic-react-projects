import React from 'react';


function Selection({ paragraphs, setParagraphs, setDisplay }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay(true);
        setParagraphs((paragraphs) => {
            if (paragraphs < 0) return 1;
            if (paragraphs > 50) return 50;
            return paragraphs;
        });
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='form'>
                <label className='par' htmlFor="paragraphs">Paragraphs</label>
                <input type="number" value={paragraphs} onChange={(e) => setParagraphs(e.target.value)} />
            </div>
            <button type="submit" className="btn">Generate</button>
        </form>
    );
}

export default Selection;