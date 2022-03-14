import React from 'react';
import Review from './Review';
function App() {
  return (
    // this function app is used in index.js as an component
    <main>
      <div className='container'>
        <div className='title'>
          <h2>our Review</h2>
          <div className='underline'></div>
          <Review />
        </div>
      </div>
    </main>
  );
}

export default App;
