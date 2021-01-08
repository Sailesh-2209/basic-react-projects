import React from 'react';
import Tour from './Tour';

function Tours({ tours, removeTours }) {
  return (
    <div className="container">
      <div className='heading'>Tours</div>
      <div className='underline'></div>
      <div className="tourContainer">
        {
          tours.map((tour) => {
            return(
              <Tour key={tour.id} {...tour} removeTours={removeTours} />
            );
          })
        }
      </div>
    </div>
  );
};

export default Tours;