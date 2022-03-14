// imporing react useSate from react.js
import React, { useState } from 'react';
// importing data of peoples from data.js file
// this data is in the form of array
import people from './data';
// importing fa fa icons react-icons library
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // using useState function for setting index
  // the first index is given zero for the first value of data from array
  const [index, setIndex] = useState(0);
  // taking information about the people from the data.js
  const { name, job, image, text } = people[index];

  // this const checkNumber is checking the number of the array
  const checkNumber = (number) => {
    // if number of people is greater then the length of the array then it substract -1 in it
    // after substraction it restar the array from 0
    // by return the value 0
    if (number > people.length - 1) {
      return 0;
    }
    // if the nuber is less than zero then it return -1 from the length of the arry
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // this function is responsible for the next button
  // this function add +1 in the index value
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  // this function is responsible for the previous button
  // this function substract -1 in the index value
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // we create a const for creating random index value
  const randomPerson = () => {
    // here it create an random number from the math function
    let randomNumber = Math.floor(Math.random() * people.length);
    // if random number is equal to the shown index then it add +1
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    // if the random number is more then the index then checkNumber change correct it
    setIndex(checkNumber(randomNumber));
    // return console.log(randomNumber);
  };

  // console.log(people);
  return (
    <article className='review'>
      <div className='img-container'>
        {/* here it applys the data from the data.js */}
        {/* it apply {images} {name}  */}
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          {/* here fa icons component applied */}
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          {/* here fa icons component applied */}
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          {/* here fa icons component applied */}
          <FaChevronRight />
        </button>
      </div>
      {/* this button gives the random index value and show that element */}
      <button className='random-btn' onClick={randomPerson}>
        Suprise me
      </button>
    </article>
  );
};
export default Review;
