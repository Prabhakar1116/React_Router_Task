// importing components
import React from 'react';
import Card from '../Components/Card';

// Getting data(json data) from App.jsx
const DataScience = ({ data }) => {
  // filtering dataScience array
  const dataScience = data.filter((item) => item.head === "Data Science");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {/* mapping dataScience array */}
        {dataScience.map((item, index) => {
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

export default DataScience;