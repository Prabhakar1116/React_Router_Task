// importing components
import React from 'react';
import Card from '../Components/Card';

// Getting data(json data) from App.jsx
const FullStack = ({ data }) => {
  // filtering data
  const fullStack = data.filter((item) => item.head === "Full Stack");
  return (
    // Rendering data
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {/* mapping data */}
        {fullStack.map((item, index) => {
          return (
            <>
              {/* passing data to Card component */}
              <Card item={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FullStack;