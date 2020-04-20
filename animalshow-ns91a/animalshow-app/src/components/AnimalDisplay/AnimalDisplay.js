import React from 'react';

const AnimalDisplay = ({ onChangeToAnimalQuery: pushChangeToAnimalQuery }) => {
  const handleBackClick = evt => {
    evt.preventDefault();
    pushChangeToAnimalQuery();
  }

  return (
    <div>
      <div>AnimalDisplay</div>
      <a href="#" onClick={handleBackClick}>Make a new query</a>
    </div>
  );
};

export default AnimalDisplay;
