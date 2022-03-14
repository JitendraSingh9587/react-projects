import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((perosn) => {
        const { id, name, age, image } = perosn;
        return (
          <artical className='person' key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </artical>
        );
      })}
    </>
  );
};

export default List;
