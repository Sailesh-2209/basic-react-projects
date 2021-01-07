import React from 'react';
import Tour from './Tour';

function Tours({ tours }) {
  return (
    <div className="container">
      <div className='heading'>Tours</div>
      <div className='underline'></div>
      <div className="tourContainer">
        {
          tours.map((tour) => {
            return(
              <Tour key={tour.id} {...tour} />
            );
          })
        }
      </div>
    </div>
  );
};

export default Tours;